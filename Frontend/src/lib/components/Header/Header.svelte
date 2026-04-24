<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	import Logo from './Logo.svelte';
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
	class="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-md transition-colors dark:border-zinc-800/80 dark:bg-zinc-950/90"
>
	<div class="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
		<!-- Logo & Site Name -->
		<a
			href="/"
			class="flex items-center gap-2.5 rounded-lg text-zinc-900 transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:outline-none dark:text-white dark:focus-visible:ring-red-400 dark:focus-visible:ring-offset-zinc-950"
		>
			<span class="block h-12">
				<Logo />
			</span>
		</a>

		<!-- Navigation Links -->
		{#if links && links.items && links.items.length > 0}
			<nav class="hidden md:block" aria-label="Main navigation">
				<ul class="flex items-center gap-0.5">
					{#each links.items as item}
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

			<div class="flex items-center gap-1">
				<ThemeToggle />

				<!-- Mobile Menu Button -->
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:outline-none md:hidden dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-red-400"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="h-5 w-5"
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
