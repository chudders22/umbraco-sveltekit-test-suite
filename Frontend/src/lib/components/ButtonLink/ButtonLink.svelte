<script lang="ts">
	import {
		type ButtonVariant,
		type ButtonSize,
		buttonBaseClasses,
		getButtonVariantClasses,
		getButtonSizeClasses
	} from '../Button/button-styles';

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

<a {href} {target} class="group {buttonBaseClasses} {variantClasses} {sizeClasses} {className}">
	{label}
	{#if showArrow}
		<span class="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
	{/if}
</a>
