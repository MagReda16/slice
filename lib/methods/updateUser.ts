import { backendApiClient } from '../clients';

interface FormData {
  budget: string;
}

const updateUser = async (formData: FormData) => {
  return backendApiClient.put('user', formData, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
}

export { updateUser };