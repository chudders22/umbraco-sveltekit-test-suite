<script lang="ts">
	import { page } from '$app/stores';
	import type { components } from '$lib/types/umbraco';
	import { PUBLIC_UMBRACO_API_URL } from '$env/static/public';
	import BlogArticleCard from './BlogArticleCard.svelte';
	import Button from '../Button.svelte';

	interface Props {
		pageSize?: number | null;
	}

	// We receive pageSize directly because BlockList.svelte spreads item.content.properties
	let { pageSize = 6 }: Props = $props();

	// Initial data loaded from SSR (via +page.server.ts)
	let posts = $state<components['schemas']['BlogArticleContentResponseModel'][]>(
		$page.data.initialBlogPosts || []
	);

	// Start skip offset based on how many posts the server actually loaded initialy
	let skip = $state($page.data.initialBlogPosts ? $page.data.initialBlogPosts.length : 6);
	let loading = $state(false);
	let allFetched = $state(false);

	// if total fetched posts was shorter than what was requested naturally or if allFetched is true
	// initial load will have posts.length <= numericPageSize. We should assume hasMore true until proven otherwise.
	let hasMore = $derived(!allFetched && posts.length >= (pageSize || 6));

	async function loadMore() {
		if (loading || !hasMore) return;
		loading = true;

		try {
			const res = await fetch(
				`${PUBLIC_UMBRACO_API_URL}/umbraco/delivery/api/v2/content?filter=contentType:blogArticle&sort=createDate:desc&take=${pageSize || 6}&skip=${skip}`
			);

			if (res.ok) {
				const data = await res.json();
				const newPosts = data.items || [];

				posts = [...posts, ...newPosts];
				skip += pageSize || 6;

				// If we fetched fewer items than the page size, we've reached the end
				if (newPosts.length < (pageSize || 6)) {
					allFetched = true;
				}
			} else {
				console.error('Failed to load more posts');
			}
		} catch (e) {
			console.error('Error fetching more posts:', e);
		} finally {
			loading = false;
		}
	}
</script>

<div class="container mx-auto py-8">
	<!-- Grid Layout for Posts -->
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each posts as post}
			<BlogArticleCard {post} />
		{/each}
	</div>

	<!-- Load More Button -->
	{#if hasMore}
		<div class="mt-12 text-center">
			<Button
				onclick={loadMore}
				{loading}
				variant="primary"
				size="md"
				label="Load older articles"
			/>
		</div>
	{/if}

	<!-- Empty State -->
	{#if posts.length === 0 && !loading}
		<div class="py-12 text-center">
			<p class="text-lg text-slate-500 dark:text-slate-400">No articles found.</p>
		</div>
	{/if}
</div>
