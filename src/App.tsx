import { useState } from 'react';
import { useBusinessSearch } from '@/shared/hooks';
import { SelectedBusinessProvider } from '@/shared/context';
import { SearchInput, BusinessCard, Map } from '@/components';

function App() {
  const [query, setQuery] = useState('');
  const { data: businesses } = useBusinessSearch(query);

  return (
      <SelectedBusinessProvider>
          <div className="flex min-h-screen">
              <aside className="w-full md:w-1/4 bg-white shadow-md p-6 flex flex-col items-center justify-start h-screen">
                  <h1 className="text-2xl font-bold mb-6 text-center">Buscar Comercios</h1>
                  <SearchInput onSearch={setQuery} />

                  {businesses?.length === 0 ? (
                      <p className="text-center mt-4 text-gray-500">No se encontraron resultados</p>
                  ) : (
                      <div className="overflow-y-auto mt-4 max-h-[calc(100vh-180px)]">
                          {query && (
                              <h2 className="text-center text-lg font-bold mb-4">Resultados {businesses?.length} para {query}</h2>
                          )}
                          {businesses?.map((business) => (
                              <BusinessCard key={business.id} business={business} />
                          ))}
                      </div>
                  )}
              </aside>
              <main className="hidden md:block md:w-3/4 h-screen">
                  <Map businesses={businesses} />
              </main>
          </div>
      </SelectedBusinessProvider>
  );
}

export default App;
