import { backendApiClient } from '../clients';
import { Plan } from '../../db/types';

const updatePlan = async (plan: Plan) => {
  return backendApiClient.put('user/plan', plan, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export { updatePlan };
