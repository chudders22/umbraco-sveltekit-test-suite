import BlockList from '@/lib/components/BlockList';
import SingleBlock from '@/lib/components/SingleBlock/SingleBlock';
import ImageOffsetPageHeader from '@/lib/components/PageHeaders/ImageOffsetPageHeader';
import { isImageOffsetPageHeader } from '@/lib/utils/pageHeaderUtils';
import type { components } from '@/lib/types/umbraco';

interface ContentPageLayoutProps {
  content: components['schemas']['ContentPageContentResponseModel'];
}

export default function ContentPage({ content }: ContentPageLayoutProps) {
  return (
    <>
      {content.properties?.pageHeader && (
        isImageOffsetPageHeader(content.properties.pageHeader)
          ? (
            <ImageOffsetPageHeader
              image={(content.properties.pageHeader.content.properties as any).image}
              title={content.name}
              route={content.route?.path}
            />
          )
          : (
            <SingleBlock block={content.properties.pageHeader} />
          )
      )}

      <main className="container mx-auto px-4 py-12">
        {content.properties?.pageContent?.items && (
          <BlockList items={content.properties.pageContent.items} />
        )}
      </main>
    </>
  );
}
