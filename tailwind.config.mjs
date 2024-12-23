/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#FFFFFF",
      blue: {
        50: "#E3F2FD", // Azul claro para fondos
        100: "#D9E8FC", // Azul tenue consistente
        300: "#007BFF", // Azul secundario (llamadas a la acción)
        400: "#0066CC", // Azul vivo para acentos
        600: "#004A99", // Azul principal (corporativo)
      },
      gray: {
        50: "#F9FAFB", // Fondo claro
        200: "#E5E7EB", // Bordes claros
        500: "#6B7280", // Textos secundarios
        800: "#1F2937", // Textos principales (modo oscuro)
      },
      gold: {
        25: "#F7D48C", // Dorado claro (ideal para fondo de navbar)
        50: "#F9E2A0", // Dorado muy muy claro
        100: "#F1E0A6", // Dorado muy claro
        200: "#E4C389", // Dorado claro (ajustado)
        300: "#D9A42A", // Dorado medio
        400: "#D4A017", // Dorado oscuro (corporativo)
        500: "#C88F0A", // Dorado aún más oscuro
        600: "#B87C00", // Dorado muy oscuro
      },

      neutral: colors.neutral, // Textos secundarios
      zinc: colors.zinc, // Sombra y fondos neutros
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
