import type { components } from '@/lib/types/umbraco';

interface ImageOffsetPageHeaderProps {
	image?: components['schemas']['IApiMediaWithCropsModel'][] | null;
	title?: string | null;
	route?: string | null;
}

interface Crumb {
	label: string;
	href: string;
}

function toTitleCase(slug: string): string {
	return slug
		.split('-')
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ');
}

export default function ImageOffsetPageHeader({ image, title, route }: ImageOffsetPageHeaderProps) {
	const bgImageUrl = image?.[0]?.url || '';

	const segments = (route ?? '').split('/').filter(Boolean);
	const breadcrumbs: Crumb[] = [{ label: 'Home', href: '/' }];
	segments.slice(0, -1).forEach((seg, i) => {
		breadcrumbs.push({
			label: toTitleCase(seg),
			href: '/' + segments.slice(0, i + 1).join('/')
		});
	});

	const currentLabel =
		title ??
		toTitleCase(segments[segments.length - 1] ?? '') ??
		'';

	return (
		<section
			className="relative flex min-h-[35vh] items-center overflow-hidden bg-zinc-50 bg-cover bg-center bg-no-repeat dark:bg-zinc-950"
			style={bgImageUrl ? { backgroundImage: `url('${bgImageUrl}')` } : undefined}
			aria-label={currentLabel ? `${currentLabel} page header` : 'Page header'}
		>
			<div
				className="absolute inset-0 bg-gradient-to-r from-zinc-50/98 via-zinc-50/80 to-transparent dark:from-zinc-950/98 dark:via-zinc-950/85 dark:to-zinc-950/40"
				aria-hidden="true"
			></div>
			<div
				className="absolute inset-0 bg-gradient-to-t from-zinc-50/70 to-transparent dark:from-zinc-950/70"
				aria-hidden="true"
			></div>
			<div
				className="absolute -top-16 left-24 h-64 w-64 rounded-full bg-red-500/10 blur-3xl"
				aria-hidden="true"
			></div>

			<div className="relative z-10 container mx-auto px-4 py-16 sm:px-6 lg:px-8">
				<div className="max-w-3xl">
					{breadcrumbs.length > 0 && (
						<nav aria-label="Breadcrumb" className="mb-6">
							<ol className="flex flex-wrap items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
								{breadcrumbs.map((crumb) => (
									<li key={crumb.href} className="flex items-center gap-1.5">
										<a
											href={crumb.href}
											className="transition-colors hover:text-zinc-900 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-1 focus-visible:outline-none dark:hover:text-zinc-100"
										>
											{crumb.label}
										</a>
										<span aria-hidden="true" className="text-zinc-300 dark:text-zinc-600">
											/
										</span>
									</li>
								))}
								<li aria-current="page" className="font-medium text-zinc-700 dark:text-zinc-200">
									{currentLabel}
								</li>
							</ol>
						</nav>
					)}

					<div className="mb-5 h-0.5 w-32 bg-red-600" aria-hidden="true"></div>

					{currentLabel && (
						<h1 className="font-display text-4xl leading-none font-bold tracking-tighter text-zinc-900 md:text-5xl dark:text-white">
							{currentLabel}
						</h1>
					)}
				</div>
			</div>
		</section>
	);
}
