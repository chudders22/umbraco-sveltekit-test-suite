import type { components } from '@/lib/types/umbraco';
import Logo from '@/lib/components/Header/Logo';
import LogoCloud from '@/lib/components/LogoCloud/LogoCloud';
import { resolveMediaUrl } from '@/lib/utils/umbracoApi';

type FooterProps = components['schemas']['FooterPropertiesModel'];
type LogoCloudBlockProps = components['schemas']['LogoCloudBlockPropertiesModel'];
type SocialItemProps = components['schemas']['SocialMediaAccountItemPropertiesModel'];

function platformIcon(url: string): string {
	if (/linkedin/i.test(url))
		return '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>';
	if (/github/i.test(url))
		return '<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>';
	if (/x\.com|twitter/i.test(url))
		return '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>';
	return '<path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>';
}

function isFilled(url: string): boolean {
	return /linkedin|github/i.test(url);
}

export default function Footer({
	addressHeading,
	address,
	addressLinks,
	socialMediaAccounts,
	logos,
	copyright,
	copyrightLinks,
}: FooterProps) {
	const logoCloudProps = (logos as any)?.content?.properties as LogoCloudBlockProps | undefined;

	const socialItems: SocialItemProps[] = (() => {
		const block = (socialMediaAccounts as any)?.content?.properties;
		return (block?.accounts?.items ?? []).map(
			(item: any) => item.content?.properties as SocialItemProps
		);
	})();

	const currentYear = new Date().getFullYear();
	const copyrightText = copyright ?? `© ${currentYear} 3Chillies. All rights reserved.`;

	return (
		<footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
			<div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
				{/* Main grid */}
				<div className="grid grid-cols-1 gap-12 md:grid-cols-4">

					{/* Column 1 — Address (25%) */}
					<div className="md:col-span-1">
						<div className="mb-4 h-0.5 w-8 bg-red-600" aria-hidden="true"></div>
						<h3 className="mb-5 font-display text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
							{addressHeading || 'Contact'}
						</h3>
						{address && (
							<p className="mb-4 whitespace-pre-line text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
								{address}
							</p>
						)}
						{addressLinks && addressLinks.length > 0 && (
							<ul className="space-y-2">
								{addressLinks.map((link, index) => (
									<li key={index}>
										<a
											href={link.url || link.route?.path || '#'}
											target={link.target ?? undefined}
											className="text-sm font-medium text-red-600 underline-offset-4 transition-all hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-1 focus-visible:outline-none dark:text-red-400 dark:hover:text-red-300"
										>
											{link.title}
										</a>
									</li>
								))}
							</ul>
						)}
					</div>

					{/* Column 2 — Social (25%) */}
					<div className="md:col-span-1">
						<div className="mb-4 h-0.5 w-8 bg-red-600" aria-hidden="true"></div>
						<h3 className="mb-5 font-display text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
							Follow Us
						</h3>
						{socialItems.length > 0 ? (
							<ul className="flex flex-wrap gap-4">
								{socialItems.map((account, index) => {
									const link = account.link?.[0];
									const logoUrl = account.logo?.[0]?.url;
									const href = link?.url || link?.route?.path || '#';
									return link ? (
										<li key={index}>
											<a
												href={href}
												target={link.target ?? '_blank'}
												rel="noopener noreferrer"
												aria-label={link.title ?? 'Social media link'}
												className="inline-flex items-center justify-center focus-visible:rounded focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-1 focus-visible:outline-none"
											>
												{logoUrl ? (
													<img
														src={resolveMediaUrl(logoUrl)}
														alt=""
														aria-hidden="true"
														className="h-12 w-12 object-contain grayscale opacity-50 transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90 dark:invert dark:opacity-80 dark:hover:opacity-100"
													/>
												) : (
													<svg
														className="h-12 w-12 shrink-0 grayscale opacity-50 transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90 dark:opacity-80 dark:hover:opacity-100"
														viewBox="0 0 24 24"
														aria-hidden="true"
														{...(isFilled(href)
															? { fill: 'currentColor' }
															: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' })}
													>
														<g dangerouslySetInnerHTML={{ __html: platformIcon(href) }} />
													</svg>
												)}
											</a>
										</li>
									) : null;
								})}
							</ul>
						) : (
							<p className="text-sm text-zinc-400 dark:text-zinc-600">No social accounts added yet.</p>
						)}
					</div>

					{/* Column 3 — Partner logos (50%) */}
					<div className="md:col-span-2">
						<div className="mb-4 h-0.5 w-8 bg-red-600" aria-hidden="true"></div>
						<h3 className="mb-5 font-display text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
							Our Partners
						</h3>
						<LogoCloud logos={logoCloudProps?.logos} standalone={false} />
					</div>
				</div>

				{/* Bottom bar */}
				<div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-zinc-200 pt-8 sm:flex-row sm:items-center dark:border-zinc-800">
					<div className="flex items-center gap-4">
						<span className="block h-8 text-zinc-400 dark:text-zinc-600">
							<Logo />
						</span>
						<p className="text-sm text-zinc-400 dark:text-zinc-600">{copyrightText}</p>
					</div>

					{copyrightLinks && copyrightLinks.length > 0 && (
						<nav aria-label="Footer links">
							<ul className="flex flex-wrap gap-x-6 gap-y-2">
								{copyrightLinks.map((link, index) => (
									<li key={index}>
										<a
											href={link.url || link.route?.path || '#'}
											target={link.target ?? undefined}
											className="text-sm text-zinc-400 underline-offset-4 transition-all hover:text-red-600 hover:underline hover:decoration-red-600 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-1 focus-visible:outline-none dark:text-zinc-500 dark:hover:text-red-400 dark:hover:decoration-red-400"
										>
											{link.title}
										</a>
									</li>
								))}
							</ul>
						</nav>
					)}
				</div>
			</div>
		</footer>
	);
}
