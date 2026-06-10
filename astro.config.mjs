// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

import sanity from '@sanity/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    svelte(),
    sanity({
      projectId: 'ljwrfio9',
      dataset: 'production',
      useCdn: true,
      apiVersion: '2026-01-28',
      studioBasePath: '/studio'
    }),
    react(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});