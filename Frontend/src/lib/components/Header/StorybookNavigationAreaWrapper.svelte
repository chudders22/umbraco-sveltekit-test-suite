<script lang="ts">
	import NavigationArea from './NavigationArea.svelte';
	import type { components } from '$lib/types/umbraco';

	interface Props {
		item: components['schemas']['ApiBlockItemModel'];
	}

	let { item }: Props = $props();
</script>

<ul class="flex items-center gap-8 pt-10 pl-10">
	<NavigationArea {item} />
</ul>
