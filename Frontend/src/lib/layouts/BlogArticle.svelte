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
	class="container mx-auto px-4 py-8 md:px-8 lg:px-12 {isImageOffsetHeader
		? 'relative z-10 -mt-24 bg-white/20 shadow-lg backdrop-blur-sm md:rounded-t-2xl md:bg-white dark:bg-slate-900/20 dark:md:bg-slate-900'
		: ''}"
>
	<header class="mb-10">
		<h1 class="mb-4 text-4xl font-bold dark:text-white">{content.name}</h1>
		<time datetime={content.createDate} class="text-gray-500 dark:text-gray-400"
			>{new Date(content.createDate).toLocaleDateString()}</time
		>
	</header>

	{#if content.properties?.pageContent?.items}
		<BlockList items={content.properties.pageContent.items} />
	{/if}
</article>
