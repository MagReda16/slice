import useSWR from "swr";
import { spoonacularApiClient } from "../clients";

const fetcher = (key: string, ids: string) => spoonacularApiClient.get(key, {
  params: {
    ids: ids
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
  const {data, error} = useSWR(['/informationBulk', ids], fetcher);


  return {
    data,
    error,
    isLoading: !data && !error
  }
}

export { useShoppingList }