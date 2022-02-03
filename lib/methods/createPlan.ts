import { backendApiClient } from '../clients';

const createPlan = async () => {
  return backendApiClient.post('user/plan', {}, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
};

export { createPlan };
