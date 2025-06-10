import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/js-dev/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default instance;
