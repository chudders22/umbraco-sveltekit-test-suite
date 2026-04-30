import type { Metadata } from 'next';
import type { components } from '@/lib/types/umbraco';
import { fetchContentByPath, fetchInitialBlogPosts } from '@/lib/utils/umbracoApi';
import Homepage from '@/lib/layouts/Homepage';
import ContentPage from '@/lib/layouts/ContentPage';
import Blog from '@/lib/layouts/Blog';
import BlogArticle from '@/lib/layouts/BlogArticle';

// All pages are dynamically rendered — content comes from Umbraco at request time
export const dynamic = 'force-dynamic';

type ContentType = components['schemas']['IApiContentResponseModelBase'];

// Map Umbraco page content types to layout components
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pageLayouts: Record<string, React.ComponentType<any>> = {
  homepage: Homepage,
  contentPage: ContentPage,
  blog: Blog,
  blogArticle: BlogArticle,
};

interface SlugPageProps {
  params: Promise<{ slug?: string[] }>;
}

export async function generateMetadata({ params }: SlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = slug ? `/${slug.join('/')}` : '/';
  const content = await fetchContentByPath(path);
  if (!content) return { title: 'Page not found' };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const props = (content as any).properties as
    | components['schemas']['CompositionPageMetadataPropertiesModel']
    | undefined;
  const title = props?.metaTitle || content.name || 'Umbraco Next.js';
  const description = props?.metaDescription ?? undefined;
  const imageUrl = props?.openGraphImage?.[0]?.url;

  return {
    title,
    description,
    openGraph: {
      title,
      description: description ?? undefined,
      url: content.route.path,
      images: imageUrl ? [imageUrl] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: description ?? undefined,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function SlugPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const path = slug ? `/${slug.join('/')}` : '/';
  const content = await fetchContentByPath(path);

  if (!content) {
    return (
      <main className="container mx-auto px-4 py-8 text-center text-gray-500">
        <h2 className="mb-4 text-2xl">Page loading... or 404</h2>
        <p>No content could be retrieved from Umbraco at this URL.</p>
      </main>
    );
  }

  const LayoutComponent = pageLayouts[content.contentType];

  if (!LayoutComponent) {
    return (
      <main className="container mx-auto px-4 py-8 text-center text-gray-500">
        <h2 className="mb-4 text-2xl">Layout not found</h2>
        <p>
          We found content of type <code>{content.contentType}</code>, but no React layout has
          been registered for it yet.
        </p>
      </main>
    );
  }

  // Pre-fetch blog posts on the server if the page contains a blogListingBlock
  let initialBlogPosts: components['schemas']['BlogArticleContentResponseModel'][] = [];
  let initialPageSize = 6;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pageContent = (content as any).properties?.pageContent;
  if (pageContent?.items && Array.isArray(pageContent.items)) {
    const blogListingBlock = pageContent.items.find(
      (item: ContentType) => (item as any).content?.contentType === 'blogListingBlock'
    );
    if (blogListingBlock) {
      initialPageSize = (blogListingBlock as any).content.properties?.pageSize || 6;
      initialBlogPosts = await fetchInitialBlogPosts(initialPageSize);
    }
  }

  return (
    <LayoutComponent
      content={content as any}
      initialBlogPosts={initialBlogPosts}
      initialPageSize={initialPageSize}
    />
  );
}
