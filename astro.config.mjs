// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import dotenv from "dotenv";
dotenv.config();

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vercel()],
  output: "server",
});
