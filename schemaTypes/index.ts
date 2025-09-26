// index.ts


import faq from "./faq";

export const schemaTypes = [faq]


//  util functions to getSchemaTitle for sanity.config.deskStructure.ts
const schemaMap = Object.fromEntries(
  schemaTypes
    .filter((schema) => !!schema.name) // make sure it’s a document/schema, not just an object
    .map((schema) => [schema.name, schema])
)

export function getSchemaTitle(type: string): string {
  return schemaMap[type]?.title || type
}