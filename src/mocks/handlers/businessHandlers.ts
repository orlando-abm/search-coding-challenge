import { http, HttpResponse } from 'msw';
import { businesses } from '@Mocks/data/businesses'; 
import { API_ENDPOINTS } from '@Shared/constants';

export const businessHandlers = [
  http.get(API_ENDPOINTS.BUSINESSES.ALL, ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('query')?.toLowerCase() || '';
    
    if (!query) {
      return HttpResponse.json(businesses);
    }
    
    const filteredBusinesses = businesses.filter(
      business => 
        business.name.toLowerCase().includes(query) || 
        business.type.toLowerCase().includes(query)
    );
    
    return HttpResponse.json(filteredBusinesses);
  }),

  http.get(API_ENDPOINTS.BUSINESSES.BY_ID(':id'), ({ params }) => {
    const { id } = params;
    const business = businesses.find(b => b.id === id);
    
    if (!business) {
      return new HttpResponse(null, { status: 404 });
    }
    
    return HttpResponse.json(business);
  })
];
