<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	import ButtonLink from './ButtonLink.svelte';

	let { heading, text, actions, image }: components['schemas']['CallToActionBlockPropertiesModel'] =
		$props();

	let imageUrl = $derived(image?.[0]?.url || '');
	let imageAlt = $derived(image?.[0]?.name || heading || 'Call to action');
</script>

<section
	class="relative overflow-hidden border-y border-zinc-100 bg-white dark:border-zinc-800 dark:bg-zinc-950"
>
	<!-- Dot-grid texture: dark lines in light mode, light lines in dark mode -->
	<div
		class="absolute inset-0 bg-[linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_right,black_40%,transparent_90%)] dark:hidden"
		aria-hidden="true"
	></div>
	<div
		class="absolute inset-0 hidden bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_right,black_40%,transparent_90%)] dark:block"
		aria-hidden="true"
	></div>

	<div class="relative flex flex-col items-stretch md:flex-row">
		<!-- Content Side -->
		<div class="flex flex-1 flex-col justify-center gap-6 px-8 py-8 md:px-12 lg:px-16 lg:py-12">
			<!-- Red accent bar -->
			<div class="h-0.5 w-32 bg-red-600" aria-hidden="true"></div>

			{#if heading}
				<h2
					class="font-display text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl lg:text-5xl dark:text-zinc-50"
				>
					{heading}
				</h2>
			{/if}

			{#if text?.markup}
				<div
					class="prose max-w-none text-lg prose-p:text-zinc-600 dark:prose-p:text-zinc-300 prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-red-400"
				>
					{@html text.markup}
				</div>
			{/if}

			{#if actions && actions.length > 0}
				<div class="flex flex-wrap gap-3">
					{#each actions as action, i}
						{@const href = action.url || action.route?.path || '#'}
						<ButtonLink
							{href}
							target={action.target || '_self'}
							variant={i === 0 ? 'primary' : 'outline'}
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
					class="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-zinc-950 dark:via-zinc-950/70"
				></div>
			</div>
		{/if}
	</div>
</section>
