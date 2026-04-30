import type { Meta, StoryObj } from '@storybook/svelte';
import ImageGallery from './ImageGallery.svelte';

const meta = {
	title: 'Blocks/ImageGallery',
	component: ImageGallery,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `A responsive image grid. Accepts an \`images\` array of Umbraco \`IApiMediaWithCropsModel\` objects. Images are arranged in a 1→2→3 column CSS grid (responsive breakpoints) with aspect-video cells, rounded corners, and a subtle zoom-on-hover effect. The component currently renders images in a static grid — a lightbox interaction is not yet implemented. Suitable for blog post galleries and portfolio image sets.`
			}
		}
	}
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

import type { components } from '$lib/types/umbraco';

export const Default: Story = {
	args: {
		images: [
			{
				id: '1',
				url: 'https://placehold.co/600x400',
				name: 'Placeholder 1',
				mediaType: 'Image',
				properties: {},
				createDate: '',
				updateDate: '',
				path: ''
			} as any,
			{
				id: '2',
				url: 'https://placehold.co/600x400/orange/white',
				name: 'Placeholder 2',
				mediaType: 'Image',
				properties: {},
				createDate: '',
				updateDate: '',
				path: ''
			} as any,
			{
				id: '3',
				url: 'https://placehold.co/600x400/blue/white',
				name: 'Placeholder 3',
				mediaType: 'Image',
				properties: {},
				createDate: '',
				updateDate: '',
				path: ''
			} as any
		]
	}
};
