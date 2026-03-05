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
	class="container mx-auto px-4 py-8 {isImageOffsetHeader
		? 'relative z-10 -mt-24	 bg-white/20 shadow-lg backdrop-blur-sm md:rounded-t-2xl md:bg-white dark:bg-slate-900/40 dark:md:bg-slate-900'
		: ''}"
>
	<h1 class="mb-4 text-4xl font-bold dark:text-white">{content.name}</h1>
	<p class="mb-8 text-xl text-gray-600 dark:text-gray-400">Latest Articles</p>

	<!-- The Blocklist -->
	{#if content.properties?.pageContent?.items}
		<BlockList items={content.properties.pageContent.items} />
	{/if}

	<!-- Blog Articles will eventually go here -->
	<div class="mt-12">
		<p class="text-gray-500 italic dark:text-gray-400">Blog articles list coming soon...</p>
	</div>
</main>
