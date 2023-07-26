import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['fsevents'],
  },
  resolve: {
    alias: {
      web3: 'web3/dist/web3.min.js',
    },
  },
});
