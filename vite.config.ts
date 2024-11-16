import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';

dotenv.config();

export default defineConfig({
	plugins: [
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		}),
		sveltekit()
	],
	define: {
		'process.env': process.env
	},
	resolve: {
		alias: {
			'@sveltestack/svelte-query': '@sveltestack/svelte-query/src'
		}
	},
	css: {
		postcss: './postcss.config.js'
	}
});
