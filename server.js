// server.js — Nūr web server + Turath API.
// The turath-sdk package only works in Node.js, so the browser talks to this
// server, and this server calls the SDK.
//
// SDK signatures (from the turath-sdk 1.1.0 README):
//   search(query, options?)  options: { author, book, category, page, precision, sortField }
//   getPage(bookId, pageNumber)
//   getBookInfo(id)
//   getBookFile(id)
//   getAuthor(id)

import express from "express";
import https from "node:https";
import { promises as fs } from "node:fs";
import { DatabaseSync } from "node:sqlite";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as turath from "turath-sdk";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "0.0.0.0";
const TLS_KEY_PATH = process.env.TLS_KEY_PATH;
const TLS_CERT_PATH = process.env.TLS_CERT_PATH;
if (Boolean(TLS_KEY_PATH) !== Boolean(TLS_CERT_PATH)) {
  throw new Error("Set both TLS_KEY_PATH and TLS_CERT_PATH to enable HTTPS.");
}

const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "1mb" }));

/* ---------- small helpers ---------- */

function httpError(status, message) {
  const e = new Error(message);
  e.status = status;
  return e;
}

function intParam(value, name, { required = true, min = 1, max = 100000000 } = {}) {
  if (value === undefined || value === null || value === "") {
    if (required) throw httpError(400, `Missing "${name}".`);
    return undefined;
  }
  const n = Number(value);
  if (!Number.isInteger(n) || n < min || n > max) {
    throw httpError(400, `"${name}" must be a whole number between ${min} and ${max}.`);
  }
  return n;
}

// Tiny in-memory cache so repeated clicks do not hit turath.io again.
const cache = new Map();
const CACHE_TTL = 10 * 60 * 1000;
const CACHE_MAX = 300;
async function cached(key, fn) {
  const hit = cache.get(key);
  if (hit && hit.expires > Date.now()) return hit.value;
  const value = await fn();
  cache.set(key, { value, expires: Date.now() + CACHE_TTL });
  if (cache.size > CACHE_MAX) cache.delete(cache.keys().next().value);
  return value;
}

async function retryTransient(fn) {
  for (let attempt = 0; ; attempt++) {
    try { return await fn(); }
    catch (error) {
      const message = String(error && error.message ? error.message : error);
      if (attempt >= 2 || /\b(?:400|401|403|404)\b|not found/i.test(message)) throw error;
      await new Promise((resolve) => setTimeout(resolve, 300 * (attempt + 1)));
    }
  }
}

// The public SDK supports author/book IDs, while Turath's searchable catalog is
// distributed as a SQLite metadata snapshot.
const CATALOG_URL = "https://files.turath.io/data-v4.sqlite";
const CATALOG_PATH = path.join(os.tmpdir(), "nur-turath-data-v4.sqlite");
const CATALOG_TTL = 7 * 24 * 60 * 60 * 1000;
let catalogPromise;

async function downloadCatalog() {
  const tempPath = `${CATALOG_PATH}.${process.pid}.tmp`;
  for (let attempt = 0; ; attempt++) {
    try {
      const response = await fetch(CATALOG_URL, { signal: AbortSignal.timeout(30000) });
      if (!response.ok) throw new Error(`Turath catalog download failed (${response.status}).`);
      const contents = Buffer.from(await response.arrayBuffer());
      if (contents.length < 1_000_000) throw new Error("Turath catalog download was incomplete.");
      await fs.writeFile(tempPath, contents);
      await fs.rename(tempPath, CATALOG_PATH);
      return;
    } catch (error) {
      await fs.rm(tempPath, { force: true });
      if (attempt >= 2) throw error;
      await new Promise((resolve) => setTimeout(resolve, 500 * (attempt + 1)));
    }
  }
}

