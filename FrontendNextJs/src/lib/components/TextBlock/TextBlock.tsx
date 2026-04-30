import type { components } from '@/lib/types/umbraco';

type Props = components['schemas']['TextBlockPropertiesModel'];

export default function TextBlock({ text }: Props) {
  return (
    <div className="prose max-w-none transition-colors prose-zinc dark:prose-invert prose-headings:font-display prose-headings:tracking-tight prose-a:font-medium prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-red-400">
      {text?.markup && <div dangerouslySetInnerHTML={{ __html: text.markup }} />}
    </div>
  );
}
