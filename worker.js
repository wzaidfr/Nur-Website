const API_BASE = "https://api.turath.io";
const FILES_BASE = "https://files.turath.io/books";
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Cache-Control": "no-store",
};

function jsonResponse(data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...CORS_HEADERS,
      ...(init.headers || {}),
    },
  });
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Upstream request failed (${response.status}): ${message.slice(0, 200)}`);
  }

  return response.json();
}

function parseMeta(value) {
  if (!value) return {};
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch {
      return {};
    }
  }
  return value;
}

function normalizeCatalogResult(item, type) {
  const meta = parseMeta(item?.meta);
  const bookId = item?.book_id ?? meta.book_id ?? meta.bookId;
  const authorId = item?.author_id ?? meta.author_id ?? meta.authorId;

  if (type === "author") {
    const authorName = item?.author_name ?? meta.author_name ?? "Unknown author";
    return {
      id: authorId ?? item?.id ?? authorName,
      name: authorName,
      bookCount: item?.bookCount ?? (Number(item?.count || 0) || 1),
    };
  }

  const bookName = item?.book_name ?? meta.book_name ?? item?.name ?? `Book ${bookId ?? "unknown"}`;
  return {
    id: bookId ?? item?.id ?? bookName,
    name: bookName,
    authorName: item?.author_name ?? meta.author_name ?? "Author unavailable",
  };
}

function normalizeSearchResults(data, type) {
  if (!Array.isArray(data)) return { count: 0, results: [] };

  const results = data.map((item) => {
    const meta = parseMeta(item?.meta);
    return {
      ...item,
      meta,
      book_id: item?.book_id ?? meta.book_id ?? meta.bookId ?? undefined,
      author_id: item?.author_id ?? meta.author_id ?? meta.authorId ?? undefined,
      text: item?.text ?? "",
      snip: item?.snip ?? item?.text ?? "",
    };
  });

  const catalogOnly = type
    ? results.map((item) => normalizeCatalogResult(item, type))
    : results;

  return {
    count: results.length,
    results: type ? catalogOnly : results,
  };
}

function createTurathUrl(path, params = {}) {
  const url = new URL(`${API_BASE}${path}`);
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  }
  return url;
}

function getPathId(pathname) {
  const cleaned = pathname.replace(/\/+$/, "");
  const parts = cleaned.split("/");
  return parts[parts.length - 1] || "";
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: CORS_HEADERS,
      });
    }

    if (url.pathname === "/") {
      return jsonResponse({ ok: true, service: "nur-worker", message: "Nur Cloudflare Worker is running." });
    }

    if (url.pathname === "/api/health") {
      return jsonResponse({ ok: true, service: "nur-worker", mode: "cloudflare" });
    }

    if (url.pathname === "/api/translate" && request.method === "POST") {
      let body;
      try { body = await request.json(); }
      catch { return jsonResponse({ error: "Request body must be valid JSON." }, { status: 400 }); }

      const text = typeof body?.text === "string" ? body.text.trim() : "";
      const target = String(body?.target ?? "").trim();
      const source = String(body?.source ?? "auto").trim();
      const validLanguage = (code) => /^[a-z]{2,3}(?:-[a-zA-Z0-9]{2,8})*$/i.test(code);
      if (!text) return jsonResponse({ error: "Enter text to translate." }, { status: 400 });
      if (text.length > 5000) return jsonResponse({ error: "Text must be 5,000 characters or fewer." }, { status: 400 });
      if (!validLanguage(target) || (source !== "auto" && !validLanguage(source))) {
        return jsonResponse({ error: "Choose valid source and target languages." }, { status: 400 });
      }

      const translationUrl = new URL("https://translate.google.com/translate_a/single");
      translationUrl.search = new URLSearchParams({ client: "gtx", sl: source, tl: target, dt: "t", q: text }).toString();
      let response;
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          response = await fetch(translationUrl, {
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
          }
        }
        if (attempt === 0) await new Promise((resolve) => setTimeout(resolve, 250));
      }

      if (!response?.ok) {
        return jsonResponse({ error: `Google Translate returned ${response ? response.status : "no response"}. Please try again.` }, { status: 502 });
      }
      let data;
      try { data = await response.json(); }
      catch { return jsonResponse({ error: "Google Translate returned an invalid response." }, { status: 502 }); }
      const translatedText = Array.isArray(data?.[0]) ? data[0].map((part) => part?.[0] || "").join("") : "";
      if (!translatedText) return jsonResponse({ error: "Google Translate returned no text." }, { status: 502 });
      return jsonResponse({ translatedText });
    }

    if (url.pathname === "/api/turath/catalog") {
      const q = url.searchParams.get("q") || "";
      const type = url.searchParams.get("type") || "book";
      if (!q) {
        return jsonResponse({ results: [] });
      }

      try {
        const upstream = await fetchJson(createTurathUrl("/search", { q, ver: 3 }).toString());
        const results = Array.isArray(upstream?.data)
          ? upstream.data.map((item) => normalizeCatalogResult(item, type))
          : [];

        return jsonResponse({ results });
      } catch (error) {
        return jsonResponse({ error: error.message || "Turath catalog lookup failed." }, { status: 502 });
      }
    }

    if (url.pathname === "/api/turath/search") {
      try {
        const params = {
          q: url.searchParams.get("q") || "",
          ver: 3,
          author: url.searchParams.get("author") || undefined,
          book: url.searchParams.get("book") || undefined,
          sort: url.searchParams.get("sort") || undefined,
          page: url.searchParams.get("page") || undefined,
        };

        const upstream = await fetchJson(createTurathUrl("/search", params).toString());
        const results = Array.isArray(upstream?.data)
          ? upstream.data.map((item) => ({
              ...item,
              meta: parseMeta(item?.meta),
              text: item?.text ?? "",
              snip: item?.snip ?? item?.text ?? "",
            }))
          : [];

        return jsonResponse({
          count: Number(upstream?.count ?? results.length),
          results,
        });
      } catch (error) {
        return jsonResponse({ error: error.message || "Turath search failed." }, { status: 502 });
      }
    }

    if (url.pathname === "/api/turath/page") {
      try {
        const book = url.searchParams.get("book");
        const page = url.searchParams.get("page");
        if (!book || !page) {
          return jsonResponse({ error: "Missing book or page parameter." }, { status: 400 });
        }
        const upstream = await fetchJson(createTurathUrl("/page", { book_id: book, pg: page, ver: 3 }).toString());
        return jsonResponse(upstream);
      } catch (error) {
        return jsonResponse({ error: error.message || "Turath page lookup failed." }, { status: 502 });
      }
    }

    if (url.pathname.startsWith("/api/turath/book/")) {
      const id = getPathId(url.pathname);
      if (!id) {
        return jsonResponse({ error: "Missing book id." }, { status: 400 });
      }

      const isFile = url.pathname.endsWith("/file") || url.pathname.includes("/file");
      if (isFile) {
        try {
          const fullUrl = `${FILES_BASE}/${id}.json`;
          const response = await fetch(fullUrl, { headers: { Accept: "application/json" } });
          if (!response.ok) {
            return jsonResponse({ error: `Book ${id} file not found.` }, { status: response.status || 404 });
          }
          const body = await response.text();
          const headers = {
            ...CORS_HEADERS,
            "content-type": "application/json; charset=utf-8",
          };
          if (url.searchParams.get("download") === "1") {
            headers["content-disposition"] = `attachment; filename="turath-book-${id}.json"`;
          }
          return new Response(body, { headers });
        } catch (error) {
          return jsonResponse({ error: error.message || "Book file lookup failed." }, { status: 502 });
        }
      }

      try {
        const upstream = await fetchJson(createTurathUrl("/book", { id, include: "indexes", ver: 3 }).toString());
        return jsonResponse(upstream);
      } catch (error) {
        return jsonResponse({ error: error.message || `Book ${id} lookup failed.` }, { status: 502 });
      }
    }

    if (url.pathname.startsWith("/api/turath/author/")) {
      const id = getPathId(url.pathname);
      if (!id) {
        return jsonResponse({ error: "Missing author id." }, { status: 400 });
      }

      try {
        const upstream = await fetchJson(createTurathUrl("/author", { id, ver: 3 }).toString());
        return jsonResponse(upstream);
      } catch (error) {
        return jsonResponse({ error: error.message || `Author ${id} lookup failed.` }, { status: 502 });
      }
    }

    return jsonResponse({ error: `Unknown endpoint: ${url.pathname}` }, { status: 404 });
  },
};
