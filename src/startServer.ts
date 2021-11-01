/* eslint-disable no-console */
import { ApolloServer } from 'apollo-server';
import { ApolloServerExpressConfig } from 'apollo-server-express';

export const startServer = ({
  typeDefs,
  resolvers,
}: ApolloServerExpressConfig): void => {
  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => console.log(`💎 Server start at ${url}`));
};
