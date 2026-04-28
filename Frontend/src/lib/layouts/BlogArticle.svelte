<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	import BlockList from '$lib/components/BlockList.svelte';
	import SingleBlock from '$lib/components/SingleBlock.svelte';
	import SocialMediaShare from '$lib/components/SocialMediaShare/SocialMediaShare.svelte';
	import TagPill from '$lib/components/TagPill/TagPill.svelte';
	import { isImageOffsetPageHeader } from '$lib/utils/pageHeaderUtils';
	import { page } from '$app/state';

	let { content }: { content: components['schemas']['BlogArticleContentResponseModel'] } = $props();
	let isImageOffsetHeader = $derived(isImageOffsetPageHeader(content.properties?.pageHeader));

	type TagBase = components['schemas']['IApiContentModelBase'];
	type ArchiveMonth = { year: number; month: number; label: string; count: number };
	type ArticlePageData = { sidebarTags?: unknown[]; archiveMonths?: ArchiveMonth[] };

	const sidebarTags = $derived(
		((page.data as ArticlePageData).sidebarTags ?? []) as unknown as TagBase[]
	);
	const archiveMonths = $derived((page.data as ArticlePageData).archiveMonths ?? []);

	const ARCHIVE_LIMIT = 12;
	const visibleArchive = $derived(archiveMonths.slice(0, ARCHIVE_LIMIT));
	const hasMoreArchive = $derived(archiveMonths.length > ARCHIVE_LIMIT);

	const displayDate = $derived(
		new Date(content.properties?.publishDate ?? content.createDate).toLocaleDateString('en-GB', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		})
	);
	const displayDatetime = $derived(content.properties?.publishDate ?? content.createDate);
</script>

{#if content.properties?.pageHeader}
	<SingleBlock block={content.properties.pageHeader} />
{/if}

<div
	class="container mx-auto px-4 py-12 md:px-8 lg:px-12 {isImageOffsetHeader
		? 'relative z-10 -mt-24'
		: ''}"
	id="main-content"
>
	<header class="mb-12 border-b border-zinc-200 pb-8 dark:border-zinc-800 {isImageOffsetHeader
		? 'bg-white/30 ring-1 ring-zinc-200/50 backdrop-blur-sm md:rounded-t-2xl md:bg-white dark:bg-zinc-950/30 dark:ring-zinc-800/50 dark:md:bg-zinc-950'
		: ''}">
		<h1
			class="mb-3 font-display text-4xl font-bold tracking-tighter text-zinc-900 md:text-5xl dark:text-zinc-50"
		>
			{content.name}
		</h1>
		<div class="mt-4 flex items-center justify-between gap-4">
			<time
				datetime={displayDatetime}
				class="text-xs font-medium tracking-wider text-zinc-400 uppercase dark:text-zinc-500"
			>
				{displayDate}
			</time>
			<SocialMediaShare title={content.name ?? undefined} />
		</div>
		{#if content.properties?.tags?.length}
			<div class="mt-4 flex flex-wrap gap-2" aria-label="Tags">
				{#each content.properties.tags as tag (tag.id)}
					<TagPill {tag} />
				{/each}
			</div>
		{/if}
	</header>

	<div class="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12 xl:grid-cols-[1fr_300px]">
		<article>
			{#if content.properties?.pageContent?.items}
				<BlockList items={content.properties.pageContent.items} />
			{/if}
		</article>

		<aside class="mt-12 lg:mt-0" aria-label="Blog sidebar">
			{#if sidebarTags.length > 0}
				<section class="mb-8">
					<h2
						class="mb-4 text-xs font-semibold tracking-widest text-zinc-400 uppercase dark:text-zinc-500"
					>
						Browse by tag
					</h2>
					<div class="flex flex-wrap gap-2">
						{#each sidebarTags as tag (tag.id)}
							<TagPill tag={tag as unknown as components['schemas']['IApiContentModel']} />
						{/each}
					</div>
				</section>
			{/if}

			{#if archiveMonths.length > 0}
				<section>
					<h2
						class="mb-4 text-xs font-semibold tracking-widest text-zinc-400 uppercase dark:text-zinc-500"
					>
						Archive
					</h2>
					<ul class="space-y-1">
						{#each visibleArchive as entry}
							<li>
								<a
									href="/blog/archive/{entry.year}/{String(entry.month).padStart(2, '0')}"
									class="group flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-red-600 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-red-400"
								>
									{entry.label}
									<span
										class="ml-3 rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 transition-colors group-hover:bg-red-100 group-hover:text-red-600 dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:bg-red-950/40 dark:group-hover:text-red-400"
									>
										{entry.count}
									</span>
								</a>
							</li>
						{/each}
					</ul>
					{#if hasMoreArchive}
						<a
							href="/blog"
							class="mt-3 flex items-center gap-1 text-xs font-medium text-zinc-400 transition-colors hover:text-red-600 dark:text-zinc-500 dark:hover:text-red-400"
						>
							View all posts
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-3 w-3" aria-hidden="true">
								<path fill-rule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clip-rule="evenodd" />
							</svg>
						</a>
					{/if}
				</section>
			{/if}
		</aside>
	</div>
</div>

