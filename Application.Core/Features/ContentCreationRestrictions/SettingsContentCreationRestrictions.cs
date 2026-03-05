using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using System.Linq;

namespace Application.Core.Features.ContentCreationRestrictions
{
    public class SettingsContentCreationRestrictions : INotificationHandler<ContentSavingNotification>
    {
        private readonly IContentService _contentService;

        public SettingsContentCreationRestrictions(IContentService contentService)
        {
            _contentService = contentService;
        }

        public void Handle(ContentSavingNotification notification)
        {
            foreach (var node in notification.SavedEntities)
            {
                // We only care about new nodes being created under a parent
                if (node.Id != 0 || node.ParentId <= 0)
                {
                    continue;
                }

                var parent = _contentService.GetById(node.ParentId);

                // Is the parent the Settings node? Replace "settings" with your actual alias for the root settings node
                if (parent != null && parent.ContentType.Alias.Equals("settings", System.StringComparison.InvariantCultureIgnoreCase))
                {
                    // Get all existing children of the Settings node, using the full method signature to avoid obsolete warning
                    var existingChildren = _contentService.GetPagedChildren(parent.Id, 0, int.MaxValue, out _, null, null, null, false);

                    // Check if a child of the same document type already exists
                    if (existingChildren.Any(c => c.ContentType.Alias == node.ContentType.Alias))
                    {
                        // Cancel the save operation
                        notification.CancelOperation(new EventMessage("Content Creation Blocked", $"A node of type '{node.ContentType.Name}' already exists under the Settings folder. You can only create one of each type.", EventMessageType.Error));
                        return;
                    }
                }
            }
        }
    }

    public class SettingsContentCreationRestrictionsComposer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.AddNotificationHandler<ContentSavingNotification, SettingsContentCreationRestrictions>();
        }
    }
}
