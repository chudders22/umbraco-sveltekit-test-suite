<script lang="ts">
	import { page } from '$app/stores';
	import type { components } from '$lib/types/umbraco';
	import { PUBLIC_UMBRACO_API_URL } from '$env/static/public';
	import BlogArticleCard from './BlogArticleCard.svelte';
	import Button from '../Button/Button.svelte';

	interface Props {
		pageSize?: number | null;
		title?: string | null;
		subTitle?: string | null;
	}

	// We receive pageSize directly because BlockList.svelte spreads item.content.properties
	let { pageSize = 6, title, subTitle }: Props = $props();

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

<div class="container mx-auto py-8 md:py-12">
	{#if title || subTitle}
		<header class="mb-8 lg:w-1/2">
			{#if title}
				<h2
					class="font-display text-3xl font-semibold tracking-widest text-zinc-500 uppercase md:text-4xl dark:text-zinc-400"
				>
					{title}
				</h2>
			{/if}
			{#if subTitle}
				<p class="mt-1 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
					{subTitle}
				</p>
			{/if}
		</header>
	{/if}

	<!-- Grid Layout for Posts -->
	<div class="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-4">
		{#each posts as post}
			<BlogArticleCard {post} />
		{/each}
	</div>

	<!-- Load More Button -->
	{#if hasMore}
		<div class="mt-16 flex justify-center">
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
		<div class="py-24 text-center">
			<p class="text-sm text-zinc-500 dark:text-zinc-400">No articles found.</p>
		</div>
	{/if}
</div>
