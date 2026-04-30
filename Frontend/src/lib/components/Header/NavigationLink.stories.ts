import type { Meta, StoryObj } from '@storybook/svelte';
import NavigationLink from './NavigationLink.svelte';

const meta = {
	title: 'Components/Header/NavigationLink',
	component: NavigationLink,
	tags: ['autodocs', 'snapshot'],
	parameters: {
		docs: {
			description: {
				component: `A single navigation anchor link rendered inside a \`NavigationArea\` dropdown. In its default state it renders as a subtle text link with a hover background. When \`isFeatured\` is \`true\`, it renders in red with a separator above — used as the "See all" link at the bottom of a dropdown group when the group title is a \`naviationTitleLink\`. Props: \`href\`, \`title\`, optional \`target\`, optional \`isFeatured\` (boolean), optional \`onclick\` callback.`
			}
		}
	}
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
	parameters: {
		docs: {
			description: {
				story: 'The `isFeatured` variant — rendered in brand red with a top separator, used as the "See all" link at the bottom of a dropdown group that has a clickable title (`naviationTitleLink`).'
			}
		}
	},
	args: {
		href: '/category',
		title: 'See all Category items',
		isFeatured: true
	}
};
