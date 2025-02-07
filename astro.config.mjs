import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/blog/privacy-policy': 'https://cantinavpn.com/privacy/',
    '/blog/terms-of-use': 'https://cantinavpn.com/terms/'
  }
});
