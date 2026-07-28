<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	import ProgressiveImage from '$lib/components/ProgressiveImage/ProgressiveImage.svelte';
	import { getAltText } from '$lib/utils/mediaUtils';

	type GalleryImage = components['schemas']['IApiMediaWithCropsModel'];

	interface Props {
		images: GalleryImage[];
		currentSlide: number;
		label?: string;
		onPrevious: () => void;
		onNext: () => void;
		onSelect: (index: number) => void;
	}

	let {
		images,
		currentSlide,
		label = 'Image carousel',
		onPrevious,
		onNext,
		onSelect
	}: Props = $props();
</script>

{#if images.length > 0}
	{@const activeImage = images[currentSlide] as GalleryImage}
	<div class="space-y-4" role="region" aria-roledescription="carousel" aria-label={label}>
		<div
			class="overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800"
		>
			<ProgressiveImage
				src={activeImage.url}
				alt={getAltText(activeImage)}
				class="aspect-video w-full"
				loading={currentSlide === 0 ? 'eager' : 'lazy'}
				fetchpriority={currentSlide === 0 ? 'high' : 'auto'}
			/>
		</div>

		<div class="flex items-center justify-between gap-3">
			<p class="text-sm text-zinc-500 dark:text-zinc-400" aria-live="polite" aria-atomic="true">
				<span class="sr-only">Current slide:</span>
				{currentSlide + 1} / {images.length}
			</p>

			{#if images.length > 1}
				<div class="flex items-center gap-2">
					<button
						type="button"
						class="rounded-full border border-zinc-300 px-3 py-1 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-600 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus-visible:ring-red-400"
						onclick={onPrevious}
						aria-label="Previous slide"
					>
						Prev
					</button>
					<button
						type="button"
						class="rounded-full border border-zinc-300 px-3 py-1 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-600 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus-visible:ring-red-400"
						onclick={onNext}
						aria-label="Next slide"
					>
						Next
					</button>
				</div>
			{/if}
		</div>

		{#if images.length > 1}
			<div class="flex flex-wrap items-center gap-2" aria-label="Slide navigation">
				{#each images as image, index (image.id)}
					<button
						type="button"
						class="h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 dark:focus-visible:ring-red-400 {index === currentSlide
							? 'bg-red-600 dark:bg-red-500'
							: 'bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-600'}"
						onclick={() => onSelect(index)}
						aria-label={`Go to slide ${index + 1}: ${getAltText(image) || image.name || 'Gallery image'}`}
						aria-current={index === currentSlide ? 'true' : undefined}
					></button>
				{/each}
			</div>
		{/if}
	</div>
{/if}
