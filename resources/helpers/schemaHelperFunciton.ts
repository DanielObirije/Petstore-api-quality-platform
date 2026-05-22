import { createSchema } from "genson-js/dist";
import * as fileSystem from "fs/promises";

export async function createJsonSchema(name: string, path: string, json: object) {
  const filePath = `./.resources/.api/${path}`;

  try {
    await fileSystem.mkdir(filePath, { recursive: true });
    const schema = createSchema(json);
    const schemaStirng = JSON.stringify(schema, null, 2);
    const schemaFilePath = `.api/${path}/${name}_schema.json`;
    await writeJsonFile(schemaFilePath, schemaStirng)
  } catch (error) {
    console.error(error);
  }
}

export async function writeJsonFile(location: string, data: string) {
     try {
        await fileSystem.writeFile(location,data)
     } catch (error) {
         console.error(error)
     }
}
