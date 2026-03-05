<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	let { images = [] }: { images: components['schemas']['IApiMediaWithCropsModel'][] } = $props();
</script>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
	{#each images as image}
		<div
			class="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-xl dark:shadow-slate-900/50"
		>
			<img
				src={image.url}
				alt={image.name}
				class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
			/>
		</div>
	{/each}
</div>
