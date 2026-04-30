<script lang="ts">
	import type { Component } from 'svelte';
	import type { PageData } from './$types';
	import type { components } from '$lib/types/umbraco';
	import Homepage from '$lib/layouts/Homepage.svelte';
	import ContentPage from '$lib/layouts/ContentPage.svelte';
	import Blog from '$lib/layouts/Blog.svelte';
	import BlogArticle from '$lib/layouts/BlogArticle.svelte';
	import SEO from '$lib/components/SEO.svelte';

	let { data }: { data: PageData } = $props();

	// Block components have heterogeneous props; `any` is intentional here.
	// Type safety is enforced within each component's own $props() definition.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const pageLayouts: Record<string, Component<any>> = {
		homepage: Homepage,
		contentPage: ContentPage,
		blog: Blog,
		blogArticle: BlogArticle
	};

	let LayoutComponent = $derived(data.content ? pageLayouts[data.content.contentType] : null);

	// data.content is the generic base model; cast to extract the typed SEO properties.
	// The specific layout components handle their own typed content via their own props.
	let seoProperties = $derived(
		(
			data.content as unknown as {
				properties?: components['schemas']['CompositionPageMetadataPropertiesModel'];
			}
		)?.properties
	);
</script>

{#if data.content}
	<SEO
		fallbackTitle={data.content.name || ''}
		url={data.content.route.path}
		contentType={data.content.contentType}
		properties={seoProperties}
	/>
{/if}

{#if data.content && LayoutComponent}
	<!-- content type is resolved dynamically; each layout component handles its own typing -->
	<LayoutComponent content={data.content} />
{:else if data.content && !LayoutComponent}
	<main class="container mx-auto px-4 py-8 text-center text-gray-500">
		<h2 class="mb-4 text-2xl">Layout not found</h2>
		<p>
			We found content of type <code>{data.content.contentType}</code>, but no Svelte layout has
			been registered for it yet.
		</p>
	</main>
{/if}

