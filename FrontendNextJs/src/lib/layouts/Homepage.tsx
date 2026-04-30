import BlockList from '@/lib/components/BlockList';
import type { components } from '@/lib/types/umbraco';

interface HomepageLayoutProps {
  content: components['schemas']['HomepageContentResponseModel'];
  initialBlogPosts?: components['schemas']['BlogArticleContentResponseModel'][];
  initialPageSize?: number;
}

export default function Homepage({ content, initialBlogPosts = [], initialPageSize = 6 }: HomepageLayoutProps) {
  const enrichedItems = content.properties?.pageContent?.items?.map((item: any) => {
    if (item.content?.contentType === 'blogListingBlock') {
      return {
        ...item,
        content: {
          ...item.content,
          properties: {
            ...item.content.properties,
            initialBlogPosts,
            initialPageSize,
          },
        },
      };
    }
    return item;
  }) ?? [];

  return (
    <main>
      <BlockList items={enrichedItems} />
    </main>
  );
}
