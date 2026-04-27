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
        // A reasonable upper bound for child nodes under the Settings node.
        // The Settings node is a configuration container and should never have
        // thousands of children; int.MaxValue would cause unbounded DB queries.
        private const int MaxSettingsChildren = 500;

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

            // IContentService does not expose async paged-query overloads in Umbraco 17.
            // The async method signature is required by IContentTypeFilter, but this
            // implementation is synchronous. Revisit when async paged queries are available.
            var parent = _contentService.GetById(parentContentKey.Value);

            if (parent != null && parent.ContentType.Alias.Equals("settings", StringComparison.InvariantCultureIgnoreCase))
            {
                var existingChildrenAliases = _contentService.GetPagedChildren(parent.Id, 0, MaxSettingsChildren, out _, null, null, null, false)
                                                             .Select(c => c.ContentType.Alias)
                                                             .Distinct()
                                                             .ToList();

                var filteredContentTypes = contentTypes.Where(ct => !existingChildrenAliases.Contains(ct.Alias)).ToList();

                return Task.FromResult<IEnumerable<ContentTypeSort>>(filteredContentTypes);
            }

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
