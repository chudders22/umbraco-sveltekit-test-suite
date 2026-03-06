<script lang="ts">
	import {
		type ButtonVariant,
		type ButtonSize,
		buttonBaseClasses,
		getButtonVariantClasses,
		getButtonSizeClasses
	} from './button-styles';

	interface Props {
		href: string;
		target?: string;
		variant?: ButtonVariant;
		size?: ButtonSize;
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

	let variantClasses = $derived(getButtonVariantClasses(variant));
	let sizeClasses = $derived(getButtonSizeClasses(size));
</script>

<a {href} {target} class="{buttonBaseClasses} {variantClasses} {sizeClasses} {className}">
	{label}
	{#if showArrow}
		<span class="ml-2 transition-transform group-hover:translate-x-1">→</span>
	{/if}
</a>
