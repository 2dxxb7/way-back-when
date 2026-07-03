import { defineConfig } from 'vitest/config';
import path from 'path';

const root = path.resolve(__dirname);

export default defineConfig({
  root,
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/**/*.test.{ts,tsx}'],
    environmentOptions: {
      jsdom: {
        url: 'http://localhost',
      },
    },
  },
  resolve: {
    alias: {
      '@': root,
    },
  },
});
