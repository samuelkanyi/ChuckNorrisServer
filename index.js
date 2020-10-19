const { ApolloServer } = require("apollo-server");

// Construct a schema, using GraphQL schema language
const typeDefs = require("./schema");
const resolvers = require("./resolver");
const ChuckJokesApi = require("./api");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    api: new ChuckJokesApi()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
