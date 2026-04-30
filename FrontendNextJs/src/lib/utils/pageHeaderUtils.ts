import type { components } from '@/lib/types/umbraco';

type SingleBlock =
  | components['schemas']['ApiBlockItemModel']
  | components['schemas']['ApiBlockGridItemModel']
  | null
  | undefined;

/**
 * Check if a single-block is an ImageOffset page header.
 * Useful for conditionally applying overlay styles in layouts.
 */
export function isImageOffsetPageHeader(block: SingleBlock): boolean {
  return block?.content.contentType === 'imageOffsetPageHeader';
}
