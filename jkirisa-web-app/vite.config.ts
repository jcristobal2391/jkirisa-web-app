import path from 'node:path';
import { createRequire } from 'node:module';
import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

const require = createRequire(import.meta.url);

const pdfjsDistPath = path.dirname(require.resolve('pdfjs-dist/package.json'));
const cMapsDir = normalizePath(path.join(pdfjsDistPath, 'cmaps'));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: cMapsDir,
          dest: '',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      'src': path.resolve('./src'),
      'public': path.resolve('./public')
    }
  },
  assetsInclude: ['**/*.pdf'],
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    strictPort: true,
    port: 80
  }
})
