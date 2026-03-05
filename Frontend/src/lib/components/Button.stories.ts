import type { Meta, StoryObj } from '@storybook/svelte';
import Button from './Button.svelte';

const meta = {
    title: 'Components/Button',
    component: Button,
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
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
        label: { control: 'text' }
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
    args: {
        variant: 'primary',
        size: 'md',
        loading: true,
        label: 'Loading...'
    }
};
