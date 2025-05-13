import { createContext } from 'react';
import type { Business } from '@Mocks/interfaces';

export interface SelectedBusinessContextType {
  selectedBusiness: Business | null;
  selectBusiness: (business: Business) => void;
  clearSelectedBusiness: () => void;
}

export const SelectedBusinessContext = createContext<SelectedBusinessContextType | undefined>(undefined);
