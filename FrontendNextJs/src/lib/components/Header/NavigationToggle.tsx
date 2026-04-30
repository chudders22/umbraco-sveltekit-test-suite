'use client';

interface Props {
	isOpen: boolean;
	title: string;
	onClick: () => void;
}

export default function NavigationToggle({ isOpen, title, onClick }: Props) {
	return (
		<button
			type="button"
			className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-zinc-500 transition-all hover:bg-zinc-100 hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:outline-none dark:text-zinc-400 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-50 dark:focus-visible:ring-red-400 dark:focus-visible:ring-offset-zinc-950"
			onClick={onClick}
			aria-expanded={isOpen}
			aria-haspopup="true"
		>
			{title}
			<svg
				className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="2"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
			</svg>
		</button>
	);
}
