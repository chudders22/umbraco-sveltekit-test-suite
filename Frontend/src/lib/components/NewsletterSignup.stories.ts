import type { Meta, StoryObj } from '@storybook/svelte';
import NewsletterSignup from './NewsletterSignup.svelte';

const meta = {
	title: 'Blocks/NewsletterSignup',
	component: NewsletterSignup,
	tags: ['autodocs', 'snapshot']
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		heading: 'Stay in the loop',
		description:
			'Get the latest insights on software development, digital strategy, and industry trends — delivered straight to your inbox.',
		buttonLabel: 'Subscribe',
		placeholderText: 'you@example.com'
	}
};

export const MinimalCopy: Story = {
	args: {
		heading: 'Subscribe to our newsletter',
		buttonLabel: 'Subscribe'
	}
};

export const CustomCTA: Story = {
	args: {
		heading: 'Never miss an update',
		description: 'Join 2,000+ developers and decision-makers who read our monthly digest.',
		buttonLabel: 'Get the digest',
		placeholderText: 'Enter your work email'
	}
};

export const HeadingOnly: Story = {
	args: {
		heading: "Let's keep in touch"
	}
};
