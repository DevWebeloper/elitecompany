import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: process.env.BASE_PATH || (command === 'build' ? '/elitecompany/' : '/'),
  server: {
    host: '0.0.0.0',
    port: 5174,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 5174,
    allowedHosts: true,
  },
}));
