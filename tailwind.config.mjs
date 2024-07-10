/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2563eb",
          secondary: "#f472b6",
          accent: "#9333ea",

          neutral: "#000000",

          "base-100": "#f5f5f4",

          info: "#93c5fd",

          success: "#4ade80",

          warning: "#fbbf24",

          error: "#e11d48",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
