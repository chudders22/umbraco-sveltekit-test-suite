import type { Meta, StoryObj } from '@storybook/svelte';
import StatsBlock from './StatsBlock.svelte';

const meta = {
	title: 'Blocks/StatsBlock',
	component: StatsBlock,
	tags: ['autodocs', 'snapshot']
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

const makeStat = (value: string, label: string, description?: string) => ({
	content: {
		contentType: 'statItem',
		properties: { value, label, description: description ?? null }
	}
});

const fourStats = [
	makeStat('200+', 'Projects Delivered', 'Across web, mobile, and enterprise'),
	makeStat('12', 'Years Experience', 'Building digital products since 2012'),
	makeStat('98%', 'Client Retention', 'Long-term partnerships that last'),
	makeStat('40+', 'Expert Team', 'Designers, engineers, and strategists')
];

export const Default: Story = {
	args: {
		stats: { items: fourStats }
	}
};

export const WithTitle: Story = {
	args: {
		title: 'By the Numbers',
		stats: { items: fourStats }
	}
};

export const TwoStats: Story = {
	args: {
		stats: {
			items: [
				makeStat('£50M+', 'Revenue Generated', 'For clients in the past three years'),
				makeStat('4.9 / 5', 'Average Rating', 'Based on post-project surveys')
			]
		}
	}
};

export const Empty: Story = {
	args: {
		stats: { items: [] }
	}
};
