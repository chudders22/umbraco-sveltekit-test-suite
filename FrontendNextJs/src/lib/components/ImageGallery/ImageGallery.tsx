import type { components } from '@/lib/types/umbraco';
import { resolveMediaUrl } from '@/lib/utils/umbracoApi';

interface Props {
  images?: components['schemas']['IApiMediaWithCropsModel'][];
}

export default function ImageGallery({ images = [] }: Props) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <div
          key={index}
          className="group aspect-video overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200 transition-all duration-300 hover:ring-zinc-300 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:ring-zinc-700"
        >
          <img
            src={resolveMediaUrl(image.url)}
            alt={image.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
