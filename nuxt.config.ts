// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@pinia/nuxt', 
    'nuxt-swiper', 
    '@nuxt/image',
    'yandex-metrika-module-nuxt3'
  ],
  yandexMetrika: {
    id: '95402507',
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/components/widgets',
      global: true
    }
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_colors.scss" as *;'
        }
      }
    }
  }
})