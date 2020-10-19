const { RESTDataSource } = require("apollo-datasource-rest");

class ChuckJokesApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.chucknorris.io/jokes/";
  }

  async getCategories() {
    const response = await this.get("categories");
    return response;
  }

  async getRandomJoke(category) {
    const response = await this.get(`random?category=${category}`);
    return response;
  }
}

module.exports = ChuckJokesApi;
