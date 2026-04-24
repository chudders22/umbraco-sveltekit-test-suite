<script lang="ts">
	import type { components } from '$lib/types/umbraco';

	let {
		image
	}: {
		image?: components['schemas']['IApiMediaWithCropsModel'][] | null;
	} = $props();

	let imageUrl = $derived(image?.[0]?.url || '');
	let imageAlt = $derived(image?.[0]?.name || '');
</script>

{#if imageUrl}
	<section class="relative w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
		<div class="relative max-h-[40vh] w-full overflow-hidden md:aspect-[3/1]">
			<img src={imageUrl} alt={imageAlt} class="h-full w-full object-cover" />
			<!-- Full-height fade to page background -->
			<div
				class="absolute inset-0 bg-gradient-to-t from-white to-transparent dark:from-zinc-950"
			></div>
		</div>
	</section>
{/if}
