import type { Meta, StoryObj } from '@storybook/svelte';
import HeroBlock from './HeroBlock.svelte';

const meta = {
	title: 'Blocks/HeroBlock',
	component: HeroBlock,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `A full-width hero section with a CSS background image, directional gradient overlay, and optional content. Props: \`heading\` (renders as \`<h1>\`), \`subheading\`, \`backgroundImage\` (Umbraco media array — first item used), and \`ctaLink\` (Umbraco link array — first item used). Minimum height is 40vh. The gradient fades from near-opaque on the left to transparent on the right, adapting for both light and dark modes. Use this for top-of-page hero sections; for page-level headers with a darker cinematic treatment, use \`CallToActionPageHeader\` instead.`
			}
		}
	}
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		heading: 'Where Leadership Matters.',
		subheading:
			"Transforming clients' performance through the strength of exceptional, world-class leadership.",
		backgroundImage: [
			{
				id: '123',
				name: 'Mountains',
				mediaType: 'Image',
				url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop',
				properties: {}
			}
		],
		ctaLink: [
			{
				url: '/how-we-help',
				title: 'How We Help',
				target: '_self',
				route: { path: '/how-we-help', startItem: { id: '0', path: '/' } },
				linkType: 'Content'
			}
		]
	}
};

export const WithoutCTA: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Shows the hero with no `ctaLink` — the CTA button is omitted entirely, leaving only the heading and subheading over the background image.'
			}
		}
	},
	args: {
		heading: 'Global Reach, Local Expertise',
		subheading: 'Connecting organizations with the leadership talent they need.',
		backgroundImage: [
			{
				id: '124',
				name: 'City Skyline',
				mediaType: 'Image',
				url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2670&auto=format&fit=crop',
				properties: {}
			}
		]
	}
};
