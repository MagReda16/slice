import { backendApiClient } from '../clients';

interface FormData {
  email: string;
  password: string;
}

const login = async (formData: FormData) => {
  return backendApiClient.post('login', {
    ...formData
  });
}

export { login };