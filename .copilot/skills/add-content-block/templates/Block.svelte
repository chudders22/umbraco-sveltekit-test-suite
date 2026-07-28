<!--
  Template: a block component for this Umbraco + SvelteKit project.
  Copy to src/lib/components/<Name>/<Name>.svelte, rename, and adapt.

  Conventions this template encodes:
    - Svelte 5 runes ($props, $derived)
    - Props typed from a local interface mirroring the Umbraco property aliases
      (prefer a generated schema from $lib/types/umbraco when one exists)
    - Tailwind v4 utility classes with dark-mode variants
    - A graceful empty state
    - HTML-escaping before any {@html} render
    - Child block lists read via item.content.properties
-->
<script lang="ts">
	// If a generated type exists, prefer it over a hand-written interface, e.g.:
	//   import type { components } from '$lib/types/umbraco';
	//   type Props = components['schemas']['ExampleBlockPropertiesModel'];

	interface ChildItem {
		heading?: string | null;
		body?: string | null;
	}

	interface Props {
		title?: string | null;
		// A child Block List property. Each entry is { content: { contentType, properties } }.
		items?: {
			items: Array<{
				content: { contentType: string; properties: ChildItem };
			}>;
		} | null;
	}

	let { title, items }: Props = $props();
	let entries = $derived(items?.items ?? []);
</script>

<section class="py-12 md:py-16">
	<div class="container mx-auto px-4">
		{#if title}
			<h2 class="mb-8 text-3xl font-semibold text-zinc-900 md:text-4xl dark:text-white">
				{title}
			</h2>
		{/if}

		{#if entries.length === 0}
			<div
				class="rounded-xl border border-dashed border-zinc-200 p-12 text-left dark:border-zinc-800"
			>
				<p class="text-sm text-zinc-500 dark:text-zinc-400">No items added yet.</p>
			</div>
		{:else}
			<div class="grid gap-8 md:grid-cols-3">
				{#each entries as entry}
					{@const props = entry.content.properties}
					<div class="border-l-2 border-l-zinc-200 pl-6 dark:border-l-zinc-800">
						{#if props.heading}
							<h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
								{props.heading}
							</h3>
						{/if}
						{#if props.body}
							<p class="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{props.body}</p>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
