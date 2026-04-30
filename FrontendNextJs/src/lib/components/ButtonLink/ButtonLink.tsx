import {
  type ButtonVariant,
  type ButtonSize,
  buttonBaseClasses,
  getButtonVariantClasses,
  getButtonSizeClasses,
} from '@/lib/components/Button/button-styles';

interface Props {
  href: string;
  target?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  label?: string;
  showArrow?: boolean;
}

export default function ButtonLink({
  href,
  target = '_self',
  variant = 'primary',
  size = 'md',
  className = '',
  label = '',
  showArrow = false,
}: Props) {
  const variantClasses = getButtonVariantClasses(variant);
  const sizeClasses = getButtonSizeClasses(size);

  return (
    <a
      href={href}
      target={target}
      className={`group ${buttonBaseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim()}
    >
      {label}
      {showArrow && (
        <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
          →
        </span>
      )}
    </a>
  );
}
