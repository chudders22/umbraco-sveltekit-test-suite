import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

function createThemeStore() {
	const { subscribe, set, update } = writable<Theme>('light');

	function applyTheme(theme: Theme) {
		if (browser) {
			document.documentElement.classList.toggle('dark', theme === 'dark');
			localStorage.setItem('theme', theme);
		}
	}

	function initTheme() {
		if (!browser) return;

		const stored = localStorage.getItem('theme') as Theme | null;

		if (stored === 'light' || stored === 'dark') {
			set(stored);
			applyTheme(stored);
		} else {
			// Fall back to system preference
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const systemTheme: Theme = prefersDark ? 'dark' : 'light';
			set(systemTheme);
			applyTheme(systemTheme);
		}
	}

	function toggleTheme() {
		update((current) => {
			const next: Theme = current === 'dark' ? 'light' : 'dark';
			applyTheme(next);
			return next;
		});
	}

	return {
		subscribe,
		initTheme,
		toggleTheme
	};
}

export const theme = createThemeStore();
