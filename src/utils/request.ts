import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import router from '@/router';

const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL ?? '/',
  timeout: 30 * 1000,
});

const errorHandler = (error: AxiosError) => {
  const { status } = error?.response ?? {};
  // TODO: 弹出 toast 提示 status
  /* setTimeout(() => {
    router.push('/login');
  }, 2000); */
  return Promise.reject(error);
};

service.interceptors.request.use((config: AxiosRequestConfig) => {
  // TODO: 请求拦截器，设置请求头 token 等
  return config;
}, errorHandler);

service.interceptors.response.use((response: AxiosResponse) => {
  const { data, status } = response;
  // TODO: 响应拦截器，对于公共的错误信息统一处理
  return data;
}, errorHandler);

export default service;
