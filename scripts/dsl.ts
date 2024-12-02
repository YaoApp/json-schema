import { FS } from "@yao/runtime";
import { getCode, send } from "./utils";

/**
 * Translates json-schems to english
 * yao run scripts.dsl.Trans list.json
 */
function Trans(basename?: string) {
  const fs = new FS("app");
  const files = fs.ReadDir("/data/source/dsl-schema/json-schemas/0.10.4");

  files.forEach((file: string) => {
    const name = fs.BaseName(file);
    if (basename && name !== basename) {
      return;
    }

    const content = fs.ReadFile(file);
    const prompts = `
        **Objective:**
        Translate ${file} to English
        **Content:**\n${content}
        **Requirements:**
        1. Translate the chinese description to English
        2. improve the readability of the content
        3. DO NOT change the structure of the content
        4. Use \`{{[ CODE BEGIN ]}}\` and \`{{[ CODE END ]}}\` comments to clearly identify the boundaries of the code block within the output. These markers must remain in the final TypeScript file.
        Example:
        \`\`\`typescript
        {{[ CODE BEGIN ]}}
        ...
        {{[ CODE END ]}}
        \`\`\`
    `;

    const res = send(prompts);
    const code = getCode(res);
    fs.WriteFile(`dsl-schemas/${name}`, code);
  });
}
