import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import { ApolloServer } from "apollo-server";
import { schema } from "./graphql/schema";
import { context } from "./context";

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({
    ...context,
    req,
  }),
});

server.listen({ port: process.env.APOLLO_PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

// import { writeFileSync } from "node:fs";
// import { graphql, getIntrospectionQuery } from "graphql";
// async function generateSchemaJSON() {
//   const introspectionQuery = getIntrospectionQuery(); // Получаем introspection-запрос
//   const result = await graphql({
//     schema, // Схема
//     source: introspectionQuery, // Запрос
//   });
//
//   if (result.errors) {
//     console.error("Failed to generate schema JSON:", result.errors);
//     return;
//   }
//
//   // Сохранение JSON файла
//   writeFileSync(
//     "graphql.schema.json",
//     JSON.stringify(result.data, null, 2),
//     "utf-8",
//   );
//   console.log("Schema exported to graphql.schema.json");
// }
//
// generateSchemaJSON();
