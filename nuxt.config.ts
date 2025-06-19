// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ["@nuxtjs/i18n"],
  i18n: {
/*     vueI18n: './i18n/i18n.config.ts',
 */    defaultLocale: 'fr',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'fr', name: 'Français', file: 'fr.json' }
    ],
    /* Lazyloading : ttes les pages ne sont pas chargées directement */
    lazy: true,
    /* Défini le repertoire où sont les fichiers de trad */
    langDir:"locales",
    /* Ajoute l'ISO de la langue dans URL sauf pour la langue par défaut */
    strategy:"prefix_except_default"
  }
})