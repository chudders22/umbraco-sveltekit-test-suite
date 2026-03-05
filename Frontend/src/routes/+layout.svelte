<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header/Header.svelte';
	import { theme } from '$lib/stores/themeStore';
	import { onMount } from 'svelte';

	let { data, children } = $props();

	onMount(() => {
		theme.initTheme();
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Header {...data.header} />

<div
	class="min-h-screen bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100"
>
	{@render children()}
</div>
