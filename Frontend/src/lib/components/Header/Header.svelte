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

	function resolveLinkHref(link: components['schemas']['ApiLinkModel']): string {
		if (link.url) return link.url;
		if (link.route?.path) return link.route.path;
		return '#';
	}

	let openAreaId = $state<string | null>(null);
	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && mobileMenuOpen) {
			mobileMenuOpen = false;
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

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

		{#if links && links.items && links.items.length > 0}
			<!-- Desktop Navigation -->
			<nav class="hidden md:block" aria-label="Main navigation">
				<ul class="flex items-center gap-0.5">
					{#each links.items as item}
						{#if item.content.contentType === 'navigationArea' && item.content.properties}
							<NavigationArea
								{item}
								isOpen={openAreaId === item.content.id}
								onToggle={(isOpen: boolean) => {
									openAreaId = isOpen ? item.content.id : null;
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
					aria-expanded={mobileMenuOpen}
					aria-controls="mobile-menu"
					onclick={toggleMobileMenu}
					class="inline-flex items-center justify-center rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:outline-none md:hidden dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-red-400"
				>
					<span class="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
					{#if mobileMenuOpen}
						<svg
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
						</svg>
					{:else}
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
					{/if}
				</button>
			</div>
		{/if}
	</div>

	<!-- Mobile Navigation Panel -->
	{#if mobileMenuOpen && links?.items?.length > 0}
		<nav
			id="mobile-menu"
			aria-label="Mobile navigation"
			class="border-t border-zinc-200/80 bg-white/95 backdrop-blur-md md:hidden dark:border-zinc-800/80 dark:bg-zinc-950/95"
		>
			<ul class="container mx-auto flex flex-col gap-6 px-4 py-6 sm:px-6">
				{#each links.items as item}
					{#if item.content.contentType === 'navigationArea' && item.content.properties}
						{@const itemProps = item.content.properties as any}
						<li>
							{#if itemProps.title?.content?.contentType === 'naviationTitleLink' && itemProps.title.content.properties?.titleLink?.length > 0}
								{@const linkProp = itemProps.title.content.properties.titleLink[0]}
								<a
									href={resolveLinkHref(linkProp)}
									target={linkProp.target}
									onclick={closeMobileMenu}
									class="mb-2 block text-sm font-semibold text-zinc-900 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:outline-none dark:text-zinc-50"
								>
									{linkProp.title || 'Link'}
								</a>
							{:else if itemProps.title?.content?.contentType === 'navigationTitle'}
								<p
									class="mb-2 text-xs font-semibold tracking-wider text-zinc-400 uppercase dark:text-zinc-500"
								>
									{itemProps.title.content.properties?.title || ''}
								</p>
							{/if}

							{#if itemProps.links && itemProps.links.length > 0}
								<ul class="flex flex-col gap-1">
									{#each itemProps.links as link}
										<li>
											<a
												href={resolveLinkHref(link)}
												target={link.target}
												onclick={closeMobileMenu}
												class="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:outline-none focus-visible:ring-inset dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
											>
												{link.title || 'Link'}
											</a>
										</li>
									{/each}
								</ul>
							{/if}
						</li>
					{/if}
				{/each}
			</ul>
		</nav>
	{/if}
</header>

