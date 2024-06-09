// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  colorMode: {
    preference: "light",
  },
  modules: ["nuxt-vuefire", "@nuxt/ui", "nuxt-svgo", "@nuxtjs/google-fonts"],
  vuefire: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      appId: process.env.FIREBASE_APP_ID,
    },
    // ensures the auth module is enabled
    auth: {
      enabled: true,
      // enables the sessionCookie
      sessionCookie: true,
    },
  },
  ui: {
    global: true,
    icons: ["heroicons"],
  },
  svgo: {
    autoImportPath: "./assets/svg/",
    componentPrefix: "i",
  },
  googleFonts: {
    families: {
      "Nunito+Sans": "200..1000",
    },
    display: "swap",
    overwriting: true,
  },
  runtimeConfig: {
    app: {
      PUSHER_APP_KEY: process.env.PUSHER_APP_KEY,
      PUSHER_APP_CLUSTER: process.env.PUSHER_APP_CLUSTER,
      PUSHER_AUTH_ENDPOINT: process.env.PUSHER_AUTH_ENDPOINT,
      PUSHER_AUTH_CHANNEL_ENDPOINT: process.env.PUSHER_AUTH_CHANNEL_ENDPOINT,
    },
  },
});
