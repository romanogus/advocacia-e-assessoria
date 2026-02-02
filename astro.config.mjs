// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), sanity({
    projectId: 'ljwrfio9',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2026-01-28',
    studioBasePath: '/studio'
  }), react()],

  vite: {
    plugins: [tailwindcss()]
  }
});