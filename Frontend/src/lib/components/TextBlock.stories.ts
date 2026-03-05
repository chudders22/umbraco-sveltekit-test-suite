import type { Meta, StoryObj } from '@storybook/svelte';
import TextBlock from './TextBlock.svelte';

const meta = {
	title: 'Blocks/TextBlock',
	component: TextBlock,
	tags: ['autodocs']
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		text: {
			markup: '<h1>Hello World</h1><p>This is a text block</p>',
			blocks: []
		}
	}
};
