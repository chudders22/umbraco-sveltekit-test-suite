'use client';

import { useState } from 'react';
import type { components } from '@/lib/types/umbraco';
import Logo from './Logo';
import NavigationArea from './NavigationArea';
import ThemeToggle from './ThemeToggle';

type HeaderProps = Partial<components['schemas']['HeaderPropertiesModel']>;

export default function Header({ logo = null, siteName = null, links = { items: [] } }: HeaderProps) {
	const [openAreaId, setOpenAreaId] = useState<string | null>(null);

	return (
		<header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-md transition-colors dark:border-zinc-800/80 dark:bg-zinc-950/90">
			<div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
				{/* Logo & Site Name */}
				<a
					href="/"
					className="flex items-center gap-2.5 rounded-lg text-zinc-900 transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:outline-none dark:text-white dark:focus-visible:ring-red-400 dark:focus-visible:ring-offset-zinc-950"
				>
					<span className="block h-12">
						<Logo />
					</span>
				</a>

				{/* Navigation Links */}
				{links && links.items && links.items.length > 0 && (
					<>
						<nav className="hidden md:block" aria-label="Main navigation">
							<ul className="flex items-center gap-0.5">
								{links.items.map((item) =>
									item.content.contentType === 'navigationArea' && item.content.properties ? (
										<NavigationArea
											key={item.content.id}
											item={item}
											isOpen={openAreaId === item.content.id}
											onToggle={(isOpen: boolean) => {
												setOpenAreaId(isOpen ? item.content.id : null);
											}}
										/>
									) : null
								)}
							</ul>
						</nav>

						<div className="flex items-center gap-1">
							<ThemeToggle />

							{/* Mobile Menu Button */}
							<button
								type="button"
								className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:outline-none md:hidden dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-red-400"
							>
								<span className="sr-only">Open main menu</span>
								<svg
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
							</button>
						</div>
					</>
				)}
			</div>
		</header>
	);
}
