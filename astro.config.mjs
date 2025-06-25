// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import dotenv from "dotenv";
dotenv.config();

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "server", // Required if you're using API routes like /api/generate
});
