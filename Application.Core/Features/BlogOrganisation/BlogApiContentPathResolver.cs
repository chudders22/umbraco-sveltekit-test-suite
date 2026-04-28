using Umbraco.Cms.Core.DeliveryApi;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Infrastructure.DeliveryApi;
using Umbraco.Extensions;

namespace Application.Core.Features.BlogOrganisation;

/// <summary>
/// Resolves Delivery API content path requests of the form /blog/{slug} by
/// recursively searching under the blog root node. This is the Delivery API
/// equivalent of IContentFinder, needed because blog articles are stored in
/// year/month sub-folders but exposed at clean /blog/{slug} paths.
///
/// Uses base.ResolveContentPath("/blog") to locate the blog root entirely via
/// the published cache — no IContentService database calls.
/// </summary>
public class BlogApiContentPathResolver : ApiContentPathResolver
{
    private const string ArticleAlias = "blogArticle";
    private const string FolderAlias = "blogFolder";

    public BlogApiContentPathResolver(
        IRequestRoutingService requestRoutingService,
        IApiPublishedContentCache apiPublishedContentCache)
        : base(requestRoutingService, apiPublishedContentCache)
    {
    }

    public override IPublishedContent? ResolveContentPath(string path)
    {
        // Try default resolution first (handles all non-blog paths and the blog root itself)
        var result = base.ResolveContentPath(path);
        if (result != null) return result;

        // Only intercept /blog/{slug} — exactly two segments
        var segments = path.Trim('/').Split('/', StringSplitOptions.RemoveEmptyEntries);
        if (segments.Length != 2 || !segments[0].Equals("blog", StringComparison.OrdinalIgnoreCase))
            return null;

        var slug = segments[1];

        // Resolve the blog root via the cache — no IContentService needed
        var blogRoot = base.ResolveContentPath("/blog");
        if (blogRoot is null) return null;

        return FindArticleBySlug(blogRoot, slug);
    }

    private static IPublishedContent? FindArticleBySlug(IPublishedContent parent, string slug)
    {
        foreach (var child in parent.Children() ?? [])
        {
            if (child.ContentType.Alias.Equals(ArticleAlias, StringComparison.OrdinalIgnoreCase)
                && child.UrlSegment?.Equals(slug, StringComparison.OrdinalIgnoreCase) == true)
            {
                return child;
            }

            if (child.ContentType.Alias.Equals(FolderAlias, StringComparison.OrdinalIgnoreCase))
            {
                var found = FindArticleBySlug(child, slug);
                if (found is not null) return found;
            }
        }

        return null;
    }
}
