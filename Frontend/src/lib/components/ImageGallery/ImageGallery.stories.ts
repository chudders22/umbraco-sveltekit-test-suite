import type { Meta, StoryObj } from '@storybook/svelte';
import ImageGallery from './ImageGallery.svelte';

const meta = {
	title: 'Blocks/ImageGallery',
	component: ImageGallery,
	tags: ['autodocs']
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

const makeImage = (id: string, color: string, label: string) =>
	({
		id,
		url: `https://placehold.co/600x400/${color}/ffffff`,
		name: label,
		mediaType: 'Image',
		properties: {},
		createDate: '',
		updateDate: '',
		path: ''
	}) as any;

export const SingleImage: Story = {
	args: {
		enableLightbox: true,
		images: [
			{
				id: '1',
				url: 'https://placehold.co/1200x675',
				name: 'Full-width feature image',
				mediaType: 'Image',
				properties: {},
				createDate: '',
				updateDate: '',
				path: ''
			} as any
		]
	}
};

export const Default: Story = {
	args: {
		enableLightbox: true,
		images: [
			makeImage('1', '374151', 'Placeholder 1'),
			makeImage('2', 'ea580c', 'Placeholder 2'),
			makeImage('3', '1d4ed8', 'Placeholder 3')
		]
	}
};

export const LightboxDisabled: Story = {
	args: {
		enableLightbox: false,
		images: [
			makeImage('1', '374151', 'Placeholder 1'),
			makeImage('2', 'ea580c', 'Placeholder 2'),
			makeImage('3', '1d4ed8', 'Placeholder 3')
		]
	}
};
