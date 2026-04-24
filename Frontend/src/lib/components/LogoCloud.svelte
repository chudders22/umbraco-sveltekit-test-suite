<script lang="ts">
	import type { components } from '$lib/types/umbraco';

	let { logos }: components['schemas']['LogoCloudBlockPropertiesModel'] = $props();

	let items = $derived(logos?.items ?? []);
</script>

<section
	class="border-y border-zinc-100 bg-white py-10 md:py-14 dark:border-zinc-800 dark:bg-zinc-950"
	aria-label="Client logos"
>
	{#if items.length > 0}
		<div class="container mx-auto px-4">
			<ul
				class="flex flex-wrap items-center justify-center gap-x-20 gap-y-10"
				role="list"
			>
				{#each items as item}
					{@const logo = item.content
						.properties as components['schemas']['LogoBlockPropertiesModel']}
					{@const imgUrl = logo.logo?.[0]?.url}
					{@const name = logo.logoName ?? ''}

					{#if imgUrl}
						<li class="flex items-center justify-center">
							<figure>
								<!--
									Grayscale throughout — hover lifts opacity and adds a gentle scale
									to acknowledge interaction without a jarring colour reveal.
									Dark mode: invert flips dark logos to read on dark backgrounds.
									alt="" marks the image decorative; figcaption carries the name
									for screen readers so the company is announced without redundancy.
								-->
								<img
									src={imgUrl}
									alt=""
									aria-hidden="true"
									class="h-10 w-auto max-w-[140px] object-contain
										grayscale opacity-60
										transition-all duration-300 ease-in-out
										hover:opacity-90 hover:scale-105
										dark:invert dark:opacity-50
										dark:hover:opacity-75 dark:hover:scale-105"
									loading="lazy"
								/>
								{#if name}
									<figcaption class="sr-only">{name}</figcaption>
								{/if}
							</figure>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	{:else}
		<div
			class="container mx-auto px-4"
		>
			<div
				class="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30"
			>
				<p class="text-sm text-zinc-500 dark:text-zinc-400">No logos have been added yet.</p>
			</div>
		</div>
	{/if}
</section>
