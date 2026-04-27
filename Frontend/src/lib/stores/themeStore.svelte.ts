import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

function createTheme() {
	let current = $state<Theme>('light');

	function applyTheme(theme: Theme) {
		if (browser) {
			document.documentElement.classList.toggle('dark', theme === 'dark');
			localStorage.setItem('theme', theme);
		}
	}

	function init() {
		if (!browser) return;

		const stored = localStorage.getItem('theme') as Theme | null;

		if (stored === 'light' || stored === 'dark') {
			current = stored;
			applyTheme(stored);
		} else {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			current = prefersDark ? 'dark' : 'light';
			applyTheme(current);
		}
	}

	function toggle() {
		current = current === 'dark' ? 'light' : 'dark';
		applyTheme(current);
	}

	return {
		get current() {
			return current;
		},
		init,
		toggle
	};
}

export const theme = createTheme();
