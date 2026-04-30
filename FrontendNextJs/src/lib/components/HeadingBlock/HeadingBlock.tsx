import type { components } from '@/lib/types/umbraco';

type Props = components['schemas']['HeadingPropertiesModel'];

export default function HeadingBlock({ headingText }: Props) {
  if (!headingText) return null;

  return (
    <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl lg:text-5xl dark:text-zinc-50">
      {headingText}
    </h2>
  );
}
