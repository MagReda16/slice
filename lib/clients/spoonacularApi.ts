import axios from 'axios';

const API_KEY: string = process.env.NEXT_PUBLIC_SPOONACULAR_KEY!;

const spoonacularApiClient = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/',
  params: {
<<<<<<< HEAD
    apiKey: 'ff38de94a3c2426e8b86faf1acb87225' //Phillip's key
=======
    apiKey: '974890968f524b0eaf067e4b5fce880e' //Ian's Key
>>>>>>> 7791728ec6ba327e9ab81d357528ca8f8ce5943c
  }
});

export { spoonacularApiClient };