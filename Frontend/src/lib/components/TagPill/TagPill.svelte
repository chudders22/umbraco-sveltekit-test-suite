<script lang="ts">
	import type { components } from '$lib/types/umbraco';

	type TagItem = components['schemas']['IApiContentModel'];

	interface Props {
		tag: TagItem;
	}

	let { tag }: Props = $props();

	const base = $derived(tag as unknown as components['schemas']['IApiContentModelBase']);
	const slug = $derived(base.route?.path?.split('/').filter(Boolean).pop() ?? '');
	const href = $derived(`/blog/tags/${slug}`);
</script>

<a
	{href}
	class="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-inset ring-zinc-200 transition-colors hover:bg-red-50 hover:text-red-700 hover:ring-red-200 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:outline-none dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700 dark:hover:bg-red-950/40 dark:hover:text-red-400 dark:hover:ring-red-900 dark:focus-visible:ring-red-400"
>
	{base.name}
</a>
