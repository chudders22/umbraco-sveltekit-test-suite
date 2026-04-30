import ButtonLink from '@/lib/components/ButtonLink/ButtonLink';
import { resolveMediaUrl } from '@/lib/utils/umbracoApi';

interface Props {
  heading?: string | null;
  subTitle?: string | null;
  content?: { markup?: string | null } | null;
  image?: Array<{ url: string; name: string; mediaType: string; id: string; properties: object }> | null;
  imagePosition?: boolean | null;
  link?: Array<{
    title?: string | null;
    url?: string | null;
    target?: string | null;
    route?: { path: string } | null;
  }> | null;
}

export default function TwoColumnBlock({
  heading,
  subTitle,
  content,
  image,
  imagePosition,
  link,
}: Props) {
  const img = image?.[0];
  const cta = link?.[0];
  const hasContent = !!(heading || subTitle || content?.markup);
  const hasImage = !!img?.url;
  const isEmpty = !hasContent && !hasImage;
  const imageFirst = imagePosition === true;

  return (
    <section className="bg-white py-12 dark:bg-zinc-950 md:py-20">
      <div className="container mx-auto px-4">
        {isEmpty ? (
          <div className="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">No content available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            {/* Text column */}
            <div className={imageFirst ? 'order-last' : ''}>
              <div className="mb-6 h-0.5 w-16 bg-red-600" aria-hidden="true"></div>

              {heading && (
                <h2 className="font-display mb-6 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl">
                  {heading}
                </h2>
              )}

              {subTitle && (
                <p className="mb-4 text-lg text-zinc-500 dark:text-zinc-400">{subTitle}</p>
              )}

              {content?.markup && (
                <div
                  className="prose prose-zinc mb-6 dark:prose-invert prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-red-400"
                  dangerouslySetInnerHTML={{ __html: content.markup }}
                />
              )}

              {cta?.url && (
                <ButtonLink
                  href={cta.url}
                  target={cta.target ?? '_self'}
                  variant="primary"
                  label={cta.title ?? 'Learn more'}
                  showArrow={true}
                />
              )}
            </div>

            {/* Image column */}
            <div className={imageFirst ? 'order-first' : ''}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                {hasImage ? (
                  <img src={resolveMediaUrl(img!.url)} alt={img!.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full bg-zinc-100 dark:bg-zinc-800" aria-hidden="true"></div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
