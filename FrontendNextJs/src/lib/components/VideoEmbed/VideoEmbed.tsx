interface Props {
  url: string;
  title?: string;
}

// Basic helper to convert standard youtube urls to embed ones
function getEmbedUrl(source: string): string {
  if (source.includes('youtube.com/watch?v=')) {
    return source.replace('watch?v=', 'embed/');
  }
  if (source.includes('youtu.be/')) {
    return source.replace('youtu.be/', 'youtube.com/embed/');
  }
  return source;
}

export default function VideoEmbed({ url, title = 'Video Player' }: Props) {
  const embedUrl = getEmbedUrl(url);

  return (
    <div className="overflow-hidden rounded-2xl ring-1 ring-zinc-200 dark:ring-zinc-800">
      <div className="relative aspect-video w-full bg-zinc-100 dark:bg-zinc-900">
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
