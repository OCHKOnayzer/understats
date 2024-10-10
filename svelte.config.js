import adapter from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      $components: 'src/components',
      $styles: 'src/styles',
      $utils: 'src/utils',
      $stores: 'src/stores',
      $services: 'src/services',
      $lib: 'src/lib',
      $src: 'src/',
    },
  },
}

export default config
