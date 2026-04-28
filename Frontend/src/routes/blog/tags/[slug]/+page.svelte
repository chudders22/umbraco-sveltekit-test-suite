<script lang="ts">
	import type { PageData } from './$types';
	import type { components } from '$lib/types/umbraco';
	import BlogArticleCard from '$lib/components/BlogListing/BlogArticleCard.svelte';

	type TagBase = components['schemas']['IApiContentModelBase'];
	type TagProperties = components['schemas']['TagPropertiesModel'];

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const tag = $derived(data.tag as unknown as TagBase & { properties?: TagProperties });
</script>

<svelte:head>
	<title>Articles tagged: {tag.name}</title>
</svelte:head>

<main class="container mx-auto px-4 py-16 md:px-8 lg:px-12" id="main-content">
	<header class="mb-12 border-b border-zinc-200 pb-8 dark:border-zinc-800">
		<p class="mb-2 text-xs font-medium tracking-wider text-zinc-400 uppercase dark:text-zinc-500">
			Tag
		</p>
		<h1 class="font-display text-4xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50">
			{tag.name}
		</h1>
		{#if tag.properties?.description}
			<p class="mt-4 max-w-2xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
				{tag.properties.description}
			</p>
		{/if}
		<p class="mt-6 text-sm text-zinc-400 dark:text-zinc-500">
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
		<p class="text-zinc-500 dark:text-zinc-400">No articles with this tag yet.</p>
	{/if}
</main>
