import type { Meta, StoryObj } from '@storybook/react';
import ButtonLink from './ButtonLink';

const meta = {
	title: 'Components/ButtonLink',
	component: ButtonLink,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `An \`<a>\` element styled identically to \`Button\`. Use \`ButtonLink\` for navigation — internal routes or external URLs — where a real anchor tag is semantically correct. Shares the same four visual variants (\`primary\`, \`secondary\`, \`outline\`, \`ghost\`) and three sizes (\`sm\`, \`md\`, \`lg\`) as \`Button\`. Has an optional \`showArrow\` prop that appends an animated arrow (→) that slides right on hover. For non-navigating actions (e.g. form submit), use \`Button\` instead.`
			}
		}
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'outline', 'ghost'],
			description: 'Visual style of the link button.'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Size of the link button — affects padding and font size.'
		},
		href: { control: 'text', description: 'The URL the link navigates to.' },
		target: { control: 'text', description: 'Link target attribute, e.g. `_blank` for a new tab. Defaults to `_self`.' },
		label: { control: 'text', description: 'Visible link text.' },
		showArrow: { control: 'boolean', description: 'When true, appends an animated → arrow that slides right on hover.' }
	}
} satisfies Meta<typeof ButtonLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: 'primary',
		size: 'md',
		label: 'Primary Link',
		href: '#'
	}
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		size: 'md',
		label: 'Secondary Link',
		href: '#'
	}
};

export const Outline: Story = {
	args: {
		variant: 'outline',
		size: 'md',
		label: 'Outline Link',
		href: '#'
	}
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		size: 'md',
		label: 'Ghost Link',
		href: '#'
	}
};

export const WithArrow: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates the `showArrow` prop — an animated → arrow is appended to the label and slides right on hover, useful for primary CTAs that imply forward navigation.'
			}
		}
	},
	args: {
		variant: 'primary',
		size: 'md',
		label: 'Learn More',
		href: '#',
		showArrow: true
	}
};
