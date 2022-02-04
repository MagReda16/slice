import { backendApiClient } from '../clients'
import useSWR from 'swr'
import { updatePlan, createPlan } from '../methods'
import { Recipe } from '../../db/types'

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
  } catch (e: any) {
    const error: any = new Error(e.response.data.message);
    error.status = e.response.status;
    throw error;
  }
}

const usePlan = () => {
  const { data, error, mutate } = useSWR('user/plan', fetcher)

  const addRecipeToPlan = async (recipe: Recipe) => {
    const updatedRecipes = [...data.recipes, recipe]
    const updatedCost = data.totalPlanCost + recipe.totalCost
    const updatedData = {
      ...data,
      totalPlanCost: updatedCost,
      recipes: updatedRecipes,
    }
    await updatePlan(updatedData)
    mutate()
  }

  const removeRecipeFromPlan = async (recipeIndex: number) => {
    const updatedCost = data.totalPlanCost - data.recipes[recipeIndex].totalCost
    const updatedRecipes = data.recipes.filter(
      (_: Recipe, index: number) => index !== recipeIndex,
    )
    const updatedData = {
      ...data,
      totalPlanCost: updatedCost,
      recipes: updatedRecipes,
    }
    await updatePlan(updatedData)
    mutate()
  }

  const createNewPlan = async () => {
    await createPlan();
    mutate();
  }

  return {
    plan: data,
    planError: error,
    addRecipeToPlan,
    removeRecipeFromPlan,
    isPlanLoading: !data && !error,
    createNewPlan
  }
}

export { usePlan }
