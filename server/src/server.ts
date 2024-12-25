import dotenv from 'dotenv';
dotenv.config({ path: "../.env" });

import { ApolloServer } from 'apollo-server';
import { typeDefs } from './graphql/schemas';
import { resolvers } from './graphql/resolvers';
import { context } from './graphql/context';


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.listen({ port: process.env.APOLLO_PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
