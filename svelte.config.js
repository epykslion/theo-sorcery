import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
//import adapter from '@sveltejs/adapter-netlify';
import vercel from '@sveltejs/adapter-vercel';
const config = {
  kit: {
    adapter: vercel(),
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
