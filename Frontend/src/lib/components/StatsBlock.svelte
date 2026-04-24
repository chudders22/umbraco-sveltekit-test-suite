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
</script>

<section class="bg-zinc-50 py-12 md:py-16 dark:bg-zinc-900/40">
	<div class="container mx-auto px-4">
		{#if title}
			<h2
				class="font-display mb-12 text-center text-3xl font-semibold tracking-widest text-zinc-500 uppercase md:text-4xl dark:text-zinc-400"
			>
				{title}
			</h2>
		{/if}

		{#if items.length === 0}
			<div
				class="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30"
			>
				<p class="text-sm text-zinc-500 dark:text-zinc-400">No items added yet.</p>
			</div>
		{:else}
			<div
				class="grid grid-cols-2 gap-8 divide-zinc-200 md:grid-cols-4 md:divide-x dark:divide-zinc-800"
			>
				{#each items as item}
					{@const props = item.content.properties}
					<div class="text-center">
						{#if props.value}
							<p
								class="font-display text-4xl font-bold text-red-600 md:text-5xl dark:text-red-500"
							>
								{props.value}
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
