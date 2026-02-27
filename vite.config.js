import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        bookshelf: resolve(__dirname, 'bookshelf.html')
      }
    }
  }
});
