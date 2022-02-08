import axios from 'axios';

const API_KEY: string = process.env.NEXT_PUBLIC_SPOONACULAR_KEY!;

const spoonacularApiClient = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/',
  params: {
    apiKey: 'ff38de94a3c2426e8b86faf1acb87225' //Ian's Key
  }
});



export { spoonacularApiClient };