// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless"; // ← ✅ Serverless adapter
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  output: "server", // ✅ REQUIRED for SSR
  adapter: vercel(), // ✅ REQUIRED for SSR
  integrations: [react()], // ✅ No need to pass adapter here
});
