import type { Meta, StoryObj } from '@storybook/svelte';
import VideoEmbed from './VideoEmbed.svelte';

const meta = {
	title: 'Blocks/VideoEmbed',
	component: VideoEmbed,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `Embeds a video in a responsive 16:9 iframe. Props: \`url\` (required — the video URL) and \`title\` (accessible iframe title, defaults to \`'Video Player'\`). Automatically converts standard YouTube watch URLs (\`youtube.com/watch?v=\`) and short URLs (\`youtu.be/\`) to their embed equivalents; other URLs are passed through unchanged. The iframe is rendered inside a rounded container with a subtle ring border that adapts to dark mode.`
			}
		}
	}
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
