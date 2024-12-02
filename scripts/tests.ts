import { Process } from "@yao/runtime";

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
}

function TestHTTP() {
  const res = Process(
    "http.Get",
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  console.log(res.code);
}
