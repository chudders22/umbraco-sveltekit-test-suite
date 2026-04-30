import { resolveMediaUrl } from '@/lib/utils/umbracoApi';

interface TestimonialItem {
  quote?: string | null;
  authorName?: string | null;
  authorRole?: string | null;
  authorCompany?: string | null;
  authorImage?: Array<{
    url: string;
    name: string;
    mediaType: string;
    id: string;
    properties: object;
  }> | null;
}

interface TestimonialsBlockProps {
  title?: string | null;
  subTitle?: string | null;
  testimonials?: {
    items: Array<{
      content: { contentType: string; properties: TestimonialItem };
    }>;
  } | null;
}

export default function TestimonialsBlock({ title, subTitle, testimonials }: TestimonialsBlockProps) {
  const items = testimonials?.items ?? [];

  return (
    <section className="border-y border-zinc-100 bg-white py-8 md:py-12 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        {(title || subTitle) && (
          <header className="mb-8 lg:w-1/2">
            {title && (
              <h2 className="font-display text-3xl font-semibold tracking-widest text-zinc-500 uppercase md:text-4xl dark:text-zinc-400">
                {title}
              </h2>
            )}
            {subTitle && (
              <p className="mt-1 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">{subTitle}</p>
            )}
          </header>
        )}

        {items.length === 0 ? (
          <div className="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">No items added yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item, index) => {
              const props = item.content.properties;
              const avatar = props.authorImage?.[0];
              return (
                <article
                  key={index}
                  className="group relative flex h-full flex-col border-l-2 border-l-zinc-200 py-1 pl-6 transition-all duration-200 hover:border-l-red-500 dark:border-l-zinc-800 dark:hover:border-l-red-500"
                >
                  <div
                    className="font-display text-6xl leading-none text-red-600/30 dark:text-red-400/20"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </div>

                  {props.quote && (
                    <blockquote className="mt-2 flex-1 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {props.quote}
                    </blockquote>
                  )}

                  <footer className="mt-6 flex items-center gap-3">
                    {avatar && (
                      <img
                        src={resolveMediaUrl(avatar.url)}
                        alt={avatar.name}
                        className="h-10 w-10 shrink-0 rounded-full object-cover"
                        width={40}
                        height={40}
                      />
                    )}
                    <div>
                      {props.authorName && (
                        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                          {props.authorName}
                        </p>
                      )}
                      {(props.authorRole || props.authorCompany) && (
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                          {props.authorRole}
                          {props.authorRole && props.authorCompany && ',\u00a0'}
                          {props.authorCompany}
                        </p>
                      )}
                    </div>
                  </footer>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
