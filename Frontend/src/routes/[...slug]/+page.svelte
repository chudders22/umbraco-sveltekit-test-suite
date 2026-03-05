<script lang="ts">
	import type { Component } from 'svelte';
	import Homepage from '$lib/layouts/Homepage.svelte';
	import ContentPage from '$lib/layouts/ContentPage.svelte';
	import Blog from '$lib/layouts/Blog.svelte';
	import BlogArticle from '$lib/layouts/BlogArticle.svelte';
	import SEO from '$lib/components/SEO.svelte';

	let { data } = $props();

	// Map Umbraco Page Content Types to our layout wrappers
	const pageLayouts: Record<string, Component<any>> = {
		homepage: Homepage,
		contentPage: ContentPage,
		blog: Blog,
		blogArticle: BlogArticle
	};

	// The data.content represents the base API content model at the slug
	let LayoutComponent = $derived(data.content ? pageLayouts[data.content.contentType] : null);
</script>

{#if data.content}
	<!-- Pass properties to SEO component if they exist. Because IApiContentResponseModelBase properties is a record, we cast it -->
	<SEO
		fallbackTitle={data.content.name || ''}
		url={data.content.route.path}
		properties={(data.content as any).properties}
	/>
{/if}

{#if data.content && LayoutComponent}
	<LayoutComponent content={data.content as any} />
{:else if data.content && !LayoutComponent}
	<main class="container mx-auto px-4 py-8 text-center text-gray-500">
		<h2 class="mb-4 text-2xl">Layout not found</h2>
		<p>
			We found content of type <code>{data.content.contentType}</code>, but no Svelte layout has
			been registered for it yet.
		</p>
	</main>
{:else}
	<main class="container mx-auto px-4 py-8 text-center text-gray-500">
		<h2 class="mb-4 text-2xl">Page loading... or 404</h2>
		<p>No content could be retrieved from Umbraco at this URL.</p>
	</main>
{/if}
