import { API_ENDPOINTS } from '@Shared/constants/api';
import { api } from '@Config/api';
import type { Business } from '@Mocks/interfaces';

export async function getAllBusinesses(): Promise<Business[]> {
  return api.get<Business[]>(API_ENDPOINTS.BUSINESSES.ALL);
}

export async function getBusinessById(id: string): Promise<Business> {
  return api.get<Business>(API_ENDPOINTS.BUSINESSES.BY_ID(id));
}

export async function searchBusinesses(query: string): Promise<Business[]> {
  return api.get<Business[]>(API_ENDPOINTS.BUSINESSES.ALL, { query });
}
