import { useState } from 'react';
import { useBusinessSearch } from '@Shared/hooks';
import { SelectedBusinessProvider } from '@Shared/context';
import { SearchInput, BusinessCard, Map, BusinessCardSkeleton } from '@Components';

function SearchPage() {
  const [query, setQuery] = useState('');
  const { data: businesses, isLoading } = useBusinessSearch(query);

  return (
      <SelectedBusinessProvider>
          <div className="flex flex-col lg:flex-row min-h-screen">
              <aside className="hidden lg:flex lg:w-1/4 bg-white shadow-md p-6 flex-col items-center justify-start h-screen">
                  <h1 className="text-2xl font-bold mb-6 text-center">Buscar Comercios</h1>
                  <SearchInput onSearch={setQuery} />

                  {isLoading ? (
                      <div className="overflow-y-auto mt-4 max-h-[calc(100vh-180px)] w-full">
                          <h2 className="text-center text-lg font-bold mb-4">Buscando...</h2>
                          {Array(3).fill(0).map((_, index) => (
                              <BusinessCardSkeleton key={index} />
                          ))}
                      </div>
                  ) : businesses?.length === 0 ? (
                      <p className="text-center mt-4 text-gray-500">No se encontraron resultados</p>
                  ) : (
                      <div id="businesses-list" className="overflow-y-auto mt-4 max-h-[calc(100vh-180px)] w-full">
                          {query && (
                          <h2 className="text-center text-lg font-bold mb-4">Resultados {businesses?.length} para {query}</h2>
                          )}
                          {businesses?.map((business) => (
                              <BusinessCard key={business.id} business={business} />
                          ))}
                      </div>
                  )}
              </aside>
        
              <main className="relative w-full lg:w-3/4 h-screen">
                  <div className="lg:hidden absolute top-4 left-4 right-4 z-10 max-w-[calc(100%-100px)] mx-auto">
                      <SearchInput onSearch={setQuery} />
                  </div>
          
                  <Map businesses={businesses} />
              </main>
          </div>
      </SelectedBusinessProvider>
  );
}

export default SearchPage;
