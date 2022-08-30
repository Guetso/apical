export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Apical Elagage',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "L'entreprise Apical intervient pour les travaux de taille, d'élagage ou d'abattage de vos arbres dans le finistère.",
      },
      { name: 'Language', content: 'fr' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:title', content: 'Apical Elagage' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.apical-elagage-29.fr' },
      { property: 'og:image', content: '/apical-black-logo' },
      {
        property: 'og:description',
        content:
          "L'entreprise Apical intervient pour les travaux de taille, d'élagage ou d'abattage de vos arbres dans le finistère.",
      },
      { property: 'og:locale', content: 'fr_FR' },
      { property: 'og:site_name', content: 'Apical Elagage' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Apical Elagage' },
      {
        name: 'twitter:description',
        content:
          "L'entreprise Apical intervient pour les travaux de taille, d'élagage ou d'abattage de vos arbres dans le finistère.Z",
      },
      { name: 'twitter:url', content: 'https://www.apical-elagage-29.fr' },
      { name: 'twitter:image', content: '/apical-black-logo' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://www.apical-elagage-29.fr' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/styles.scss'],

  styleResources: {
    scss: [
      '@/assets/scss/_fonts.scss',
      '@/assets/scss/_variables.scss',
      '@/assets/scss/_mixins.scss',
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/style-resources-module/
    '@nuxtjs/style-resources',
  ],

  router: {
    base: '/apical/',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
