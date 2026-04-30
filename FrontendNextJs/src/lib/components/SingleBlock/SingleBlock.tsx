import type { components } from '@/lib/types/umbraco';
import { componentMap } from '@/lib/utils/componentMap';

interface SingleBlockProps {
  block:
    | components['schemas']['ApiBlockItemModel']
    | components['schemas']['ApiBlockGridItemModel']
    | null
    | undefined;
}

export default function SingleBlock({ block }: SingleBlockProps) {
  if (!block) return null;

  const BlockComponent = componentMap[block.content.contentType];

  if (BlockComponent) {
    return <BlockComponent {...block.content.properties} />;
  }

  return (
    <div className="rounded bg-yellow-100 p-4 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
      Warning: Unrecognized single-block component &quot;{block.content.contentType}&quot;
    </div>
  );
}
