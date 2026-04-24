<script lang="ts">
	interface Props {
		sectionLabel?: string | null;
		projectTitle?: string | null;
		description?: string | null;
		image?: Array<{ url: string; name: string; mediaType: string; id: string; properties: object }> | null;
		tags?: string[] | null;
		client?: string | null;
		link?: Array<{
			title?: string | null;
			url?: string | null;
			target?: string | null;
			route?: { path: string } | null;
		}> | null;
	}

	let { sectionLabel, projectTitle, description, image, tags, client, link }: Props = $props();

	let img = $derived(image?.[0]);
	let cta = $derived(link?.[0]);
	let hasImage = $derived(!!img?.url);
	let hasTags = $derived(!!tags?.length);
</script>

<section class="bg-zinc-950 py-12 md:py-20">
	<div class="container mx-auto px-4">
		{#if sectionLabel}
			<p class="mb-8 text-xs font-semibold uppercase tracking-widest text-red-500">
				{sectionLabel}
			</p>
		{/if}

		<div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-5 lg:gap-12">
			<!-- Image -->
			<div class="lg:col-span-3">
				<div class="relative aspect-video overflow-hidden rounded-2xl">
					{#if hasImage}
						<img
							src={img!.url}
							alt={img!.name}
							class="h-full w-full object-cover"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent"
							aria-hidden="true"
						></div>
					{:else}
						<div class="h-full w-full bg-zinc-800" aria-hidden="true"></div>
					{/if}
				</div>
			</div>

			<!-- Content -->
			<div class="lg:col-span-2">
				{#if client}
					<p class="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">
						{client}
					</p>
				{/if}

				{#if projectTitle}
					<h2
						class="font-display mb-4 text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl"
					>
						{projectTitle}
					</h2>
				{/if}

				{#if description}
					<p class="mb-6 leading-relaxed text-zinc-300">{description}</p>
				{/if}

				{#if hasTags}
					<div class="flex flex-wrap gap-2">
						{#each tags! as tag}
							<span
								class="inline-flex items-center rounded-full border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-300"
							>
								{tag}
							</span>
						{/each}
					</div>
				{/if}

				{#if cta?.url}
					<a
						href={cta.url}
						target={cta.target ?? '_self'}
						class="group mt-6 flex items-center gap-2 font-semibold text-red-400 hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-400"
					>
						{cta.title ?? 'View project'}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				{/if}
			</div>
		</div>
	</div>
</section>
