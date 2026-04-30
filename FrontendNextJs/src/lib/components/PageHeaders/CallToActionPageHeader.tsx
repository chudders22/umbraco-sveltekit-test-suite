import type { components } from '@/lib/types/umbraco';

interface CallToActionPageHeaderProps {
	heading?: string | null;
	subheading?: string | null;
	backgroundImage?: components['schemas']['IApiMediaWithCropsModel'][] | null;
	ctaLink?: components['schemas']['ApiLinkModel'][] | null;
}

export default function CallToActionPageHeader({
	heading,
	subheading,
	backgroundImage,
	ctaLink
}: CallToActionPageHeaderProps) {
	const bgImageUrl = backgroundImage?.[0]?.url || '';
	const cta = ctaLink?.[0];

	return (
		<section
			className="relative flex min-h-[75vh] items-center overflow-hidden bg-zinc-900 bg-cover bg-center bg-no-repeat dark:bg-zinc-950"
			style={bgImageUrl ? { backgroundImage: `url('${bgImageUrl}')` } : undefined}
		>
			{/* Directional gradient: dark left, transparent right */}
			<div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/80 to-zinc-950/30"></div>
			{/* Bottom fade for grounding */}
			<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent"></div>
			{/* Ambient accent glow */}
			<div
				className="absolute -top-20 left-20 h-72 w-72 rounded-full bg-red-500/10 blur-3xl"
				aria-hidden="true"
			></div>

			<div className="relative z-10 container mx-auto px-4 py-24 sm:px-6 lg:px-8">
				<div className="max-w-3xl">
					{heading && (
						<h1 className="mb-6 font-display text-5xl leading-none font-bold tracking-tighter text-white md:text-7xl">
							{heading}
						</h1>
					)}

					{subheading && (
						<p className="mb-10 max-w-xl text-lg leading-relaxed text-zinc-300 md:text-xl">
							{subheading}
						</p>
					)}

					{cta && cta.url && (
						<a
							href={cta.url}
							target={cta.target ?? undefined}
							className="group inline-flex items-center gap-3 rounded-lg bg-zinc-50 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:gap-4 hover:bg-white focus-visible:ring-2 focus-visible:ring-zinc-50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 focus-visible:outline-none"
						>
							{cta.title || 'Learn More'}
							<span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
								→
							</span>
						</a>
					)}
				</div>
			</div>
		</section>
	);
}
