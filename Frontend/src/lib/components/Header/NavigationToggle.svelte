<script lang="ts">
	interface Props {
		isOpen: boolean;
		title: string;
		onclick: () => void;
	}

	let { isOpen, title, onclick }: Props = $props();
</script>

<button
	type="button"
	class="flex items-center gap-1 p-1 text-sm font-medium text-slate-700 transition-colors hover:text-red-600 focus:outline-none dark:text-slate-300 dark:hover:text-red-400"
	{onclick}
	aria-expanded={isOpen}
	aria-haspopup="true"
>
	{title}
	<svg
		class="h-4 w-4 transition-transform duration-200 {isOpen ? 'rotate-180' : ''}"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
	</svg>
</button>
