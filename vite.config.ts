import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  // Aliases
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Plugins
  plugins: [
    svgr({
      svgrOptions: {},
      include: '**/*.svg',
    }),
    react(),
  ],
});
