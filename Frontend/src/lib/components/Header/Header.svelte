<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	import NavigationArea from './NavigationArea.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	let {
		logo = null,
		siteName = null,
		links = { items: [] }
	}: components['schemas']['HeaderPropertiesModel'] = $props();

	// Function to resolve an ApiLinkModel to a usable href
	function resolveLinkHref(link: components['schemas']['ApiLinkModel']): string {
		if (link.url) return link.url;
		if (link.route?.path) return link.route.path;
		return '#';
	}

	let openAreaId = $state<string | null>(null);
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md transition-colors dark:border-slate-700 dark:bg-slate-900"
>
	<div class="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
		<!-- Logo & Site Name -->
		<a href="/" class="flex items-center gap-3 transition-opacity hover:opacity-80">
			{#if logo && logo.length > 0}
				<img
					src={logo[0].url}
					alt={siteName || 'Site Logo'}
					class="h-10 w-auto object-contain"
					loading="eager"
				/>
			{/if}
			{#if !logo && siteName}
				<span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
					>{siteName}</span
				>
			{/if}
		</a>

		<!-- Navigation Links -->
		{#if links && links.items && links.items.length > 0}
			<nav class="hidden md:block">
				<ul class="flex items-center gap-8">
					{#each links.items as item}
						<!-- Handling navigationArea BlockType -->
						{#if item.content.contentType === 'navigationArea' && item.content.properties}
							<NavigationArea
								{item}
								isOpen={openAreaId === item.content.id}
								onToggle={(isOpen: boolean) => {
									if (isOpen) {
										openAreaId = item.content.id;
									} else {
										openAreaId = null;
									}
								}}
							/>
						{/if}
					{/each}
				</ul>
			</nav>

			<div class="flex items-center gap-2">
				<ThemeToggle />

				<!-- Mobile Menu Button -->
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 md:hidden dark:hover:bg-slate-800 dark:hover:text-slate-300"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
		{/if}
	</div>
</header>
