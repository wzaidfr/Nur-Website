const MODEL_ID = "Qwen2.5-0.5B-Instruct-q4f16_1-MLC";
const INIT_TIMEOUT_MS = 120000;
const LANGUAGE_NAMES = typeof Intl.DisplayNames === "function"
  ? new Intl.DisplayNames(["en"], { type: "language" })
  : null;

const TRANSLATION_SYSTEM = [
  "You are a careful translator for classical Islamic scholarship.",
  "Translate faithfully and completely into the target language specified by the user. Do not summarize, omit, explain, or add commentary.",
  "Use the surrounding scholarly context rather than translating terms mechanically.",
  "Preserve established Islamic terms and their distinctions, including Fiqh, Aqeedah, Tafseer/Tafsir, Uthmani, Madhhab, Hadith, Sunnah, and Isnad. Keep these transliterations when they are the clearest accurate choice; never flatten them into generic terms.",
  "Preserve proper names, Qur'an and hadith references, quoted Arabic phrases, and paragraph breaks.",
  "Return only the translation.",
].join(" ");

let worker = null;
let workerReady = false;
let readyPromise = null;
let pendingInit = null;
let initTimeout = null;
let nextRequestId = 0;
let requestQueue = Promise.resolve();
const progressListeners = new Set();
const pendingRequests = new Map();

function emitProgress(progress) {
  for (const listener of progressListeners) listener(progress);
  window.dispatchEvent(new CustomEvent("nur-ai-progress", { detail: progress }));
}

function settleRequest(requestId, error, result) {
  const request = pendingRequests.get(requestId);
  if (!request) return;
  pendingRequests.delete(requestId);
  request.signal?.removeEventListener("abort", request.onAbort);
  if (error) request.reject(error);
  else request.resolve(result);
}

function clearInitTimeout() {
  if (initTimeout !== null) clearTimeout(initTimeout);
  initTimeout = null;
}

function handleWorkerMessage(event) {
  const message = event.data || {};
  if (message.type === "progress") {
    emitProgress(message.progress || {});
  } else if (message.type === "ready") {
    clearInitTimeout();
    workerReady = true;
    if (pendingInit) {
      pendingInit.resolve();
      pendingInit = null;
    }
  } else if (message.type === "init-error") {
    clearInitTimeout();
    if (pendingInit) {
      pendingInit.reject(new Error(message.error || "The local model could not start."));
      pendingInit = null;
    }
  } else if (message.type === "token") {
    const request = pendingRequests.get(message.requestId);
    if (!request) return;
    try {
      request.onToken?.(message.token);
    } catch (error) {
      settleRequest(message.requestId, error);
    }
  } else if (message.type === "complete") {
    settleRequest(message.requestId, null, message.response || "");
  } else if (message.type === "request-error") {
    settleRequest(message.requestId, new Error(message.error || "The local model could not complete that request."));
  }
}

function failWorker(error) {
  clearInitTimeout();
  const failedWorker = worker;
  worker = null;
  workerReady = false;
  readyPromise = null;
  failedWorker?.terminate();
  if (pendingInit) {
    pendingInit.reject(error);
    pendingInit = null;
  }
  for (const requestId of pendingRequests.keys()) settleRequest(requestId, error);
}

function startWorker() {
  worker = new Worker(new URL("./ai-worker.js", import.meta.url), {
    type: "module",
    name: "nur-local-ai",
  });
  const startup = new Promise((resolve, reject) => {
    pendingInit = { resolve, reject };
  });
  initTimeout = setTimeout(() => {
    failWorker(new Error("Loading the local AI model timed out. Check your connection and try again."));
  }, INIT_TIMEOUT_MS);
  readyPromise = startup.catch((error) => {
    const failedWorker = worker;
    worker = null;
    workerReady = false;
    readyPromise = null;
    failedWorker?.terminate();
    throw new Error(`Could not load the local AI model: ${error.message || error}`);
  });
  worker.addEventListener("message", handleWorkerMessage);
  worker.addEventListener("error", (event) => {
    event.preventDefault();
    failWorker(new Error(event.message || "The local AI worker failed."));
  });
  worker.addEventListener("messageerror", () => failWorker(new Error("The local AI worker returned an unreadable message.")));
  worker.postMessage({ type: "init", model: MODEL_ID });
}

function getLanguageName(language) {
  if (typeof language === "string") {
    try { return LANGUAGE_NAMES?.of(language) || language; } catch { return language; }
  }
  return language?.name || getLanguageName(language?.code || "");
}

