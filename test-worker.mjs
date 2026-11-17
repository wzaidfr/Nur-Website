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

test("Cloudflare Worker reports a Google rate limit instead of returning bad translation", async () => {
  const originalFetch = globalThis.fetch;
  const requestedHosts = [];
  globalThis.fetch = async (url) => {
    const parsedUrl = new URL(url);
    requestedHosts.push(parsedUrl.hostname);
    return new Response("", { status: 429 });
  };

  try {
    const response = await worker.fetch(new Request("https://nur.example/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: "hello", target: "es", source: "en" }),
    }), {});

    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), { error: "Google Translate returned 429. Please try again." });
    assert.deepEqual(requestedHosts, ["translate.google.com", "translate.google.com"]);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("Cloudflare Worker reports a network failure without fabricating translation", async () => {
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
    }), {});

    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), { error: "Google Translate returned no response. Please try again." });
    assert.equal(attempts, 2);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
