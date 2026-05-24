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
  llms: {
    domain: 'https://docs.happydesigns.de',
    title: 'happydesigns docs',
    description: 'The central operating manual for the happydesigns ecosystem.',
  },
})
