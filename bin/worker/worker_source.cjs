"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const node_fs = require("node:fs");
const node_path = require("node:path");
const node_url = require("node:url");
function getWorkerSource() {
  try {
    let workerPath;
    if (false) {
      workerPath = node_url.fileURLToPath((void 0)("pdfjs-dist/legacy/build/pdf.worker.min.mjs"));
    } else {
      const pdfjsPath = require.resolve("pdfjs-dist/package.json");
      workerPath = node_path.join(node_path.dirname(pdfjsPath), "legacy/build/pdf.worker.min.mjs");
    }
    const workerContent = node_fs.readFileSync(workerPath, "utf-8");
    return `data:application/javascript;base64,${Buffer.from(workerContent).toString("base64")}`;
  } catch (error) {
    return "pdfjs-dist/legacy/build/pdf.worker.min.mjs";
  }
}
exports.getWorkerSource = getWorkerSource;
