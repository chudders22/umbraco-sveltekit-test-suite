<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	import BlockList from '$lib/components/BlockList.svelte';

	let { content }: { content: components['schemas']['HomepageContentResponseModel'] } = $props();
</script>

<main id="main-content">
	{#if content.properties?.pageContent?.items}
		<BlockList items={content.properties.pageContent.items} />
	{/if}
</main>
