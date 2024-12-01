import { FS, Process } from "@yao/runtime";

function process() {
  Process("models.hello.Find", 1, {
    wheres: [{ column: "name", value: "John" }],
  });
  Process("models.hello.Create", { name: "John" });
}

function fs() {
  const fs = new FS("data");
  fs.ReadFile("file.txt");
}
