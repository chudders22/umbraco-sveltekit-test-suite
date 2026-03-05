<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	import { PUBLIC_UMBRACO_API_URL } from '$env/static/public';

	interface Props {
		post: components['schemas']['BlogArticleContentResponseModel'];
	}

	let { post }: Props = $props();
</script>

<article
	class="relative flex flex-col overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-slate-900/5 transition-transform hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800 dark:ring-slate-100/10"
>
	<!-- Optional Image -->
	{#if post.properties?.openGraphImage?.[0]?.url}
		<div class="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
			<img
				src={post.properties.openGraphImage[0].url}
				alt={post.name}
				class="h-full w-full object-cover"
			/>
		</div>
	{/if}

	<div class="flex flex-1 flex-col p-6">
		<div class="mb-4 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
			<time datetime={post.createDate}>
				{new Date(post.createDate).toLocaleDateString('en-GB', {
					day: 'numeric',
					month: 'short',
					year: 'numeric'
				})}
			</time>
		</div>

		<h3 class="mb-2 text-xl leading-tight font-bold text-slate-900 dark:text-white">
			<!-- Note the absolute inset-0 span which makes the whole relative card clickable -->
			<a
				href={post.route?.path}
				class="rounded-sm transition-colors hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 dark:hover:text-red-400"
			>
				<span class="absolute inset-0" aria-hidden="true"></span>
				{post.name}
			</a>
		</h3>

		{#if post.properties?.metaDescription}
			<p class="mb-6 line-clamp-3 flex-1 text-sm text-slate-600 dark:text-slate-300">
				{post.properties.metaDescription}
			</p>
		{/if}

		<div
			class="group mt-auto flex items-center text-sm font-semibold text-red-600 dark:text-red-400"
		>
			Read article
			<svg
				class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M14 5l7 7m0 0l-7 7m7-7H3"
				/>
			</svg>
		</div>
	</div>
</article>
