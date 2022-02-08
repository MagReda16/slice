import { backendApiClient } from '../clients';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { updatePlan, createPlan } from '../methods';
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
    return {
      ...res.data.plan,
      totalPlanCost: calculatePlanCost(res.data.plan.recipes),
    };
  } catch (e: any) {
    const error: any = new Error(e.response.data.message);
    error.status = e.response.status;
    throw error;
  }
};

function calculatePlanCost(recipes: Recipe[]) {
  return recipes.reduce((acc: any, recipe) => {
    return (acc = acc + Number(recipe.quantity) * Number(recipe.totalCost));
  }, 0);
}

const usePlan = () => {
  const {query: {id} } = useRouter();
  const { data, error, mutate } = useSWR(id ? `user/plan/${id}` : 'user/plan', fetcher);

  const addRecipeToPlan = async (recipe: Recipe) => {
    const existingRecipeIndex = data.recipes.findIndex(
      (el: any) => el.recipeId === recipe.recipeId
    );

    if (existingRecipeIndex >= 0) {
      data.recipes[existingRecipeIndex].quantity++;
    } else {
      data.recipes.push(recipe);
    }

    await updatePlan(data);
    mutate();
  };

  const decrementRecipeQuantity = async (recipeIndex: number) => {
    data.recipes[recipeIndex].quantity--;

    if (data.recipes[recipeIndex].quantity <= 0) {
      data.recipes.splice(recipeIndex, 1);
    }

    await updatePlan(data);
    mutate();
  };

  const incrementRecipeQuantity = async (recipeIndex: number) => {
    data.recipes[recipeIndex].quantity++;

    await updatePlan(data);
    mutate();
  };

  const createNewPlan = async () => {
    await createPlan();
    mutate();
  };

  return {
    plan: data,
    planError: error,
    addRecipeToPlan,
    incrementRecipeQuantity,
    decrementRecipeQuantity,
    isPlanLoading: !data && !error,
    createNewPlan,
  };
};

export { usePlan };
