<script lang="ts">
	import type { components } from '$lib/types/umbraco';

	interface Props {
		post: components['schemas']['BlogArticleContentResponseModel'];
	}

	let { post }: Props = $props();
</script>

<article
	class="group relative flex h-full flex-col border-l-2 border-l-zinc-200 py-1 pl-6 transition-all duration-200 focus-within:border-l-red-500 hover:border-l-red-500 dark:border-l-zinc-800 dark:focus-within:border-l-red-500 dark:hover:border-l-red-500"
>
	<time
		datetime={post.createDate}
		class="mb-3 block text-xs font-medium tracking-wider text-zinc-400 uppercase dark:text-zinc-500"
	>
		{new Date(post.createDate).toLocaleDateString('en-GB', {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		})}
	</time>

	<h3
		class="mb-3 font-display text-lg leading-snug font-bold tracking-tight text-zinc-900 transition-colors group-focus-within:text-red-600 group-hover:text-red-600 dark:text-zinc-50 dark:group-focus-within:text-red-500 dark:group-hover:text-red-500"
	>
		<a
			href={post.route?.path}
			class="rounded-sm focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:outline-none focus-visible:ring-inset dark:focus-visible:ring-red-400"
		>
			<span class="absolute inset-0" aria-hidden="true"></span>
			{post.name}
		</a>
	</h3>

	{#if post.properties?.metaDescription}
		<p class="mb-5 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
			{post.properties.metaDescription}
		</p>
	{/if}

	<span
		class="mt-auto flex items-center gap-1 text-xs font-semibold tracking-wide text-red-600 dark:text-red-400"
		aria-hidden="true"
	>
		Read article
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			fill="currentColor"
			class="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
			aria-hidden="true"
		>
			<path
				fill-rule="evenodd"
				d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
				clip-rule="evenodd"
			/>
		</svg>
	</span>
</article>
