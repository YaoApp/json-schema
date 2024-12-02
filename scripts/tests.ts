import { FS, Process, Store } from "@yao/runtime";

function TestProcess() {
  Process("models.widget.Get", { wheres: [{ column: "id", value: 1 }] });
  Process("models.widget.Find", 1, { select: ["id", "name"] });
  Process(
    "models.widget.Paginate",
    { wheres: [{ column: "id", value: 1 }] },
    1,
    10
  );
}

function TestFS() {
  Process("fs.app.ReadFile", "app/models/widget.ts");
  Process(
    "fs.app.WriteFile",
    "app/prompts/widget.ts.md",
    "export class Widget {}"
  );

  const fs = new FS("data");
  const raw = fs.ReadFile("prompts/model.yml");
  const n = fs.WriteFile("prompts/model.yml.test.md", raw);
  console.log(n);
}

function TestHTTP() {
  const res = Process(
    "http.Get",
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  console.log(res.code);
}

function TestStore() {
  const cache = new Store("cache");
  cache.Set("key", "value");
  cache.Get("key");
}
