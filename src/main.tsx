import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import '@/index.css';
import App from '@/App.tsx';
import initMocks from '@Mocks';
import { queryClient } from '@Config';

initMocks().then(() => {
  createRoot(document.getElementById('root')!).render(
      <StrictMode>
          <QueryClientProvider client={queryClient}>
              <App />
          </QueryClientProvider>
      </StrictMode>
  );
});
