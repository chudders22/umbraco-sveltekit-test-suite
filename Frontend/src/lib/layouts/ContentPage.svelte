<script lang="ts">
import type { components } from '$lib/types/umbraco';
import BlockList from '$lib/components/BlockList.svelte';
import SingleBlock from '$lib/components/SingleBlock.svelte';
import ImageOffsetPageHeader from '$lib/components/PageHeaders/ImageOffsetPageHeader.svelte';
import { isImageOffsetPageHeader } from '$lib/utils/pageHeaderUtils';

let { content }: { content: components['schemas']['ContentPageContentResponseModel'] } = $props();
</script>

{#if content.properties?.pageHeader}
{#if isImageOffsetPageHeader(content.properties.pageHeader)}
<!-- Render directly so we can pass page-level data (title, route) alongside block props -->
<ImageOffsetPageHeader
image={(content.properties.pageHeader.content.properties as any).image}
title={content.name}
route={content.route?.path}
/>
{:else}
<SingleBlock block={content.properties.pageHeader} />
{/if}
{/if}

<main class="container mx-auto px-4 py-12">
{#if content.properties?.pageContent?.items}
<BlockList items={content.properties.pageContent.items} />
{/if}
</main>
