import useSWR from 'swr';
import { spoonacularApiClient } from '../clients';
import { Plan, Recipe } from '../../db/types/';

const formatSearchString = (plan: Plan) => {
  const recipes: Recipe[] = plan.recipes;
  return recipes.map((recipe) => recipe.recipeId).join();
};

const fetcher = async (
  key: string,
  ids: string,
  useMetric: boolean = false
) => {
  const res = await spoonacularApiClient.get(key, {
    params: {
      ids,
    },
  });

  const ingredients = res.data.flatMap(
    (recipe: any) => recipe.extendedIngredients
  );

  const ingredientDetails = ingredients.map((ingredient: any) => {
    return {
      id: ingredient.id,
      name: ingredient.nameClean,
      measures: useMetric ? ingredient.measures.metric : ingredient.measures.us,
    };
  });

  const combinedList = ingredientDetails.reduce((acc: any, ingredient: any) => {
    const existingIngredientIndex = acc.findIndex(
      (el: any) => el.id === ingredient.id
    );

    if (existingIngredientIndex > 0) {
      acc[existingIngredientIndex].measures.amount +=
        ingredient.measures.amount;
    } else {
      acc.push(ingredient);
    }

    return acc;
  }, []);

  const filteredIngredients = combinedList.filter((ingredient: any) => {
    if (ingredient.id) return ingredient;
  }).map((ingredient: any) => {
    return {
      id: ingredient.id,
      name: ingredient.name[0].toUpperCase() + ingredient.name.substring(1),
      amount: Math.round(ingredient.measures.amount * 2) / 2,
      unit: ingredient.measures.unitShort
    }
  });
  return filteredIngredients
};

const useShoppingList = (plan?: Plan) => {
  const { data, error } = useSWR(
    plan ? ['informationBulk', formatSearchString(plan)] : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};

export { useShoppingList };
