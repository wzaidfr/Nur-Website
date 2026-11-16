
import { getPage, search } from "turath-sdk";

async function main() {
    try {
        const results = await search("\u0627\u0644\u0625\u064a\u0645\u0627\u0646", { page: 1 });
        if (!Array.isArray(results.data)) throw new Error("Turath returned an invalid search response.");
        const hit = results.data.find((item) => Number.isInteger(item.book_id) && Number.isInteger(item.meta?.page_id));
        if (!hit) throw new Error("Turath search returned no readable result.");
        const page = await getPage(hit.book_id, hit.meta.page_id);
        if (!String(page.text || "").trim()) throw new Error("Turath returned an empty book page.");
        console.log(`Turath search and page lookup succeeded (${results.count} results).`);

        const lexicon = await search("\u0643\u062a\u0628", { book: 1687, page: 1 });
        if (!Array.isArray(lexicon.data)) throw new Error("The Lisan al-Arab search response was invalid.");
        const lexiconHit = lexicon.data.find((item) => item.book_id === 1687 && Number.isInteger(item.meta?.page_id));
        if (!lexiconHit) throw new Error("No readable Lisan al-Arab entry was returned.");
        const lexiconPage = await getPage(1687, lexiconHit.meta.page_id);
        if (!String(lexiconPage.text || "").trim()) throw new Error("The Lisan al-Arab page was empty.");
        console.log("Classical lexicon search and page lookup succeeded.");
    } catch (error) {
        console.error("Turath integration check failed:", error);
        process.exitCode = 1;
    }
}

main();
