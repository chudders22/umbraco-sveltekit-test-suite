<script lang="ts">
	import { browser } from '$app/environment';

	interface Props {
		src: string;
		alt: string;
		/** Classes applied to the wrapper div. Defaults to `h-full w-full`. */
		class?: string;
		/** Additional classes applied directly to the `<img>` element (e.g. group-hover effects). */
		imgClass?: string;
		loading?: 'lazy' | 'eager';
		fetchpriority?: 'high' | 'low' | 'auto';
		decoding?: 'async' | 'sync' | 'auto';
	}

	let {
		src,
		alt,
		class: className = 'h-full w-full',
		imgClass = '',
		loading = 'lazy',
		fetchpriority = undefined,
		decoding = 'async'
	}: Props = $props();

	let loaded = $state(false);
	let imgEl: HTMLImageElement | undefined = $state(undefined);

	// Handle images that are already in the browser cache on mount.
	// Without this, a cached image fires `load` before Svelte's onload handler is attached.
	$effect(() => {
		if (imgEl?.complete && imgEl.naturalWidth > 0) {
			loaded = true;
		}
	});

	// Umbraco's media pipeline is backed by ImageSharp, which accepts width/quality
	// query parameters to produce a resized version of any media URL.
	// We use a 32px wide, low-quality thumbnail as the blur-up placeholder.
	let lqipSrc = $derived(browser && src ? `${src}?width=32&quality=10` : null);
</script>

<!--
	Two-phase loading:
	1. Shimmer skeleton (visible immediately, SSR-safe, fades out when loaded)
	2. Blurred LQIP thumbnail (client-only, 32px wide — loads in <1 KB, gives colour/shape preview)
	3. Full image fades in on load
-->
<div class="relative overflow-hidden {className}">
	<!-- Shimmer skeleton — always rendered so SSR HTML shows a placeholder colour -->
	<div
		class="absolute inset-0 bg-zinc-200 transition-opacity duration-500 dark:bg-zinc-800
			{loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}"
		aria-hidden="true"
	></div>

	<!-- Blurred LQIP — client only, no SSR/hydration mismatch risk -->
	{#if lqipSrc && !loaded}
		<img
			src={lqipSrc}
			alt=""
			aria-hidden="true"
			loading="eager"
			decoding="async"
			class="absolute inset-0 h-full w-full scale-110 object-cover object-center blur-lg"
		/>
	{/if}

	<!-- Main image: starts transparent, fades in on load -->
	<img
		bind:this={imgEl}
		{src}
		{alt}
		{loading}
		fetchpriority={fetchpriority}
		{decoding}
		onload={() => {
			loaded = true;
		}}
		class="relative h-full w-full object-cover object-center
			transition-opacity duration-700
			{imgClass}
			{loaded ? 'opacity-100' : 'opacity-0'}"
	/>
</div>
