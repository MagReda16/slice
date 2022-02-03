import axios from 'axios';

const backendApiClient = axios.create({
  baseURL: 'http://localhost:3000/api/',
  headers: {
    'Content-Type': 'application/json',
    // contentType: 'application/json'
  }
})

export { backendApiClient };