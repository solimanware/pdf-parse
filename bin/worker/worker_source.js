import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
function getWorkerSource() {
  try {
    let workerPath;
    if (typeof import.meta?.resolve === "function") {
      workerPath = fileURLToPath(import.meta.resolve("pdfjs-dist/legacy/build/pdf.worker.min.mjs"));
    } else {
      const pdfjsPath = require.resolve("pdfjs-dist/package.json");
      workerPath = join(dirname(pdfjsPath), "legacy/build/pdf.worker.min.mjs");
    }
    const workerContent = readFileSync(workerPath, "utf-8");
    return `data:application/javascript;base64,${Buffer.from(workerContent).toString("base64")}`;
  } catch (error) {
    return "pdfjs-dist/legacy/build/pdf.worker.min.mjs";
  }
}
export {
  getWorkerSource
};
