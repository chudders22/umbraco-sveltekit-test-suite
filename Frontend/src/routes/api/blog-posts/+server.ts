import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PUBLIC_UMBRACO_API_URL } from '$env/static/public';
import type { components } from '$lib/types/umbraco';

const MAX_PAGE_SIZE = 100;
const DEFAULT_PAGE_SIZE = 6;

export const GET: RequestHandler = async ({ fetch, url }) => {
	const rawTake = parseInt(url.searchParams.get('take') ?? '', 10);
	const rawSkip = parseInt(url.searchParams.get('skip') ?? '', 10);

	if (
		(url.searchParams.has('take') && isNaN(rawTake)) ||
		(url.searchParams.has('skip') && isNaN(rawSkip))
	) {
		error(400, 'take and skip must be integers');
	}

	const take = Math.min(isNaN(rawTake) ? DEFAULT_PAGE_SIZE : rawTake, MAX_PAGE_SIZE);
	const skip = isNaN(rawSkip) ? 0 : Math.max(rawSkip, 0);

	const response = await fetch(
		`${PUBLIC_UMBRACO_API_URL}/umbraco/delivery/api/v2/content?filter=contentType:blogArticle&sort=createDate:desc&take=${take}&skip=${skip}`
	);

	if (!response.ok) {
		error(response.status, 'Failed to fetch blog posts');
	}

	const data: components['schemas']['PagedIApiContentResponseModel'] = await response.json();
	return json(data);
};
