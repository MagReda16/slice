import useSWR from "swr";
import { spoonacularApiClient } from "../clients";
import { Plan, Recipe } from '../../db/types/';

const formatSearchString = (plan: Plan) => {
  const recipes: Recipe[] = plan.recipes;
  return recipes.map(recipe => recipe.recipeId).join();
}

const fetcher = (key: string, plan: Plan) => spoonacularApiClient.get(key, {
  params: {
    ids: formatSearchString(plan)
  }
}).then(res => res.data.map((recipe: any)=> recipe.extendedIngredients.map((ingredient: any) => {
  return {
    id: ingredient.id,
    name: ingredient.name,
    amount: ingredient.amount,
    unit: ingredient.unit
  }}
)));


const useShoppingList = (ids: string) => {
  const {data, error} = useSWR(['informationBulk', ids], fetcher);


  return {
    data,
    error,
    isLoading: !data && !error
  }
}

export { useShoppingList }