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
        '@Mocks': path.resolve('./src/mocks'),
        '@Config': path.resolve('./src/config'),
        '@Shared': path.resolve('./src/shared'),
        '@Components': path.resolve('./src/components'),
        '@Pages': path.resolve('./src/pages')
      }
    }
  };
});
