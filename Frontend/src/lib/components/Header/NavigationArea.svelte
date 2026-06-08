<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	import NavigationToggle from './NavigationToggle.svelte';
	import NavigationLink from './NavigationLink.svelte';

	interface Props {
		item: components['schemas']['ApiBlockItemModel'];
		isOpen?: boolean;
		onToggle?: (isOpen: boolean) => void;
	}

	let { item, isOpen = false, onToggle }: Props = $props();

	function resolveLinkHref(link: components['schemas']['ApiLinkModel']): string {
		if (link.url) return link.url;
		if (link.route?.path) return link.route.path;
		return '#';
	}

	let itemProps: any = $derived(item.content.properties);
	let dropdownId = $derived(`nav-dropdown-${item.content.id ?? 'default'}`);
	let liEl: HTMLElement;

	function toggleMenu() {
		if (onToggle) {
			onToggle(!isOpen);
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isOpen) {
			if (onToggle) onToggle(false);
		}
	}

	function handleFocusOut(event: FocusEvent) {
		if (!liEl.contains(event.relatedTarget as Node | null)) {
			if (onToggle && isOpen) onToggle(false);
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<li bind:this={liEl} class="relative py-4" onfocusout={handleFocusOut}>
	{#if itemProps.links && itemProps.links.length > 0}
		{#if itemProps.title?.content?.contentType === 'naviationTitleLink' && itemProps.title.content.properties?.titleLink?.length > 0}
			{@const linkProp = itemProps.title.content.properties.titleLink[0]}
			<NavigationToggle
				{isOpen}
				title={linkProp.title || 'Link'}
				onclick={toggleMenu}
				controls={dropdownId}
			/>
		{:else if itemProps.title?.content?.contentType === 'navigationTitle'}
			<NavigationToggle
				{isOpen}
				title={itemProps.title.content.properties?.title || 'Menu'}
				onclick={toggleMenu}
				controls={dropdownId}
			/>
		{/if}

		{#if isOpen}
			<div
				id={dropdownId}
				class="absolute top-full left-0 z-50 mt-1 min-w-[200px] rounded-xl bg-white p-1 shadow-xl ring-1 shadow-zinc-900/5 ring-zinc-200/80 dark:bg-zinc-900 dark:shadow-zinc-950/50 dark:ring-zinc-800"
			>
				{#each itemProps.links as link}
					<NavigationLink
						href={resolveLinkHref(link)}
						target={link.target}
						title={link.title || 'Link'}
						onclick={() => onToggle && onToggle(false)}
					/>
				{/each}

				{#if itemProps.title?.content?.contentType === 'naviationTitleLink' && itemProps.title.content.properties?.titleLink?.length > 0}
					{@const linkProp = itemProps.title.content.properties.titleLink[0]}
					<NavigationLink
						href={resolveLinkHref(linkProp)}
						target={linkProp.target}
						title={`See all ${linkProp.title || 'Link'}`}
						isFeatured={true}
						onclick={() => onToggle && onToggle(false)}
					/>
				{/if}
			</div>
		{/if}
	{:else if itemProps.title?.content?.contentType === 'naviationTitleLink' && itemProps.title.content.properties?.titleLink?.length > 0}
		{@const linkProp = itemProps.title.content.properties.titleLink[0]}
		<a
			href={resolveLinkHref(linkProp)}
			target={linkProp.target}
			class="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-zinc-500 transition-all hover:bg-zinc-100 hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:outline-none dark:text-zinc-400 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-50 dark:focus-visible:ring-red-400 dark:focus-visible:ring-offset-zinc-950"
		>
			{linkProp.title || 'Link'}
		</a>
	{:else if itemProps.title?.content?.contentType === 'navigationTitle'}
		<span
			class="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-zinc-500 dark:text-zinc-400"
		>
			{itemProps.title.content.properties?.title || 'Menu'}
		</span>
	{/if}
</li>
