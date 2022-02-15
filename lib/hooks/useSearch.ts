import useSWR from 'swr';
import { spoonacularApiClient } from '../clients';

const fetcher = (key: string, searchTerm: string) =>
  spoonacularApiClient
    .get(key, {
      params: {
        query: searchTerm,
        instructionsRequired: true,
        addRecipeInformation: true,
        number: 8,
        minFat: 0,
        minCarbs: 0,
        minProtein: 0,
        minCalories: 0,
      },
    })
    .then((res) => res.data.results)
    .then((recipes) =>
      recipes.map((recipe: any) => {
        return {
          recipeId: recipe.id,
          title: recipe.title,
          image: recipe.image,
          totalCost: Math.round(recipe.servings * recipe.pricePerServing) / 100,
          quantity: 1,
          nutrients: recipe.nutrition.nutrients,
          servings: recipe.servings,
        };
      })
    );

const useSearch = (searchTerm: string, readyToSubmit: boolean, fbdata: any) => {
  const { data, error } = useSWR(
    readyToSubmit ? ['complexSearch', searchTerm] : null,
    fetcher,
    {
      fallbackData: fbdata,
    }
  );

  return {
    data,
    searchError: error,
    isSearchLoading: !data && !error,
  };
};

export { useSearch };
