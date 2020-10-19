const { gql } = require("apollo-server");

// The GraphQL schema
const typeDefs = gql`
  type Query {
    categories: [String]
    joke(category: String): Joke
  }

  type Joke {
    id: String
    value: String
    url: String
    icon_url: String
  }
`;

module.exports = typeDefs;
