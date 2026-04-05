import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr:false,
  build: {
    transpile: ['vuetify'],
  },
  imports:{
    dirs: [
      // Scan top-level composables
      '~/composables',
      // ... or scan composables nested one level deep with a specific name and file extension
      '~/composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all composables within given directory
      '~/composables/**',
      '~/apis/**'
    ],

  },
  runtimeConfig:{
    public:{
      baseURL: "http://localhost:8080/api"
    }
  },
  components:[
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  vite: {
    plugins: [
      vuetify({ autoImport: true }),
    ],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  modules: [
    // '@nuxt/eslint',
    '@nuxt/test-utils',
    // '@nuxtjs/eslint-module'
  ]
})