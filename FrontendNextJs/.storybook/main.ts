import type { StorybookConfig } from '@storybook/nextjs-vite';
import { defineStorybookVis } from 'storybook-addon-vis/node';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname =
	typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|tsx)'],
	addons: [
		'@storybook/addon-vitest',
		'@storybook/addon-a11y',
		'@storybook/addon-docs',
		defineStorybookVis({
			visProjects: [
				{
					snapshotRootDir: path.join(dirname, '../__vis__')
				}
			]
		})
	],
	framework: '@storybook/nextjs-vite'
};
export default config;
