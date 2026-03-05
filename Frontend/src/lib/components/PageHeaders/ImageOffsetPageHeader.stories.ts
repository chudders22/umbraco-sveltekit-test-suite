import type { Meta, StoryObj } from '@storybook/svelte';
import ImageOffsetPageHeader from './ImageOffsetPageHeader.svelte';

const meta = {
    title: 'PageHeaders/ImageOffsetPageHeader',
    component: ImageOffsetPageHeader as any,
    tags: ['autodocs']
} satisfies Meta<any>;

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
    args: {
        image: null
    }
};
