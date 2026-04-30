import type { components } from '@/lib/types/umbraco';
import { resolveMediaUrl } from '@/lib/utils/umbracoApi';

interface Props {
  heading?: string | null;
  subheading?: string | null;
  backgroundImage?: components['schemas']['IApiMediaWithCropsModel'][] | null;
  ctaLink?: components['schemas']['ApiLinkModel'][] | null;
}

export default function HeroBlock({ heading, subheading, backgroundImage, ctaLink }: Props) {
  const bgImageUrl = resolveMediaUrl(backgroundImage?.[0]?.url);
  const cta = ctaLink?.[0];

  return (
    <section
      className="relative flex min-h-[40vh] items-center overflow-hidden bg-zinc-50 bg-cover bg-center bg-no-repeat dark:bg-zinc-950"
      style={bgImageUrl ? { backgroundImage: `url('${bgImageUrl}')` } : undefined}
    >
      {/* Directional gradient: adapts to light/dark */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-50/95 via-zinc-50/75 to-transparent dark:from-zinc-950/95 dark:via-zinc-950/80 dark:to-zinc-950/30"></div>
      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-50/50 to-transparent dark:from-zinc-950/60"></div>
      {/* Ambient accent glow — dark mode only */}
      <div
        className="absolute -top-20 left-20 h-72 w-72 rounded-full bg-red-500/10 blur-3xl"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Red accent bar */}
          <div className="mb-6 h-0.5 w-32 bg-red-600" aria-hidden="true"></div>

          {heading && (
            <h1 className="mb-6 font-display text-4xl leading-none font-bold tracking-tighter text-zinc-900 md:text-6xl dark:text-white">
              {heading}
            </h1>
          )}

          {subheading && (
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-zinc-600 md:text-xl dark:text-zinc-300">
              {subheading}
            </p>
          )}

          {cta && cta.url && (
            <a
              href={cta.url}
              target={cta.target ?? undefined}
              className="group inline-flex items-center gap-3 rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-50 transition-all hover:gap-4 hover:bg-zinc-700 focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 focus-visible:outline-none dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-white dark:focus-visible:ring-zinc-50 dark:focus-visible:ring-offset-zinc-950"
            >
              {cta.title || 'Learn More'}
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                →
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
