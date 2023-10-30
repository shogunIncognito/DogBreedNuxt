// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'DogBreedFetch'
    }    
  },
  devtools: { enabled: true },  
  css: ['~/assets/css/main.css'],  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
