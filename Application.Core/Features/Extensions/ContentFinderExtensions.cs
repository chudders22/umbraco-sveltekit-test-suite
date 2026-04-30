using System.Linq;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Web.Common;
using Umbraco.Extensions;

namespace Application.Core.Features.Extensions;

public static class ContentFinderExtensions
{
	private const string HomepageAlias = "homepage";
	private const string BlogAlias = "blog";

	public static IPublishedContent? GetHomepage(this UmbracoHelper umbracoHelper)
	{
		return umbracoHelper
			.ContentAtRoot()
			.FirstOrDefault(x => x.ContentType.Alias.InvariantEquals(HomepageAlias));
	}

	public static IPublishedContent? GetBlogRoot(this UmbracoHelper umbracoHelper)
	{
		var homepage = umbracoHelper.GetHomepage();
		if (homepage is null)
		{
			return null;
		}

		return homepage
			.Descendants()
			.FirstOrDefault(x => x.ContentType.Alias.InvariantEquals(BlogAlias));
	}
}
