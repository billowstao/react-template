import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: 'assets',
        replacement: resolve('./src/assets/'),
      },
      {
        find: 'components',
        replacement: resolve('./src/components/'),
      },
      {
        find: 'routes',
        replacement: resolve('./src/routes/'),
      },
      {
        find: 'styles',
        replacement: resolve('./src/styles/'),
      },
    ],
  },
  server: {
    open: '/',
  },
  plugins: [react({ tsDecorators: true })],
});
