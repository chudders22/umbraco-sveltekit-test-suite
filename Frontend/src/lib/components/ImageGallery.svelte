<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	let { images = [] }: { images: components['schemas']['IApiMediaWithCropsModel'][] } = $props();
</script>

<div class="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
	{#each images as image}
		<div
			class="group aspect-video overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200 transition-all duration-300 hover:ring-zinc-300 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:ring-zinc-700"
		>
			<img
				src={image.url}
				alt={image.name}
				class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			/>
		</div>
	{/each}
</div>
