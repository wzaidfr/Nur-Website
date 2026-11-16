
import { search } from 'turath-sdk';
import { inspect } from 'node:util';

async function main() {
    try {
        console.log("Connecting to Turath...");

        const results = await search("الإسلام");

        console.log("\nTURATH SEARCH RESULTS:\n");
        console.log(inspect(results, {
            depth: 5,
            colors: false
        }));

    } catch (error) {
        console.error("ERROR:", error);
    }
}

main();
