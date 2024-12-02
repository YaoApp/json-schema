import { FS, http, Process, Query, Store } from "@yao/runtime";

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

  const res2 = http.Get("https://jsonplaceholder.typicode.com/posts/1");
  console.log(res2.code);
}

function TestStore() {
  const cache = new Store("cache");
  cache.Set("key", "value");
  cache.Get("key");
}

function TestQuery() {
  const qb = new Query("default");
  const rows = qb.Get({
    from: "pets",
    debug: true,
    select: [
      "category_id",
      "category.category_name",
      ":COUNT(pets.id) as total",
    ],
    joins: [
      {
        left: true,
        from: "pet_categories as category",
        key: "category_id",
        foreign: "category.id",
      },
    ],
    wheres: [
      { field: "pets.created_at", ">=": "from" },
      { field: "pets.created_at", "<=": "to" },
    ],
    groups: ["category_id"],
  });

  console.log(rows);
}
