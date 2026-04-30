<script lang="ts">
	import type { components } from '$lib/types/umbraco';
	import type { SocialMediaProperties } from '$lib/types/social';
	import Logo from '$lib/components/Header/Logo.svelte';
	import LogoCloud from '$lib/components/LogoCloud/LogoCloud.svelte';
	import FollowUs from '$lib/components/FollowUs/FollowUs.svelte';

	let {
		addressHeading,
		address,
		addressLinks,
		logos,
		copyright,
		copyrightLinks,
		socialLinks = null
	}: components['schemas']['FooterPropertiesModel'] & {
		socialLinks?: SocialMediaProperties | null;
	} = $props();

	type LogoCloudBlockProps = components['schemas']['LogoCloudBlockPropertiesModel'];

	let logoCloudProps = $derived(
		(logos as any)?.content?.properties as LogoCloudBlockProps | undefined
	);

	let currentYear = $derived(new Date().getFullYear());
	let copyrightText = $derived(copyright ?? `© ${currentYear} 3Chillies. All rights reserved.`);
</script>

<footer class="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
	<div class="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
		<!-- Main grid -->
		<div class="grid grid-cols-1 gap-12 md:grid-cols-4">

			<!-- Column 1 — Address (25%) -->
			<div class="md:col-span-1">
				<div class="mb-4 h-0.5 w-8 bg-red-600" aria-hidden="true"></div>
				<h3 class="mb-5 font-display text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
					{addressHeading || 'Contact'}
				</h3>
				{#if address}
					<p class="mb-4 whitespace-pre-line text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
						{address}
					</p>
				{/if}
				{#if addressLinks && addressLinks.length > 0}
					<ul class="space-y-2">
						{#each addressLinks as link}
							<li>
								<a
									href={link.url || link.route?.path || '#'}
									target={link.target}
									class="text-sm font-medium text-red-600 underline-offset-4 transition-all hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-1 focus-visible:outline-none dark:text-red-400 dark:hover:text-red-300"
								>
									{link.title}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</div>

			<!-- Column 2 — Social (25%) -->
			<div class="md:col-span-1">
				<div class="mb-4 h-0.5 w-8 bg-red-600" aria-hidden="true"></div>
				<h3 class="mb-5 font-display text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
					Follow Us
				</h3>
				{#if socialLinks}
					<FollowUs {...socialLinks} />
				{:else}
					<p class="text-sm text-zinc-400 dark:text-zinc-600">No social accounts added yet.</p>
				{/if}
			</div>

			<!-- Column 3 — Partner logos (50%) -->
			<div class="md:col-span-2">
				<div class="mb-4 h-0.5 w-8 bg-red-600" aria-hidden="true"></div>
				<h3 class="mb-5 font-display text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
					Our Partners
				</h3>
				<LogoCloud logos={logoCloudProps?.logos} standalone={false} />
			</div>
		</div>

		<!-- Bottom bar -->
		<div class="mt-12 flex flex-col items-start justify-between gap-6 border-t border-zinc-200 pt-8 sm:flex-row sm:items-center dark:border-zinc-800">
			<div class="flex items-center gap-4">
				<span class="block h-8 text-zinc-400 dark:text-zinc-600">
					<Logo />
				</span>
				<p class="text-sm text-zinc-400 dark:text-zinc-600">{copyrightText}</p>
			</div>

			{#if copyrightLinks && copyrightLinks.length > 0}
				<nav aria-label="Footer links">
					<ul class="flex flex-wrap gap-x-6 gap-y-2">
						{#each copyrightLinks as link}
							<li>
								<a
									href={link.url || link.route?.path || '#'}
									target={link.target}
									class="text-sm text-zinc-400 underline-offset-4 transition-all hover:text-red-600 hover:underline hover:decoration-red-600 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-1 focus-visible:outline-none dark:text-zinc-500 dark:hover:text-red-400 dark:hover:decoration-red-400"
								>
									{link.title}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			{/if}
		</div>
	</div>
</footer>
