import { useState, useCallback, type ReactNode } from 'react';
import { SelectedBusinessContext } from '@/shared/context';
import type { Business } from '@/mocks/interfaces/business.interface';

export const SelectedBusinessProvider = ({ children }: { children: ReactNode }) => {
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);

  const selectBusiness = useCallback((business: Business) => {
    setSelectedBusiness(business);
  }, []);

  const clearSelectedBusiness = useCallback(() => {
    setSelectedBusiness(null);
  }, []);

  return (
      <SelectedBusinessContext.Provider
        value={{
          selectedBusiness,
          selectBusiness,
          clearSelectedBusiness
        }}
    >
          {children}
      </SelectedBusinessContext.Provider>
  );
};
