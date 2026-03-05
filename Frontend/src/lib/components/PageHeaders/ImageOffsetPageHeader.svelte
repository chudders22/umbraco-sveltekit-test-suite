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
	<section class="relative w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
		<div class="relative max-h-[33vh] w-full overflow-hidden md:aspect-[3/1]">
			<img src={imageUrl} alt={imageAlt} class="h-full w-full object-cover" />
			<!-- Subtle gradient fade at the bottom for visual polish -->
			<div
				class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/60 to-transparent"
			></div>
		</div>
	</section>
{/if}
