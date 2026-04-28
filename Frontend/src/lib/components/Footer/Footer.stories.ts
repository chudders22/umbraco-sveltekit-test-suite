import type { Meta, StoryObj } from '@storybook/svelte';
import Footer from './Footer.svelte';

const meta = {
	title: 'Components/Footer',
	component: Footer,
	tags: ['autodocs', 'snapshot'],
	parameters: {
		layout: 'fullscreen'
	}
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockFooterLinks: any[] = [
	{ title: 'Privacy Policy', url: '/privacy', linkType: 'Content' },
	{ title: 'Terms of Service', url: '/terms', linkType: 'Content' },
	{ title: 'Cookie Policy', url: '/cookies', linkType: 'Content' }
];

const mockSocialLinks = {
	facebookUrl: 'https://facebook.com/3chillies',
	instagramUrl: 'https://instagram.com/3chillies',
	xUrl: 'https://x.com/3chillies',
	linkedInUrl: 'https://linkedin.com/company/3chillies',
	gitHubUrl: 'https://github.com/3chillies'
};

export const Default: Story = {
	args: {
		addressHeading: 'Get in Touch',
		address: '123 Tech Street\nManchester\nM1 2AB',
		addressLinks: [
			{ title: '+44 161 123 4567', url: 'tel:+441611234567', linkType: 'External' },
			{ title: 'hello@3chillies.co.uk', url: 'mailto:hello@3chillies.co.uk', linkType: 'External' }
		],
		copyright: '© 2024 3Chillies. All rights reserved.',
		copyrightLinks: mockFooterLinks,
		socialLinks: mockSocialLinks
	}
};

export const WithSocialLinks: Story = {
	args: {
		addressHeading: 'Get in Touch',
		address: '123 Tech Street\nManchester\nM1 2AB',
		addressLinks: [
			{ title: 'hello@3chillies.co.uk', url: 'mailto:hello@3chillies.co.uk', linkType: 'External' }
		],
		copyright: '© 2024 3Chillies. All rights reserved.',
		copyrightLinks: mockFooterLinks,
		socialLinks: {
			facebookUrl: 'https://facebook.com/3chillies',
			instagramUrl: 'https://instagram.com/3chillies',
			xUrl: 'https://x.com/3chillies',
			linkedInUrl: 'https://linkedin.com/company/3chillies',
			youTubeUrl: 'https://youtube.com/@3chillies',
			gitHubUrl: 'https://github.com/3chillies',
			blueskyUrl: 'https://bsky.app/profile/3chillies.bsky.social'
		}
	}
};

export const MinimalContent: Story = {
	args: {
		addressHeading: 'Contact',
		address: '123 Tech Street\nManchester',
		addressLinks: [
			{ title: 'hello@3chillies.co.uk', url: 'mailto:hello@3chillies.co.uk', linkType: 'External' }
		]
	}
};

export const NoLogos: Story = {
	args: {
		addressHeading: 'Get in Touch',
		address: '123 Tech Street\nManchester\nM1 2AB',
		addressLinks: [
			{ title: '+44 161 123 4567', url: 'tel:+441611234567', linkType: 'External' },
			{ title: 'hello@3chillies.co.uk', url: 'mailto:hello@3chillies.co.uk', linkType: 'External' }
		],
		copyrightLinks: mockFooterLinks,
		socialLinks: mockSocialLinks
	}
};

export const CustomCopyright: Story = {
	args: {
		addressHeading: 'Get in Touch',
		address: '123 Tech Street\nManchester\nM1 2AB',
		addressLinks: [
			{ title: '+44 161 123 4567', url: 'tel:+441611234567', linkType: 'External' }
		],
		copyright: '© 2024 3Chillies Ltd. Registered in England & Wales No. 12345678.',
		copyrightLinks: mockFooterLinks,
		socialLinks: mockSocialLinks
	}
};
