<script lang="ts">
	interface StatItem {
		value?: string | null;
		label?: string | null;
		description?: string | null;
	}

	interface Props {
		title?: string | null;
		stats?: {
			items: Array<{
				content: { contentType: string; properties: StatItem };
			}>;
		} | null;
	}

	let { title, stats }: Props = $props();
	let items = $derived(stats?.items || []);

	// Wrap %, +, . in brand-colour spans — number digits stay in heading colour
	function highlightSymbols(value: string): string {
		return value.replace(
			/([%+.])/g,
			'<span class="text-[0.6em] text-red-600 dark:text-red-500">$1</span>'
		);
	}
</script>

<section class="py-12 md:py-16">
	<div class="container mx-auto px-4">
		{#if title}
			<h2
				class="font-display mb-12 text-left text-3xl font-semibold tracking-widest text-zinc-500 uppercase md:text-4xl dark:text-zinc-400"
			>
				{title}
			</h2>
		{/if}

		{#if items.length === 0}
			<div
				class="rounded-xl border border-dashed border-zinc-200 p-12 text-left dark:border-zinc-800"
			>
				<p class="text-sm text-zinc-500 dark:text-zinc-400">No items added yet.</p>
			</div>
		{:else}
			<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
				{#each items as item}
					{@const props = item.content.properties}
					<div class="border-l-2 border-l-zinc-200 py-1 pl-6 text-left dark:border-l-zinc-800">
						{#if props.value}
							<p
								class="font-display text-4xl font-bold text-zinc-900 md:text-5xl dark:text-white"
							>
								<!-- eslint-disable-next-line svelte/no-at-html-tags -->
								{@html highlightSymbols(props.value)}
							</p>
						{/if}
						{#if props.label}
							<p
								class="mt-2 text-sm font-semibold tracking-wide text-zinc-900 uppercase dark:text-zinc-50"
							>
								{props.label}
							</p>
						{/if}
						{#if props.description}
							<p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{props.description}</p>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
