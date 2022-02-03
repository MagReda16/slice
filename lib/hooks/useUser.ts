import useSWR from 'swr';
import { backendApiClient } from '../clients';
import { logout } from '../methods';

const fetcher = async (key: string) => {
  try {
    const res = await backendApiClient.get(key, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json'
      }
    });
    return res.data;
  } catch (e: any) {
    if (e.response.status === 403) {
      const error: any = new Error(e.response.data.message);
      error.status = e.response.status;
      throw error
    }
  }
}

const useUser = () => {
  const ISSERVER = typeof window === "undefined";
  let accessToken: string | null;
  if (!ISSERVER) accessToken = localStorage.getItem('accessToken');
  else return { user: null, error: null };
  const { data, error } = useSWR(accessToken ? 'user' : null, fetcher)

  if (error && error.status === 403) {
    // remove accessToken, when 403 is returned so that no subsequent requests are sent until user logs in
    logout();
  }


  return {
    user: data,
    isLoggedIn: !!data, // coherces to boolean value
    error,
  }
};

export { useUser };