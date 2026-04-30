import type { Meta, StoryObj } from '@storybook/svelte';
import StatsBlock from './StatsBlock.svelte';

const meta = {
	title: 'Blocks/StatsBlock',
	component: StatsBlock,
	tags: ['autodocs', 'snapshot'],
	parameters: {
		docs: {
			description: {
				component: `A grid of key statistics. Corresponds to the \`statsBlock\` Umbraco content type. Renders a 2→4 column grid where each stat shows a \`value\`, \`label\`, and optional \`description\`. Symbol characters (%, +, .) within \`value\` are automatically wrapped in brand-red \`<span>\` elements at a smaller size to visually accent them. Props: \`title\` (optional section heading) and \`stats\` (a BlockList of \`statItem\` blocks). Shows a dashed empty-state placeholder when no stats are present. Supports dark mode.`
			}
		}
	}
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
	parameters: {
		docs: {
			description: {
				story: 'Shows the optional `title` section heading above the stats grid — useful when the block needs a label to contextualise the numbers.'
			}
		}
	},
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
	parameters: {
		docs: {
			description: {
				story: 'Shows the empty-state placeholder rendered when no stat items have been added in the Umbraco backoffice.'
			}
		}
	},
	args: {
		stats: { items: [] }
	}
};
