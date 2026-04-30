<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	import { PUBLIC_SITE_URL } from '$env/static/public';

	let {
		properties,
		fallbackTitle,
		url,
		contentType = 'website'
	}: {
		properties?: components['schemas']['CompositionPageMetadataPropertiesModel'] | null;
		fallbackTitle: string;
		url: string;
		contentType?: string;
	} = $props();

	let displayTitle = $derived(properties?.metaTitle || fallbackTitle || 'Umbraco SvelteKit Blog');
	let description = $derived(properties?.metaDescription);

	let siteBase = PUBLIC_SITE_URL?.replace(/\/$/, '') ?? '';
	let absoluteUrl = $derived(siteBase ? `${siteBase}${url}` : url);
	let ogType = $derived(contentType === 'blogArticle' ? 'article' : 'website');
	let defaultImageUrl = siteBase ? `${siteBase}/og-image.png` : undefined;
	let imageUrl = $derived(properties?.openGraphImage?.[0]?.url ?? defaultImageUrl);
</script>

<svelte:head>
	<title>{displayTitle}</title>
	<link rel="canonical" href={absoluteUrl} />

	{#if description}
		<meta name="description" content={description} />
	{/if}

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={ogType} />
	<meta property="og:title" content={displayTitle} />
	<meta property="og:url" content={absoluteUrl} />
	{#if description}
		<meta property="og:description" content={description} />
	{/if}
	{#if imageUrl}
		<meta property="og:image" content={imageUrl} />
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
