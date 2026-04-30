import type { components } from '@/lib/types/umbraco';

type Props = components['schemas']['ServiceBlockItemPropertiesModel'];

export default function ServiceCard({ title, description, link }: Props) {
  const primaryLink = link?.[0];
  const href = primaryLink?.url || primaryLink?.route?.path || '#';
  const linkLabel = primaryLink?.title || title || 'Open service';
  const isExternal = (primaryLink?.target || '_self') === '_blank';

  return (
    <article
      className={`group relative flex h-full flex-col border-l-2 border-l-zinc-200 py-1 pl-6 transition-all duration-200 focus-within:border-l-red-500 hover:border-l-red-500 dark:border-l-zinc-800 dark:focus-within:border-l-red-500 dark:hover:border-l-red-500${primaryLink ? ' cursor-pointer' : ''}`}
    >
      {primaryLink && (
        <a
          href={href}
          target={primaryLink.target || '_self'}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          aria-label={linkLabel}
          className="absolute inset-0 z-10 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:outline-none focus-visible:ring-inset dark:focus-visible:ring-red-400"
        >
          <span className="sr-only">{linkLabel}</span>
        </a>
      )}

      {title && (
        <h3 className="mb-3 font-display text-lg font-bold tracking-tight text-zinc-900 transition-colors group-focus-within:text-red-600 group-hover:text-red-600 dark:text-zinc-50 dark:group-focus-within:text-red-500 dark:group-hover:text-red-500">
          {title}
        </h3>
      )}

      {description && (
        <p className="flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {description}
        </p>
      )}

      {primaryLink && (
        <span
          aria-hidden="true"
          className="mt-4 flex items-center gap-1 text-xs font-semibold tracking-wide text-red-600 transition-transform duration-200 group-focus-within:translate-x-1 group-hover:translate-x-1 dark:text-red-400"
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-3.5 w-3.5"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      )}
    </article>
  );
}
