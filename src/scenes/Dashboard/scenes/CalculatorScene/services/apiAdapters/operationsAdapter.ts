import { apiClient } from '@/services/API/axios';

export const plusAPIAdapter = (leftNumber: number, rightNumber: number) =>
  apiClient.post('/operations/plus', { leftNumber, rightNumber });

export const minusAPIAdapter = (leftNumber: number, rightNumber: number) =>
  apiClient.post('/operations/minus', { leftNumber, rightNumber });

export const multiplyAPIAdapter = (leftNumber: number, rightNumber: number) =>
  apiClient.post('/operations/multiply', { leftNumber, rightNumber });

export const divideAPIAdapter = (leftNumber: number, rightNumber: number) =>
  apiClient.post('/operations/divide', { leftNumber, rightNumber });
