import path from 'node:path'
import url from 'node:url'

import { fileRouter } from 'waku/router/server'

export default fileRouter(
  path.dirname(url.fileURLToPath(import.meta.url)),
  'routes'
)

// import { defineEntries } from "waku/server";

// export default defineEntries(
//   // getEntry
//   async (id) => {
//     switch (id) {
//       case "App":
//         return import("./src/App.js");
//       default:
//         return null;
//     }
//   },
//   // getBuilder
//   async () => {
//     return {
//       "/": {
//         elements: [["App", { name: "Waku" }]],
//       },
//     };
//   }
// );
