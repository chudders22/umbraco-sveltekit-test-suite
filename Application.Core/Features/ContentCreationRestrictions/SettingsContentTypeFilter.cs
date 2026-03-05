using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Services.Filters;

namespace Application.Core.Features.ContentCreationRestrictions
{
    public class SettingsContentTypeFilter : IContentTypeFilter
    {
        private readonly IContentService _contentService;

        public SettingsContentTypeFilter(IContentService contentService)
        {
            _contentService = contentService;
        }

        public Task<IEnumerable<TItem>> FilterAllowedAtRootAsync<TItem>(IEnumerable<TItem> contentTypes) where TItem : IContentTypeComposition
        {
            // We only care about filtering children, not the root
            return Task.FromResult(contentTypes);
        }

        public Task<IEnumerable<ContentTypeSort>> FilterAllowedChildrenAsync(IEnumerable<ContentTypeSort> contentTypes, Guid parentContentTypeKey, Guid? parentContentKey)
        {
            // If there's no parent content key, we're likely outside the context of a specific node
            if (!parentContentKey.HasValue)
            {
                return Task.FromResult(contentTypes);
            }

            // Get the parent node to check if it's the Settings node
            var parent = _contentService.GetById(parentContentKey.Value);

            if (parent != null && parent.ContentType.Alias.Equals("settings", StringComparison.InvariantCultureIgnoreCase))
            {
                // Get all existing children aliases, using the full method signature to avoid obsolete warning
                var existingChildrenAliases = _contentService.GetPagedChildren(parent.Id, 0, int.MaxValue, out _, null, null, null, false)
                                                             .Select(c => c.ContentType.Alias)
                                                             .Distinct()
                                                             .ToList();

                // Filter out content types that already have an instance created under this node
                var filteredContentTypes = contentTypes.Where(ct => !existingChildrenAliases.Contains(ct.Alias)).ToList();

                return Task.FromResult<IEnumerable<ContentTypeSort>>(filteredContentTypes);
            }

            // If not the Settings node, return the list unmodified
            return Task.FromResult(contentTypes);
        }
    }

    public class SettingsContentTypeFilterComposer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.ContentTypeFilters().Append<SettingsContentTypeFilter>();
        }
    }
}
