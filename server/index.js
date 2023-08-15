import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './src/typeDefs.js';
import { resolvers } from './src/resolvers.js';
import 'dotenv/config';

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const PORT = process.env.PORT || 4000;

  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  });
  
  console.log(`🚀  Server ready at: ${url}`);