import axios from 'axios';
import config from '../config';
import { IApiResponse } from '../models/IApiResponse';

const api = axios.create({
  baseURL: config.API_URL,
});

export const getAsync = <T>(endpoint: string): Promise<IApiResponse<T>> =>
  new Promise((resolve, reject) => {
    api
      .get<IApiResponse<T>>(config.API_URL + endpoint, {
        headers: { Authorization: config.API_KEY },
      })
      .then((res) => resolve(res.data))
      .catch(reject);
  });

export const postAsync = <T>(
  endpoint: string,
  data?: any
): Promise<IApiResponse<T>> =>
  new Promise((resolve, reject) => {
    api
      .post<IApiResponse<T>>(config.API_URL + endpoint, data, {
        headers: { Authorization: config.API_KEY },
      })
      .then((res) => resolve(res.data))
      .catch((err) =>
        reject({ status: err.response.status, data: err.response.data })
      );
  });
