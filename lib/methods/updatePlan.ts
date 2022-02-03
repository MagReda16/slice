import { backendApiClient } from '../clients';
import { Recipe } from '../../db/types';

const updatePlan = async (recipeList: Recipe[]) => {
  return backendApiClient.put('user/plan', recipeList, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
}

export { updatePlan };