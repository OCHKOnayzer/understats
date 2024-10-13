import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      $src: 'src/',
      $components: 'src/components',
      $utils: 'src/utils',
      $stores: 'src/stores',
      $services: 'src/services',
      $lib: 'src/lib',
      $styles: 'src/styles',
      $types: 'src/types/',
      $m: 'src/lib/paraglide/messages.js',
    },
  },
}

export default config
