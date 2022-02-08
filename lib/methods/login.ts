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


// {given_name: 'Phillip', family_name: 'Nguy', nickname: 'nguyphillip', name: 'Phillip Nguy', picture: 'https://lh3.googleusercontent.com/a-/AOh14GhAn8qC1c_CBStD9pfWPfIUuvMATS7H0xx7hVIbZA=s96-c', …}

// {given_name: 'Phillip', family_name: 'Nguy', nickname: 'Phillip Nguy', name: 'Phillip Nguy', picture: 'https://platform-lookaside.fbsbx.com/platform/prof…&width=50&ext=1646872074&hash=AeQr-OvH1fkVNwmuznA', …}

// {nickname: 'john', name: 'john@doe.com', picture: 'https://s.gravatar.com/avatar/6a6c19fea4a367697016…&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjo.png', updated_at: '2022-02-08T00:33:41.470Z', email: 'john@doe.com', …}