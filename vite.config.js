import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Essencial para rodar no GitHub Pages sem erro de caminho de assets
  server: {
    port: 5173,
    host: true
  }
});
