import type { Meta, StoryObj } from '@storybook/svelte';
import ImageGallery from './ImageGallery.svelte';

const meta = {
	title: 'Blocks/ImageGallery',
	component: ImageGallery,
	tags: ['autodocs']
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
