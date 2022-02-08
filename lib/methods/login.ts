import { backendApiClient } from '../clients';

const login = async (user: any) => {
  return backendApiClient.post('login', {
    ...user
  });
}

export { login };