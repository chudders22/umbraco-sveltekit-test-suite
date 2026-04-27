import type { Meta, StoryObj } from '@storybook/svelte';
import BlogListing from './BlogListing.svelte';
import type { components } from '$lib/types/umbraco';

const mockPosts = [
	{
		name: 'Umbraco Winter Keynote',
		createDate: '2026-02-12T09:00:00Z',
		route: { path: '/blog/umbraco-winter-keynote' },
		properties: {
			metaDescription: 'Highlights from the keynote...',
			openGraphImage: [{ url: 'https://placehold.co/800x450/312e81/ffffff?text=Thumbnail1' }]
		}
	},
	{
		name: 'Umbraco 17 Released',
		createDate: '2026-01-15T14:30:00Z',
		route: { path: '/blog/umbraco-17' },
		properties: {
			metaDescription: 'The latest version of Umbraco CMS is here...',
			openGraphImage: [{ url: 'https://placehold.co/800x450/1e40af/ffffff?text=Thumbnail2' }]
		}
	},
	{
		name: 'Top Ten Articles 2025',
		createDate: '2025-12-28T10:00:00Z',
		route: { path: '/blog/top-ten-2025' },
		properties: {
			metaDescription: 'A look back at our most popular posts.',
			openGraphImage: [{ url: 'https://placehold.co/800x450/dc2626/ffffff?text=Thumbnail3' }]
		}
	}
] as components['schemas']['BlogArticleContentResponseModel'][];

const meta = {
	title: 'Blocks/BlogListing',
	component: BlogListing,
	tags: ['autodocs']
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		pageSize: 2,
		initialBlogPosts: mockPosts
	}
};

export const EmptyState: Story = {
	args: {
		pageSize: 3,
		initialBlogPosts: []
	}
};
