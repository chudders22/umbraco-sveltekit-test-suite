/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { storybookVis } from 'storybook-addon-vis/vitest-plugin';
const dirname =
	typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		proxy: {
			'/media': {
				target: 'https://localhost:44356',
				secure: false, // Since it's a local self-signed cert
				changeOrigin: true
			}
		}
	},
	test: {
		projects: [
			{
				extends: true,
				plugins: [
					storybookTest({
						configDir: path.join(dirname, '.storybook'),
						tags: {
							include: ['test-light'],
						}
					}),
					storybookVis({
						snapshotRootDir: path.join(dirname, '__vis__/storybook-light')
					})
				],
				test: {
					name: 'storybook-light',
					browser: {
						enabled: true,
						headless: true,
						provider: playwright({}),
						instances: [
							{
								browser: 'chromium'
							}
						]
					},
					setupFiles: ['.storybook/vitest.setup.light.ts']
				}
			},
			{
				extends: true,
				plugins: [
					storybookTest({
						configDir: path.join(dirname, '.storybook'),
						tags: {
							include: ['test-dark'],
						}
					}),
					storybookVis({
						snapshotRootDir: path.join(dirname, '__vis__/storybook-dark')
					})
				],
				test: {
					name: 'storybook-dark',
					browser: {
						enabled: true,
						headless: true,
						provider: playwright({}),
						instances: [
							{
								browser: 'chromium'
							}
						]
					},
					setupFiles: ['.storybook/vitest.setup.dark.ts']
				}
			}
		]
	}
});
