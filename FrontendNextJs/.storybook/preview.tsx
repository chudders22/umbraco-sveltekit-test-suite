import type { Preview } from '@storybook/react';
import '../src/app/globals.css';

const preview: Preview = {
	tags: ['autodocs', 'snapshot'],
	parameters: {
		viewport: {
			viewports: {
				mobile: {
					name: 'Mobile',
					styles: {
						width: '375px',
						height: '667px'
					},
					type: 'mobile'
				}
			}
		},
		test: {
			dangerouslyIgnoreUnhandledErrors: true
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		a11y: {
			test: 'error'
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
			const theme = context.globals['theme'] || 'light';
			const isDark = theme === 'dark';
			if (typeof document !== 'undefined') {
				document.documentElement.classList.toggle('dark', isDark);
				document.body.style.backgroundColor = isDark ? '#020617' : '#ffffff';
			}
			return <Story />;
		}
	]
};

export default preview;
