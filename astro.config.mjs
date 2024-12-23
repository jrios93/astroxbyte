// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "en", // Todas las URL que no contengan `es` o `fr` después de `https://stargazers.club/` se tratarán como el idioma predeterminado, es decir, `en`
        locales: {
          en: "en-US", // El valor de `defaultLocale` debe estar presente en las claves de `locales`
          es: "es-ES",
          fr: "fr-CA",
        },
      },
    }),
    ,
    icon(),
  ],
});
