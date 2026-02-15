import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        task: resolve(__dirname, 'task.html'),
        edit: resolve(__dirname, 'edit.html'),
        added_task: resolve(__dirname, 'added_task.html')
      }
    }
  }
});
