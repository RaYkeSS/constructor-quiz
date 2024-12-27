import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import { ApolloServer } from "apollo-server";
import { schema } from "./graphql/schema";
import { context } from "./context";

const server = new ApolloServer({
  schema,
  context,
});

server.listen({ port: process.env.APOLLO_PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
