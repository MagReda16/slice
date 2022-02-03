import { backendApiClient } from '../clients'
import useSWR from 'swr'
import { updatePlan } from '../methods'
import { Recipe } from '../../db/types'

const fetcher = async (key: string) => {
  try {
    console.log('fetching the plan from backend')
    const res = await backendApiClient.get(key, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      data: {},
    })
    return res.data.plan
  } catch (e) {
    console.error('Could not fetch user plan', e)
  }
}

const usePlan = () => {
  const { data, error, mutate } = useSWR('user/plan', fetcher)
  // {
  //   dedupingInterval: 10000000,
  // }

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
      (recipe: Recipe, index: number) => index !== recipeIndex,
    )
    const updatedData = {
      ...data,
      totalPlanCost: updatedCost,
      recipes: updatedRecipes,
    }
    await updatePlan(updatedData)
    mutate()
  }

  const confirmPlan = async () => {
    mutate(await updatePlan(data), true)
  }

  return {
    plan: data,
    error,
    addRecipeToPlan,
    removeRecipeFromPlan,
    confirmPlan,
    isLoading: !data && !error,
  }
}

export { usePlan }
