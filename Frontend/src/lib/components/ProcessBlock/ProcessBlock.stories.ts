import type { Meta, StoryObj } from '@storybook/svelte';
import ProcessBlock from './ProcessBlock.svelte';

interface ProcessStep {
	title?: string | null;
	description?: string | null;
}

interface StepItem {
	content: { contentType: string; properties: ProcessStep };
}

function makeStep(title: string, description: string): StepItem {
	return {
		content: {
			contentType: 'processStep',
			properties: { title, description }
		}
	};
}

const fourSteps = {
	items: [
		makeStep(
			'Discover',
			'We start by getting under the skin of your business — understanding your goals, users, and competitive landscape through collaborative workshops and in-depth research.'
		),
		makeStep(
			'Design',
			'Using insights from discovery, we craft wireframes and high-fidelity prototypes that balance aesthetic quality with usability, iterated rapidly with your feedback in the loop.'
		),
		makeStep(
			'Build',
			'Our engineers bring designs to life using modern, scalable technology. We work in focused sprints, shipping incrementally so you see real progress from day one.'
		),
		makeStep(
			'Launch',
			'We handle the full deployment pipeline, performance tuning, and go-live support — then stay on hand to monitor, iterate, and grow the product alongside you.'
		)
	]
};

const twoSteps = {
	items: [
		makeStep(
			'Discover',
			'We start by getting under the skin of your business — understanding your goals, users, and competitive landscape through collaborative workshops and in-depth research.'
		),
		makeStep(
			'Build',
			'Our engineers bring designs to life using modern, scalable technology. We work in focused sprints, shipping incrementally so you see real progress from day one.'
		)
	]
};

const meta = {
	title: 'Blocks/ProcessBlock',
	component: ProcessBlock,
	tags: ['autodocs', 'snapshot'],
	parameters: {
		docs: {
			description: {
				component: `A numbered step-by-step process section. Corresponds to the \`processBlock\` Umbraco content type. Renders a 1→2→4 column responsive grid where each step is automatically numbered (01, 02, …) with the number displayed in a large, lightly tinted red font. Props: \`title\` (optional section heading), \`subTitle\` (optional intro text), and \`steps\` (a BlockList of \`processStep\` blocks each with \`title\` and \`description\`). Shows a dashed empty-state placeholder when no steps are present. Supports dark mode.`
			}
		}
	}
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Our Process',
		subTitle: 'How we work',
		steps: fourSteps
	}
};

export const TwoSteps: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Shows the grid with only two steps — verifies that the layout fills columns proportionally when fewer than four items are present.'
			}
		}
	},
	args: {
		title: 'Our Process',
		steps: twoSteps
	}
};

export const Empty: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Shows the empty-state placeholder rendered when no process steps have been added in the Umbraco backoffice.'
			}
		}
	},
	args: {
		title: 'Our Process',
		steps: { items: [] }
	}
};
