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
    '/en/start': { redirect: '/en/start/overview' },
    '/en/architecture': { redirect: '/en/architecture/overview' },
    '/en/development': { redirect: '/en/development/overview' },
    '/en/identity': { redirect: '/en/identity/overview' },
    '/en/products': { redirect: '/en/products/overview' },
    '/en/ai': { redirect: '/en/ai/overview' },
  },
  llms: {
    domain: 'https://docs.happydesigns.de',
    title: 'happydesigns docs',
    description: 'The central operating manual for the happydesigns ecosystem.',
  },
})
