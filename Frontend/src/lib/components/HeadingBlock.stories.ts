import type { Meta, StoryObj } from '@storybook/svelte';
import HeadingBlock from './HeadingBlock.svelte';

const meta = {
	title: 'Blocks/HeadingBlock',
	component: HeadingBlock,
	tags: ['autodocs']
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		headingText: 'This Is a Heading'
	}
};

export const LongHeading: Story = {
	args: {
		headingText: 'A Longer Heading That Spans Multiple Words Across The Page'
	}
};
