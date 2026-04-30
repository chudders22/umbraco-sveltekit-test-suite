import type { components } from '@/lib/types/umbraco';
import ButtonLink from '@/lib/components/ButtonLink/ButtonLink';
import { resolveMediaUrl } from '@/lib/utils/umbracoApi';

type Props = components['schemas']['CallToActionBlockPropertiesModel'];

export default function CallToActionBlock({ heading, text, actions, image }: Props) {
  const imageUrl = resolveMediaUrl(image?.[0]?.url);
  const imageAlt = image?.[0]?.name || heading || 'Call to action';

  return (
    <section className="relative overflow-hidden border-y border-zinc-100 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      {/* Dot-grid texture: dark lines in light mode */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_right,black_40%,transparent_90%)] dark:hidden"
        aria-hidden="true"
      ></div>
      {/* Dot-grid texture: light lines in dark mode */}
      <div
        className="absolute inset-0 hidden bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_right,black_40%,transparent_90%)] dark:block"
        aria-hidden="true"
      ></div>

      <div className="relative flex flex-col items-stretch md:flex-row">
        {/* Content Side */}
        <div className="flex flex-1 flex-col justify-center gap-6 px-8 py-8 md:px-12 lg:px-16 lg:py-12">
          {/* Red accent bar */}
          <div className="h-0.5 w-32 bg-red-600" aria-hidden="true"></div>

          {heading && (
            <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl lg:text-5xl dark:text-zinc-50">
              {heading}
            </h2>
          )}

          {text?.markup && (
            <div
              className="prose max-w-none text-lg prose-p:text-zinc-600 dark:prose-p:text-zinc-300 prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-red-400"
              dangerouslySetInnerHTML={{ __html: text.markup }}
            />
          )}

          {actions && actions.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {actions.map((action, i) => {
                const href = action.url || action.route?.path || '#';
                return (
                  <ButtonLink
                    key={i}
                    href={href}
                    target={action.target || '_self'}
                    variant={i === 0 ? 'primary' : 'outline'}
                    label={action.title || 'Learn More'}
                    showArrow={i === 0}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* Image Side */}
        {imageUrl && (
          <div className="relative flex-1 self-stretch">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="h-full min-h-[300px] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-zinc-950 dark:via-zinc-950/70"></div>
          </div>
        )}
      </div>
    </section>
  );
}
