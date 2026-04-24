<script lang="ts">
	interface ProcessStep {
		title?: string | null;
		description?: string | null;
	}

	interface Props {
		title?: string | null;
		subTitle?: string | null;
		steps?: {
			items: Array<{
				content: { contentType: string; properties: ProcessStep };
			}>;
		} | null;
	}

	let { title, subTitle, steps }: Props = $props();

	let items = $derived(steps?.items ?? []);
</script>

<section class="border-y border-zinc-100 bg-white py-8 md:py-12 dark:border-zinc-800 dark:bg-zinc-950">
	<div class="container mx-auto px-4">
		{#if title || subTitle}
			<div class="mb-8 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
				<header>
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
			</div>
		{/if}

		{#if items.length > 0}
			<div class="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
				{#each items as item, index}
					{@const step = item.content.properties}
					<div class="flex flex-col border-t-2 border-t-zinc-100 pt-6 dark:border-t-zinc-800">
						<span
							class="font-display mb-4 text-5xl font-bold leading-none text-red-600/20 dark:text-red-400/15"
						>
							{String(index + 1).padStart(2, '0')}
						</span>
						{#if step.title}
							<h3
								class="font-display mb-3 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
							>
								{step.title}
							</h3>
						{/if}
						{#if step.description}
							<p class="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
								{step.description}
							</p>
						{/if}
					</div>
				{/each}
			</div>
		{:else}
			<div
				class="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30"
			>
				<p class="text-sm text-zinc-500 dark:text-zinc-400">No items added yet.</p>
			</div>
		{/if}
	</div>
</section>
