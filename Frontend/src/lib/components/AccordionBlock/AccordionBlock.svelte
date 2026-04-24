<script lang="ts">
	interface AccordionItem {
		question?: string | null;
		answer?: { markup?: string | null } | null;
	}

	interface Props {
		title?: string | null;
		subTitle?: string | null;
		items?: {
			items: Array<{
				content: { contentType: string; properties: AccordionItem };
			}>;
		} | null;
		openFirst?: boolean;
	}

	let { title, subTitle, items: itemsProp, openFirst = false }: Props = $props();

	let items = $derived(itemsProp?.items ?? []);
</script>

<section class="border-y border-zinc-100 bg-white py-8 md:py-12 dark:border-zinc-800 dark:bg-zinc-950">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-3xl">
			{#if title || subTitle}
				<header class="mb-8">
					{#if title}
						<h2
							class="font-display text-3xl font-semibold tracking-widest text-zinc-500 uppercase md:text-4xl dark:text-zinc-400"
						>
							{title}
						</h2>
					{/if}
					{#if subTitle}
						<p class="mt-1 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">{subTitle}</p>
					{/if}
				</header>
			{/if}

			{#if items.length > 0}
				<dl>
					{#each items as item, index}
						{@const faq = item.content.properties}
						<details
							class="group border-b border-zinc-200 [&:first-child]:border-t dark:border-zinc-800"
							open={openFirst && index === 0}
						>
							<summary
								class="flex cursor-pointer list-none items-center gap-4 [&::-webkit-details-marker]:hidden focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:outline-none focus-visible:ring-inset dark:focus-visible:ring-red-400"
							>
								<span
									class="font-display flex-1 py-5 text-lg font-semibold text-zinc-900 dark:text-zinc-50"
								>
									{faq.question ?? ''}
								</span>
								<svg
									class="h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200 group-open:rotate-180"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
										clip-rule="evenodd"
									/>
								</svg>
							</summary>
							{#if faq.answer?.markup}
								<div
									class="prose prose-zinc pb-5 leading-relaxed text-zinc-600 dark:prose-invert dark:text-zinc-300 prose-a:text-red-600 dark:prose-a:text-red-400"
								>
									{@html faq.answer.markup}
								</div>
							{/if}
						</details>
					{/each}
				</dl>
			{:else}
				<div
					class="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30"
				>
					<p class="text-sm text-zinc-500 dark:text-zinc-400">No items added yet.</p>
				</div>
			{/if}
		</div>
	</div>
</section>
