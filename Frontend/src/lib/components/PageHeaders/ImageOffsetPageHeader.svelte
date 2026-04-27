<script lang="ts">
	import type { components } from '$lib/types/umbraco';

	let {
		image,
		title,
		route
	}: {
		image?: components['schemas']['IApiMediaWithCropsModel'][] | null;
		title?: string | null;
		route?: string | null;
	} = $props();

	let bgImageUrl = $derived(image?.[0]?.url || '');

	interface Crumb {
		label: string;
		href: string;
	}

	let breadcrumbs = $derived.by<Crumb[]>(() => {
		const segments = (route ?? '').split('/').filter(Boolean);
		const crumbs: Crumb[] = [{ label: 'Home', href: '/' }];
		segments.slice(0, -1).forEach((seg, i) => {
			crumbs.push({
				label: seg
					.split('-')
					.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
					.join(' '),
				href: '/' + segments.slice(0, i + 1).join('/')
			});
		});
		return crumbs;
	});

	let currentLabel = $derived(
		title ??
			(route ?? '')
				.split('/')
				.filter(Boolean)
				.pop()
				?.split('-')
				.map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
				.join(' ') ??
			''
	);
</script>

<section
	class="relative flex min-h-[35vh] items-center overflow-hidden bg-zinc-50 bg-cover bg-center bg-no-repeat dark:bg-zinc-950"
	style={bgImageUrl ? `background-image: url('${bgImageUrl}')` : undefined}
	aria-label={currentLabel ? `${currentLabel} page header` : 'Page header'}
>
	<div
		class="absolute inset-0 bg-gradient-to-r from-zinc-50/98 via-zinc-50/80 to-transparent dark:from-zinc-950/98 dark:via-zinc-950/85 dark:to-zinc-950/40"
		aria-hidden="true"
	></div>
	<div
		class="absolute inset-0 bg-gradient-to-t from-zinc-50/70 to-transparent dark:from-zinc-950/70"
		aria-hidden="true"
	></div>
	<div
		class="absolute -top-16 left-24 h-64 w-64 rounded-full bg-red-500/10 blur-3xl"
		aria-hidden="true"
	></div>

	<div class="relative z-10 container mx-auto px-4 py-16 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			{#if breadcrumbs.length > 0}
				<nav aria-label="Breadcrumb" class="mb-6">
					<ol class="flex flex-wrap items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
						{#each breadcrumbs as crumb}
							<li class="flex items-center gap-1.5">
								<a
									href={crumb.href}
									class="transition-colors hover:text-zinc-900 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-1 focus-visible:outline-none dark:hover:text-zinc-100"
								>
									{crumb.label}
								</a>
								<span aria-hidden="true" class="text-zinc-300 dark:text-zinc-600">/</span>
							</li>
						{/each}
						<li aria-current="page" class="font-medium text-zinc-700 dark:text-zinc-200">
							{currentLabel}
						</li>
					</ol>
				</nav>
			{/if}

			<div class="mb-5 h-0.5 w-32 bg-red-600" aria-hidden="true"></div>

			{#if currentLabel}
				<h1
					class="font-display text-4xl leading-none font-bold tracking-tighter text-zinc-900 md:text-5xl dark:text-white"
				>
					{currentLabel}
				</h1>
			{/if}
		</div>
	</div>
</section>
