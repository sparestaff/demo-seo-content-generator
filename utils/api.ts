import Router from 'next/router';
import axios, { AxiosInstance } from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    errorHandle?: boolean;
  }
}

const APIWithoutAuth: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API}`
});

export { APIWithoutAuth };