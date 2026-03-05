<script lang="ts">
	interface Props {
		href: string;
		target?: string;
		variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
		size?: 'sm' | 'md' | 'lg';
		class?: string;
		label?: string;
		showArrow?: boolean;
	}

	let {
		href,
		target = '_self',
		variant = 'primary',
		size = 'md',
		class: className = '',
		label = '',
		showArrow = false
	}: Props = $props();

	let baseClasses =
		'group inline-flex items-center justify-center rounded-xl font-semibold shadow-md transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:ring-offset-slate-900';

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
</script>

<a {href} {target} class="{baseClasses} {variantClasses} {sizeClasses} {className}">
	{label}
	{#if showArrow}
		<span class="ml-2 transition-transform group-hover:translate-x-1">→</span>
	{/if}
</a>
