import type { Meta, StoryObj } from '@storybook/svelte';
import CodeEmbed from './CodeEmbed.svelte';

const meta = {
	title: 'Blocks/CodeEmbed',
	component: CodeEmbed,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `Displays a syntax-highlighted code block styled as a terminal window. Props: \`code\` (the raw code string to display) and \`language\` (a display label shown in the header bar, e.g. \`'javascript'\`; defaults to \`'javascript'\`). Includes a one-click copy-to-clipboard button. Useful for technical blog posts and documentation pages. Note: this component displays code as pre-formatted text — it does not perform live syntax colouring; the \`language\` prop is presentational only.`
			}
		}
	}
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		code: 'function helloWorld() {\n  console.log("Hello, World!");\n}',
		language: 'javascript'
	}
};
