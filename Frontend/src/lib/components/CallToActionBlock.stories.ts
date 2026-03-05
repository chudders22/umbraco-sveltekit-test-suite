import type { Meta, StoryObj } from '@storybook/svelte';
import CallToActionBlock from './CallToActionBlock.svelte';

const meta = {
    title: 'Blocks/CallToActionBlock',
    component: CallToActionBlock,
    tags: ['autodocs']
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        heading: 'Ready to Transform Your Business?',
        text: {
            markup:
                '<p>Join thousands of companies that trust us to deliver <strong>exceptional results</strong>. Get started today and see the difference.</p>',
            blocks: []
        },
        actions: [
            {
                url: '/get-started',
                title: 'Get Started',
                target: '_self',
                route: { path: '/get-started', startItem: { id: '0', path: '/' } },
                linkType: 'Content'
            },
            {
                url: '/learn-more',
                title: 'Learn More',
                target: '_self',
                route: { path: '/learn-more', startItem: { id: '0', path: '/' } },
                linkType: 'Content'
            }
        ],
        image: [
            {
                id: '200',
                name: 'Team collaboration',
                mediaType: 'Image',
                url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop',
                properties: {}
            }
        ]
    }
};

export const WithoutImage: Story = {
    args: {
        heading: 'Start Your Journey Today',
        text: {
            markup:
                '<p>We offer comprehensive solutions tailored to your needs. Our team of experts is ready to help you succeed.</p>',
            blocks: []
        },
        actions: [
            {
                url: '/contact',
                title: 'Contact Us',
                target: '_self',
                route: { path: '/contact', startItem: { id: '0', path: '/' } },
                linkType: 'Content'
            }
        ]
    }
};

export const HeadingOnly: Story = {
    args: {
        heading: "Let's Build Something Great Together"
    }
};
