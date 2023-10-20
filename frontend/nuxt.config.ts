// https://nuxt.com/docs/api/configuration/nuxt-config
import { quasar } from '@quasar/vite-plugin';

export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  dir: {
    pages: 'pages',
    assets: 'core/assets',
    layouts: 'core/layouts',
    public: 'core/public'
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
})
