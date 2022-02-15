import { useRouter } from "next/router";
import { spoonacularApiClient } from "../clients";
import useSWR from "swr";


const fetcher = (key: string) => spoonacularApiClient.get(key, {
  params: {
    includeNutrition: true
  }
}).then(res => res.data);

const useRecipe = () => {
  const router = useRouter();
  const { rid } = router.query;
  const { data, error } = useSWR(rid ? `${rid}/information` : null, fetcher);

  return {
    data,
    recipeError: error,
    isRecipeLoading: !data && !error,
  }
}

export { useRecipe };