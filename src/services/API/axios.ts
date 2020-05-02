import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

apiClient.interceptors.response.use(({ data }) => data);
