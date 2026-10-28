import tailwindcss from "@tailwindcss/vite";

import { createResolver } from "nuxt/kit";

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "latest",
  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["gsap", "lexical"],
    },
  },

  icon: {
    mode: "css",
    cssLayer: "base",
    customCollections: [
      {
        prefix: "forma",
        dir: resolve("./app/assets/forma"),
      },
    ],
  },

  fonts: {
    families: [
      {
        name: "Inter",
        styles: ["normal", "italic"],
        provider: "google",
        weight: "100..900",
      },
      {
        name: "Kanit",
        styles: ["normal", "italic"],
        provider: "google",
        weight: "100..900",
        unicodeRange: ["U+0E00-0E7F"],
      },
      {
        name: "Plus Jakarta Sans",
        styles: ["normal", "italic"],
        provider: "google",
        weight: "200..800",
      },
    ],
  },

  css: ["~/assets/css/index.css"],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },

  modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@pinia/nuxt", "@nuxtjs/color-mode"],
});
