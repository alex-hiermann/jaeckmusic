// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://alex-hiermann.github.io',
    base: '/jaeckmusic',
    integrations: [sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
    i18n: {
        defaultLocale: 'de',
        locales: ['de', 'en'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
});