async function init({ onProgress } = {}) {
  if (!navigator.gpu) {
    return {
      available: false,
      reason: "This browser or device does not support WebGPU. Local AI needs a recent browser and a compatible GPU.",
    };
  }
  if (workerReady) return { available: true, model: MODEL_ID };
  if (onProgress) progressListeners.add(onProgress);
  try {
    if (!readyPromise) startWorker();
    await readyPromise;
    emitProgress({ progress: 1, text: "Local model ready." });
    return { available: true, model: MODEL_ID };
  } catch (error) {
    throw error instanceof Error ? error : new Error(String(error));
  } finally {
    if (onProgress) progressListeners.delete(onProgress);
  }
}

function askWorker(messages, options) {
  if (!worker || !workerReady) throw new Error("The local model worker is not ready.");
  const requestId = ++nextRequestId;
  return new Promise((resolve, reject) => {
    const onAbort = () => settleRequest(requestId, new DOMException("The request was cancelled.", "AbortError"));
    pendingRequests.set(requestId, { resolve, reject, onToken: options.onToken, signal: options.signal, onAbort });
    if (options.signal?.aborted) {
      onAbort();
      return;
    }
    options.signal?.addEventListener("abort", onAbort, { once: true });
    try {
      worker.postMessage({
        type: "ask",
        requestId,
        messages,
        maxTokens: options.maxTokens || 512,
        temperature: options.temperature ?? 0.3,
      });
    } catch (error) {
      settleRequest(requestId, error);
    }
  });
}

function enqueue(task) {
  const result = requestQueue.then(task, task);
  requestQueue = result.catch(() => {});
  return result;
}

async function ask(input, options = {}) {
  return enqueue(async () => {
    const status = await init({ onProgress: options.onProgress });
    if (!status.available) throw new Error(status.reason);
    if (options.signal?.aborted) throw new DOMException("The request was cancelled.", "AbortError");

    const messages = Array.isArray(input)
      ? input.map((message) => ({ role: message.role, content: String(message.content ?? "") }))
      : [{ role: "user", content: String(input ?? "") }];
    const system = options.system || options.systemPrompt;
    if (system) {
      if (messages[0]?.role === "system") messages[0] = { role: "system", content: system };
      else messages.unshift({ role: "system", content: system });
    }
    if (!messages.some((message) => message.role === "user")) {
      throw new Error("A user message is required.");
    }

    return askWorker(messages, options);
  });
}

function splitParagraph(paragraph, limit) {
  const chunks = [];
  let current = "";
  const flush = () => {
    if (current) chunks.push(current);
    current = "";
  };
  for (const word of paragraph.trim().split(/\s+/)) {
    if (!word) continue;
    const points = Array.from(word);
    if (points.length > limit) {
      flush();
      for (let index = 0; index < points.length; index += limit) {
        chunks.push(points.slice(index, index + limit).join(""));
      }
      continue;
    }
    if (current && current.length + word.length + 1 > limit) flush();
    current += `${current ? " " : ""}${word}`;
  }
  flush();
  return chunks;
}

function splitText(text, limit = 1000) {
  const chunks = [];
  for (const paragraph of String(text).split(/\r?\n\s*\r?\n/)) {
    const pieces = splitParagraph(paragraph, limit);
    pieces.forEach((piece, index) => {
      chunks.push({
        text: piece,
        separator: chunks.length === 0 ? "" : index === 0 ? "\n\n" : " ",
      });
    });
  }
  return chunks;
}

async function translate(text, targetLanguage, options = {}) {
  const source = String(text ?? "").trim();
  if (!source) throw new Error("There is no text to translate.");
  const languageCode = typeof targetLanguage === "string" ? targetLanguage : targetLanguage?.code;
  if (!languageCode) throw new Error("Choose a target language.");
  const languageName = getLanguageName(targetLanguage);
  const status = await init({ onProgress: options.onProgress });
  if (!status.available) throw new Error(status.reason);

  let result = "";
  const chunks = splitText(source);
  for (let index = 0; index < chunks.length; index++) {
    if (options.signal?.aborted) throw new DOMException("The request was cancelled.", "AbortError");
    const chunk = chunks[index];
    options.onChunk?.(index + 1, chunks.length);
    if (chunk.separator) {
      result += chunk.separator;
      options.onToken?.(chunk.separator);
    }
    const translated = await ask(
      `Target language: ${languageName} (${languageCode}). Translate the following text:\n\n${chunk.text}`,
      {
        system: TRANSLATION_SYSTEM,
        signal: options.signal,
        maxTokens: Math.max(256, Math.ceil(chunk.text.length * 1.8)),
        onProgress: options.onProgress,
        onToken: options.onToken
          ? (token) => { result += token; options.onToken(token); }
          : undefined,
      },
    );
    if (!options.onToken) result += translated;
  }
  return result;
}

window.NurLocalAI = Object.freeze({
  model: MODEL_ID,
  init,
  ask,
  translate,
});
window.dispatchEvent(new Event("nur-local-ai-ready"));