export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export const buttonBaseClasses =
  'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:ring-red-400 dark:focus-visible:ring-offset-zinc-950';

export function getButtonVariantClasses(variant: ButtonVariant = 'primary'): string {
  switch (variant) {
    case 'primary':
      return 'bg-zinc-900 text-zinc-50 hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-white';
    case 'secondary':
      return 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700';
    case 'outline':
      return 'ring-1 ring-zinc-300 bg-transparent text-zinc-900 hover:bg-zinc-50 hover:ring-zinc-400 dark:ring-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800 dark:hover:ring-zinc-600';
    case 'ghost':
      return 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-800/60';
    default:
      return '';
  }
}

export function getButtonSizeClasses(size: ButtonSize = 'md'): string {
  switch (size) {
    case 'sm':
      return 'px-3.5 py-1.5 text-sm gap-1.5';
    case 'md':
      return 'px-5 py-2.5 text-sm gap-2';
    case 'lg':
      return 'px-7 py-3.5 text-base gap-2';
    default:
      return '';
  }
}
