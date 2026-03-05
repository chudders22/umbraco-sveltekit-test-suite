import type { Meta, StoryObj } from '@storybook/svelte';
import type { ComponentProps } from 'svelte';
import BlogArticleCard from './BlogArticleCard.svelte';
import type { components } from '$lib/types/umbraco';

type Props = ComponentProps<typeof BlogArticleCard>;

const meta = {
    title: 'Blocks/BlogListing/BlogArticleCard',
    component: BlogArticleCard as any,
    tags: ['autodocs']
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockPost = {
    name: 'Umbraco Update: Product and strategy highlights from the Winter Keynote',
    createDate: '2026-02-12T09:00:00Z',
    route: { path: '/blog/umbraco-update' },
    properties: {
        metaDescription: 'This year’s Umbraco Winter Keynote has just dropped, and in this post we summarise the main points of interest.',
        // We use a placehold.co image rather than a real umbraco API reference since storybook is isolated
        openGraphImage: [{ url: 'https://placehold.co/800x450/312e81/ffffff?text=Thumbnail' }]
    }
} as components['schemas']['BlogArticleContentResponseModel'];

export const Default: Story = {
    args: {
        post: mockPost
    }
};

export const NoImage: Story = {
    args: {
        post: {
            ...mockPost,
            properties: {
                ...mockPost.properties,
                openGraphImage: null
            }
        }
    }
};