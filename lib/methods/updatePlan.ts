import { backendApiClient } from '../clients';
import { Plan } from '../types';

const updatePlan = async (plan: Plan) => {
  return await backendApiClient.put('user/plan', plan, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export { updatePlan };
