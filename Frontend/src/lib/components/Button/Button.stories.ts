import type { Meta, StoryObj } from '@storybook/svelte';
import Button from './Button.svelte';

const meta = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `A reusable native \`<button>\` element with four visual variants and three sizes. Use \`Button\` for actions that do not navigate — form submissions, toggles, modal triggers, and other in-page interactions. For navigation links styled as buttons, use \`ButtonLink\` instead. Supports a \`loading\` state that shows a spinner and disables interaction while an async operation is in progress, and a \`disabled\` state. All variants respond to dark mode.`
			}
		}
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'outline', 'ghost'],
			description: 'Visual style of the button.'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Size of the button — affects padding and font size.'
		},
		disabled: { control: 'boolean', description: 'Disables the button and prevents click events.' },
		loading: { control: 'boolean', description: 'Shows a spinner and disables interaction while an async action is in progress.' },
		label: { control: 'text', description: 'Button label text.' }
	}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: 'primary',
		size: 'md',
		label: 'Primary Button'
	}
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		size: 'md',
		label: 'Secondary Button'
	}
};

export const Outline: Story = {
	args: {
		variant: 'outline',
		size: 'md',
		label: 'Outline Button'
	}
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		size: 'md',
		label: 'Ghost Button'
	}
};

export const Loading: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Shows the loading spinner state — used while an async operation (e.g. form submission) is in progress. The button is automatically disabled while loading.'
			}
		}
	},
	args: {
		variant: 'primary',
		size: 'md',
		loading: true,
		label: 'Loading...'
	}
};
