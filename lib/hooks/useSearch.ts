import useSWR from "swr";
import { spoonacularApiClient } from "../clients";

interface Recipe {
  id: number;
  title: string;
  servings: number;
  image: string;
  pricePerServing: number;
}

const fetcher = (key: string, searchTerm: string) => spoonacularApiClient.get(key, {
    params: {
      query: searchTerm,
      instructionsRequired: true,
      addRecipeInformation: true,
      number: 1
    }
  })
    .then(res => res.data.results)
    .then(recipes => recipes.map((recipe: Recipe) => {
      return {
        recipeId: recipe.id,
        title: recipe.title,
        image: recipe.image,
        totalCost: Math.round(recipe.servings * recipe.pricePerServing)/100,
        quantity: 1
      }
    }))

const useSearch = (searchTerm: string, readyToSubmit: boolean) => {
  const { data, error } = useSWR(readyToSubmit ? ['complexSearch', searchTerm] : null, fetcher, {
    fallbackData: []
  })

  return {
    data,
    searchError: error,
    isSearchLoading: !data && !error
  }
}

export { useSearch };