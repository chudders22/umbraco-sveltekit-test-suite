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

<div
	class="relative aspect-16/9 w-full overflow-hidden rounded-xl shadow-xl ring-1 ring-slate-900/5 dark:ring-slate-100/10"
>
	<iframe
		src={embedUrl}
		{title}
		class="absolute top-0 left-0 h-full w-full border-0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	></iframe>
</div>
