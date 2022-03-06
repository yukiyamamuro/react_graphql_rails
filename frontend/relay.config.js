module.exports = {
  src: "./",
  language: "typescript",
  schema: "./schema.graphql",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  customScalars: {
    URL: "String",
    Upload: "File | Blog",
    ISO8601DateTime: "String",
    ISO8601Date: "String",
  },
}