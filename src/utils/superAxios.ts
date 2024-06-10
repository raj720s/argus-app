import { BASEURL } from '@/config/variables';
import axios from 'axios';

const superAxios = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

superAxios.interceptors.request.use(req => {
  return req
})

superAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default superAxios;