import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
	output: 'hybrid',
	integrations: [react(), solidJs()],
	site: 'https://astro-frontend-masters.netlify.app',
});
