import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import type { Config } from '@sveltejs/kit';

const config: Config = {
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
			$m: 'src/lib/paraglide/messages.js'
		}
	}
};

export default config;
