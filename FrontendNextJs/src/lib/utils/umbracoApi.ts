import type { components } from '@/lib/types/umbraco';

const UMBRACO_API_URL = process.env.NEXT_PUBLIC_UMBRACO_API_URL ?? 'https://localhost:44356';

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) {
      const body = await res.text().catch(() => '(unreadable)');
      console.error(`Failed to fetch ${url}: ${res.status} ${res.statusText}\n${body}`);
      return null;
    }
    return res.json() as Promise<T>;
  } catch (err) {
    console.error(`Network error fetching ${url}:`, err);
    return null;
  }
}

export async function fetchContentByPath(
  path: string
): Promise<components['schemas']['IApiContentResponseModelBase'] | null> {
  const encodedPath = encodeURIComponent(path);
  return fetchJson(
    `${UMBRACO_API_URL}/umbraco/delivery/api/v2/content/item/${encodedPath}?expand=properties[$all]`
  );
}

export async function fetchHeader(): Promise<
  components['schemas']['HeaderPropertiesModel'] | null
> {
  const data = await fetchJson<components['schemas']['PagedIApiContentResponseModel']>(
    `${UMBRACO_API_URL}/umbraco/delivery/api/v2/content?filter=contentType:header&expand=properties[$all]`
  );
  if (!data || data.total === 0) return null;
  return (
    (data.items[0] as components['schemas']['HeaderContentResponseModel'])?.properties ?? null
  );
}

export async function fetchFooter(): Promise<
  components['schemas']['FooterPropertiesModel'] | null
> {
  const data = await fetchJson<components['schemas']['PagedIApiContentResponseModel']>(
    `${UMBRACO_API_URL}/umbraco/delivery/api/v2/content?filter=contentType:footer&expand=properties[$all]`
  );
  if (!data || data.total === 0) return null;
  return (
    (data.items[0] as components['schemas']['FooterContentResponseModel'])?.properties ?? null
  );
}

export async function fetchInitialBlogPosts(
  pageSize: number
): Promise<components['schemas']['BlogArticleContentResponseModel'][]> {
  const data = await fetchJson<components['schemas']['PagedIApiContentResponseModel']>(
    `${UMBRACO_API_URL}/umbraco/delivery/api/v2/content?filter=contentType:blogArticle&sort=createDate:desc&take=${pageSize}`
  );
  return (data?.items as components['schemas']['BlogArticleContentResponseModel'][]) ?? [];
}

/** Converts an absolute Umbraco media URL to a relative path so requests
 *  are handled by the Next.js `/media` rewrite proxy instead of going
 *  directly to Umbraco from the browser. */
export function resolveMediaUrl(url: string | null | undefined): string {
  if (!url) return '';
  try {
    const { pathname, search } = new URL(url);
    return pathname + search;
  } catch {
    return url; // already a relative path
  }
}

export { UMBRACO_API_URL };
