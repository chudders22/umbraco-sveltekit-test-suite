<script lang="ts">
	interface Props {
		href: string;
		title: string;
		target?: string | null;
		isFeatured?: boolean;
		onclick?: () => void;
	}

	let { href, title, target = null, isFeatured = false, onclick }: Props = $props();
</script>

{#if isFeatured}
	<div class="mt-2 border-t border-slate-100 pt-2 dark:border-slate-700">
		<a
			{href}
			{target}
			class="block px-4 py-2 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 focus:bg-red-50 focus:outline-none dark:text-red-400 dark:hover:bg-red-950 dark:hover:text-red-300 dark:focus:bg-red-950"
			{onclick}
		>
			{title}
		</a>
	</div>
{:else}
	<a
		{href}
		{target}
		class="block px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-red-600 focus:bg-slate-50 focus:outline-none dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-red-400 dark:focus:bg-slate-700"
		{onclick}
	>
		{title}
	</a>
{/if}
