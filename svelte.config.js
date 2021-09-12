import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import netlify from '@sveltejs/adapter-netlify';

const config = {
  kit: {
    adapter: netlify(),
    target: '#svelte'
  },
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  preprocess: [
    preprocess({
      postcss: true
    }),
    mdsvex(mdsvexConfig)
  ]
};

export default config;
