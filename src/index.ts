import { ApolloServer, gql } from "apollo-server";
import { readFileSync } from "fs";
import { betResolver } from "./resolvers/bet/bet";
import {userResolver} from "./resolvers/user/user";


const typeDefs = readFileSync('./src/schema.graphql').toString('utf-8');
const queries = readFileSync('./src/queries.graphql').toString('utf-8');

// Apollo server with schema and resolver
const server = new ApolloServer({ 
  typeDefs: [typeDefs, queries],
  resolvers: [userResolver, betResolver] });

server.listen().then(( {url}: any ) => {
  console.log(`🚀  Get your bets at ${url} !`);
});
