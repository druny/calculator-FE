import { apiClient } from '@/services/API/axios';

export const getAllHistoryAdapter = () => apiClient.get('/operations/history');
