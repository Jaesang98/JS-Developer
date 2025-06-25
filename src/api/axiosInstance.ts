import axios from 'axios';
import { useUserInfoStore } from '@/stores/useStore';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/js-dev/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const { grantType, accessToken, refreshToken } = useUserInfoStore.getState();

    if (accessToken && grantType) {
      config.headers.Authorization = `${grantType} ${accessToken}`;
    }

    if (refreshToken) {
      config.headers.refreshToken = refreshToken;
    }

    console.log(config.headers);

    return config;
  },
  (error) => Promise.reject(error),
);

export default instance;
