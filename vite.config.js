import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [],
	base: '/base-update/',
	server: {
		open: true
	},
	plugins: [
		...VitePluginNode({
			adapter: 'express',
			appPath: './app.js',
			exportName: 'viteNodeApp',
			tsCompiler: 'esbuild',
			swcOptions: {}
		}),
	]
});
