export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Apical Élagage',
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
          "L'entreprise Apical Élagage intervient pour les travaux de taille, d'élagage ou d'abattage de vos arbres sur les communes de Fouesnant, Bénodet, Gouesnach, Combrit et Quimper.",
      },
      { name: 'Language', content: 'fr' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:title', content: 'Apical Élagage' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.apical-elagage-29.fr' },
      { property: 'og:image', content: '/apical-black-logo.png' },
      {
        property: 'og:description',
        content:
          "L'entreprise Apical Élagage intervient pour les travaux de taille, d'élagage ou d'abattage de vos arbres sur les communes de Fouesnant, Bénodet, Gouesnach, Combrit et Quimper.",
      },
      { property: 'og:locale', content: 'fr_FR' },
      { property: 'og:site_name', content: 'Apical Élagage' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Apical Élagage' },
      {
        name: 'twitter:description',
        content:
          "L'entreprise Apical Élagage intervient pour les travaux de taille, d'élagage ou d'abattage de vos arbres dsur les communes de Fouesnant, Bénodet, Gouesnach, Combrit et Quimper.",
      },
      { name: 'twitter:url', content: 'https://www.apical-elagage-29.fr' },
      { name: 'twitter:image', content: '/apical-black-logo.png' },
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
  plugins: ['~/plugins/event-bus.js'],

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
    base: process.env.NODE_ENV === 'production' ? '/' : '/apical/',
    // https://dev.to/dimer191996/nuxt-js-smooth-scrolling-with-hash-links-94a
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1))
            }, 100)
          })
        )
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  sitemap: {
    path: '/sitemap.xml', // L'emplacement de votre fichier sitemap.
    hostname: 'https://www.apical-elagage-29.fr', // L'adresse de votre site, que vous pouvez placer comme ici dans une variable d'environnement.
    cacheTime: 1000 * 60 * 15, // La durée avant que le sitemap soit regénéré. Ici 15mn.
    gzip: true,
    generate: false, // Génère une version statique du sitemap quand activé. À utiliser avec nuxt generate.
    exclude: [
      // Les pages qu'on a pas trop envie de voir atterrir sur Google.
    ],
  },

  robots: {
    Sitemap: 'https://www.apical-elagage-29.fr/sitemap.xml',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
