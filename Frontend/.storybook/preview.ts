import type { Preview } from '@storybook/sveltekit';
import '../src/routes/layout.css';

const preview: Preview = {
	tags: ['autodocs', 'snapshot', 'test-light', 'test-dark'],
	parameters: {
		// Map custom tags to globals for '@storybook/addon-vitest' multi-theme testing
		viewport: {
			viewports: {
				mobile: {
					name: 'Mobile',
					styles: {
						width: '375px',
						height: '667px',
					},
					type: 'mobile',
				},
			},
		},
		test: {
			dangerouslyIgnoreUnhandledErrors: true,
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: 'error',
		}
	},

	globalTypes: {
		theme: {
			description: 'Toggle dark mode',
			toolbar: {
				title: 'Theme',
				icon: 'moon',
				items: [
					{ value: 'light', icon: 'sun', title: 'Light' },
					{ value: 'dark', icon: 'moon', title: 'Dark' }
				],
				dynamicTitle: true
			}
		}
	},

	initialGlobals: {
		theme: 'light'
	},

	decorators: [
		(Story, context) => {
			const theme = context.globals.theme || 'light';
			const isDark = theme === 'dark';
			// Apply dark class to the document root for Tailwind dark: variants
			if (typeof document !== 'undefined') {
				document.documentElement.classList.toggle('dark', isDark);
				document.body.style.backgroundColor = isDark ? '#020617' : '#ffffff';
			}
			return Story();
		}
	]
};

export const tags = {
	'test-light': {
		globals: { theme: 'light' }
	},
	'test-dark': {
		globals: { theme: 'dark' }
	}
};

export default preview;
