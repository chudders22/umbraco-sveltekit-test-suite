<script lang="ts">
	import type { components } from '$lib/types/umbraco';

	let { text }: components['schemas']['TextBlockPropertiesModel'] = $props();
</script>

<div
	class="prose max-w-none transition-colors prose-slate dark:prose-invert prose-a:font-semibold prose-a:text-red-600 hover:prose-a:text-red-700 dark:prose-a:text-red-400 dark:hover:prose-a:text-red-300"
>
	{#if text?.markup}
		{@html text.markup}
	{/if}
</div>
