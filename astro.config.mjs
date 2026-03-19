import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
  server: {
    host: '0.0.0.0',
    port: 5000,
    // En producción, restringir hosts para evitar Host Header Injection
    allowedHosts: process.env.NODE_ENV === 'production'
      ? ['yaquedelsur.ign.gob.do', 'localhost', '127.0.0.1']
      : true,
  },
});
