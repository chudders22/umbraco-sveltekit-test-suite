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

	// Function to resolve an ApiLinkModel to a usable href
	function resolveLinkHref(link: components['schemas']['ApiLinkModel']): string {
		if (link.url) return link.url;
		if (link.route?.path) return link.route.path;
		return '#';
	}

	let itemProps: any = $derived(item.content.properties);

	function toggleMenu() {
		if (onToggle) {
			onToggle(!isOpen);
		}
	}

	// Close the dropdown when a link is clicked or focus is lost
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isOpen) {
			if (onToggle) onToggle(false);
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<li class="relative py-4">
	<!-- Title Handling -->
	{#if itemProps.title?.content?.contentType === 'naviationTitleLink' && itemProps.title.content.properties?.titleLink?.length > 0}
		{@const linkProp = itemProps.title.content.properties.titleLink[0]}
		<NavigationToggle {isOpen} title={linkProp.title || 'Link'} onclick={toggleMenu} />
	{:else if itemProps.title?.content?.contentType === 'navigationTitle'}
		<!-- Non-clickable Visual Grouping Title -->
		<NavigationToggle
			{isOpen}
			title={itemProps.title.content.properties?.title || 'Menu'}
			onclick={toggleMenu}
		/>
	{/if}

	<!-- Dropdown Links -->
	{#if itemProps.links && itemProps.links.length > 0}
		{#if isOpen}
			<div
				class="absolute top-full -left-4 z-50 w-56 rounded-xl border border-slate-100 bg-white py-2 shadow-xl dark:border-slate-700 dark:bg-slate-800"
			>
				{#each itemProps.links as link}
					<NavigationLink
						href={resolveLinkHref(link)}
						target={link.target}
						title={link.title || 'Link'}
						onclick={() => onToggle && onToggle(false)}
					/>
				{/each}

				<!-- "See all" link for clickable titles -->
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
	{/if}
</li>
