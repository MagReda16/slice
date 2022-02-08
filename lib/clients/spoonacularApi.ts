import axios from 'axios';

const spoonacularApiClient = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/',
  params: {
    apiKey: process.env.spoonKey
  }
});

export { spoonacularApiClient };