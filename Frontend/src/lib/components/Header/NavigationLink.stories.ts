import type { Meta, StoryObj } from '@storybook/svelte';
import NavigationLink from './NavigationLink.svelte';

const meta = {
	title: 'Components/Header/NavigationLink',
	component: NavigationLink,
	tags: ['autodocs', 'snapshot']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		href: '/about-us',
		title: 'About Us'
	}
};

export const FeaturedSeeAllLink: Story = {
	args: {
		href: '/category',
		title: 'See all Category items',
		isFeatured: true
	}
};
