import type { LayoutServerLoad } from './$types';
import type { components } from '$lib/types/umbraco';
import { PUBLIC_UMBRACO_API_URL } from '$env/static/public';

export const load: LayoutServerLoad = async ({ fetch }) => {
	const fetchJson = async (url: string) => {
		const res = await fetch(url);
		if (!res.ok) {
			console.error(`Failed to fetch ${url}:`, res.status, res.statusText);
			return null;
		}
		return res.json();
	};

	const [headerData, footerData] = await Promise.all([
		fetchJson(
			`${PUBLIC_UMBRACO_API_URL}/umbraco/delivery/api/v2/content?filter=contentType:header&expand=properties[$all]`
		),
		fetchJson(
			`${PUBLIC_UMBRACO_API_URL}/umbraco/delivery/api/v2/content?filter=contentType:footer&expand=properties[$all]`
		)
	]);

	const header =
		(headerData as components['schemas']['PagedIApiContentResponseModel'])?.total > 0
			? ((headerData.items[0] as components['schemas']['HeaderContentResponseModel'])
					?.properties ?? null)
			: null;

	const footer =
		(footerData as components['schemas']['PagedIApiContentResponseModel'])?.total > 0
			? ((footerData.items[0] as components['schemas']['FooterContentResponseModel'])
					?.properties ?? null)
			: null;

	return { header, footer };
};