async function getCatalog() {
  if (!catalogPromise) {
    catalogPromise = (async () => {
      let fresh = false;
      try {
        const stat = await fs.stat(CATALOG_PATH);
        fresh = stat.size > 1_000_000 && Date.now() - stat.mtimeMs < CATALOG_TTL;
      } catch (e) {
        if (e.code !== "ENOENT") throw e;
      }
      if (!fresh) await downloadCatalog();

      let db;
      try {
        db = new DatabaseSync(CATALOG_PATH, { readOnly: true });
        if (!db.prepare("SELECT data_version FROM snapshot_meta").get()) throw new Error("The Turath catalog snapshot is invalid.");
        return db;
      } catch (error) {
        if (db) db.close();
        await fs.rm(CATALOG_PATH, { force: true });
        throw error;
      }
    })().catch((e) => {
      catalogPromise = null;
      throw e;
    });
  }
  return catalogPromise;
}

function findCatalogMatches(db, type, query) {
  const pattern = `$.name`;
  const order = `CASE WHEN instr(json_extract(json, '${pattern}'), ?) = 1 THEN 0 ELSE 1 END, json_extract(json, '${pattern}')`;
  if (type === "author") {
    return db.prepare(`
      SELECT id, json
      FROM authors
      WHERE instr(json_extract(json, '${pattern}'), ?) > 0
      ORDER BY ${order}
      LIMIT 20
    `).all(query, query).map(({ id, json }) => {
      const author = JSON.parse(json);
      return { id, name: author.name, bookCount: Array.isArray(author.books) ? author.books.length : 0 };
    });
  }

  return db.prepare(`
    SELECT books.id, books.json, authors.json AS author_json
    FROM books
    LEFT JOIN authors ON authors.id = json_extract(books.json, '$.author_id')
    WHERE instr(json_extract(books.json, '${pattern}'), ?) > 0
    ORDER BY CASE WHEN instr(json_extract(books.json, '${pattern}'), ?) = 1 THEN 0 ELSE 1 END,
      json_extract(books.json, '${pattern}')
    LIMIT 20
  `).all(query, query).map(({ id, json, author_json }) => {
    const book = JSON.parse(json);
    const author = author_json ? JSON.parse(author_json) : null;
    return { id, name: book.name, authorName: author ? author.name : "" };
  });
}

// Prints the "shape" of each kind of answer once, in the terminal, so problems
// are easy to diagnose.
const shapeLogged = new Set();
function logShape(name, value) {
  if (shapeLogged.has(name)) return;
  shapeLogged.add(name);
  try {
    const keys = value && typeof value === "object" ? Object.keys(value) : typeof value;
    console.log(`[turath] ${name} returned:`, keys);
  } catch {
    /* ignore */
  }
}

const handle = (fn) => async (req, res) => {
  try {
    res.json(await fn(req, res));
  } catch (e) {
    const message = e && e.message ? e.message : String(e);
    const status = e.status || (/not found|404/i.test(message) ? 404 : 502);
    console.error(`[turath] ${req.path} failed:`, message);
    res.status(status).json({ error: message });
  }
};

/* ---------- security headers & CORS (local only) ---------- */

app.use((req, res, next) => {
  const origin = req.headers.origin;
  // allow the page itself (localhost) and the file:// case (origin "null")
  if (origin === "null" || /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin || "")) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
  res.setHeader("X-Content-Type-Options", "nosniff");
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  next();
});

/* ---------- website modules and browser SDK assets ---------- */

const sendOpts = { headers: { "Cache-Control": "no-cache" } };
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html"), sendOpts));
for (const file of ["index.html", "script.js", "style.css"]) {
  app.get(`/${file}`, (req, res) => res.sendFile(path.join(__dirname, file), sendOpts));
}
app.get("/speech-sdk.js", (req, res) => res.sendFile(
  path.join(__dirname, "node_modules", "microsoft-cognitiveservices-speech-sdk", "distrib", "browser", "microsoft.cognitiveservices.speech.sdk.bundle-min.js"),
  sendOpts,
));

/* ---------- API ---------- */

app.get("/api/health", (req, res) => res.json({ ok: true }));

