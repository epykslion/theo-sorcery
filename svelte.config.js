// command env properties
// const isAMP = process.env.AMP ? true : false;

// imports

import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';
import { imagetools } from 'vite-imagetools';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import netlify from '@sveltejs/adapter-netlify';

// Custom __dirname as replacement for the __dirname from the commonJS in ES Module
const __dirname = dirname(fileURLToPath(import.meta.url)); // jshint ignore:line

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
		}),
		mdsvex(mdsvexConfig),
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: netlify(),
		target: '#svelte',
		// ssr: true,
		// amp: isAMP,
		// prerender: {
		// 	crawl: true,
		// 	enabled: true,
		// 	onError: 'fail',
		// 	pages: ['*'],
		// },
		vite: () => ({
			resolve: {
				alias: {
					$stores: resolve(__dirname, './src/stores'),
					$components: resolve(__dirname, './src/lib/shared/components'),
					$ui: resolve(__dirname, './src/lib/shared/ui'),
					$lt: resolve(__dirname, './src/lib/shared/lottie'),
					$layouts: resolve(__dirname, './src/lib/layouts'),
					$shared: resolve(__dirname, './src/lib/shared'),
					$models: resolve(__dirname, './src/lib/models'),
					$data: resolve(__dirname, './src/lib/data'),
					$core: resolve(__dirname, './src/lib/core'),
					$utils: resolve(__dirname, './src/lib/utils'),
					$environment: resolve(__dirname, './src/environments'),
				},
			},
			plugins: [imagetools({ force: true })],
			envPrefix: ['VITE_', 'SVELTEKIT_BLOG_'],
		}),
	},
};

export default config;
