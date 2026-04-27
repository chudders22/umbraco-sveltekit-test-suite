<script lang="ts">
	import type { components } from '$lib/types/umbraco';

	let {
		logos,
		standalone = true
	}: components['schemas']['LogoCloudBlockPropertiesModel'] & { standalone?: boolean } = $props();

	let items = $derived(logos?.items ?? []);
</script>

{#if standalone}
	<section
		class="border-y border-zinc-100 bg-white py-10 md:py-14 dark:border-zinc-800 dark:bg-zinc-950"
		aria-label="Client logos"
	>
		{#if items.length > 0}
			<div class="container mx-auto px-4">
				<ul class="flex flex-wrap items-center justify-center gap-x-20 gap-y-10" role="list">
					{#each items as item}
						{@const logo = item.content
							.properties as components['schemas']['LogoBlockPropertiesModel']}
						{@const imgUrl = logo.logo?.[0]?.url}
						{@const name = logo.logoName ?? ''}
						{#if imgUrl}
							<li class="flex items-center justify-center">
								<figure>
									<img
										src={imgUrl}
										alt=""
										aria-hidden="true"
										class="h-10 w-auto max-w-[140px] object-contain grayscale opacity-60 transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90 dark:invert dark:opacity-50 dark:hover:scale-105 dark:hover:opacity-75"
										loading="lazy"
									/>
									{#if name}<figcaption class="sr-only">{name}</figcaption>{/if}
								</figure>
							</li>
						{/if}
					{/each}
				</ul>
			</div>
		{:else}
			<div class="container mx-auto px-4">
				<div
					class="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30"
				>
					<p class="text-sm text-zinc-500 dark:text-zinc-400">No logos have been added yet.</p>
				</div>
			</div>
		{/if}
	</section>
{:else}
	<!-- Inline/embedded mode: container-query grid, bigger logos, no section wrapper -->
	{#if items.length > 0}
		<div class="@container">
			<ul class="grid grid-cols-2 gap-x-8 gap-y-6 @sm:grid-cols-3 @lg:grid-cols-4" role="list">
				{#each items as item}
					{@const logo = item.content
						.properties as components['schemas']['LogoBlockPropertiesModel']}
					{@const imgUrl = logo.logo?.[0]?.url}
					{@const name = logo.logoName ?? ''}
					{#if imgUrl}
						<li class="flex items-center">
							<figure>
								<img
									src={imgUrl}
									alt=""
									aria-hidden="true"
									class="h-24 w-auto max-w-[160px] object-contain grayscale opacity-50 transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-80 dark:invert dark:opacity-40 dark:hover:scale-105 dark:hover:opacity-65"
									loading="lazy"
								/>
								{#if name}<figcaption class="sr-only">{name}</figcaption>{/if}
							</figure>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	{:else}
		<p class="text-sm text-zinc-400 dark:text-zinc-600">No partner logos added yet.</p>
	{/if}
{/if}
