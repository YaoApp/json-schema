// -------------------------
// --- Utility functions ---

import { FS, Process } from "@yao/runtime";

// -------------------------
export function prompt(file: string) {
  const fs = new FS("data");
  const raw = fs.ReadFile(`prompts/${file}`);
  const prompts = Process("encoding.yaml.Decode", raw);
  let codes = "";
  for (const source of prompts.Sources || []) {
    const code = fs.ReadFile(`source/${source}`);
    codes += `${source}\n${code}\n`;
  }
  prompts.Sources = codes;
  const output = Process("encoding.yaml.Encode", prompts);
  fs.WriteFile(`prompts/${file}.md`, output);
  return output;
}

export function send(prompt: string) {
  let messages = [{ role: "user", content: prompt }];
  let connector = "moapi:gpt-4o";
  let res = "";
  Process("openai.chat.Completions", connector, messages, null, (data) => {
    if (data == "data: [DONE]") {
      return 0;
    }
    const content = getContent(data);
    res = res + content;
    console.log(`bytes: ${res.length}...`);
    return 1;
  });
  return res;
}

export function getContent(data) {
  const lines = data.split("\n");
  const contents = [];

  lines?.forEach((line) => {
    if (line.trim().startsWith("data:")) {
      const jsonData = line.substring(5).trim(); // Remove 'data:' prefix
      try {
        const parsedData = JSON.parse(jsonData);
        if (
          parsedData.choices &&
          parsedData.choices[0].delta &&
          parsedData.choices[0].delta.content
        ) {
          const content = parsedData.choices[0].delta.content;
          contents.push(content);
        }
      } catch (error) {
        console.log("Error parsing JSON:", error);
      }
    }
  });

  return contents.join("");
}

export function getCode(content: string): string {
  if (content.includes("{{[ CODE BEGIN ]}}")) {
    const start = content.indexOf("{{[ CODE BEGIN ]}}");
    const end = content.indexOf("{{[ CODE END ]}}");
    const code = content.substring(start + 18, end);
    return code;
  }

  console.log("No code found");
  return "";
}
