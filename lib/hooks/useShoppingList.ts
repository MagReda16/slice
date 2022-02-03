import useSWR from "swr";
import { spoonacularApiClient } from "../clients";
import { Plan, Recipe } from '../../db/types/';

const formatSearchString = (plan: Plan) => {
  const recipes: Recipe[] = plan.recipes;
  return recipes.map(recipe => recipe.recipeId).join();
}

const fetcher = (key: string, ids: string) => spoonacularApiClient.get(key, {
  params: {
    ids
  }
}).then(res => res.data.map((recipe: any)=> recipe.extendedIngredients.map((ingredient: any) => {
  return {
    id: ingredient.id,
    name: ingredient.name,
    amount: ingredient.amount,
    unit: ingredient.unit
  }}
)));


const useShoppingList = (plan?: Plan) => {
  const {data, error} = useSWR(plan ? ['informationBulk', formatSearchString(plan)] : null, fetcher);
  
  return {
    data,
    error,
    isLoading: !data && !error
  }
}

export { useShoppingList }