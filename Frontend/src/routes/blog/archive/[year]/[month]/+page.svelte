<script lang="ts">
	import type { PageData } from './$types';
	import BlogArticleCard from '$lib/components/BlogListing/BlogArticleCard.svelte';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Archive: {data.label}</title>
</svelte:head>

<main class="container mx-auto px-4 py-16 md:px-8 lg:px-12" id="main-content">
	<header class="mb-12 border-b border-zinc-200 pb-8 dark:border-zinc-800">
		<nav class="mb-3 text-xs font-medium tracking-wider text-zinc-400 uppercase dark:text-zinc-500">
			<a href="/blog" class="hover:text-red-600 dark:hover:text-red-400">All posts</a>
			<span class="mx-2" aria-hidden="true">›</span>
			<span>Archive</span>
		</nav>
		<h1 class="font-display text-4xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50">
			{data.label}
		</h1>
		<p class="mt-3 text-sm text-zinc-400 dark:text-zinc-500">
			{data.articles.length}
			{data.articles.length === 1 ? 'article' : 'articles'}
		</p>
	</header>

	{#if data.articles.length > 0}
		<ul class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" role="list">
			{#each data.articles as article (article.id)}
				<li>
					<BlogArticleCard post={article} />
				</li>
			{/each}
		</ul>
	{:else}
		<p class="text-zinc-500 dark:text-zinc-400">No articles published in {data.label}.</p>
	{/if}
</main>
