import axios from 'axios';

const backendApiClient = axios.create({
  baseURL: process.env.baseApiUrl,
  headers: {
    'Content-Type': 'application/json',
  }
})

export { backendApiClient };