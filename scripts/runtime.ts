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

/**
 * Generate Store Object definition
 * yao run scripts.runtime.GenerateStore
 */
function GenerateStore() {
  console.log("Generating Store Object definition");
  const pmt = prompt("runtime/store.yml");
  const content = send(pmt);
  const fs = new FS("app");
  fs.WriteFile(".vscode/types/runtime/store.d.ts", getCode(content));
}

/**
 * Generate Query Object definition
 * yao run scripts.runtime.GenerateQuery
 */
function GenerateQuery() {
  console.log("Generating Query Object definition");
  const pmt = prompt("runtime/query.yml");
  const content = send(pmt);
  const fs = new FS("app");
  fs.WriteFile(".vscode/types/runtime/query.d.ts", getCode(content));
}

/**
 * Generate Http Object definition
 * yao run scripts.runtime.GenerateHttp
 */
function GenerateHttp() {
  console.log("Generating Http Object definition");
  const pmt = prompt("runtime/http.yml");
  const content = send(pmt);
  const fs = new FS("app");
  fs.WriteFile(".vscode/types/runtime/http.d.ts", getCode(content));
}

/**
 * Generate Time Object definition
 * yao run scripts.runtime.GenerateTime
 */
function GenerateTime() {
  console.log("Generating Time Object definition");
  const pmt = prompt("runtime/time.yml");
  const content = send(pmt);
  const fs = new FS("app");
  fs.WriteFile(".vscode/types/runtime/time.d.ts", getCode(content));
}

/**
 * Generate log Object definition
 * yao run scripts.runtime.GenerateLog
 */
function GenerateLog() {
  console.log("Generating Log Object definition");
  const pmt = prompt("runtime/log.yml");
  const content = send(pmt);
  const fs = new FS("app");
  fs.WriteFile(".vscode/types/runtime/log.d.ts", getCode(content));
}

/**
 * Generate Exception Object definition
 * yao run scripts.runtime.GenerateException
 */
function GenerateException() {
  console.log("Generating Exception Object definition");
  const pmt = prompt("runtime/exception.yml");
  const content = send(pmt);
  const fs = new FS("app");
  fs.WriteFile(".vscode/types/runtime/exception.d.ts", getCode(content));
}