app.post("/api/translate", handle(async (req) => {
  const text = typeof req.body?.text === "string" ? req.body.text.trim() : "";
  const target = String(req.body?.target ?? "").trim();
  const source = String(req.body?.source ?? "auto").trim();
  const validLanguage = (code) => /^[a-z]{2,3}(?:-[a-zA-Z0-9]{2,8})*$/i.test(code);
  if (!text) throw httpError(400, "Enter text to translate.");
  if (text.length > 5000) throw httpError(400, "Text must be 5,000 characters or fewer.");
  if (!validLanguage(target) || (source !== "auto" && !validLanguage(source))) {
    throw httpError(400, "Choose valid source and target languages.");
  }

  const url = new URL("https://translate.google.com/translate_a/single");
  url.search = new URLSearchParams({ client: "gtx", sl: source, tl: target, dt: "t", q: text }).toString();
  let response;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      response = await fetch(url, {
        headers: {
          Accept: "application/json",
          "User-Agent": "Mozilla/5.0 (compatible; NurWebsite/1.0)",
        },
        signal: AbortSignal.timeout(15000),
      });
      if (response.ok || (response.status < 500 && response.status !== 429)) break;
    } catch (error) {
      if (attempt === 1) {
        console.error("[translate] Upstream request failed:", error.message || error);
        throw httpError(502, "The translation service could not be reached. Please try again.");
      }
    }
    if (attempt === 0) await new Promise((resolve) => setTimeout(resolve, 250));
  }

  if (response?.ok) {
    let data;
    try { data = await response.json(); } catch {}
    const translatedText = Array.isArray(data?.[0]) ? data[0].map((part) => part?.[0] || "").join("") : "";
    if (translatedText) return { translatedText };
  }

  throw httpError(502, `The translation service returned ${response ? response.status : "no response"}. Please try again.`);
}));

