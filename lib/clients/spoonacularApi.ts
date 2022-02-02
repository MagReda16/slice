import axios from 'axios';

const spoonacularApiClient = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/'
});

export { spoonacularApiClient };