// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    categories: async (_, __, { dataSources }) => {
      return dataSources.api.getCategories();
    },
    joke: async (_, { category }, { dataSources }) => {
      return dataSources.api.getRandomJoke(category);
    }
  }
};

module.exports = resolvers;
