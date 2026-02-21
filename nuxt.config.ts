// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,
  },

  nitro: {
    preset: "static",
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls: {
          includeAbsolute: true,
        },
      },
    },
  },

  modules: [
    "@tailwindcss/vite",
    "nuxt-svgo",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxt/fonts",
  ],

  css: ["~~/styles/global.css"],

  routeRules: {
    "/_nuxt/**": {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
    "/_fonts/**": {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
  },
});
