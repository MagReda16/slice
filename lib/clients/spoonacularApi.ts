import axios from 'axios';

const API_KEY: string = process.env.NEXT_PUBLIC_SPOONACULAR_KEY!;

const spoonacularApiClient = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/',
  params: {
    apiKey: '974890968f524b0eaf067e4b5fce880e' //Ian's Key
  }
});

export { spoonacularApiClient };