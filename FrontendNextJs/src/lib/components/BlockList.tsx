import type { components } from '@/lib/types/umbraco';
import { componentMap } from '@/lib/utils/componentMap';

interface BlockListProps {
  items: components['schemas']['ApiBlockListModel']['items'];
}

export default function BlockList({ items = [] }: BlockListProps) {
  return (
    <div className="flex flex-col space-y-12">
      {items.map((item, index) => {
        const BlockComponent = componentMap[item.content.contentType];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const settings = item.settings as any;
        const isConstrained = settings?.properties?.constrainToContentColumn !== null;

        if (BlockComponent) {
          return (
            <section key={index} className={isConstrained ? 'container mx-auto' : ''}>
              <BlockComponent {...item.content.properties} />
            </section>
          );
        }

        return (
          <div
            key={index}
            className="rounded bg-yellow-100 p-4 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
          >
            Warning: Unrecognized block component &quot;{item.content.contentType}&quot;
          </div>
        );
      })}
    </div>
  );
}
