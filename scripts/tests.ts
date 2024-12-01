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
