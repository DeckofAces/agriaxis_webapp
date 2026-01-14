import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.agriaxis.org/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default apiClient;
