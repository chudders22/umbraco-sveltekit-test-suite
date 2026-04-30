import type { Meta, StoryObj } from '@storybook/react';
import BlogListing from './BlogListing';
import type { components } from '@/lib/types/umbraco';

const mockPosts: components['schemas']['BlogArticleContentResponseModel'][] = [
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
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A paginated blog post listing that renders a grid of \`BlogArticleCard\` components. Initial posts are seeded from the \`initialBlogPosts\` prop (populated server-side); subsequent pages are fetched client-side from the Umbraco Delivery API. The \`pageSize\` prop controls how many posts are loaded per request. A "Load older articles" button appears while more posts are available, and an empty-state message is shown when no posts exist.`
      }
    }
  }
} satisfies Meta<typeof BlogListing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pageSize: 2,
    initialBlogPosts: mockPosts
  }
};

export const EmptyState: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the empty-state message rendered when no blog posts are provided — e.g. when no articles have been published yet.'
      }
    }
  },
  args: {
    pageSize: 3,
    initialBlogPosts: []
  }
};
