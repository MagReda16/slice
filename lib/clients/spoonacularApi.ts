import axios from 'axios';

const API_KEY: string = process.env.NEXT_PUBLIC_SPOONACULAR_KEY!;

const spoonacularApiClient = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/',
  params: {
    apiKey: '437ab15cf2d3463489571494f7f263e8' //Phillip's key
  }
});

export { spoonacularApiClient };