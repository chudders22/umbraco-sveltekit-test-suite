import type { PageServerLoad } from './$types';
import type { components } from '$lib/types/umbraco';
import { PUBLIC_UMBRACO_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ fetch, params }) => {
	// The path either comes from the slug, or defaults to the root '/'
	const path = params.slug ? `/${params.slug}` : '/';

	// Umbraco Delivery API requires the path to be URL-encoded (e.g., %2F for /)
	const encodedPath = encodeURIComponent(path);
	// Fetch any content item from the Delivery API
	const response = await fetch(
		`${PUBLIC_UMBRACO_API_URL}/umbraco/delivery/api/v2/content/item/${encodedPath}?expand=properties[$all]`
	);

	if (!response.ok) {
		console.error(
			`Failed to fetch Umbraco content for path ${path}:`,
			response.status,
			response.statusText
		);
		return {
			content: null
		};
	}

	// This is now generic, returning the base IApiContentResponseModel
	// (or specifically casting it if we know the page type, but let's keep it generic)
	const content = (await response.json()) as components['schemas']['IApiContentResponseModelBase'];

	let initialBlogPosts: components['schemas']['BlogArticleContentResponseModel'][] = [];
	let initialPageSize = 6;

	// Check if this page contains a blog listing block
	// The BlockList items are stored typically in content.properties.pageContent.items
	const pageContent = (content as any).properties?.pageContent;
	if (pageContent?.items && Array.isArray(pageContent.items)) {
		const blogListingBlock = pageContent.items.find(
			(item: any) => item.content?.contentType === 'blogListingBlock'
		);

		if (blogListingBlock) {
			// Extract page size property if it exists, otherwise default to 6
			initialPageSize = blogListingBlock.content.properties?.pageSize || 6;

			// Fetch the initial set of articles for SSR
			const articlesUrl = `${PUBLIC_UMBRACO_API_URL}/umbraco/delivery/api/v2/content?filter=contentType:blogArticle&sort=createDate:desc&take=${initialPageSize}`;
			const articlesResponse = await fetch(articlesUrl);

			if (articlesResponse.ok) {
				const articlesData = await articlesResponse.json();
				initialBlogPosts = articlesData.items || [];
			} else {
				console.error(
					`Failed to fetch initial blog articles:`,
					articlesResponse.status,
					articlesResponse.statusText
				);
			}
		}
	}

	return {
		content,
		initialBlogPosts,
		initialPageSize
	};
};
