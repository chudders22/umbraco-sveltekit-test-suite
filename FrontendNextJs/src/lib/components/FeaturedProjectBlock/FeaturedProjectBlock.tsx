import { resolveMediaUrl } from '@/lib/utils/umbracoApi';

interface FeaturedProjectBlockProps {
  sectionLabel?: string | null;
  projectTitle?: string | null;
  description?: string | null;
  image?: Array<{ url: string; name: string; mediaType: string; id: string; properties: object }> | null;
  tags?: string[] | null;
  client?: string | null;
  link?: Array<{
    title?: string | null;
    url?: string | null;
    target?: string | null;
    route?: { path: string } | null;
  }> | null;
}

export default function FeaturedProjectBlock({
  sectionLabel,
  projectTitle,
  description,
  image,
  tags,
  client,
  link,
}: FeaturedProjectBlockProps) {
  const img = image?.[0];
  const cta = link?.[0];
  const hasImage = !!img?.url;
  const hasTags = !!tags?.length;

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {sectionLabel && (
          <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-red-600 dark:text-red-500">
            {sectionLabel}
          </p>
        )}

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Image */}
          <div className="lg:col-span-3">
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              {hasImage ? (
                <>
                  <img src={resolveMediaUrl(img!.url)} alt={img!.name} className="h-full w-full object-cover" />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-zinc-950/50"
                    aria-hidden="true"
                  />
                </>
              ) : (
                <div className="h-full w-full bg-zinc-200 dark:bg-zinc-800" aria-hidden="true" />
              )}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            <div className="mb-6 h-0.5 w-16 bg-red-600" aria-hidden="true" />

            {client && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                {client}
              </p>
            )}

            {projectTitle && (
              <h2 className="font-display mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl">
                {projectTitle}
              </h2>
            )}

            {description && (
              <p className="mb-6 leading-relaxed text-zinc-600 dark:text-zinc-300">{description}</p>
            )}

            {hasTags && (
              <div className="mb-2 flex flex-wrap gap-2">
                {tags!.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {cta?.url && (
              <a
                href={cta.url}
                target={cta.target ?? '_self'}
                className="group mt-6 flex items-center gap-2 font-semibold text-red-600 hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-500 dark:text-red-400 dark:hover:text-red-300"
              >
                {cta.title ?? 'View project'}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
