import adapter from "@sveltejs/adapter-static";
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/Svelte-Elegant-Docs'  // Укажите здесь базовый путь
		  }
	},
};

export default config;
