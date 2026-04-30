import type { Meta, StoryObj } from '@storybook/svelte';
import FeaturedProjectBlock from './FeaturedProjectBlock.svelte';

const meta = {
	title: 'Blocks/FeaturedProjectBlock',
	component: FeaturedProjectBlock,
	tags: ['autodocs', 'snapshot'],
	parameters: {
		docs: {
			description: {
				component: `A showcase section for a single featured case study or project. Corresponds to the \`featuredProjectBlock\` Umbraco content type. Renders a 5-column asymmetric grid: a 3/5-wide image panel (aspect-video, with a gradient overlay) and a 2/5-wide content panel containing an optional \`sectionLabel\`, \`client\` attribution, \`projectTitle\`, \`description\`, a \`tags\` array rendered as pill badges, and an optional CTA \`link\`. When no image is supplied a grey placeholder fills the image slot. All fields except the grid layout are optional.`
			}
		}
	}
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleImage = [
	{
		id: 'proj-img-001',
		name: 'E-commerce platform dashboard',
		mediaType: 'Image',
		url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop',
		properties: {}
	}
];

export const Default: Story = {
	args: {
		sectionLabel: 'Featured work',
		projectTitle: 'Apex Commerce Platform',
		description:
			'A headless e-commerce platform handling 2M+ transactions per month. We rebuilt the entire checkout experience from the ground up, cutting drop-off rates by 34% and reducing time-to-purchase by half.',
		image: sampleImage,
		client: 'Apex Retail Group',
		tags: ['SvelteKit', 'Node.js', 'Stripe', 'PostgreSQL', 'Kubernetes'],
		link: [
			{
				title: 'View case study',
				url: '/work/apex-commerce',
				target: '_self',
				route: { path: '/work/apex-commerce' }
			}
		]
	}
};

export const NoImage: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Shows the block when no image is provided — a grey placeholder fills the image slot, so the layout remains intact.'
			}
		}
	},
	args: {
		sectionLabel: 'Featured work',
		projectTitle: 'Luminary SaaS Dashboard',
		description:
			'A real-time analytics dashboard for a fast-growing B2B SaaS product. We designed and engineered a component system that scaled from MVP to Series B without a rewrite.',
		image: null,
		client: 'Luminary Technologies',
		tags: ['React', 'TypeScript', 'GraphQL', 'AWS'],
		link: [
			{
				title: 'View case study',
				url: '/work/luminary-dashboard',
				target: '_self',
				route: { path: '/work/luminary-dashboard' }
			}
		]
	}
};

export const MinimalContent: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Minimal variant with only `projectTitle`, `description`, and `image` — demonstrates that `sectionLabel`, `client`, `tags`, and `link` are all optional.'
			}
		}
	},
	args: {
		projectTitle: 'Fieldnotes Mobile App',
		description:
			'A cross-platform mobile app for field service teams. Offline-first architecture with seamless sync when connectivity is restored.',
		image: [
			{
				id: 'proj-img-002',
				name: 'Mobile app screens',
				mediaType: 'Image',
				url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop',
				properties: {}
			}
		]
	}
};
