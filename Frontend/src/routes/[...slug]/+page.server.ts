import type { PageServerLoad } from './$types';
import type { components } from '$lib/types/umbraco';
import { PUBLIC_UMBRACO_API_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';

type ContentWithPageContent = {
	properties?: {
		pageContent?: {
			items?: Array<{
				content?: { contentType?: string; properties?: { pageSize?: number } };
			}>;
		};
	};
};

export const load: PageServerLoad = async ({ fetch, params }) => {
	const path = params.slug ? `/${params.slug}` : '/';
	const encodedPath = encodeURIComponent(path);

	const response = await fetch(
		`${PUBLIC_UMBRACO_API_URL}/umbraco/delivery/api/v2/content/item/${encodedPath}?expand=properties[$all]`
	);

	if (!response.ok) {
		error(
			response.status === 404 ? 404 : 500,
			response.status === 404 ? 'Page not found' : 'Failed to load page content'
		);
	}

	const content = (await response.json()) as components['schemas']['IApiContentResponseModelBase'];

	let initialBlogPosts: components['schemas']['BlogArticleContentResponseModel'][] = [];
	let initialPageSize = 6;

	const pageContent = (content as unknown as ContentWithPageContent).properties?.pageContent;
	if (pageContent?.items && Array.isArray(pageContent.items)) {
		const blogListingBlock = pageContent.items.find(
			(item) => item.content?.contentType === 'blogListingBlock'
		);

		if (blogListingBlock) {
			initialPageSize = blogListingBlock.content?.properties?.pageSize || 6;

			const articlesResponse = await fetch(
				`${PUBLIC_UMBRACO_API_URL}/umbraco/delivery/api/v2/content?filter=contentType:blogArticle&sort=createDate:desc&take=${initialPageSize}`
			);

			if (articlesResponse.ok) {
				const articlesData = await articlesResponse.json();
				initialBlogPosts = articlesData.items || [];
			} else {
				console.error('Failed to fetch initial blog articles:', articlesResponse.status);
			}
		}
	}

	return { content, initialBlogPosts, initialPageSize };
};
