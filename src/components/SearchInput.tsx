import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { Search, X } from 'lucide-react';
import { useSelectedBusiness } from '@/shared/context';

interface SearchInputProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export const SearchInput = ({ 
  onSearch, 
  placeholder = 'Buscar comercios' 
}: SearchInputProps) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const { clearSelectedBusiness } = useSelectedBusiness();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    clearSelectedBusiness();
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
    clearSelectedBusiness();
  };

  const handleSubmit = () => {
    onSearch(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
      <div className={`flex border-1 rounded-md overflow-hidden w-full shadow-md bg-white/90 ${isFocused ? 'border-blue-600' : 'border-gray-200'}`}>
          <div className="flex items-center flex-1 gap-2 px-2 py-2 min-w-0">
              <Search size={16} className="shrink-0" color={query ? 'black' : 'gray'}/>
              <input
                id="search-input"
                className="flex-1 border-none outline-none min-w-0 w-full"
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                onBlur={handleBlur}
                aria-label={placeholder}
                /> 
              { query ? (
                  <button className="cursor-pointer shrink-0" onClick={handleClear}>
                      <X size={16} color="red"/>
                  </button>
              ) : null }
          </div>
          <button 
            id="search-button"
            className="cursor-pointer bg-blue-600 text-white px-3 md:px-4 flex items-center justify-center self-stretch shrink-0"
            onClick={handleSubmit}
            aria-label="Buscar"
          >
              <Search size={16} color="white"/>
          </button>
      </div>
  );
};
