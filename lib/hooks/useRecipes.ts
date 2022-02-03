import { backendApiClient } from "../clients";
import useSWR from "swr";
import { updatePlan } from "../methods";


const fetcher = (key: string) => {
  // console.log(localStorage.getItem('accessToken'));
  return backendApiClient.get(key, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
    data: {}
  }).then(res => res.data).then(data => data.plan.recipes).catch(e => console.log('error in useRecipes fetcher', e));
}

const useRecipes = () => {
  const { data, error, mutate } = useSWR('user/plan', fetcher);

  const updateCache = (newRecipe: any) => {
    const updatedData = [...data, newRecipe];
    mutate(updatedData, false);
  }

  const persist = async () => {
    // put request to backend with data

    mutate(await updatePlan(data), true);
  }

  // possibly create add method

  return {
    recipes: data,
    error,
    isLoading: !data && !error
  }
}

export { useRecipes };