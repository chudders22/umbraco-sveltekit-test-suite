import type { PageServerLoad } from './$types';
import type { components } from '$lib/types/umbraco';
import { PUBLIC_UMBRACO_API_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';

type TagBase = components['schemas']['IApiContentModelBase'];
type BlogArticle = components['schemas']['BlogArticleContentResponseModel'];

export const load: PageServerLoad = async ({ fetch, params }) => {
	const [tagsRes, articlesRes] = await Promise.all([
		fetch(
			`${PUBLIC_UMBRACO_API_URL}/umbraco/delivery/api/v2/content?filter=contentType:tag&expand=properties[$all]&take=100`
		),
		fetch(
			`${PUBLIC_UMBRACO_API_URL}/umbraco/delivery/api/v2/content?filter=contentType:blogArticle&expand=properties[$all]&sort=createDate:desc&take=100`
		)
	]);

	if (!tagsRes.ok) error(500, 'Failed to load tags');
	if (!articlesRes.ok) error(500, 'Failed to load articles');

	const tagsData = (await tagsRes.json()) as components['schemas']['PagedIApiContentResponseModel'];
	const articlesData = (await articlesRes.json()) as components['schemas']['PagedIApiContentResponseModel'];

	const allTags = (tagsData.items ?? []) as unknown as TagBase[];
	const tag = allTags.find(
		(t) => t.route?.path?.split('/').filter(Boolean).pop() === params.slug
	);

	if (!tag) error(404, 'Tag not found');

	const allArticles = (articlesData.items ?? []) as BlogArticle[];
	const articles = allArticles.filter((article) => {
		const tags = (article.properties?.tags ?? []) as unknown as TagBase[];
		return tags.some((t) => t.id === tag.id);
	});

	return { tag, articles };
};
