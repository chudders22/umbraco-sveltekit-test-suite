import type { Meta, StoryObj } from '@storybook/react';
import TextBlock from './TextBlock';

const meta = {
	title: 'Blocks/TextBlock',
	component: TextBlock,
	tags: ['autodocs']
} satisfies Meta<typeof TextBlock>;

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
