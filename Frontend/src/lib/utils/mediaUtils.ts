import type { components } from '$lib/types/umbraco';

type MediaItem = components['schemas']['IApiMediaWithCropsModel'];

/**
 * Returns the descriptive alt text for a media item.
 * Prefers `properties.altText` set by the editor; falls back to the item name.
 */
export function getAltText(image: MediaItem): string {
	const alt = image.properties?.altText;
	return typeof alt === 'string' && alt.trim() ? alt.trim() : (image.name ?? '');
}
