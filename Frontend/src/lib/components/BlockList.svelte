<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	import { componentMap } from '../utils/componentMap';

	let { items = [] }: { items: components['schemas']['ApiBlockListModel']['items'] } = $props();
</script>

<div class="flex flex-col space-y-12">
	{#each items as item}
		{@const SvelteComp = componentMap[item.content.contentType]}
		{@const settings = item.settings as any}
		{@const isConstrained = settings?.properties?.constrainToContentColumn !== null}
		{#if SvelteComp}
			<section class={isConstrained ? 'container mx-auto' : ''}>
				<!-- Dynamically render the mapped component, passing all Umbraco properties as Svelte props -->
				<SvelteComp {...item.content.properties} />
			</section>
		{:else}
			<div
				class="rounded bg-yellow-100 p-4 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
			>
				Warning: Unrecognized block component "{item.content.contentType}"
			</div>
		{/if}
	{/each}
</div>
