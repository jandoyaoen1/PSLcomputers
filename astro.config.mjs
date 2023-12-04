import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: netlify(),
  integrations: [mdx()]
});