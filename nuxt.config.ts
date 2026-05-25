export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@barzhsieh/nuxt-content-mermaid', '@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
    }, {
      code: 'de',
      name: 'Deutsch',
    }],
  },
  contentMermaid: {
    theme: {
      light: 'default',
      dark: 'dark',
    },
  },
  routeRules: {
    '/en/start': { redirect: '/en/start/operating-model' },
    '/en/architecture': { redirect: '/en/architecture/layered-architecture' },
    '/en/development': { redirect: '/en/development/how-we-build' },
    '/en/identity': { redirect: '/en/identity/identity-scope' },
    '/en/products': { redirect: '/en/products/product-map' },
    '/en/ai': { redirect: '/en/ai/agent-workflow' },
  },
  llms: {
    domain: 'https://docs.happydesigns.de',
    title: 'happydesigns docs',
    description: 'The central operating manual for the happydesigns ecosystem.',
  },
})
