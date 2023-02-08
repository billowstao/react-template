import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => ({
  build: {
    target: [
      'es2022',
      'chrome108',
      'edge108',
      'firefox102',
      'safari15.6',
      'ios15.6',
    ],
    sourcemap: mode === 'development',
  },
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
  /* eslint-disable @typescript-eslint/no-unsafe-assignment --- vite plugin */
  plugins: [react({ tsDecorators: true })],
  /* eslint-enable @typescript-eslint/no-unsafe-assignment */
}));
