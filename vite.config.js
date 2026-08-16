import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    // Takes over what CRA's Workbox integration used to do: compile
    // src/service-worker.js and inject the precache manifest into
    // self.__WB_MANIFEST. Registration stays in serviceWorkerRegistration.js,
    // so injectRegister is off, and public/manifest.json is already linked
    // from index.html, so the plugin does not generate one.
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'service-worker.js',
      injectRegister: false,
      manifest: false,
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    css: true,
    server: {
      deps: {
        // spinners-react declares "type": "module" but points main at a UMD
        // bundle and ships no "exports" map, so Node resolves it to a file it
        // cannot read named exports from. Let Vite resolve it via "module".
        inline: ['spinners-react'],
      },
    },
  },
});
