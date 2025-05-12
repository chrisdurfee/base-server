import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/',
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
