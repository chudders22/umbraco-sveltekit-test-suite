import type { StorybookConfig } from '@storybook/sveltekit';
import { defineStorybookVis } from 'storybook-addon-vis/node';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],
	addons: [
		'@storybook/addon-svelte-csf',
		//'@chromatic-com/storybook',
		'@storybook/addon-vitest',
		'@storybook/addon-a11y',
		'@storybook/addon-docs',
		defineStorybookVis({
			visProjects: [
				{
					snapshotRootDir: path.join(dirname, '../__vis__/storybook-light')
				},
				{
					snapshotRootDir: path.join(dirname, '../__vis__/storybook-dark')
				}
			]
		})
	],
	framework: '@storybook/sveltekit'
};
export default config;
