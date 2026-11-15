import { copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * GitHub Pages has no SPA rewrites. Serving index.html as 404.html lets
 * client-side routes such as /about survive a hard refresh.
 */
function spaFallback(): Plugin {
  let outDir = 'dist';
  return {
    name: 'spa-fallback-404',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      await copyFile(resolve(outDir, 'index.html'), resolve(outDir, '404.html'));
    },
  };
}

export default defineConfig({
  plugins: [react(), spaFallback()],
});
