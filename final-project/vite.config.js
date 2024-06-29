import { defineConfig } from 'vite';

export default defineConfig({
  base: '/final-project',
  build: {
    rollupOptions: {
      input: '/main.js',
    },
  },
});
