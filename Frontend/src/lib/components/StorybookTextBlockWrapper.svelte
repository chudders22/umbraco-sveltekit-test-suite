<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	import TextBlock from './TextBlock/TextBlock.svelte';

	interface Props {
		item: components['schemas']['ApiBlockItemModel'];
	}

	let { item }: Props = $props();

	let textBlockProps = $derived(
		item.content.properties as components['schemas']['TextBlockPropertiesModel']
	);
</script>

<div class="pt-10 pl-10 dark:bg-slate-900">
	<TextBlock {...textBlockProps} />
</div>
