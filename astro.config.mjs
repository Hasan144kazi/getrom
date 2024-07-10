import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: "https://coinmastersspin.web.app",
  integrations: [tailwind()],
});
