import assert from "node:assert/strict";
import { parseModelList, defaultModelList } from "./ai-provider.js";

const models = parseModelList("openai/gpt-oss-20b:free,meta-llama/llama-3.1-8b-instruct:free,google/gemma-3-4b-it:free");
assert.deepEqual(models, [
  "openai/gpt-oss-20b:free",
  "meta-llama/llama-3.1-8b-instruct:free",
  "google/gemma-3-4b-it:free",
]);
assert.ok(defaultModelList.length >= 2);
console.log(`OpenRouter model fallback list validated (${defaultModelList.length} models).`);
