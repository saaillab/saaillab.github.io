// @ts-check
import { defineConfig } from 'astro/config';

// Configuration for saaillab.github.io deployment
export default defineConfig({
  site: 'https://saaillab.github.io',
  server: {
    host: true
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});