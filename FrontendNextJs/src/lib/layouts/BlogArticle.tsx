import BlockList from '@/lib/components/BlockList';
import SingleBlock from '@/lib/components/SingleBlock/SingleBlock';
import { isImageOffsetPageHeader } from '@/lib/utils/pageHeaderUtils';
import type { components } from '@/lib/types/umbraco';

interface BlogArticleLayoutProps {
  content: components['schemas']['BlogArticleContentResponseModel'];
}

export default function BlogArticle({ content }: BlogArticleLayoutProps) {
  const isImageOffsetHeader = isImageOffsetPageHeader(content.properties?.pageHeader);

  const formattedDate = new Date(content.createDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      {content.properties?.pageHeader && (
        <SingleBlock block={content.properties.pageHeader} />
      )}

      <article
        className={`container mx-auto px-4 py-12 md:px-8 lg:px-12 ${isImageOffsetHeader
          ? 'relative z-10 -mt-24 bg-white/30 ring-1 ring-zinc-200/50 backdrop-blur-sm md:rounded-t-2xl md:bg-white dark:bg-zinc-950/30 dark:ring-zinc-800/50 dark:md:bg-zinc-950'
          : ''}`}
      >
        <header className="mb-12 border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <h1 className="mb-3 font-display text-4xl font-bold tracking-tighter text-zinc-900 md:text-5xl dark:text-zinc-50">
            {content.name}
          </h1>
          <time
            dateTime={content.createDate}
            className="text-xs font-medium tracking-wider text-zinc-400 uppercase dark:text-zinc-500"
          >
            {formattedDate}
          </time>
        </header>

        {content.properties?.pageContent?.items && (
          <BlockList items={content.properties.pageContent.items} />
        )}
      </article>
    </>
  );
}
