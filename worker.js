import { buildOpenRouterHeaders, extractOpenRouterText, getModelList, parseOpenRouterError } from "./ai-provider.js";

const API_BASE = "https://api.turath.io";
const FILES_BASE = "https://files.turath.io/books";
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
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

    if (url.pathname === "/api/ai/chat" && request.method === "POST") {
      try {
        const apiKey = env?.OPENROUTER_API_KEY || "";
        if (!apiKey) {
          return jsonResponse({ error: "OpenRouter is not configured on this worker.", configured: false }, { status: 503 });
        }

        const body = await request.json().catch(() => ({}));
        const incomingMessages = Array.isArray(body?.messages) ? body.messages : [{ role: "user", content: String(body?.prompt ?? body?.input ?? "") }];
        const systemPrompt = typeof body?.system === "string" ? body.system : "";
        const messages = [...incomingMessages];
        if (systemPrompt) {
          const systemIndex = messages.findIndex((message) => message?.role === "system");
          if (systemIndex >= 0) messages[systemIndex] = { ...messages[systemIndex], content: systemPrompt };
          else messages.unshift({ role: "system", content: systemPrompt });
        }

        const modelList = getModelList(env?.OPENROUTER_MODELS || "");
        let lastError = null;

        for (const model of modelList) {
          try {
            const payload = {
              model,
              temperature: Number(body?.temperature ?? 0.3),
              max_tokens: Number(body?.maxTokens ?? 512),
              messages: messages.map((message) => ({
                role: message?.role || "user",
                content: String(message?.content ?? ""),
              })),
            };

            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
              method: "POST",
              headers: buildOpenRouterHeaders({
                apiKey,
                siteUrl: env?.OPENROUTER_SITE_URL || "https://nur-website.zaidmailacc.workers.dev",
                appName: env?.OPENROUTER_APP_NAME || "Nūr",
              }),
              body: JSON.stringify(payload),
            });

            const text = await response.text();
            if (!response.ok) {
              const parsed = text ? JSON.parse(text) : null;
              lastError = new Error(parseOpenRouterError(parsed, `OpenRouter model ${model} failed (${response.status}).`));
              continue;
            }

            const json = text ? JSON.parse(text) : null;
            const answer = extractOpenRouterText(json);
            if (!answer) {
              lastError = new Error(`OpenRouter returned an empty answer for ${model}.`);
              continue;
            }

            return jsonResponse({ answer, model, provider: "openrouter", configured: true });
          } catch (error) {
            lastError = error instanceof Error ? error : new Error(String(error));
          }
        }

        return jsonResponse({ error: lastError?.message || "No OpenRouter model could answer this request.", configured: true }, { status: 502 });
      } catch (error) {
        return jsonResponse({ error: error?.message || "OpenRouter chat failed.", configured: true }, { status: 502 });
      }
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
