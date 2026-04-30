interface AccordionItem {
  question?: string | null;
  answer?: { markup?: string | null } | null;
}

interface AccordionBlockProps {
  title?: string | null;
  subTitle?: string | null;
  items?: {
    items: Array<{
      content: { contentType: string; properties: AccordionItem };
    }>;
  } | null;
  openFirst?: boolean;
}

export default function AccordionBlock({ title, subTitle, items: itemsProp, openFirst = false }: AccordionBlockProps) {
  const items = itemsProp?.items ?? [];

  return (
    <section className="border-y border-zinc-100 bg-white py-8 md:py-12 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="container mx-auto">
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

        {items.length > 0 ? (
          <div className="flex flex-col gap-4">
            {items.map((item, index) => {
              const faq = item.content.properties;
              return (
                <details
                  key={index}
                  className="group border-l-2 border-l-zinc-200 pl-6 transition-colors duration-200
                    open:border-l-red-500
                    dark:border-l-zinc-800 dark:open:border-l-red-500"
                  open={openFirst && index === 0}
                >
                  <summary
                    className="flex cursor-pointer list-none items-center justify-between gap-4 py-1
                      [&::-webkit-details-marker]:hidden
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset
                      focus-visible:ring-red-600 dark:focus-visible:ring-red-400"
                  >
                    <span
                      className="font-display text-lg font-semibold tracking-tight text-zinc-900 transition-colors duration-200
                        group-open:text-red-600 dark:text-zinc-50 dark:group-open:text-red-500"
                    >
                      {faq.question ?? ''}
                    </span>
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center text-zinc-400 transition-colors duration-200 group-open:text-red-500"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path d="M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path d="M6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" />
                      </svg>
                    </span>
                  </summary>

                  {faq.answer?.markup && (
                    <div
                      className="prose prose-zinc pb-5 pt-3 leading-relaxed dark:prose-invert
                        prose-p:text-zinc-600 dark:prose-p:text-zinc-300
                        prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline
                        dark:prose-a:text-red-400"
                      dangerouslySetInnerHTML={{ __html: faq.answer.markup }}
                    />
                  )}
                </details>
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">No items added yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
