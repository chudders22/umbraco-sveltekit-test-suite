<script lang="ts">
	import type { components } from '$lib/types/umbraco';

	let {
		heading,
		subheading,
		backgroundImage,
		ctaLink
	}: {
		heading?: string | null;
		subheading?: string | null;
		backgroundImage?: components['schemas']['IApiMediaWithCropsModel'][] | null;
		ctaLink?: components['schemas']['ApiLinkModel'][] | null;
	} = $props();

	let bgImageUrl = $derived(backgroundImage?.[0]?.url || '');
	let cta = $derived(ctaLink?.[0]);
</script>

<section
	class="relative flex min-h-[75vh] items-center overflow-hidden bg-zinc-900 bg-cover bg-center bg-no-repeat dark:bg-zinc-950"
	style={bgImageUrl ? `background-image: url('${bgImageUrl}')` : undefined}
>
	<!-- Directional gradient: dark left, transparent right -->
	<div
		class="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/80 to-zinc-950/30"
	></div>
	<!-- Bottom fade for grounding -->
	<div class="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent"></div>
	<!-- Ambient accent glow -->
	<div
		class="absolute -top-20 left-20 h-72 w-72 rounded-full bg-red-500/10 blur-3xl"
		aria-hidden="true"
	></div>

	<div class="relative z-10 container mx-auto px-4 py-24 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			{#if heading}
				<h1
					class="mb-6 font-display text-5xl leading-none font-bold tracking-tighter text-white md:text-7xl"
				>
					{heading}
				</h1>
			{/if}

			{#if subheading}
				<p class="mb-10 max-w-xl text-lg leading-relaxed text-zinc-300 md:text-xl">
					{subheading}
				</p>
			{/if}

			{#if cta && cta.url}
				<a
					href={cta.url}
					target={cta.target}
					class="group inline-flex items-center gap-3 rounded-lg bg-zinc-50 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:gap-4 hover:bg-white focus-visible:ring-2 focus-visible:ring-zinc-50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 focus-visible:outline-none"
				>
					{cta.title || 'Learn More'}
					<span class="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
				</a>
			{/if}
		</div>
	</div>
</section>
