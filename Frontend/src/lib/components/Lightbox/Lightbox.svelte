<script lang="ts">
	import { fade } from 'svelte/transition';
	import { untrack } from 'svelte';
	import type { components } from '$lib/types/umbraco';
	import { getAltText } from '$lib/utils/mediaUtils';

	type Image = components['schemas']['IApiMediaWithCropsModel'];

	let {
		images,
		startIndex = 0,
		onclose
	}: {
		images: Image[];
		startIndex?: number;
		onclose: () => void;
	} = $props();

	let currentIndex = $state(untrack(() => startIndex));
	let dialogEl: HTMLDialogElement | undefined = $state();
	let touchStartX = 0;

	const current = $derived(images[currentIndex]);
	const currentAlt = $derived(getAltText(current));
	const hasPrev = $derived(currentIndex > 0);
	const hasNext = $derived(currentIndex < images.length - 1);

	function prev() {
		if (hasPrev) currentIndex--;
	}

	function next() {
		if (hasNext) currentIndex++;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowLeft') {
			e.preventDefault();
			prev();
		} else if (e.key === 'ArrowRight') {
			e.preventDefault();
			next();
		}
	}

	function handleBackdropClick(e: MouseEvent) {
		// Only close when clicking the backdrop itself, not inner content
		if (e.target === dialogEl) onclose();
	}

	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.touches[0].clientX;
	}

	function handleTouchEnd(e: TouchEvent) {
		const delta = e.changedTouches[0].clientX - touchStartX;
		if (delta > 50) prev();
		else if (delta < -50) next();
	}

	$effect(() => {
		dialogEl?.showModal();
		return () => {
			if (dialogEl?.open) dialogEl.close();
		};
	});
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog
	bind:this={dialogEl}
	onkeydown={handleKeydown}
	onclick={handleBackdropClick}
	oncancel={(e) => {
		e.preventDefault();
		onclose();
	}}
	ontouchstart={handleTouchStart}
	ontouchend={handleTouchEnd}
	aria-label="Image lightbox"
>
	<div class="relative flex h-full w-full select-none items-center justify-center p-4 sm:p-10">
		<!-- Image (fades on index change) -->
		{#key currentIndex}
			<div transition:fade={{ duration: 150 }} class="flex items-center justify-center">
				<img
					src={current.url}
					alt={currentAlt}
					class="max-h-[85dvh] max-w-[85vw] rounded-xl object-contain shadow-2xl"
				/>
			</div>
		{/key}

		<!-- Close button -->
		<button
			onclick={onclose}
			aria-label="Close lightbox"
			class="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				class="h-5 w-5"
				aria-hidden="true"
			>
				<path d="M18 6 6 18M6 6l12 12" />
			</svg>
		</button>

		<!-- Image counter -->
		{#if images.length > 1}
			<p
				aria-live="polite"
				aria-atomic="true"
				class="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-xs text-white/80 backdrop-blur-sm"
			>
				{currentIndex + 1} / {images.length}
			</p>
		{/if}

		<!-- Previous button -->
		{#if hasPrev}
			<button
				onclick={prev}
				aria-label="Previous image"
				class="absolute left-3 z-10 rounded-full bg-black/40 p-3 text-white backdrop-blur-sm transition-colors hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:left-5"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					class="h-5 w-5"
					aria-hidden="true"
				>
					<path d="m15 18-6-6 6-6" />
				</svg>
			</button>
		{/if}

		<!-- Next button -->
		{#if hasNext}
			<button
				onclick={next}
				aria-label="Next image"
				class="absolute right-3 z-10 rounded-full bg-black/40 p-3 text-white backdrop-blur-sm transition-colors hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:right-5"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					class="h-5 w-5"
					aria-hidden="true"
				>
					<path d="m9 18 6-6-6-6" />
				</svg>
			</button>
		{/if}

		<!-- Caption (alt text) -->
		{#if currentAlt}
			<p
				class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm"
			>
				{currentAlt}
			</p>
		{/if}
	</div>
</dialog>

<style>
	dialog {
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		max-width: 100%;
		max-height: 100%;
		margin: 0;
		padding: 0;
		border: none;
		background: transparent;
	}

	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.88);
		backdrop-filter: blur(6px);
	}
</style>
