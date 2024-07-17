import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

import vue from "@astrojs/vue";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue()],
  vite: {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // path to your scss variables
          additionalData: `@import "@/styles";`
        }
      }
    }
  }
});
