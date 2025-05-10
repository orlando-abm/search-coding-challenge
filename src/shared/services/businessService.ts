import { API_ENDPOINTS } from '@/shared/constants/api';
import { fetchApi } from '@/config';
import type { Business } from '@/mocks/interfaces';

export async function getAllBusinesses(): Promise<Business[]> {
  return fetchApi<Business[]>(API_ENDPOINTS.BUSINESSES.ALL);
}

export async function getBusinessById(id: string): Promise<Business> {
  return fetchApi<Business>(API_ENDPOINTS.BUSINESSES.BY_ID(id));
}

export async function searchBusinesses(query: string): Promise<Business[]> {
  const endpoint = `${API_ENDPOINTS.BUSINESSES.ALL}?query=${encodeURIComponent(query)}`;
  return fetchApi<Business[]>(endpoint);
}
