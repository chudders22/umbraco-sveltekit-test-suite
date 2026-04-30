import type { Meta, StoryObj } from '@storybook/svelte';
import ProgressiveImage from './ProgressiveImage.svelte';

const meta = {
title: 'Components/ProgressiveImage',
component: ProgressiveImage,
tags: ['autodocs', 'snapshot']
} satisfies Meta<typeof ProgressiveImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
args: {
src: 'https://placehold.co/800x600',
alt: 'A placeholder image',
class: 'aspect-video w-full max-w-xl'
}
};

export const Portrait: Story = {
args: {
src: 'https://placehold.co/600x800/3f3f46/ffffff',
alt: 'A portrait placeholder image',
class: 'aspect-[3/4] w-64'
}
};

export const WithHoverEffect: Story = {
name: 'With hover scale effect',
args: {
src: 'https://placehold.co/600x400/dc2626/ffffff',
alt: 'A red placeholder',
class: 'aspect-video w-full max-w-xl',
imgClass: 'transition-transform duration-500 hover:scale-105'
}
};