import axios from 'axios';
import type { AxiosRequestConfig, AxiosError } from 'axios';

const BASE_URL = import.meta.env.API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const errorMessage = error.message || 'Error en la petición';
    alert(errorMessage);
    return Promise.reject(error);
  }
);

export const api = {
  get: async <T>(endpoint: string, params?: Record<string, unknown>): Promise<T> => {
    const response = await axiosInstance.get<T>(endpoint, { params });
    return response.data;
  },
  
  post: async <T>(endpoint: string, data?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> => {
    const response = await axiosInstance.post<T>(endpoint, data, config);
    return response.data;
  },
  
  put: async <T>(endpoint: string, data?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> => {
    const response = await axiosInstance.put<T>(endpoint, data, config);
    return response.data;
  },
  
  patch: async <T>(endpoint: string, data?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> => {
    const response = await axiosInstance.patch<T>(endpoint, data, config);
    return response.data;
  },
  
  delete: async <T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> => { const response = await axiosInstance.delete<T>(endpoint, config);
    return response.data;
  }
};
