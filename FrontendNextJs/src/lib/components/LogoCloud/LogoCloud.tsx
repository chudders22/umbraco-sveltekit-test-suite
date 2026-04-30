import type { components } from '@/lib/types/umbraco';
import { resolveMediaUrl } from '@/lib/utils/umbracoApi';

type Props = components['schemas']['LogoCloudBlockPropertiesModel'] & { standalone?: boolean };

export default function LogoCloud({ logos, standalone = true }: Props) {
  const items = logos?.items ?? [];

  if (standalone) {
    return (
      <section
        className="border-y border-zinc-100 bg-white py-10 md:py-14 dark:border-zinc-800 dark:bg-zinc-950"
        aria-label="Client logos"
      >
        {items.length > 0 ? (
          <div className="container mx-auto px-4">
            <ul
              className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10"
              role="list"
            >
              {items.map((item, index) => {
                const logo = item.content
                  .properties as components['schemas']['LogoBlockPropertiesModel'];
                const imgUrl = resolveMediaUrl(logo.logo?.[0]?.url);
                const name = logo.logoName ?? '';
                if (!imgUrl) return null;
                return (
                  <li key={index} className="flex items-center justify-center">
                    <figure>
                      <img
                        src={imgUrl}
                        alt=""
                        aria-hidden="true"
                        className="h-10 w-auto max-w-[140px] object-contain grayscale opacity-60 transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90 dark:invert dark:opacity-50 dark:hover:scale-105 dark:hover:opacity-75"
                        loading="lazy"
                      />
                      {name && <figcaption className="sr-only">{name}</figcaption>}
                    </figure>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div className="container mx-auto px-4">
            <div className="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                No logos have been added yet.
              </p>
            </div>
          </div>
        )}
      </section>
    );
  }

  // Inline/embedded mode: container-query grid, bigger logos, no section wrapper
  return (
    <>
      {items.length > 0 ? (
        <div className="@container">
          <ul
            className="grid grid-cols-2 gap-x-8 gap-y-6 @sm:grid-cols-3 @lg:grid-cols-4"
            role="list"
          >
            {items.map((item, index) => {
              const logo = item.content
                .properties as components['schemas']['LogoBlockPropertiesModel'];
              const imgUrl = resolveMediaUrl(logo.logo?.[0]?.url);
              const name = logo.logoName ?? '';
              if (!imgUrl) return null;
              return (
                <li key={index} className="flex items-center">
                  <figure>
                    <img
                      src={imgUrl}
                      alt=""
                      aria-hidden="true"
                      className="h-24 w-auto max-w-[160px] object-contain grayscale opacity-50 transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-80 dark:invert dark:opacity-40 dark:hover:scale-105 dark:hover:opacity-65"
                      loading="lazy"
                    />
                    {name && <figcaption className="sr-only">{name}</figcaption>}
                  </figure>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p className="text-sm text-zinc-400 dark:text-zinc-600">No partner logos added yet.</p>
      )}
    </>
  );
}
