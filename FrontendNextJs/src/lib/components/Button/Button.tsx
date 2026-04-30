'use client';

import {
  type ButtonVariant,
  type ButtonSize,
  buttonBaseClasses,
  getButtonVariantClasses,
  getButtonSizeClasses,
} from './button-styles';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
}

export default function Button({
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  onClick,
  label = '',
}: ButtonProps) {
  const variantClasses = getButtonVariantClasses(variant);
  const sizeClasses = getButtonSizeClasses(size);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`${buttonBaseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      onClick={handleClick}
    >
      {loading && (
        <svg
          className="mr-3 -ml-1 h-5 w-5 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {label}
    </button>
  );
}
