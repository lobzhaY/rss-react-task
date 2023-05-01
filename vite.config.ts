/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    target: 'es2017',
    outDir: 'build',
    minify: false,
    sourcemap: true,
    manifest: true,
    rollupOptions: {
      input: "src/entry-server.tsx",
    },
  },
  plugins: [
    react(),
    eslint(),
    tsconfigPaths(),
    svgr(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'c8',
      reporter: 'text',
    },
  },
  server: {
    origin: 'http://127.0.0.1:3001',
  },
});
