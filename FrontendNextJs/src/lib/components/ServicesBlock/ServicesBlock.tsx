import type { components } from '@/lib/types/umbraco';
import ServiceCard from './ServiceCard';

type Props = components['schemas']['ServicesBlockPropertiesModel'];

export default function ServicesBlock({ services, title, subTitle }: Props) {
  const items = services?.items || [];

  return (
    <section className="container mx-auto py-8 md:py-12">
      {(title || subTitle) && (
        <header className="mb-8 lg:w-1/2">
          {title && (
            <h2 className="font-display text-3xl font-semibold tracking-widest text-zinc-500 uppercase md:text-4xl dark:text-zinc-400">
              {title}
            </h2>
          )}
          {subTitle && (
            <p className="mt-1 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
              {subTitle}
            </p>
          )}
        </header>
      )}

      {items.length > 0 ? (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const service = item.content
              .properties as components['schemas']['ServiceBlockItemPropertiesModel'];
            return <ServiceCard key={index} {...service} />;
          })}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            No services have been added yet.
          </p>
        </div>
      )}
    </section>
  );
}
