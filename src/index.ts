const {ApolloServer, gql} = require('apollo-server');

// Basic typeDef.
const typeDefs = gql `
  # The User type
  type User {
    id: Int
    name: String
    balance: Float
  }

  # The users query
  type Query {
    users: [User]
  }
`;

// The data set.
const users = [
    {
        id: 1,
        name: 'Show me the money guy',
        balance: 1200000
    }, {
        id: 2,
        name: 'Broke guy',
        balance: 12.25
    },
];

// The resolver.
const resolvers = {
    Query: {
      users: () => users,
    },
  };

// Apollo server with schema and resolver
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(( {url}: any ) => {
  console.log(`🚀  Get your bets at ${url} !`);
});
