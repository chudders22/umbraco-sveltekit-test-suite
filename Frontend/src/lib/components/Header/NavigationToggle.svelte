<script lang="ts">
	interface Props {
		isOpen: boolean;
		title: string;
		onclick: () => void;
		controls?: string;
	}

	let { isOpen, title, onclick, controls }: Props = $props();
</script>

<button
	type="button"
	class="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-zinc-500 transition-all hover:bg-zinc-100 hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:outline-none dark:text-zinc-400 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-50 dark:focus-visible:ring-red-400 dark:focus-visible:ring-offset-zinc-950"
	{onclick}
	aria-expanded={isOpen}
	aria-haspopup="true"
	aria-controls={controls}
>
	{title}
	<svg
		class="h-3.5 w-3.5 transition-transform duration-200 {isOpen ? 'rotate-180' : ''}"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="2"
		stroke="currentColor"
		aria-hidden="true"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
	</svg>
</button>
