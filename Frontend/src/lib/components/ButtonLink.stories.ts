import type { Meta, StoryObj } from '@storybook/svelte';
import ButtonLink from './ButtonLink.svelte';

const meta = {
    title: 'Components/ButtonLink',
    component: ButtonLink,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'outline', 'ghost']
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg']
        },
        href: { control: 'text' },
        target: { control: 'text' },
        label: { control: 'text' },
        showArrow: { control: 'boolean' }
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
    args: {
        variant: 'primary',
        size: 'md',
        label: 'Learn More',
        href: '#',
        showArrow: true
    }
};
