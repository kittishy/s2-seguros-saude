import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({
  build: { rollupOptions: { input: {
    main: resolve('index.html'),
    privacy: resolve('privacidade/index.html'),
    mei: resolve('plano-saude-mei/index.html'),
    empresarial: resolve('plano-saude-empresarial/index.html'),
    familiar: resolve('plano-saude-familiar/index.html')
  } } }
});
