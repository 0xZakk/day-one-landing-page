// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

import remarkSlug from 'remark-slug'
import remarkAutolinkHeadings from 'remark-autolink-headings'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx({
      remarkPlugins: [remarkSlug, remarkAutolinkHeadings],
    }),
  ],
});