using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DeliveryApi;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Routing;

namespace Application.Core.Features.BlogOrganisation;

public class BlogOrganisationComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.AddNotificationHandler<ContentPublishingNotification, BlogArticlePublishDateHandler>();
        builder.AddNotificationAsyncHandler<ContentPublishedNotification, BlogArticleFolderHandler>();

        // Register URL provider first so it overrides default for blog articles
        builder.UrlProviders().Insert(0, typeof(BlogArticleUrlProvider));
        // Route /blog/{slug} in standard routing (needed for VerifyCollisionAsync in the backoffice)
        builder.ContentFinders().Insert(0, typeof(BlogContentFinder));
        // Register the Delivery API path resolver (replaces IContentFinder for the headless API)
        builder.Services.AddSingleton<IApiContentPathResolver, BlogApiContentPathResolver>();
    }
}
