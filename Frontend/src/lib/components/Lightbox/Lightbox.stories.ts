import type { Meta, StoryObj } from '@storybook/svelte';
import Lightbox from './Lightbox.svelte';

const meta = {
	title: 'Components/Lightbox',
	component: Lightbox,
	tags: ['autodocs']
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

const makeImage = (id: string, color: string, label: string) =>
	({
		id,
		url: `https://placehold.co/1200x800/${color}/ffffff`,
		name: label,
		mediaType: 'Image',
		properties: {},
		createDate: '',
		updateDate: '',
		path: ''
	}) as any;

export const MultipleImages: Story = {
	args: {
		startIndex: 0,
		onclose: () => {},
		images: [
			makeImage('1', '374151', 'Mountain landscape'),
			makeImage('2', '1d4ed8', 'Ocean at dusk'),
			makeImage('3', '15803d', 'Forest trail'),
			makeImage('4', '7e22ce', 'City skyline')
		]
	}
};

export const SingleImage: Story = {
	args: {
		startIndex: 0,
		onclose: () => {},
		images: [makeImage('1', '374151', 'Feature photograph')]
	}
};

export const OpenAtSecondImage: Story = {
	args: {
		startIndex: 1,
		onclose: () => {},
		images: [
			makeImage('1', '374151', 'First image'),
			makeImage('2', '1d4ed8', 'Second image — opened directly'),
			makeImage('3', '15803d', 'Third image')
		]
	}
};
