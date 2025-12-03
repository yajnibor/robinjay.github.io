// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  // Configure for static site generation
  ssr: false,
  
  // Base URL for GitHub Pages (only needed if using project site)
  // For personal site (username.github.io), you can omit this or set to '/'
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets',
  },
  
  // Ensure static generation
  nitro: {
    preset: 'static'
  }
})