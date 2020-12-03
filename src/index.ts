import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import * as Query from './schema/queries'
import { DocumentNode } from 'graphql';
import Todo from './schema/types/Todo';

const PORT = process.env.PORT || 3000
const app = express();

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

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
)