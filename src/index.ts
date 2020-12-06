import express from 'express';
import { DocumentNode } from 'graphql';
import { ApolloServer, gql } from 'apollo-server-express';
import * as dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import * as Query from './schema/queries/_index';
import Todo from './schema/types/Todo';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  console.log('🛠  Getting environment variables');
  dotenv.config();
}

const PORT = process.env.API_PORT || 3000;

const Main: DocumentNode = gql`
  type Query {
    hello(name: String): String
    todo(id: Int!): Todo
  }
`;

const resolvers = {
  Query,
};

const server: ApolloServer = new ApolloServer({ 
  typeDefs: [Main, Todo],
  resolvers
});

server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  (async () => {
    const allUsers = await prisma.user.findMany();
    console.log({ allUsers });
  })();
});
