// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // You can configure fully typed, per-environment overrides in your nuxt.config
  $production: {
  },
  $development: {
  },
  // can be overloaded in .env files
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    secretOverloadedInDotEnvFile: 'default value',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
      publicOverloadedInDotEnvFile: ''
    }
  }
})
