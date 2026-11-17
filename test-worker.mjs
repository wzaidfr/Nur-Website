import assert from "node:assert/strict";
import { test } from "node:test";
import worker from "./worker.js";

test("Cloudflare Worker translates text through Google Translate", async () => {
  const originalFetch = globalThis.fetch;
  let requestedUrl;
  globalThis.fetch = async (url) => {
    requestedUrl = new URL(url);
    return new Response(JSON.stringify([[["Hola", "hello"]]]), {
      headers: { "Content-Type": "application/json" },
    });
  };

  try {
    const response = await worker.fetch(new Request("https://nur.example/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: "hello", target: "es", source: "en" }),
    }), {});

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { translatedText: "Hola" });
    assert.equal(requestedUrl.hostname, "translate.google.com");
    assert.equal(requestedUrl.searchParams.get("q"), "hello");
    assert.match(response.headers.get("Access-Control-Allow-Methods"), /POST/);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("Cloudflare Worker rejects invalid translation input", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => {
    throw new Error("Translation upstream should not be called for invalid input.");
  };

  try {
    const response = await worker.fetch(new Request("https://nur.example/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: "", target: "es" }),
    }), {});

    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { error: "Enter text to translate." });
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("Cloudflare Worker falls back to Cloudflare AI when Google is rate-limited", async () => {
  const originalFetch = globalThis.fetch;
  const requestedHosts = [];
  const aiCalls = [];
  const text = "مرحبا ".repeat(100);
  globalThis.fetch = async (url) => {
    const parsedUrl = new URL(url);
    requestedHosts.push(parsedUrl.hostname);
    return new Response("", { status: 429 });
  };

  try {
    const response = await worker.fetch(new Request("https://nur.example/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, target: "en" }),
    }), {
      AI: {
        async run(model, input) {
          aiCalls.push({ model, input });
          return { translated_text: "Hello" };
        },
      },
    });

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { translatedText: "Hello Hello" });
    assert.deepEqual(requestedHosts, ["translate.google.com", "translate.google.com"]);
    assert.equal(aiCalls.length, 2);
    assert.equal(aiCalls[0].model, "@cf/meta/m2m100-1.2b");
    assert.equal(aiCalls[0].input.source_lang, "ar");
    assert.equal(aiCalls[0].input.target_lang, "en");
    assert.ok(aiCalls.every(({ input }) => input.text.length <= 450));
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("Cloudflare Worker falls back to Cloudflare AI when Google cannot be reached", async () => {
  const originalFetch = globalThis.fetch;
  let attempts = 0;
  globalThis.fetch = async () => {
    attempts += 1;
    throw new Error("Network unavailable.");
  };

  try {
    const response = await worker.fetch(new Request("https://nur.example/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: "hello", target: "es", source: "en" }),
    }), {
      AI: {
        async run() {
          return { translated_text: "Hola" };
        },
      },
    });

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { translatedText: "Hola" });
    assert.equal(attempts, 2);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
