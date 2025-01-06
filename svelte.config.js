import adapter from '@sveltejs/adapter-node';
// import sveltePreprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	// preprocess: sveltePreprocess(),
	kit: {
		adapter: adapter({
			out: 'build',
			precompress: true
		}),
		alias: {
			$src: 'src/',
			$hooks: 'src/hooks/',
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
