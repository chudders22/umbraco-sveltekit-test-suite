<script lang="ts">
	import type { components } from '$lib/types/umbraco';

	let { headingText }: components['schemas']['HeadingPropertiesModel'] = $props();
</script>

{#if headingText}
	<h2
		class="font-display text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl lg:text-5xl dark:text-zinc-50"
	>
		{headingText}
	</h2>
{/if}
