import { FS } from "@yao/runtime";
import { prompt, send, getCode } from "./utils";

/**
 * Generate yao runtime APIs definition
 */
function Generate() {
  console.log("Generating yao runtime APIs definition");
}

/**
 * Generate FS Object definition
 * yao run scripts.runtime.GenerateFS
 */
function GenerateFS() {
  console.log("Generating FS Object definition");
  const pmt = prompt("runtime/fs.yml");
  const content = send(pmt);
  const fs = new FS("app");
  fs.WriteFile(".vscode/types/runtime/fs.d.ts", getCode(content));
}
