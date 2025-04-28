import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,  // Using the environment variable
  timeout: 1000,
});

export default instance;
