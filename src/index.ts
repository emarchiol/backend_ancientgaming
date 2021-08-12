require("dotenv").config();

import { Pool } from "pg";
import { ApolloServer } from "apollo-server";
import { readFileSync } from "fs";
import { betResolver } from "./resolvers/bet/bet";
import {userResolver} from "./resolvers/user/user";

export const pool = new Pool({
  user: process.env.USERNAME,
  host: process.env.ENDPOINT,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: parseInt(process.env.PORT as string),
});

const typeDefs = readFileSync('./src/schema.graphql').toString('utf-8');
const queries = readFileSync('./src/queries.graphql').toString('utf-8');

// Apollo server with schema and resolver
const server = new ApolloServer({ 
  typeDefs: [typeDefs, queries],
  resolvers: [userResolver, betResolver],
});

if (process.env.NODE_ENV !== 'test') {
  server.listen().then(( {url}: any ) => {
    console.log(`🚀  Get your bets at ${url} !`);
  });
}
