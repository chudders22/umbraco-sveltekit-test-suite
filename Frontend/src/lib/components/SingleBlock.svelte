<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	import { componentMap } from '../utils/componentMap';

	let {
		block
	}: {
		block:
			| components['schemas']['ApiBlockItemModel']
			| components['schemas']['ApiBlockGridItemModel']
			| null
			| undefined;
	} = $props();
</script>

{#if block}
	{@const SvelteComp = componentMap[block.content.contentType]}
	{#if SvelteComp}
		<SvelteComp {...block.content.properties} />
	{:else}
		<div
			class="rounded bg-yellow-100 p-4 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
		>
			Warning: Unrecognized single-block component "{block.content.contentType}"
		</div>
	{/if}
{/if}
