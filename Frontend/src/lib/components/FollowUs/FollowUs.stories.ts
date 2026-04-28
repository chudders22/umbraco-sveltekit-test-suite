import type { Meta, StoryObj } from '@storybook/svelte';
import FollowUs from './FollowUs.svelte';

const meta = {
	title: 'Components/FollowUs',
	component: FollowUs,
	tags: ['autodocs', 'snapshot'],
	parameters: { layout: 'padded' }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllPlatforms: Story = {
	args: {
		facebookUrl: 'https://facebook.com/3chillies',
		instagramUrl: 'https://instagram.com/3chillies',
		xUrl: 'https://x.com/3chillies',
		linkedInUrl: 'https://linkedin.com/company/3chillies',
		youTubeUrl: 'https://youtube.com/@3chillies',
		tikTokUrl: 'https://tiktok.com/@3chillies',
		pinterestUrl: 'https://pinterest.com/3chillies',
		gitHubUrl: 'https://github.com/3chillies',
		blueskyUrl: 'https://bsky.app/profile/3chillies.bsky.social'
	}
};

export const CommonPlatforms: Story = {
	args: {
		facebookUrl: 'https://facebook.com/3chillies',
		instagramUrl: 'https://instagram.com/3chillies',
		xUrl: 'https://x.com/3chillies',
		linkedInUrl: 'https://linkedin.com/company/3chillies'
	}
};

export const TechFocused: Story = {
	args: {
		gitHubUrl: 'https://github.com/3chillies',
		linkedInUrl: 'https://linkedin.com/company/3chillies',
		xUrl: 'https://x.com/3chillies'
	}
};

export const Empty: Story = {
	args: {}
};
