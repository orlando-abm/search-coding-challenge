import { useContext } from 'react';
import { SelectedBusinessContext } from '@/shared/context';

export const useSelectedBusiness = () => {
  const context = useContext(SelectedBusinessContext);
  if (context === undefined) {
    throw new Error('useSelectedBusiness must be used within a SelectedBusinessProvider');
  }
  return context;
};
