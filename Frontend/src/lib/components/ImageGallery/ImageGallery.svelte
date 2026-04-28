<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	import ProgressiveImage from '$lib/components/ProgressiveImage/ProgressiveImage.svelte';
	import Lightbox from '$lib/components/Lightbox/Lightbox.svelte';
	import { getAltText } from '$lib/utils/mediaUtils';

	let {
		images = [],
		enableLightbox = true
	}: {
		images: components['schemas']['IApiMediaWithCropsModel'][];
		enableLightbox?: boolean;
	} = $props();

	const isSingle = $derived(images.length === 1);
	let lightboxIndex: number | null = $state(null);

	const thumbnailClass = $derived(
		enableLightbox
			? 'group block aspect-video overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200 transition-all duration-300 hover:ring-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:ring-zinc-700 cursor-zoom-in'
			: 'group block aspect-video overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800'
	);
</script>

{#if isSingle}
	{#if enableLightbox}
		<button
			type="button"
			onclick={() => (lightboxIndex = 0)}
			aria-label={`View image: ${getAltText(images[0]) || 'Gallery image'}`}
			class="{thumbnailClass} w-full"
		>
			<ProgressiveImage
				src={images[0].url}
				alt={getAltText(images[0])}
				imgClass="transition-transform duration-500 group-hover:scale-105"
			/>
		</button>
	{:else}
		<div class="{thumbnailClass} w-full">
			<ProgressiveImage src={images[0].url} alt={getAltText(images[0])} />
		</div>
	{/if}
{:else}
	<div class="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each images as image, i}
			{#if enableLightbox}
				<button
					type="button"
					onclick={() => (lightboxIndex = i)}
					aria-label={`View image: ${getAltText(image) || `Gallery image ${i + 1}`}`}
					class={thumbnailClass}
				>
					<ProgressiveImage
						src={image.url}
						alt={getAltText(image)}
						imgClass="transition-transform duration-500 group-hover:scale-105"
					/>
				</button>
			{:else}
				<div class={thumbnailClass}>
					<ProgressiveImage src={image.url} alt={getAltText(image)} />
				</div>
			{/if}
		{/each}
	</div>
{/if}

{#if lightboxIndex !== null}
	<Lightbox {images} startIndex={lightboxIndex} onclose={() => (lightboxIndex = null)} />
{/if}
