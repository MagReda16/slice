import axios from 'axios';

const API_KEY: string = process.env.NEXT_PUBLIC_SPOONACULAR_KEY!;

console.log('api key', API_KEY);

const spoonacularApiClient = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/',
  params: {
    apiKey: API_KEY,
  }
});

export { spoonacularApiClient };