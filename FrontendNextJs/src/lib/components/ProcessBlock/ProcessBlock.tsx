interface ProcessStep {
  title?: string | null;
  description?: string | null;
}

interface ProcessBlockProps {
  title?: string | null;
  subTitle?: string | null;
  steps?: {
    items: Array<{
      content: { contentType: string; properties: ProcessStep };
    }>;
  } | null;
}

export default function ProcessBlock({ title, subTitle, steps }: ProcessBlockProps) {
  const items = steps?.items ?? [];

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

        {items.length > 0 ? (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
            {items.map((item, index) => {
              const step = item.content.properties;
              return (
                <div key={index} className="flex flex-col border-t-2 border-t-zinc-100 pt-6 dark:border-t-zinc-800">
                  <span className="font-display mb-4 text-5xl font-bold leading-none text-red-600/20 dark:text-red-400/15">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {step.title && (
                    <h3 className="font-display mb-3 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                      {step.title}
                    </h3>
                  )}
                  {step.description && (
                    <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {step.description}
                    </p>
                  )}
                </div>
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
