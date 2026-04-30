import type { Meta, StoryObj } from '@storybook/svelte';
import SocialMediaShare from './SocialMediaShare.svelte';

const meta = {
	title: 'Components/SocialMediaShare',
	component: SocialMediaShare,
	tags: ['autodocs', 'snapshot'],
	parameters: { layout: 'padded' }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'How we built a headless CMS blog with Umbraco and SvelteKit'
	}
};

export const NoTitle: Story = {
	args: {}
};
