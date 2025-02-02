// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    'inter-ui/inter.css' // Подключение шрифта Inter
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'] // Установка Inter как основного шрифта
          }
        }
      }
    }
  },
  app: {
    baseURL: '/example/', // Замените my-repo на имя вашего репозитория
    buildAssetsDir: 'assets'
  }
})
