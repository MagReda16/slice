import { useRouter } from "next/router";
import { spoonacularApiClient } from "../clients";
import useSWR from "swr";

const fetcher = (key: string) => spoonacularApiClient.get(key).then(res => res.data);

const useRecipe = () => {
  const { query: { id } } = useRouter();
  const { data, error } = useSWR(id ? `${id}/information` : null, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error
  }
}

export { useRecipe };