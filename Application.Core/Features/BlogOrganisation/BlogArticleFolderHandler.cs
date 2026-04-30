using System.Globalization;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.ContentPublishing;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Services;

namespace Application.Core.Features.BlogOrganisation;

/// <summary>
/// Moves blog articles into year/month sub-folders under the blog root when published.
/// Articles with a publishDate of 2025-03-26 will be moved to Blog → 2025 → March.
/// Year/month folders are published automatically so Umbraco can resolve URLs for articles inside them.
/// This keeps the backoffice organised without affecting URLs, which are handled
/// by <see cref="BlogArticleUrlProvider"/>.
/// </summary>
public class BlogArticleFolderHandler : INotificationAsyncHandler<ContentPublishedNotification>
{
    private const string ArticleAlias = "blogArticle";
    private const string FolderAlias = "blogFolder";
    private const string BlogRootAlias = "blog";
    private const string PublishDateAlias = "publishDate";

    private readonly IContentService _contentService;
    private readonly IContentPublishingService _contentPublishingService;

    public BlogArticleFolderHandler(IContentService contentService, IContentPublishingService contentPublishingService)
    {
        _contentService = contentService;
        _contentPublishingService = contentPublishingService;
    }

    public async Task HandleAsync(ContentPublishedNotification notification, CancellationToken cancellationToken)
    {
        foreach (var entity in notification.PublishedEntities)
        {
            if (!entity.ContentType.Alias.Equals(ArticleAlias, StringComparison.OrdinalIgnoreCase))
                continue;

            await TryOrganiseAsync(entity);
        }
    }

    private async Task TryOrganiseAsync(IContent article)
    {
        var publishDate = article.GetValue<DateTime?>(PublishDateAlias) ?? DateTime.UtcNow;
        var yearName = publishDate.Year.ToString(CultureInfo.InvariantCulture);
        var monthName = publishDate.ToString("MMMM", CultureInfo.InvariantCulture);

        var blogRoot = FindBlogRoot(article);
        if (blogRoot is null) return;

        var yearFolder = await GetOrCreateFolderAsync(blogRoot.Id, yearName);
        var monthFolder = await GetOrCreateFolderAsync(yearFolder.Id, monthName);

        if (article.ParentId == monthFolder.Id) return;

        _contentService.Move(article, monthFolder.Id);
    }

    private IContent? FindBlogRoot(IContent content)
    {
        var current = _contentService.GetById(content.ParentId);
        while (current is not null)
        {
            if (current.ContentType.Alias.Equals(BlogRootAlias, StringComparison.OrdinalIgnoreCase))
                return current;

            current = _contentService.GetById(current.ParentId);
        }

        return null;
    }

    private async Task<IContent> GetOrCreateFolderAsync(int parentId, string name)
    {
        var existing = _contentService
            .GetPagedChildren(parentId, 0, int.MaxValue, out _)
            .FirstOrDefault(c => c.ContentType.Alias == FolderAlias
                              && c.Name!.Equals(name, StringComparison.OrdinalIgnoreCase));

        if (existing is not null) return existing;

        var folder = _contentService.Create(name, parentId, FolderAlias);
        _contentService.Save(folder);

        // Folders must be published so that articles inside them remain routable
        await _contentPublishingService.PublishAsync(
            folder.Key,
            [new CulturePublishScheduleModel { Culture = null, Schedule = null }],
            Constants.Security.SuperUserKey);

        return folder;
    }
}

