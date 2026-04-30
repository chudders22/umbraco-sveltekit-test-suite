import type { Meta, StoryObj } from '@storybook/react';
import BlogArticleCard from './BlogArticleCard';
import type { components } from '@/lib/types/umbraco';

const meta = {
  title: 'Blocks/BlogListing/BlogArticleCard',
  component: BlogArticleCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `An individual blog post card used within the \`BlogListing\` grid. Displays the post's creation date, title (as a full-card clickable link), a line-clamped excerpt from \`metaDescription\`, and an animated "Read article" CTA. Accepts a full \`BlogArticleContentResponseModel\` as its \`post\` prop. Supports dark mode. The open-graph image is not displayed on this card — only text metadata is shown.`
      }
    }
  }
} satisfies Meta<typeof BlogArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockPost = {
  name: 'Umbraco Update: Product and strategy highlights from the Winter Keynote',
  createDate: '2026-02-12T09:00:00Z',
  route: { path: '/blog/umbraco-update' },
  properties: {
    metaDescription:
      "This year\u2019s Umbraco Winter Keynote has just dropped, and in this post we summarise the main points of interest.",
    openGraphImage: [{ url: 'https://placehold.co/800x450/312e81/ffffff?text=Thumbnail' }]
  }
} as components['schemas']['BlogArticleContentResponseModel'];

export const Default: Story = {
  args: {
    post: mockPost
  }
};

export const NoImage: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows the card when `openGraphImage` is null — the card layout is unaffected since the image is not rendered on the card itself.'
      }
    }
  },
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
