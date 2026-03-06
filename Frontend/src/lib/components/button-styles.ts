export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export const buttonBaseClasses =
    'inline-flex items-center justify-center rounded-md font-medium shadow-sm transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:ring-offset-gray-900';

export function getButtonVariantClasses(variant: ButtonVariant = 'primary'): string {
    switch (variant) {
        case 'primary':
            return 'bg-red-600 text-white hover:bg-red-500 hover:shadow focus-visible:ring-red-600';
        case 'secondary':
            return 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700';
        case 'outline':
            return 'border-2 border-gray-200 bg-transparent text-gray-900 shadow-sm hover:border-gray-300 hover:bg-gray-50 focus-visible:ring-gray-900 dark:border-gray-600 dark:text-gray-100 dark:hover:border-gray-500 dark:hover:bg-gray-800';
        case 'ghost':
            return 'bg-transparent text-gray-900 shadow-none hover:bg-gray-100 focus-visible:ring-gray-900 dark:text-gray-100 dark:hover:bg-gray-800';
        default:
            return '';
    }
}

export function getButtonSizeClasses(size: ButtonSize = 'md'): string {
    switch (size) {
        case 'sm':
            return 'px-4 py-2 text-sm';
        case 'md':
            return 'px-8 py-3 text-lg';
        case 'lg':
            return 'px-10 py-4 text-xl';
        default:
            return '';
    }
}
