<script lang="ts">
	import { untrack } from 'svelte';
	import { page } from '$app/state';
	import type { components } from '$lib/types/umbraco';
	import BlogArticleCard from './BlogArticleCard.svelte';
	import Button from '../Button/Button.svelte';

	interface Props {
		pageSize?: number | null;
		title?: string | null;
		subTitle?: string | null;
		initialBlogPosts?: components['schemas']['BlogArticleContentResponseModel'][];
	}

	let { pageSize = 6, title, subTitle, initialBlogPosts: initialBlogPostsProp }: Props = $props();

	// Prefer explicitly passed prop (e.g. from Storybook); fall back to SSR page data.
	// untrack prevents Svelte from warning about capturing a reactive prop in $state() init —
	// this is intentional: posts is mutable local state seeded once from the initial load.
	let posts = $state<components['schemas']['BlogArticleContentResponseModel'][]>(
		untrack(() => initialBlogPostsProp ?? page.data.initialBlogPosts ?? [])
	);

	let skip = $state(untrack(() => posts.length || pageSize || 6));
	let loading = $state(false);
	let allFetched = $state(false);

	let hasMore = $derived(!allFetched && posts.length >= (pageSize || 6));

	async function loadMore() {
		if (loading || !hasMore) return;
		loading = true;

		try {
			const res = await fetch(
				`/api/blog-posts?take=${pageSize || 6}&skip=${skip}`
			);

			if (res.ok) {
				const data = await res.json();
				const newPosts = data.items || [];

				posts = [...posts, ...newPosts];
				skip += pageSize || 6;

				if (newPosts.length < (pageSize || 6)) {
					allFetched = true;
				}
			} else {
				console.error('Failed to load more posts:', res.status);
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
