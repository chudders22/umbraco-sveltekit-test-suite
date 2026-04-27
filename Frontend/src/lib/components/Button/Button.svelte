<script lang="ts">
	import {
		type ButtonVariant,
		type ButtonSize,
		buttonBaseClasses,
		getButtonVariantClasses,
		getButtonSizeClasses
	} from './button-styles';

	interface Props {
		type?: 'button' | 'submit' | 'reset';
		variant?: ButtonVariant;
		size?: ButtonSize;
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

	let variantClasses = $derived(getButtonVariantClasses(variant));
	let sizeClasses = $derived(getButtonSizeClasses(size));

	function handleClick(e: MouseEvent) {
		if (!disabled && !loading && onclick) {
			onclick(e);
		}
	}
</script>

<button
	{type}
	disabled={disabled || loading}
	class="{buttonBaseClasses} {variantClasses} {sizeClasses} {className}"
	onclick={handleClick}
>
	{#if loading}
		<svg
			class="mr-3 -ml-1 h-5 w-5 animate-spin"
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
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			></path>
		</svg>
		<span class="sr-only">Loading</span>
	{/if}
	{label}
</button>
