import { useQuery } from '@tanstack/react-query';
import { getAllBusinesses, searchBusinesses, getBusinessById } from '@Shared/services';
import { QUERY_KEYS } from '@Shared/constants/queryKeys';

export function useAllBusinesses() {
  return useQuery({
    queryKey: QUERY_KEYS.BUSINESSES.ALL,
    queryFn: getAllBusinesses
  });
}

export function useBusinessDetail(id: string) {
  return useQuery({
    queryKey: QUERY_KEYS.BUSINESSES.DETAIL(id),
    queryFn: () => getBusinessById(id),
    enabled: !!id
  });
}

export function useBusinessSearch(query: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.BUSINESSES.ALL, query],
    queryFn: () => searchBusinesses(query),
    enabled: query.length > 0
  });
}
