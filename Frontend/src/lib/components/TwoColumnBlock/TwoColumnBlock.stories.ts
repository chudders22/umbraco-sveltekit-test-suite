import type { Meta, StoryObj } from '@storybook/svelte';
import TwoColumnBlock from './TwoColumnBlock.svelte';

const meta = {
	title: 'Blocks/TwoColumnBlock',
	component: TwoColumnBlock,
	tags: ['autodocs', 'snapshot']
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
		imagePosition: false
	}
};

export const ImageLeft: Story = {
	args: {
		heading: 'Strategy-led, execution-focused',
		subTitle: 'We start with the why before touching a line of code.',
		content: sampleContent,
		image: sampleImage,
		imagePosition: true
	}
};

export const WithLink: Story = {
	args: {
		heading: 'Our process is built around your goals',
		subTitle: 'Transparent, collaborative, and relentlessly iterative.',
		content: sampleContent,
		image: sampleImage,
		imagePosition: false,
		link: sampleLink
	}
};

export const NoImage: Story = {
	args: {
		heading: 'Trusted by ambitious teams worldwide',
		subTitle: 'From seed-stage startups to enterprise organisations.',
		content: sampleContent,
		image: null,
		imagePosition: false,
		link: sampleLink
	}
};
