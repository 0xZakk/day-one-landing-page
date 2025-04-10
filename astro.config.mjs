// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // No specific configuration needed for Tailwind integration
  // Astro automatically detects and uses postcss.config.js
});
