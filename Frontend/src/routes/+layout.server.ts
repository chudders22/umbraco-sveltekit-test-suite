import type { LayoutServerLoad } from './$types';
import type { components } from '$lib/types/umbraco';
import { PUBLIC_UMBRACO_API_URL } from '$env/static/public';

export const load: LayoutServerLoad = async ({ fetch }) => {
	try {
		// Fetch the Header component. We're querying the Delivery API for items of type 'header'.
		// Assuming there is only one Header item created under Settings.
		const response = await fetch(
			`${PUBLIC_UMBRACO_API_URL}/umbraco/delivery/api/v2/content?filter=contentType:header&expand=properties[$all]`
		);

		if (!response.ok) {
			console.error(
				`Failed to fetch Umbraco Header:`,
				response.status,
				response.statusText,
				`${PUBLIC_UMBRACO_API_URL}/umbraco/delivery/api/v2/content/?filter=contentType:header&expand=properties[$all]`
			);
			return {
				header: null
			};
		}

		const data = (await response.json()) as components['schemas']['PagedIApiContentResponseModel'];

		// If we found a header, return its properties. Otherwise null.
		const header =
			data.total > 0 && data.items.length > 0
				? (data.items[0] as components['schemas']['HeaderContentResponseModel'])
				: null;

		return {
			header: header?.properties || null
		};
	} catch (e) {
		console.error('Error fetching header:', e);
		return {
			header: null
		};
	}
};
