import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cursor-portfolio/',
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
});
