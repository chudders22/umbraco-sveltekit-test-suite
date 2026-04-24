<script lang="ts">
	import ButtonLink from './ButtonLink.svelte';

	interface Props {
		heading?: string | null;
		description?: string | null;
		buttonLabel?: string | null;
		placeholderText?: string | null;
	}

	let {
		heading = 'Stay in the loop',
		description,
		buttonLabel = 'Subscribe',
		placeholderText = 'you@example.com'
	}: Props = $props();

	let email = $state('');
	let status = $state<'idle' | 'loading' | 'success' | 'error'>('idle');
	let errorMessage = $state('');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!email) return;

		status = 'loading';
		errorMessage = '';

		try {
			// Replace with your newsletter provider endpoint (Mailchimp, ConvertKit, etc.)
			await new Promise((resolve) => setTimeout(resolve, 800));
			status = 'success';
			email = '';
		} catch {
			status = 'error';
			errorMessage = 'Something went wrong. Please try again.';
		}
	}
</script>

<section
	class="relative overflow-hidden border-y border-zinc-100 bg-white py-16 md:py-20 dark:border-zinc-800 dark:bg-zinc-950"
>
	<!-- Dot-grid texture matching CTA block -->
	<div
		class="absolute inset-0 bg-[linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)] bg-[size:48px_48px] dark:hidden"
		aria-hidden="true"
	></div>
	<div
		class="absolute inset-0 hidden bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:48px_48px] dark:block"
		aria-hidden="true"
	></div>

	<div class="relative container mx-auto max-w-2xl px-4 text-center">
		<!-- Red accent bar -->
		<div class="mx-auto mb-6 h-0.5 w-16 bg-red-600" aria-hidden="true"></div>

		{#if heading}
			<h2
				class="mb-4 font-display text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl dark:text-zinc-50"
			>
				{heading}
			</h2>
		{/if}

		{#if description}
			<p class="mb-8 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
				{description}
			</p>
		{/if}

		{#if status === 'success'}
			<div
				class="flex items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-5 dark:border-zinc-800 dark:bg-zinc-900/50"
				role="status"
				aria-live="polite"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
						clip-rule="evenodd"
					/>
				</svg>
				<p class="font-semibold text-zinc-900 dark:text-zinc-50">
					You're subscribed — thanks for joining!
				</p>
			</div>
		{:else}
			<form
				onsubmit={handleSubmit}
				class="flex flex-col gap-3 sm:flex-row"
				novalidate
			>
				<label for="newsletter-email" class="sr-only">Email address</label>
				<input
					id="newsletter-email"
					type="email"
					bind:value={email}
					placeholder={placeholderText ?? 'you@example.com'}
					required
					autocomplete="email"
					disabled={status === 'loading'}
					class="min-w-0 flex-1 rounded-lg border border-zinc-200 bg-white px-4 py-2.5
						text-zinc-900 placeholder:text-zinc-400
						focus:border-transparent focus:ring-2 focus:ring-red-600 focus:outline-none
						disabled:cursor-not-allowed disabled:opacity-50
						dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50
						dark:placeholder:text-zinc-500 dark:focus:ring-red-400"
				/>
				<button
					type="submit"
					disabled={status === 'loading' || !email}
					class="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg
						bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-zinc-50
						transition-all duration-200
						hover:bg-zinc-700
						focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:outline-none
						disabled:cursor-not-allowed disabled:opacity-50
						dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-white
						dark:focus-visible:ring-red-400 dark:focus-visible:ring-offset-zinc-950"
				>
					{#if status === 'loading'}
						<svg
							class="h-4 w-4 animate-spin"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
							></circle>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
							></path>
						</svg>
						<span>Subscribing…</span>
					{:else}
						{buttonLabel}
					{/if}
				</button>
			</form>

			{#if status === 'error'}
				<p class="mt-3 text-sm text-red-600 dark:text-red-400" role="alert">
					{errorMessage}
				</p>
			{/if}

			<p class="mt-4 text-xs text-zinc-400 dark:text-zinc-500">
				No spam, ever. Unsubscribe at any time.
			</p>
		{/if}
	</div>
</section>
