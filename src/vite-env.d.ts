/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly API_URL: string;
    readonly GOOGLE_MAPS_KEY: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
