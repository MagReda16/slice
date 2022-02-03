import useSWR from "swr";
import { spoonacularApiClient } from "../clients";

const fetcher = (key: string, ids: string) => spoonacularApiClient.get(key, {
  params: {
    ids: ids
  }
}).then(res => res.data);

const useShoppingList = (ids: string) => {
  const {data, error} = useSWR(['/informationBulk', ids], fetcher);

  return {
    data,
    error,
    isLoading: !data && !error
  }
}

export { useShoppingList }