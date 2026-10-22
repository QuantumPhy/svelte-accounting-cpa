import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const base = process.env.COCODING_TEMPLATE_BASE || '';

if (base && !(/^\/(?:[a-z0-9-]+\/)*[a-z0-9-]+$/).test(base)) {
	throw new Error('Invalid template base path');
}

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			preprocess: vitePreprocess(),
			adapter: adapter(),
			paths: { base: base as "" | `/${string}`, relative: false }
		})
	],
	server: {
		fs: {
			deny: [
				".env",
				".env.*",
				".git",
				"**/.ssh/**",
				"**/*.pem",
				"**/*.key"
			]
		}
	},
	preview: { allowedHosts: ['localhost', '127.0.0.1'] }
});
