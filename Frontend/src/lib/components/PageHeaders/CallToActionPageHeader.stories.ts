import type { Meta, StoryObj } from '@storybook/svelte';
import CallToActionPageHeader from './CallToActionPageHeader.svelte';

const meta = {
    title: 'PageHeaders/CallToActionPageHeader',
    component: CallToActionPageHeader as any,
    tags: ['autodocs']
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        heading: 'Where Leadership Matters.',
        subheading:
            "Transforming clients' performance through the strength of exceptional, world-class leadership.",
        backgroundImage: [
            {
                id: '123',
                name: 'Mountains',
                mediaType: 'Image',
                url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop',
                properties: {}
            }
        ],
        ctaLink: [
            {
                url: '/how-we-help',
                title: 'How We Help',
                target: '_self',
                route: { path: '/how-we-help', startItem: { id: '0', path: '/' } },
                linkType: 'Content'
            }
        ]
    }
};

export const WithoutCTA: Story = {
    args: {
        heading: 'Global Reach, Local Expertise',
        subheading: 'Connecting organizations with the leadership talent they need.',
        backgroundImage: [
            {
                id: '124',
                name: 'City Skyline',
                mediaType: 'Image',
                url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2670&auto=format&fit=crop',
                properties: {}
            }
        ]
    }
};
