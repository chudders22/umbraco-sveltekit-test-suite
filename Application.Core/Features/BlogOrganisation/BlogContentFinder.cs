using Application.Core.Features.Extensions;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Web.Common;
using Umbraco.Extensions;

namespace Application.Core.Features.BlogOrganisation;

/// <summary>
/// Routes standard (non-Delivery API) requests for /blog/{slug} to the correct
/// blog article, regardless of which year/month sub-folder it lives in.
///
/// This is the standard-routing counterpart to BlogApiContentPathResolver.
/// It is required so that Umbraco's PublishedUrlInfoProvider.VerifyCollisionAsync
/// can confirm our custom /blog/{slug} URLs actually resolve back to the right
/// content, which makes the backoffice info tab show the correct URL.
/// </summary>
public class BlogContentFinder : IContentFinder
{
    private const string ArticleAlias = "blogArticle";
    private const string FolderAlias = "blogFolder";

    private readonly IUmbracoHelperAccessor _umbracoHelperAccessor;

    public BlogContentFinder(IUmbracoHelperAccessor umbracoHelperAccessor)
        => _umbracoHelperAccessor = umbracoHelperAccessor;

    public Task<bool> TryFindContent(IPublishedRequestBuilder request)
    {
        var path = request.Uri.AbsolutePath;

        // Only handle /blog/{slug} — not bare /blog/ or deeper paths
        var segments = path.Trim('/').Split('/', StringSplitOptions.RemoveEmptyEntries);
        if (segments.Length != 2 || !segments[0].Equals("blog", StringComparison.OrdinalIgnoreCase))
            return Task.FromResult(false);

        var slug = segments[1];

        if (!_umbracoHelperAccessor.TryGetUmbracoHelper(out UmbracoHelper? helper))
            return Task.FromResult(false);

        var blogRoot = helper.GetBlogRoot();
        if (blogRoot is null)
            return Task.FromResult(false);

        var article = FindArticleBySlug(blogRoot, slug);
        if (article is null)
            return Task.FromResult(false);

        request.SetPublishedContent(article);
        return Task.FromResult(true);
    }

    private static IPublishedContent? FindArticleBySlug(IPublishedContent parent, string slug)
    {
        foreach (var child in parent.Children())
        {
            if (child.ContentType.Alias.Equals(ArticleAlias, StringComparison.OrdinalIgnoreCase)
                && child.UrlSegment?.Equals(slug, StringComparison.OrdinalIgnoreCase) == true)
                return child;

            if (child.ContentType.Alias.Equals(FolderAlias, StringComparison.OrdinalIgnoreCase))
            {
                var found = FindArticleBySlug(child, slug);
                if (found is not null) return found;
            }
        }

        return null;
    }
}
