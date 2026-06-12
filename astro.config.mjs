// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// Si despliegas en GitHub Pages bajo un repositorio (usuario.github.io/repo),
// `site` es tu dominio y `base` el nombre del repo. Con dominio propio,
// cambia `site` y elimina `base`.
export default defineConfig({
  site: "https://gabbs27.github.io",
  base: "/ginecologo-spa",
  trailingSlash: "always",
  integrations: [react(), sitemap()],
});
