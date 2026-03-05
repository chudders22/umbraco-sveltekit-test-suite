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
	class="relative flex min-h-[33vh] items-center justify-start bg-gray-900 bg-cover bg-center bg-no-repeat"
	style="background-image: url('{bgImageUrl}');"
>
	<!-- Dark overlay to ensure text readability -->
	<div class="absolute inset-0 bg-black/25"></div>

	<div class="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
		<div
			class="max-w-3xl rounded-md border-l-4 border-red-600 bg-black/25 p-8 backdrop-blur-sm lg:p-12"
		>
			{#if heading}
				<h1 class="mb-4 text-3xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
					{heading}
				</h1>
			{/if}

			{#if subheading}
				<p class="mb-8 text-lg text-slate-200 md:text-xl">
					{subheading}
				</p>
			{/if}

			{#if cta && cta.url}
				<a
					href={cta.url}
					target={cta.target}
					class="group inline-flex items-center gap-4 rounded-md bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700"
				>
					{cta.title || 'Learn More'}
					<span class="transition-transform group-hover:translate-x-2">→</span>
				</a>
			{/if}
		</div>
	</div>
</section>