app.get("/api/recitation/token", async (_req, res) => {
  const key = process.env.AZURE_SPEECH_KEY;
  const region = process.env.AZURE_SPEECH_REGION;
  if (!key || !region) {
    console.error("[recitation] Speech service credentials are not configured.");
    res.setHeader("Cache-Control", "no-store");
    res.status(503).json({ error: "Recitation service is currently unavailable." });
    return;
  }
  try {
    const response = await fetch(`https://${region}.api.cognitive.microsoft.com/sts/v1.0/issueToken`, {
      method: "POST",
      headers: { "Ocp-Apim-Subscription-Key": key },
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error(`Azure token service returned ${response.status}.`);
    const token = (await response.text()).trim();
    if (!token) throw new Error("Azure returned an empty speech token.");
    res.setHeader("Cache-Control", "no-store");
    res.json({ token, region });
  } catch (error) {
    const message = error && error.message ? error.message : String(error);
    console.error("[recitation] Speech token request failed:", message);
    res.setHeader("Cache-Control", "no-store");
    res.status(502).json({ error: "Recitation service is currently unavailable." });
  }
});

// GET /api/turath/catalog?type=author&q=الرازي
app.get(
  "/api/turath/catalog",
  handle(async (req) => {
    const type = String(req.query.type ?? "");
    if (type !== "author" && type !== "book") throw httpError(400, 'Type must be "author" or "book".');

    const q = String(req.query.q ?? "").trim().replace(/\s+/g, " ");
    if (q.length < 2) return { type, query: q, results: [] };
    if (q.length > 100) throw httpError(400, "That catalog search is too long (100 characters maximum).");

    const db = await getCatalog();
    return { type, query: q, results: findCatalogMatches(db, type, q) };
  }),
);

// GET /api/turath/search?q=...&page=2&author=44&book=147927&category=6&sort=page
app.get(
  "/api/turath/search",
  handle(async (req) => {
    const q = String(req.query.q ?? "").trim();
    if (!q) throw httpError(400, "Enter something to search for.");
    if (q.length > 300) throw httpError(400, "That search is too long (300 characters maximum).");

    const options = {};
    const page = intParam(req.query.page, "page", { required: false, max: 100000 });
    if (page && page > 1) options.page = page;
    const author = intParam(req.query.author, "author", { required: false });
    if (author) options.author = author;
    const book = intParam(req.query.book, "book", { required: false });
    if (book) options.book = book;
    const category = intParam(req.query.category, "category", { required: false });
    if (category) options.category = category;
    if (req.query.sort === "page" && turath.SortField && turath.SortField.PageId !== undefined) {
      options.sortField = turath.SortField.PageId;
    }

    const key = "search:" + JSON.stringify([q, options]);
    const raw = await cached(key, () =>
      retryTransient(() => turath.search(q, Object.keys(options).length ? options : undefined)),
    );
    logShape("search", raw);

    const list = Array.isArray(raw) ? raw : (raw && (raw.data ?? raw.results)) || [];
    if (list.length) logShape("search result item", list[0]);
    const countNum = Number(raw && raw.count);
    return {
      query: q,
      page: page || 1,
      count: Number.isFinite(countNum) ? countNum : list.length,
      results: Array.isArray(list) ? list : [],
    };
  }),
);

// GET /api/turath/page?book=147927&page=5
app.get(
  "/api/turath/page",
  handle(async (req) => {
    const book = intParam(req.query.book, "book");
    const page = intParam(req.query.page, "page", { max: 10000000 });
    const raw = await cached(`page:${book}:${page}`, () => retryTransient(() => turath.getPage(book, page)));
    logShape("page", raw);
    const text =
      typeof raw === "string"
        ? raw
        : (raw && (raw.text ?? (raw.page && raw.page.text) ?? raw.content)) || "";
    const meta = (raw && typeof raw === "object" && (raw.meta ?? raw.metadata)) || {};
    return { book, page, text: String(text), meta };
  }),
);

// GET /api/turath/book/147927
app.get(
  "/api/turath/book/:id",
  handle(async (req) => {
    const id = intParam(req.params.id, "id");
    const raw = await cached(`book:${id}`, () => retryTransient(() => turath.getBookInfo(id)));
    logShape("book info", raw);
    const { indexes = null, ...rest } = raw && typeof raw === "object" ? raw : {};
    return { id, meta: (raw && raw.meta) || rest, indexes };
  }),
);

// GET /api/turath/author/44
app.get(
  "/api/turath/author/:id",
  handle(async (req) => {
    const id = intParam(req.params.id, "id");
    const raw = await cached(`author:${id}`, () => retryTransient(() => turath.getAuthor(id)));
    logShape("author", raw);
    return { id, author: raw };
  }),
);

// GET /api/turath/book/147927/file[?download=1]  (full JSON dump; can be large)
app.get(
  "/api/turath/book/:id/file",
  handle(async (req, res) => {
    const id = intParam(req.params.id, "id");
    const raw = await retryTransient(() => turath.getBookFile(id)); // not cached: can be very large
    logShape("book file", raw);
    if (req.query.download) {
      res.setHeader("Content-Disposition", `attachment; filename="turath-book-${id}.json"`);
    }
    return raw;
  }),
);

app.use("/api", (req, res) => res.status(404).json({ error: `Unknown API endpoint: ${req.path}` }));

/* ---------- start ---------- */

const server = TLS_KEY_PATH
  ? https.createServer({ key: await fs.readFile(TLS_KEY_PATH), cert: await fs.readFile(TLS_CERT_PATH) }, app)
  : app;

server.on("error", (e) => {
  if (e.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use. Close the other program, or start with a different port:`);
    console.error(`  PowerShell:  $env:PORT=3001; npm start`);
  } else {
    console.error("Server error:", e);
  }
  process.exit(1);
});

server.listen(PORT, HOST, () => {
  const protocol = TLS_KEY_PATH ? "https" : "http";
  console.log(`\nNūr is running →  ${protocol}://localhost:${PORT}`);
  const addresses = Object.values(os.networkInterfaces()).flat().filter(
    (item) => item && item.family === "IPv4" && !item.internal,
  );
  addresses.forEach((item) => console.log(`For a phone on the same Wi-Fi →  ${protocol}://${item.address}:${PORT}`));
  if (!TLS_KEY_PATH) console.log("Microphone recitation on phones requires HTTPS (or localhost).");
  console.log("\nOpen one of these addresses in your browser. Press Ctrl+C here to stop.\n");
});

process.on("unhandledRejection", (e) => console.error("Unhandled rejection:", e));
