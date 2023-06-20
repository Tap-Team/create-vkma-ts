import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [react(), splitVendorChunkPlugin()],
  server: {
    port: 10888,
  },
  build: {
    target: 'es2018',
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('@vkontakte')) {
              return 'vendor_vk';
            } else if (id.includes('@happysanta')) {
              return 'vendor_hs';
            }
            return 'vendor'; // all other package goes here
          }
        },
      },
    },
  },
});
