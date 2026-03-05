<script lang="ts">
	import type { components } from '$lib/types/umbraco';

	let {
		properties,
		fallbackTitle,
		url
	}: {
		properties?: components['schemas']['CompositionPageMetadataPropertiesModel'] | null;
		fallbackTitle: string;
		url: string;
	} = $props();

	let displayTitle = $derived(properties?.metaTitle || fallbackTitle || 'Umbraco SvelteKit Blog');
	let description = $derived(properties?.metaDescription);
	let imageUrl = $derived(properties?.openGraphImage?.[0]?.url);
</script>

<svelte:head>
	<title>{displayTitle}</title>

	{#if description}
		<meta name="description" content={description} />
	{/if}

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={displayTitle} />
	{#if description}
		<meta property="og:description" content={description} />
	{/if}
	{#if imageUrl}
		<meta property="og:image" content={imageUrl} />
	{/if}
	{#if url}
		<meta property="og:url" content={url} />
	{/if}

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={displayTitle} />
	{#if description}
		<meta name="twitter:description" content={description} />
	{/if}
	{#if imageUrl}
		<meta name="twitter:image" content={imageUrl} />
	{/if}
</svelte:head>
