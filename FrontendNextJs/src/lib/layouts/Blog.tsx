import BlockList from '@/lib/components/BlockList';
import SingleBlock from '@/lib/components/SingleBlock/SingleBlock';
import { isImageOffsetPageHeader } from '@/lib/utils/pageHeaderUtils';
import type { components } from '@/lib/types/umbraco';

interface BlogLayoutProps {
  content: components['schemas']['BlogContentResponseModel'];
  initialBlogPosts?: components['schemas']['BlogArticleContentResponseModel'][];
  initialPageSize?: number;
}

export default function Blog({ content, initialBlogPosts = [], initialPageSize = 6 }: BlogLayoutProps) {
  const isImageOffsetHeader = isImageOffsetPageHeader(content.properties?.pageHeader);

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
    <>
      {content.properties?.pageHeader && (
        <SingleBlock block={content.properties.pageHeader} />
      )}

      <main
        className={`container mx-auto px-4 py-12 ${isImageOffsetHeader
          ? 'relative z-10 -mt-24 bg-white/30 ring-1 ring-zinc-200/50 backdrop-blur-sm md:rounded-t-2xl md:bg-white dark:bg-zinc-950/30 dark:ring-zinc-800/50 dark:md:bg-zinc-950'
          : ''}`}
      >
        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold tracking-widest text-red-600 uppercase dark:text-red-400">
            Blog
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl dark:text-zinc-50">
            {content.name}
          </h1>
        </div>

        <BlockList items={enrichedItems} />
      </main>
    </>
  );
}
