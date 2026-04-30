<script lang="ts">
	let { url, title = 'Video Player' }: { url: string; title?: string } = $props();

	// Basic helper to convert standard youtube urls to embed ones
	function getEmbedUrl(source: string) {
		if (source.includes('youtube.com/watch?v=')) {
			return source.replace('watch?v=', 'embed/');
		}
		if (source.includes('youtu.be/')) {
			return source.replace('youtu.be/', 'youtube.com/embed/');
		}
		return source;
	}

	let embedUrl = $derived(getEmbedUrl(url));
</script>

<div class="overflow-hidden rounded-2xl ring-1 ring-zinc-200 dark:ring-zinc-800">
	<div class="relative aspect-video w-full bg-zinc-100 dark:bg-zinc-900">
		<iframe
			src={embedUrl}
			title={title || 'Video Player'}
			class="absolute inset-0 h-full w-full border-0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
</div>
