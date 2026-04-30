import type { Meta, StoryObj } from '@storybook/react';
import ImageOffsetPageHeader from './ImageOffsetPageHeader';

const meta = {
	title: 'PageHeaders/ImageOffsetPageHeader',
	component: ImageOffsetPageHeader,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `A compact inner-page header (35vh minimum) with an optional background image, auto-generated breadcrumb navigation, and a page title. Corresponds to the \`imageOffsetPageHeader\` Umbraco content type. Props: \`image\` (first item used as background), \`title\` (overrides the auto-derived label), and \`route\` (URL path string used to build breadcrumbs — segments are capitalised and slugs are humanised). When no \`title\` is provided, the last segment of \`route\` is used as the page label. Supports dark mode.`
			}
		}
	}
} satisfies Meta<typeof ImageOffsetPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		image: [
			{
				id: '200',
				name: 'Mountain Landscape',
				mediaType: 'Image',
				url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop',
				properties: {}
			}
		]
	}
};

export const NoImage: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Shows the header without a background image — the section uses the default zinc background colour, demonstrating that the image is entirely optional.'
			}
		}
	},
	args: {
		image: null
	}
};
