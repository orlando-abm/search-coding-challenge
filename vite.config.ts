import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      tailwindcss()
    ],
    define: {
      'import.meta.env.API_URL': JSON.stringify(env.API_URL),
      'import.meta.env.GOOGLE_MAPS_KEY': JSON.stringify(env.GOOGLE_MAPS_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@mocks': path.resolve('./src/mocks'),
        '@config': path.resolve('./src/config'),
        '@shared': path.resolve('./src/shared'),
        '@components': path.resolve('./src/components')
      }
    }
  };
});
