<script lang="ts">
	import './layout.css';
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import { theme } from '$lib/stores/themeStore.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	$effect(() => {
		theme.init();
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-900 focus:shadow-lg focus:ring-2 focus:ring-red-600 focus:outline-none dark:focus:bg-zinc-900 dark:focus:text-zinc-50 dark:focus:ring-red-400"
>
	Skip to main content
</a>

<Header {...data.header} />

<div
	class="min-h-screen bg-white text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-50"
>
	{@render children()}
</div>

<Footer {...(data.footer ?? {})} socialLinks={data.socialMedia} />
