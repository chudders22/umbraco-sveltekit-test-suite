<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	import ButtonLink from './ButtonLink.svelte';

	let { heading, text, actions, image }: components['schemas']['CallToActionBlockPropertiesModel'] =
		$props();

	let imageUrl = $derived(image?.[0]?.url || '');
	let imageAlt = $derived(image?.[0]?.name || heading || 'Call to action');
</script>

<section
	class="relative overflow-hidden bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
>
	<div class="flex flex-col items-center gap-8 md:flex-row">
		<!-- Content Side -->
		<div class="flex flex-1 flex-col gap-8 px-8 py-12 md:px-12 lg:px-16 lg:py-16">
			{#if heading}
				<h2
					class="mb-4 text-3xl leading-tight font-bold text-red-600 md:text-4xl lg:text-5xl dark:text-white"
				>
					{heading}
				</h2>
			{/if}

			{#if text?.markup}
				<div
					class="prose max-w-none text-xl font-semibold transition-colors prose-slate dark:prose-invert prose-a:font-semibold prose-a:text-red-600 hover:prose-a:text-red-700 dark:prose-a:text-red-400 dark:hover:prose-a:text-red-300"
				>
					{@html text.markup}
				</div>
			{/if}

			{#if actions && actions.length > 0}
				<div class="flex flex-wrap gap-4">
					{#each actions as action, i}
						{@const href = action.url || action.route?.path || '#'}
						<ButtonLink
							{href}
							target={action.target || '_self'}
							variant={i === 0 ? 'secondary' : 'outline'}
							label={action.title || 'Learn More'}
							showArrow={i === 0}
						/>
					{/each}
				</div>
			{/if}
		</div>

		<!-- Image Side -->
		{#if imageUrl}
			<div class="relative flex-1 self-stretch">
				<img
					src={imageUrl}
					alt={imageAlt}
					class="h-full min-h-[300px] w-full object-cover"
					loading="lazy"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-r from-slate-50/75 via-slate-100/50 to-transparent dark:from-slate-950 dark:via-slate-900/50 dark:to-transparent"
				></div>
			</div>
		{/if}
	</div>
</section>
