<script lang="ts">
	import ButtonLink from '../ButtonLink/ButtonLink.svelte';

	interface Props {
		heading?: string | null;
		subTitle?: string | null;
		content?: { markup?: string | null } | null;
		image?: Array<{ url: string; name: string; mediaType: string; id: string; properties: object }> | null;
		imagePosition?: boolean | null;
		link?: Array<{
			title?: string | null;
			url?: string | null;
			target?: string | null;
			route?: { path: string } | null;
		}> | null;
	}

	let { heading, subTitle, content, image, imagePosition, link }: Props = $props();

	let img = $derived(image?.[0]);
	let cta = $derived(link?.[0]);
	let hasContent = $derived(!!(heading || subTitle || content?.markup));
	let hasImage = $derived(!!img?.url);
	let isEmpty = $derived(!hasContent && !hasImage);
	let imageFirst = $derived(imagePosition === true);
</script>

<section class="bg-white py-12 dark:bg-zinc-950 md:py-20">
	<div class="container mx-auto px-4">
		{#if isEmpty}
			<div
				class="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30"
			>
				<p class="text-sm text-zinc-500 dark:text-zinc-400">No content available.</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
				<!-- Text column -->
				<div class={imageFirst ? 'order-last' : ''}>
					<div class="mb-6 h-0.5 w-16 bg-red-600" aria-hidden="true"></div>

					{#if heading}
						<h2
							class="font-display mb-6 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl"
						>
							{heading}
						</h2>
					{/if}

					{#if subTitle}
						<p class="mb-4 text-lg text-zinc-500 dark:text-zinc-400">{subTitle}</p>
					{/if}

					{#if content?.markup}
						<div
							class="prose prose-zinc mb-6 dark:prose-invert prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-red-400"
						>
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							{@html content.markup}
						</div>
					{/if}

					{#if cta?.url}
						<ButtonLink
							href={cta.url}
							target={cta.target ?? '_self'}
							variant="primary"
							label={cta.title ?? 'Learn more'}
							showArrow={true}
						/>
					{/if}
				</div>

				<!-- Image column -->
				<div class={imageFirst ? 'order-first' : ''}>
					<div class="relative aspect-[4/3] overflow-hidden rounded-2xl">
						{#if hasImage}
							<img
								src={img!.url}
								alt={img!.name}
								class="h-full w-full object-cover"
							/>
						{:else}
							<div
								class="h-full w-full bg-zinc-100 dark:bg-zinc-800"
								aria-hidden="true"
							></div>
						{/if}
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>
