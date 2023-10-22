// https://nuxt.com/docs/api/configuration/nuxt-config
import { quasar } from '@quasar/vite-plugin';
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config({ path: 'config/.env' });
export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  dir: {
    pages: 'pages',
    assets: 'core/assets',
    layouts: 'core/layouts',
    public: 'core/public',
    middleware: 'core/middleware'
  },
  components: {
    dirs: ['core/components']
  },
  css: [
    '@quasar/extras/roboto-font/roboto-font.css',
    '@quasar/extras/material-icons/material-icons.css',
    '~/core/assets/styles/quasar.sass'
  ],
  build: {
    transpile: ['quasar']
  },
  plugins: ['~/core/plugins/quasar.client.ts'],
  imports: {
    dirs: ['~/core/composables/**']
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL
    }
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore']
      }
    ]
  ],
  vite: {
    plugins: [
      /* vue({
              template: { transformAssetUrls }
            }), */
      quasar({
        sassVariables: '~/core/assets/styles/quasar.variables.sass'
      })
    ]
  }
});
