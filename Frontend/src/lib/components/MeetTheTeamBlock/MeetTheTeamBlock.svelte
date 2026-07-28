<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	import TeamMemberCard from './TeamMemberCard.svelte';

	type TeamMember = components['schemas']['MeetTheTeamPersonPropertiesModel'];

	interface Props {
		title?: string | null;
		subTitle?: string | null;
		people?: components['schemas']['ApiBlockListModel'] | null;
	}

	let { title, subTitle, people }: Props = $props();
	let items = $derived(people?.items || []);
</script>

<section class="border-y border-zinc-100 bg-white py-8 md:py-12 dark:border-zinc-800 dark:bg-zinc-950">
	<div class="container mx-auto px-4">
		{#if title || subTitle}
			<header class="mb-8 lg:w-1/2">
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
		{/if}

		{#if items.length === 0}
			<div
				class="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30"
			>
				<p class="text-sm text-zinc-500 dark:text-zinc-400">No team members have been added yet.</p>
			</div>
		{:else}
			<ul role="list" class="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
				{#each items as item, itemIndex (item.content.id ?? itemIndex)}
					{@const member = item.content.properties as TeamMember}
					<li>
						<TeamMemberCard {member} />
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</section>
