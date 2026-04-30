import type { Meta, StoryObj } from '@storybook/react';
import NavigationToggle from './NavigationToggle';

const meta = {
	title: 'Components/Header/NavigationToggle',
	component: NavigationToggle,
	tags: ['autodocs', 'snapshot'],
	parameters: {
		docs: {
			description: {
				component: `The toggle button for a \`NavigationArea\` dropdown. Renders the group title as a clickable button with a chevron icon that rotates 180° when the menu is open. Sets \`aria-expanded\` and \`aria-haspopup\` for accessibility. Props: \`isOpen\` (boolean — controls chevron direction and aria state), \`title\` (the label text), and \`onClick\` (callback invoked on click).`
			}
		}
	}
} satisfies Meta<typeof NavigationToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClosedTextMenu: Story = {
	args: {
		isOpen: false,
		title: 'Menu Item',
		onClick: () => console.log('Toggled!')
	}
};

export const OpenTextMenu: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Shows the toggle in its open/active state — the chevron is rotated 180° and `aria-expanded` is `true`.'
			}
		}
	},
	args: {
		isOpen: true,
		title: 'Active Menu',
		onClick: () => console.log('Toggled!')
	}
};
