import type { PageServerLoad } from './$types';
import type { components } from '$lib/types/umbraco';
import { PUBLIC_UMBRACO_API_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';

type BlogArticle = components['schemas']['BlogArticleContentResponseModel'];

function getArticleDate(article: BlogArticle): Date {
	const raw = article.properties?.publishDate ?? article.createDate;
	return new Date(raw);
}

export const load: PageServerLoad = async ({ fetch, params }) => {
	const year = parseInt(params.year, 10);
	const month = parseInt(params.month, 10);

	if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
		error(404, 'Invalid archive date');
	}

	const res = await fetch(
		`${PUBLIC_UMBRACO_API_URL}/umbraco/delivery/api/v2/content?filter=contentType:blogArticle&take=200&fields=id,name,createDate,route,properties[publishDate,metaDescription,tags]`
	);

	if (!res.ok) error(500, 'Failed to load articles');

	const data = (await res.json()) as components['schemas']['PagedIApiContentResponseModel'];
	const allArticles = (data.items ?? []) as BlogArticle[];

	const articles = allArticles
		.filter((a) => {
			const d = getArticleDate(a);
			return d.getFullYear() === year && d.getMonth() + 1 === month;
		})
		.sort((a, b) => getArticleDate(b).getTime() - getArticleDate(a).getTime());

	const label = new Date(year, month - 1, 1).toLocaleDateString('en-GB', {
		month: 'long',
		year: 'numeric'
	});

	return { year, month, label, articles };
};
