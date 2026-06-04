// // import { addWarning } from "./warning";
// // import * as fileSystem from "fs";

// export async function schemaParameters(schema: string, docs: string) {
//   try {
//     const apiDocs = JSON.parse(fs.readFileSync(`./${docs}_spec3.json`).toString("utf-8"));

//     return apiDocs.components.schemas[schema].properties;
//   } catch (e) {
//     fail(`The '${schema}' object you passed does not exist in '${docs}' documentation`);
//   }
// }
