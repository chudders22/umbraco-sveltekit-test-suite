import type { Meta, StoryObj } from '@storybook/svelte';
import VideoEmbed from './VideoEmbed.svelte';

const meta = {
	title: 'Blocks/VideoEmbed',
	component: VideoEmbed,
	tags: ['autodocs']
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const YouTubeUrl: Story = {
	args: {
		url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
		title: 'Rick Astley - Never Gonna Give You Up'
	},
	play: async () => {
		// Wait for the iframe player to load and render before taking a snapshot
		await new Promise((resolve) => setTimeout(resolve, 5000));
	}
};
