'use client';

import { useEffect } from 'react';
import type { components } from '@/lib/types/umbraco';
import NavigationToggle from './NavigationToggle';
import NavigationLink from './NavigationLink';

interface Props {
	item: components['schemas']['ApiBlockItemModel'];
	isOpen?: boolean;
	onToggle?: (isOpen: boolean) => void;
}

function resolveLinkHref(link: components['schemas']['ApiLinkModel']): string {
	if (link.url) return link.url;
	if (link.route?.path) return link.route.path;
	return '#';
}

export default function NavigationArea({ item, isOpen = false, onToggle }: Props) {
	const itemProps: any = item.content.properties;

	useEffect(() => {
		function handleKeydown(event: KeyboardEvent) {
			if (event.key === 'Escape' && isOpen) {
				if (onToggle) onToggle(false);
			}
		}
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	}, [isOpen, onToggle]);

	function toggleMenu() {
		if (onToggle) onToggle(!isOpen);
	}

	const titleContentType = itemProps.title?.content?.contentType;
	const titleLinkItems = itemProps.title?.content?.properties?.titleLink;
	const titleLinkProp =
		titleContentType === 'naviationTitleLink' && titleLinkItems?.length > 0
			? titleLinkItems[0]
			: null;
	const plainTitle =
		titleContentType === 'navigationTitle'
			? itemProps.title.content.properties?.title || 'Menu'
			: null;

	const hasLinks = itemProps.links && itemProps.links.length > 0;
	const plainLinkClass =
		'flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-zinc-500 transition-all hover:bg-zinc-100 hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:outline-none dark:text-zinc-400 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-50 dark:focus-visible:ring-red-400 dark:focus-visible:ring-offset-zinc-950';

	return (
		<li className="relative py-4">
			{hasLinks ? (
				<>
					{/* Title as dropdown toggle */}
					{titleLinkProp ? (
						<NavigationToggle isOpen={isOpen} title={titleLinkProp.title || 'Link'} onClick={toggleMenu} />
					) : plainTitle ? (
						<NavigationToggle isOpen={isOpen} title={plainTitle} onClick={toggleMenu} />
					) : null}

					{/* Dropdown Links */}
					{isOpen && (
						<div className="absolute top-full left-0 z-50 mt-1 min-w-[200px] rounded-xl bg-white p-1 shadow-xl ring-1 shadow-zinc-900/5 ring-zinc-200/80 dark:bg-zinc-900 dark:shadow-zinc-950/50 dark:ring-zinc-800">
							{itemProps.links.map((link: components['schemas']['ApiLinkModel'], index: number) => (
								<NavigationLink
									key={index}
									href={resolveLinkHref(link)}
									target={link.target ?? undefined}
									title={link.title || 'Link'}
									onClick={() => onToggle && onToggle(false)}
								/>
							))}

							{/* "See all" link for clickable titles */}
							{titleLinkProp && (
								<NavigationLink
									href={resolveLinkHref(titleLinkProp)}
									target={titleLinkProp.target ?? undefined}
									title={`See all ${titleLinkProp.title || 'Link'}`}
									isFeatured={true}
									onClick={() => onToggle && onToggle(false)}
								/>
							)}
						</div>
					)}
				</>
			) : titleLinkProp ? (
				/* No child links — render as a plain anchor */
				<a
					href={resolveLinkHref(titleLinkProp)}
					target={titleLinkProp.target ?? undefined}
					className={plainLinkClass}
				>
					{titleLinkProp.title || 'Link'}
				</a>
			) : plainTitle ? (
				<span className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
					{plainTitle}
				</span>
			) : null}
		</li>
	);
}
