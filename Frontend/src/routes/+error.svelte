<script lang="ts">
	import { page } from '$app/state';
</script>

<main
	class="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center"
>
	<div class="mx-auto mb-6 h-0.5 w-16 bg-red-600" aria-hidden="true"></div>

	<p
		class="mb-2 text-xs font-semibold tracking-widest text-red-600 uppercase dark:text-red-400"
	>
		Error {page.status}
	</p>

	<h1
		class="font-display mb-4 text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl dark:text-zinc-50"
	>
		{page.status === 404 ? 'Page not found' : 'Something went wrong'}
	</h1>

	<p class="mb-8 max-w-md text-lg text-zinc-500 dark:text-zinc-400">
		{page.error?.message ?? 'An unexpected error occurred. Please try again later.'}
	</p>

	<a
		href="/"
		class="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-zinc-50 transition-all hover:bg-zinc-700 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:outline-none dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-white dark:focus-visible:ring-red-400 dark:focus-visible:ring-offset-zinc-950"
	>
		Go home
	</a>
</main>
