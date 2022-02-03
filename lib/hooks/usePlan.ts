import { backendApiClient } from '../clients';
import useSWR from 'swr';
import { updatePlan } from '../methods';
import { Recipe } from '../../db/types';

const fetcher = async (key: string) => {
  try {
    const res = await backendApiClient.get(key, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      data: {},
    });
    return res.data.plan;
  } catch (e) {
    console.error('Could not fetch user plan', e);
  }
};

const usePlan = () => {
  const { data, error, mutate } = useSWR('user/plan', fetcher);

  // const updateCache = (newRecipe: any) => {
  //   const updatedData = [...data, newRecipe];
  //   mutate(updatedData, false);
  // }

  const addRecipeToPlan = (recipe: Recipe) => {
    const updatedRecipes = [...data.recipes, recipe];
    const updatedCost = data.totalPlanCost + Math.round(recipe.totalCost) / 100;
    mutate({ totalPlanCost: updatedCost, recipes: updatedRecipes }, false);
  };

  const removeRecipeFromPlan = (recipeIndex: number) => {
    const removedRecipeCost = data.recipes[recipeIndex].totalCost;
    const updatedRecipes = data.recipes.splice(recipeIndex, 1);
    const updatedCost = data.totalPlanCost - removedRecipeCost;
    mutate({ totalPlanCost: updatedCost, recipes: updatedRecipes }, false);
  };

  const persist = async () => {
    mutate(await updatePlan(data), true);
  };

  return {
    plan: data,
    error,
    isLoading: !data && !error,
  };
};

export { usePlan };
