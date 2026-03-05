import type { Meta, StoryObj } from '@storybook/svelte';
import NavigationToggle from './NavigationToggle.svelte';

const meta = {
	title: 'Components/Header/NavigationToggle',
	component: NavigationToggle,
	tags: ['autodocs', 'snapshot']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ClosedTextMenu: Story = {
	args: {
		isOpen: false,
		title: 'Menu Item',
		onclick: () => console.log('Toggled!')
	}
};

export const OpenTextMenu: Story = {
	args: {
		isOpen: true,
		title: 'Active Menu',
		onclick: () => console.log('Toggled!')
	}
};
