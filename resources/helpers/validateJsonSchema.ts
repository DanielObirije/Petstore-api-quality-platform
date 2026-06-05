import Ajv from "ajv";
import { createJsonSchema } from "./schemaHelperFunciton";
import { expect } from "@playwright/test";
import { readFile } from "fs/promises";
import { join } from "path";

export async function validateJsonSchema(fileName: string, filePath: string, body: object, createSchema = false) {
  const path = filePath;
  const jsonName = fileName;

  if (createSchema) {
    createJsonSchema(fileName, filePath, body);
  }

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  //const existingSchema = require(`../../resources/api/${path}/${jsonName}_schema.json`);

  const dynamicPath = join(__dirname, "../../resources/api", path, `${jsonName}_schema.json`);
  const existingSchema = JSON.parse(await readFile(dynamicPath, "utf8"));

  const ajv = new Ajv({ allErrors: false });
  const validate = ajv.compile(existingSchema);
  const validateResponse = validate(body);
  if (!validateResponse) {
    console.warn("SCHEMA ERRORS", JSON.stringify(validate.errors), "\nRESPONSE BODY:", JSON.stringify(body));
  }
  expect(validateResponse).toBe(true);
}
