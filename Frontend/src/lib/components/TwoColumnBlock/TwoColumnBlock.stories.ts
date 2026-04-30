import type { Meta, StoryObj } from '@storybook/svelte';
import TwoColumnBlock from './TwoColumnBlock.svelte';

const meta = {
	title: 'Blocks/TwoColumnBlock',
	component: TwoColumnBlock,
	tags: ['autodocs', 'snapshot'],
	parameters: {
		docs: {
			description: {
				component: `A two-column layout with rich text content on one side and an image on the other. Corresponds to the \`twoColumnBlock\` Umbraco content type. Props: \`heading\`, \`subTitle\`, \`content\` (rich text with \`markup\` string), \`image\` (first item used), \`imagePosition\` (boolean — \`true\` places the image on the left, \`false\`/absent places it on the right), and \`link\` (optional CTA rendered as a primary arrow ButtonLink). When no image is provided a grey placeholder maintains the grid layout. Shows a dashed empty-state when all content props are absent. Supports dark mode.`
			}
		}
	}
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleImage = [
	{
		id: 'img-001',
		name: 'Team at work',
		mediaType: 'Image',
		url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
		properties: {}
	}
];

const sampleContent = {
	markup:
		'<p>We combine deep technical expertise with strategic thinking to deliver digital products that make a real difference. Our cross-functional teams work closely with you from discovery through to launch and beyond.</p>'
};

const sampleLink = [
	{
		title: 'Meet the team',
		url: '/about',
		target: '_self',
		route: { path: '/about' }
	}
];

export const ImageRight: Story = {
	args: {
		heading: 'We build products people love to use',
		subTitle: 'A full-service digital agency with 10+ years of experience.',
		content: sampleContent,
		image: sampleImage,
		imagePosition: 'right'
	}
};

export const ImageLeft: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Sets `imagePosition` to `\'left\'` (truthy) — the image column is ordered first and the text column is ordered last, placing the image on the left at desktop widths.'
			}
		}
	},
	args: {
		heading: 'Strategy-led, execution-focused',
		subTitle: 'We start with the why before touching a line of code.',
		content: sampleContent,
		image: sampleImage,
		imagePosition: 'left'
	}
};

export const WithLink: Story = {
	args: {
		heading: 'Our process is built around your goals',
		subTitle: 'Transparent, collaborative, and relentlessly iterative.',
		content: sampleContent,
		image: sampleImage,
		imagePosition: 'right',
		link: sampleLink
	}
};

export const NoImage: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Shows the block when no image is provided — a grey placeholder fills the image column to maintain the two-column grid structure.'
			}
		}
	},
	args: {
		heading: 'Trusted by ambitious teams worldwide',
		subTitle: 'From seed-stage startups to enterprise organisations.',
		content: sampleContent,
		image: null,
		imagePosition: 'right',
		link: sampleLink
	}
};
