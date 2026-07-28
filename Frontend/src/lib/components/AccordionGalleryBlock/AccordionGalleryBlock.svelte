<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	import ImageCarousel from '$lib/components/ImageCarousel/ImageCarousel.svelte';

	type AccordionItem = components['schemas']['AccordionGalleryItemPropertiesModel'];

	interface Props {
		title?: string | null;
		gallery?: components['schemas']['IApiMediaWithCropsModel'][] | null;
		accordion?: components['schemas']['ApiBlockListModel'] | null;
	}

	let { title, gallery, accordion }: Props = $props();

	let images = $derived(gallery ?? []);
	let accordionItems = $derived(accordion?.items ?? []);
	let currentSlide = $state(0);
	let safeCurrentSlide = $derived(normalizeIndex(currentSlide, images.length));

	function normalizeIndex(index: number, length: number): number {
		if (length <= 0) return 0;
		return (index + length) % length;
	}

	function goToSlide(index: number): void {
		currentSlide = normalizeIndex(index, images.length);
	}

	function goToPrevious(): void {
		goToSlide(safeCurrentSlide - 1);
	}

	function goToNext(): void {
		goToSlide(safeCurrentSlide + 1);
	}
</script>

<section class="border-y border-zinc-100 bg-white py-10 md:py-14 dark:border-zinc-800 dark:bg-zinc-950">
	<div class="container mx-auto px-4">
		{#if title}
			<header class="mb-8">
				<h2
					class="font-display text-3xl font-semibold tracking-widest text-zinc-500 uppercase md:text-4xl dark:text-zinc-400"
				>
					{title}
				</h2>
			</header>
		{/if}

		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
			<div>
				{#if images.length > 0}
					<ImageCarousel
						{images}
						currentSlide={safeCurrentSlide}
						label={title ? `${title} image carousel` : 'Image carousel'}
						onPrevious={goToPrevious}
						onNext={goToNext}
						onSelect={goToSlide}
					/>
				{:else}
					<div
						class="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30"
					>
						<p class="text-sm text-zinc-500 dark:text-zinc-400">No gallery images added yet.</p>
					</div>
				{/if}
			</div>

			<div>
				{#if accordionItems.length > 0}
					<div class="flex flex-col gap-4">
						{#each accordionItems as item, itemIndex (item.content.id ?? itemIndex)}
							{@const accordionItem = item.content.properties as AccordionItem}
							<details
								class="group border-l-2 border-l-zinc-200 pl-6 transition-colors duration-200
									open:border-l-red-500
									dark:border-l-zinc-800 dark:open:border-l-red-500"
							>
								<summary
									class="flex cursor-pointer list-none items-center justify-between gap-4 py-1
										[&::-webkit-details-marker]:hidden
										focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset
										focus-visible:ring-red-600 dark:focus-visible:ring-red-400"
								>
									<span
										class="font-display text-lg font-semibold tracking-tight text-zinc-900 transition-colors duration-200
											group-open:text-red-600 dark:text-zinc-50 dark:group-open:text-red-500"
									>
										{accordionItem.title ?? ''}
									</span>
									<span
										class="flex h-5 w-5 shrink-0 items-center justify-center text-zinc-400 transition-colors duration-200 group-open:text-red-500"
										aria-hidden="true"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											class="block h-5 w-5 group-open:hidden"
										>
											<path d="M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" />
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											class="hidden h-5 w-5 group-open:block"
										>
											<path d="M6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" />
										</svg>
									</span>
								</summary>

								{#if accordionItem.content?.markup}
									<div
										class="prose prose-zinc pb-5 pt-3 leading-relaxed dark:prose-invert
											prose-p:text-zinc-600 dark:prose-p:text-zinc-300
											prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline
											dark:prose-a:text-red-400"
									>
										<!-- Content markup is authored via Umbraco Rich Text editor output. -->
										{@html accordionItem.content.markup}
									</div>
								{/if}
							</details>
						{/each}
					</div>
				{:else}
					<div
						class="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30"
					>
						<p class="text-sm text-zinc-500 dark:text-zinc-400">No accordion items added yet.</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
