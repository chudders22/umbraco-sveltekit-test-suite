'use client';

interface Props {
	href: string;
	title: string;
	target?: string | null;
	isFeatured?: boolean;
	onClick?: () => void;
}

export default function NavigationLink({ href, title, target = null, isFeatured = false, onClick }: Props) {
	if (isFeatured) {
		return (
			<div className="mt-1 border-t border-zinc-100 pt-1 dark:border-zinc-800">
				<a
					href={href}
					target={target ?? undefined}
					className="flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-red-700 transition-colors hover:bg-red-50 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:outline-none focus-visible:ring-inset dark:text-red-400 dark:hover:bg-red-900/20"
					onClick={onClick}
				>
					{title}
				</a>
			</div>
		);
	}

	return (
		<a
			href={href}
			target={target ?? undefined}
			className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:outline-none focus-visible:ring-inset dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
			onClick={onClick}
		>
			{title}
		</a>
	);
}
