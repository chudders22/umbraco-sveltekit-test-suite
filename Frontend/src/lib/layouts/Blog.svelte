<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	import BlockList from '$lib/components/BlockList.svelte';
	import SingleBlock from '$lib/components/SingleBlock.svelte';
	import { isImageOffsetPageHeader } from '$lib/utils/pageHeaderUtils';

	let { content }: { content: components['schemas']['BlogContentResponseModel'] } = $props();

	let isImageOffsetHeader = $derived(isImageOffsetPageHeader(content.properties?.pageHeader));
</script>

{#if content.properties?.pageHeader}
	<SingleBlock block={content.properties.pageHeader} />
{/if}

<main
	class="container mx-auto px-4 py-12 {isImageOffsetHeader
		? 'relative z-10 -mt-24 bg-white/30 ring-1 ring-zinc-200/50 backdrop-blur-sm md:rounded-t-2xl md:bg-white dark:bg-zinc-950/30 dark:ring-zinc-800/50 dark:md:bg-zinc-950'
		: ''}"
	id="main-content"
>
	<div class="mb-10">
		<p class="mb-2 text-xs font-semibold tracking-widest text-red-600 uppercase dark:text-red-400">
			Blog
		</p>
		<h1
			class="font-display text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl dark:text-zinc-50"
		>
			{content.name}
		</h1>
	</div>

	<!-- The Blocklist -->
	{#if content.properties?.pageContent?.items}
		<BlockList items={content.properties.pageContent.items} />
	{/if}
</main>
