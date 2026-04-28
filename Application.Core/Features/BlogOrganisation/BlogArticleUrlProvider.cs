using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Web;

namespace Application.Core.Features.BlogOrganisation;

/// <summary>
/// Provides a clean /blog/{slug} URL for all blog articles regardless of
/// how they are nested in year/month sub-folders.
/// Registered before the default URL provider so it takes precedence.
/// </summary>
public class BlogArticleUrlProvider : IUrlProvider
{
    private const string ArticleAlias = "blogArticle";

    public UrlInfo? GetUrl(IPublishedContent content, UrlMode mode, string? culture, Uri current)
    {
        if (!content.ContentType.Alias.Equals(ArticleAlias, StringComparison.OrdinalIgnoreCase))
            return null;

        var segment = content.UrlSegment ?? content.Name?.ToLowerInvariant();
        if (segment is null) return null;

        var path = $"/blog/{segment}";
        var providerAlias = "BlogArticleUrlProvider";

        return mode == UrlMode.Absolute
            ? UrlInfo.AsUrl($"{current.Scheme}://{current.Authority}{path}", providerAlias, culture, false)
            : UrlInfo.AsUrl(path, providerAlias, culture, false);
    }

    public IEnumerable<UrlInfo> GetOtherUrls(int id, Uri current) => [];

    public string Alias => "BlogArticleUrlProvider";

    public Task<UrlInfo?> GetPreviewUrlAsync(IContent content, string? culture, string? segment)
        => Task.FromResult<UrlInfo?>(null);
}
