// import colors from 'vuetify/es5/util/colors'

export default {
  // redirect ssl
  // serverMiddleware: ['redirect-ssl'],
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Nuxt Starter',
    title: 'Nuxt Starter',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Galeri Nasional Indonesia',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // runtime config
  publicRuntimeConfig: {
    apiURL: process.env.BASE_URL || 'http://127.0.0.1:8000/api',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/styles.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/persistedState.js' },
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/TiptapVuetify.js' },
    { src: '~/plugins/sendData.js' },
    { src: '~/plugins/fetchData.js' },
    { src: '~/plugins/redirectPage.js' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // tailwind
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // sweetalert module
    'vue-sweetalert2/nuxt',
    // currency format
    [
      'vue-currency-filter/nuxt',
      {
        symbol: 'IDR',
      },
    ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vuetify/lib', 'tiptap-vuetify'],
  },

  // loading bar configuration
  loading: {
    height: '3px',
    color: '#00185a',
  },
  // tailwind configuration
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    jit: true,
    exposeConfig: false,
    config: {
      prefix: 'tw-',
      important: true,
      purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
      ],
      theme: {
        extend: {
          fontFamily: {
            'hyundai-regular': ["'Hyundai Regular'"],
            'hyundai-medium': ["'Hyundai Medium'"],
            'hyundai-text': ["'Hyundai Text'"],
          },
          backgroundImage: {
            hyundai:
              "url('https://ik.imagekit.io/vconexID/Hyundai-RSVP/background.png')",
          },
          backgroundColor: {
            primary: '#00185a',
            secondary: '#e7ded6',
          },
          textColor: {
            primary: '#00185a',
          },
        },
      },
    },
  },
}
