import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		}),
		alias: {
			$src: 'src/',
			$components: 'src/components',
			$utils: 'src/utils',
			$stores: 'src/stores',
			$services: 'src/services',
			$lib: 'src/lib',
			$styles: 'src/styles',
			$types: 'src/types/',
			$m: 'src/lib/paraglide/messages.js'
		}
	}
};

export default config;
