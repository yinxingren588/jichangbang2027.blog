import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jichangbang2027.blog',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404') && !page.includes('/404.html'),
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        item.lastmod = new Date().toISOString();

        if (path === '/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (['/ranking', '/reviews', '/faq', '/posts', '/clients', '/guide'].includes(path)) {
          item.priority = 0.9;
          item.changefreq = 'daily';
        } else if (path.startsWith('/reviews/') || path.startsWith('/posts/')) {
          item.priority = 0.85;
          item.changefreq = 'weekly';
        } else if (path.startsWith('/faq/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        return item;
      },
    })
  ]
});
