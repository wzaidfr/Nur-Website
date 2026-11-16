import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm@0.2.88";

let enginePromise = null;
let generationQueue = Promise.resolve();

function getEngine(model) {
  if (!enginePromise) {
    enginePromise = CreateMLCEngine(model, {
      initProgressCallback: (progress) => self.postMessage({ type: "progress", progress }),
    });
  }
  return enginePromise;
}

async function generate(message) {
  try {
    const engine = await getEngine(message.model);
    const stream = await engine.chat.completions.create({
      messages: message.messages,
      stream: true,
      max_tokens: message.maxTokens,
      temperature: message.temperature,
    });
    let response = "";
    for await (const part of stream) {
      const token = part.choices?.[0]?.delta?.content;
      if (typeof token !== "string" || !token) continue;
      response += token;
      self.postMessage({ type: "token", requestId: message.requestId, token });
    }
    self.postMessage({ type: "complete", requestId: message.requestId, response });
  } catch (error) {
    self.postMessage({
      type: "request-error",
      requestId: message.requestId,
      error: error.message || String(error),
    });
  }
}

self.onmessage = (event) => {
  const message = event.data || {};
  if (message.type === "init") {
    getEngine(message.model)
      .then(() => self.postMessage({ type: "ready" }))
      .catch((error) => self.postMessage({ type: "init-error", error: error.message || String(error) }));
  } else if (message.type === "ask") {
    generationQueue = generationQueue.then(() => generate(message));
  }
};