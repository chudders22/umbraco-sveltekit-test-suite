<script lang="ts">
	import type { components } from '$lib/types/umbraco';

	type TeamMember = components['schemas']['MeetTheTeamPersonPropertiesModel'];

	interface Props {
		member: TeamMember;
	}

	let { member }: Props = $props();
	let profileImage = $derived(member.profileImage?.[0]);
	let imageAlt = $derived(member.personName || profileImage?.name || 'Team member profile image');
</script>

<article
	class="group relative flex h-full flex-col border-l-2 border-l-zinc-200 py-1 pl-6 transition-all duration-200 hover:border-l-red-500 dark:border-l-zinc-800 dark:hover:border-l-red-500"
>
	{#if profileImage}
		<img
			src={profileImage.url}
			alt={imageAlt}
			class="mb-4 h-20 w-20 rounded-full object-cover"
			width="80"
			height="80"
			loading="lazy"
		/>
	{/if}

	{#if member.personName}
		<h3 class="font-display text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
			{member.personName}
		</h3>
	{/if}

	{#if member.jobTitle}
		<p class="mt-1 text-sm font-medium text-red-600 dark:text-red-400">
			{member.jobTitle}
		</p>
	{/if}

	{#if member.bio?.markup}
		<div
			class="prose prose-sm prose-zinc mt-4 leading-relaxed dark:prose-invert
				prose-p:text-zinc-600 dark:prose-p:text-zinc-300
				prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline
				dark:prose-a:text-red-400"
		>
			<!-- Content markup is authored via Umbraco Rich Text editor output. -->
			{@html member.bio.markup}
		</div>
	{/if}
</article>
