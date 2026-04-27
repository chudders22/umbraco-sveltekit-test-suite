<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	import BlockList from '$lib/components/BlockList.svelte';
	import SingleBlock from '$lib/components/SingleBlock.svelte';
	import { isImageOffsetPageHeader } from '$lib/utils/pageHeaderUtils';

	let { content }: { content: components['schemas']['BlogArticleContentResponseModel'] } = $props();
	let isImageOffsetHeader = $derived(isImageOffsetPageHeader(content.properties?.pageHeader));
</script>

{#if content.properties?.pageHeader}
	<SingleBlock block={content.properties.pageHeader} />
{/if}

<article
	class="container mx-auto px-4 py-12 md:px-8 lg:px-12 {isImageOffsetHeader
		? 'relative z-10 -mt-24 bg-white/30 ring-1 ring-zinc-200/50 backdrop-blur-sm md:rounded-t-2xl md:bg-white dark:bg-zinc-950/30 dark:ring-zinc-800/50 dark:md:bg-zinc-950'
		: ''}"
	id="main-content"
>
	<header class="mb-12 border-b border-zinc-200 pb-8 dark:border-zinc-800">
		<h1
			class="mb-3 font-display text-4xl font-bold tracking-tighter text-zinc-900 md:text-5xl dark:text-zinc-50"
		>
			{content.name}
		</h1>
		<time
			datetime={content.createDate}
			class="text-xs font-medium tracking-wider text-zinc-400 uppercase dark:text-zinc-500"
		>
			{new Date(content.createDate).toLocaleDateString('en-GB', {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
			})}
		</time>
	</header>

	{#if content.properties?.pageContent?.items}
		<BlockList items={content.properties.pageContent.items} />
	{/if}
</article>
