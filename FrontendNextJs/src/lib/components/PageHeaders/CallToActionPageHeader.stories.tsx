import type { Meta, StoryObj } from '@storybook/react';
import CallToActionPageHeader from './CallToActionPageHeader';

const meta = {
	title: 'PageHeaders/CallToActionPageHeader',
	component: CallToActionPageHeader,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `A bold, dark cinematic page header intended for top-level landing pages. Corresponds to the \`callToActionPageHeader\` Umbraco content type. Similar to \`HeroBlock\` but with a taller minimum height (75vh), a fully dark overlay (no light-mode variant), larger typography (5xl → 7xl), and a light-coloured CTA button. Props: \`heading\` (rendered as \`<h1>\`), \`subheading\`, \`backgroundImage\` (first item used), and \`ctaLink\` (first item used). All props are optional — heading and subheading default to nothing if omitted.`
			}
		}
	}
} satisfies Meta<typeof CallToActionPageHeader>;

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
				story: "Shows the page header with no `ctaLink` — useful for informational landing pages that don't require a primary call to action."
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
