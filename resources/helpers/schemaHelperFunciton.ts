import { createSchema } from "genson-js/dist";
import * as fileSystem from "fs/promises";

export async function createJsonSchema(name: string, path: string, json: object) {
  const filePath = `./.api/${path}`;
  console.log("Creating directory:", filePath);
  try {
    await fileSystem.mkdir(filePath, { recursive: true });
    const schema = createSchema(json);
    const schemaStirng = JSON.stringify(schema, null, 2);
    // console.log(schemaStirng);
    const schemaFilePath = `.api/${path}/${name}_schema.json`;
    // console.log("Writing file:", schemaFilePath);
    await writeJsonFile(schemaFilePath, schemaStirng);
  } catch (error) {
    console.error(error);
  }
}

export async function writeJsonFile(location: string, data: string) {
  try {
    await fileSystem.writeFile(location, data, "utf8");
    // console.log("File written successfully:", location);
    // console.log(data);
  } catch (error) {
    console.error(error);
  }
}
