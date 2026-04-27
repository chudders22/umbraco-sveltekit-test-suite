import type { Meta, StoryObj } from '@storybook/svelte';
import CodeEmbed from './CodeEmbed.svelte';

const meta = {
	title: 'Blocks/CodeEmbed',
	component: CodeEmbed,
	tags: ['autodocs']
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		code: 'function helloWorld() {\n  console.log("Hello, World!");\n}',
		language: 'javascript'
	}
};
