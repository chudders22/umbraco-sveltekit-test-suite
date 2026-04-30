using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;

namespace Application.Core.Features.BlogOrganisation;

/// <summary>
/// Sets <c>publishDate</c> to the current UTC time when a blog article is published
/// for the first time (i.e. the property has no value yet).
/// Uses <see cref="ContentPublishingNotification"/> so the value is included in the
/// current publish operation without requiring an extra save.
/// </summary>
public class BlogArticlePublishDateHandler : INotificationHandler<ContentPublishingNotification>
{
    private const string ContentTypeAlias = "blogArticle";
    private const string PropertyAlias = "publishDate";

    public void Handle(ContentPublishingNotification notification)
    {
        foreach (var entity in notification.PublishedEntities)
        {
            if (!entity.ContentType.Alias.Equals(ContentTypeAlias, StringComparison.OrdinalIgnoreCase))
                continue;

            var existing = entity.GetValue<DateTime?>(PropertyAlias);
            if (existing.HasValue)
                continue;

            entity.SetValue(PropertyAlias, DateTime.UtcNow);
        }
    }
}

