import { ApolloServer, gql } from "apollo-server";
import { readFileSync } from "fs";
import { betResolver } from "./resolvers/bet";
import {userResolver} from "./resolvers/user";

// we must convert the file Buffer to a UTF-8 string
const typeDefs = readFileSync('./src/schema.graphql').toString('utf-8')

// Apollo server with schema and resolver
const server = new ApolloServer({ 
  typeDefs: typeDefs, 
  resolvers: [userResolver, betResolver] });

server.listen().then(( {url}: any ) => {
  console.log(`🚀  Get your bets at ${url} !`);
});
