import { backendApiClient } from '../clients';

interface FormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const register = async (formData: FormData) => {
  return backendApiClient.post('register', {
    ...formData
  });
}

export { register };
