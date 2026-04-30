interface StatItem {
  value?: string | null;
  label?: string | null;
  description?: string | null;
}

interface Props {
  title?: string | null;
  stats?: {
    items: Array<{
      content: { contentType: string; properties: StatItem };
    }>;
  } | null;
}

// Wrap %, +, . in brand-colour spans — number digits stay in heading colour
function highlightSymbols(value: string): string {
  return value.replace(
    /([%+.])/g,
    '<span class="text-[0.6em] text-red-600 dark:text-red-500">$1</span>',
  );
}

export default function StatsBlock({ title, stats }: Props) {
  const items = stats?.items || [];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="font-display mb-12 text-left text-3xl font-semibold tracking-widest text-zinc-500 uppercase md:text-4xl dark:text-zinc-400">
            {title}
          </h2>
        )}

        {items.length === 0 ? (
          <div className="rounded-xl border border-dashed border-zinc-200 p-12 text-left dark:border-zinc-800">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">No items added yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {items.map((item, index) => {
              const props = item.content.properties;
              return (
                <div
                  key={index}
                  className="border-l-2 border-l-zinc-200 py-1 pl-6 text-left dark:border-l-zinc-800"
                >
                  {props.value && (
                    <p
                      className="font-display text-4xl font-bold text-zinc-900 md:text-5xl dark:text-white"
                      dangerouslySetInnerHTML={{ __html: highlightSymbols(props.value) }}
                    />
                  )}
                  {props.label && (
                    <p className="mt-2 text-sm font-semibold tracking-wide text-zinc-900 uppercase dark:text-zinc-50">
                      {props.label}
                    </p>
                  )}
                  {props.description && (
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      {props.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
