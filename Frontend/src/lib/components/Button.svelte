<script lang="ts">
	interface Props {
		type?: 'button' | 'submit' | 'reset';
		variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
		size?: 'sm' | 'md' | 'lg';
		disabled?: boolean;
		loading?: boolean;
		class?: string;
		onclick?: (event: MouseEvent) => void;
		label?: string;
	}

	let {
		type = 'button',
		variant = 'primary',
		size = 'md',
		disabled = false,
		loading = false,
		class: className = '',
		onclick,
		label = ''
	}: Props = $props();

	let baseClasses =
		'inline-flex items-center justify-center rounded-xl font-semibold shadow-md transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:ring-offset-slate-900';

	let variantClasses = $derived.by(() => {
		switch (variant) {
			case 'primary':
				return 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg focus-visible:ring-slate-900';
			case 'secondary':
				return 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg focus-visible:ring-red-600';
			case 'outline':
				return 'border-2 border-slate-200 bg-transparent text-slate-900 shadow-sm hover:border-slate-300 hover:bg-slate-50 focus-visible:ring-slate-900 dark:border-slate-600 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-800';
			case 'ghost':
				return 'bg-transparent text-slate-900 shadow-none hover:bg-slate-100 focus-visible:ring-slate-900 dark:text-slate-100 dark:hover:bg-slate-800';
			default:
				return '';
		}
	});

	let sizeClasses = $derived.by(() => {
		switch (size) {
			case 'sm':
				return 'px-4 py-2 text-sm';
			case 'md':
				return 'px-8 py-3 text-base';
			case 'lg':
				return 'px-10 py-4 text-lg';
			default:
				return '';
		}
	});

	function handleClick(e: MouseEvent) {
		if (!disabled && !loading && onclick) {
			onclick(e);
		}
	}
</script>

<button
	{type}
	disabled={disabled || loading}
	class="{baseClasses} {variantClasses} {sizeClasses} {className}"
	onclick={handleClick}
>
	{#if loading}
		<svg
			class="mr-3 -ml-1 h-5 w-5 animate-spin"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
			></circle>
			<path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			></path>
		</svg>
	{/if}
	{label}
</button>
