import "dotenv/config";
import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  videosFolder: "cypress/videos",
  e2e: {
    baseUrl: process.env.APP_URL,
    supportFile: "cypress/support/e2e.ts",
  },
});
