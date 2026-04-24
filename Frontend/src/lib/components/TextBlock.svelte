<script lang="ts">
	import type { components } from '$lib/types/umbraco';

	let { text }: components['schemas']['TextBlockPropertiesModel'] = $props();
</script>

<div
	class="prose max-w-none transition-colors prose-zinc dark:prose-invert prose-headings:font-display prose-headings:tracking-tight prose-a:font-medium prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-red-400"
>
	{#if text?.markup}
		{@html text.markup}
	{/if}
</div>
