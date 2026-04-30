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

type TagBase = components['schemas']['IApiContentModelBase'];

type ArchiveMonth = { year: number; month: number; label: string; count: number };

function buildArchive(articles: components['schemas']['BlogArticleContentResponseModel'][]): ArchiveMonth[] {
	const counts = new Map<string, ArchiveMonth>();
	for (const a of articles) {
		const rawDate = a.properties?.publishDate ?? a.createDate;
		const d = new Date(rawDate);
		const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
		if (!counts.has(key)) {
			counts.set(key, {
				year: d.getFullYear(),
				month: d.getMonth() + 1,
				label: d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
				count: 0
			});
		}
		counts.get(key)!.count++;
	}
	return [...counts.values()].sort((a, b) => b.year - a.year || b.month - a.month);
}

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
	let sidebarTags: TagBase[] = [];
	let archiveMonths: ArchiveMonth[] = [];

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

	if (content.contentType === 'blogArticle') {
		const [tagsRes, allArticlesRes] = await Promise.all([
			fetch(
				`${PUBLIC_UMBRACO_API_URL}/umbraco/delivery/api/v2/content?filter=contentType:tag&take=100`
			),
			fetch(
				`${PUBLIC_UMBRACO_API_URL}/umbraco/delivery/api/v2/content?filter=contentType:blogArticle&take=200&fields=id,createDate,properties[publishDate]`
			)
		]);

		if (tagsRes.ok) {
			const tagsData = (await tagsRes.json()) as components['schemas']['PagedIApiContentResponseModel'];
			sidebarTags = (tagsData.items ?? []) as unknown as TagBase[];
		}

		if (allArticlesRes.ok) {
			const allArticlesData = (await allArticlesRes.json()) as components['schemas']['PagedIApiContentResponseModel'];
			const allArticles = (allArticlesData.items ?? []) as components['schemas']['BlogArticleContentResponseModel'][];
			archiveMonths = buildArchive(allArticles);
		}
	}

	return { content, initialBlogPosts, initialPageSize, sidebarTags, archiveMonths };
};

