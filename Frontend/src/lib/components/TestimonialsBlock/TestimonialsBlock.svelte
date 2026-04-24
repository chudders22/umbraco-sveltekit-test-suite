<script lang="ts">
	interface TestimonialItem {
		quote?: string | null;
		authorName?: string | null;
		authorRole?: string | null;
		authorCompany?: string | null;
		authorImage?: Array<{
			url: string;
			name: string;
			mediaType: string;
			id: string;
			properties: object;
		}> | null;
	}

	interface Props {
		title?: string | null;
		subTitle?: string | null;
		testimonials?: {
			items: Array<{
				content: { contentType: string; properties: TestimonialItem };
			}>;
		} | null;
	}

	let { title, subTitle, testimonials }: Props = $props();
	let items = $derived(testimonials?.items || []);
</script>

<section
	class="border-y border-zinc-100 bg-white py-8 md:py-12 dark:border-zinc-800 dark:bg-zinc-950"
>
	<div class="container mx-auto px-4">
		{#if title || subTitle}
			<div class="mb-8 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
				<header>
					{#if title}
						<h2
							class="font-display text-3xl font-semibold tracking-widest text-zinc-500 uppercase md:text-4xl dark:text-zinc-400"
						>
							{title}
						</h2>
					{/if}
					{#if subTitle}
						<p class="mt-1 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">{subTitle}</p>
					{/if}
				</header>
			</div>
		{/if}

		{#if items.length === 0}
			<div
				class="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30"
			>
				<p class="text-sm text-zinc-500 dark:text-zinc-400">No items added yet.</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
				{#each items as item}
					{@const props = item.content.properties}
					{@const avatar = props.authorImage?.[0]}
					<article
						class="group relative flex h-full flex-col border-l-2 border-l-zinc-200 py-1 pl-6 transition-all duration-200 hover:border-l-red-500 dark:border-l-zinc-800 dark:hover:border-l-red-500"
					>
						<div
							class="font-display text-6xl leading-none text-red-600/30 dark:text-red-400/20"
							aria-hidden="true"
						>
							&ldquo;
						</div>

						{#if props.quote}
							<blockquote class="mt-2 flex-1 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
								{props.quote}
							</blockquote>
						{/if}

						<footer class="mt-6 flex items-center gap-3">
							{#if avatar}
								<img
									src={avatar.url}
									alt={avatar.name}
									class="h-10 w-10 shrink-0 rounded-full object-cover"
									width="40"
									height="40"
								/>
							{/if}
							<div>
								{#if props.authorName}
									<p class="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
										{props.authorName}
									</p>
								{/if}
								{#if props.authorRole || props.authorCompany}
									<p class="text-sm text-zinc-500 dark:text-zinc-400">
										{#if props.authorRole}{props.authorRole}{/if}{#if props.authorRole && props.authorCompany},&nbsp;{/if}{#if props.authorCompany}{props.authorCompany}{/if}
									</p>
								{/if}
							</div>
						</footer>
					</article>
				{/each}
			</div>
		{/if}
	</div>
</section>
