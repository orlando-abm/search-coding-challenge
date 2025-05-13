export const QUERY_KEYS = {
  BUSINESSES: {
    ALL: ['businesses'],
    DETAIL: (id: string) => ['businesses', 'detail', id]
  }
};
