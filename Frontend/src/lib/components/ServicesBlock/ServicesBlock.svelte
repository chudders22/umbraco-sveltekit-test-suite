<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	import ServiceCard from './ServiceCard.svelte';

	interface Props {
		services?: components['schemas']['ApiBlockListModel'] | null;
		title?: string | null;
		subTitle?: string | null;
	}

	let { services, title, subTitle }: Props = $props();
	let items = $derived(services?.items || []);
</script>

<section class="container mx-auto py-8 md:py-12">
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
					<p class="mt-1 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
						{subTitle}
					</p>
				{/if}
			</header>
		</div>
	{/if}

	{#if items.length > 0}
		<div class="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
			{#each items as item}
				{@const service = item.content
					.properties as components['schemas']['ServiceBlockItemPropertiesModel']}
				<ServiceCard {...service} />
			{/each}
		</div>
	{:else}
		<div
			class="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30"
		>
			<p class="text-sm text-zinc-500 dark:text-zinc-400">No services have been added yet.</p>
		</div>
	{/if}
</section>
