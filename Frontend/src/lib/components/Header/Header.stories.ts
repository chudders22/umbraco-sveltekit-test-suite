import type { Meta, StoryObj } from '@storybook/svelte';
import Header from './Header.svelte';

const meta = {
	title: 'Components/Header',
	component: Header,
	tags: ['autodocs', 'snapshot'],
	parameters: {
		layout: 'fullscreen'
	}
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockLogo = {
	id: '123',
	name: 'Logo',
	mediaType: 'Image',
	url: 'https://placehold.co/150x50/312e81/ffffff?text=Logo',
	properties: {},
	width: 150,
	height: 50,
	bytes: 1024
};

const mockLinks: any = {
	items: [
		{
			content: {
				id: 'l1',
				contentType: 'navigationArea',
				properties: {
					title: {
						content: {
							contentType: 'navigationTitle',
							id: 't1',
							properties: { title: 'Company (Visual group)' }
						}
					},
					links: [
						{ title: 'About Us', url: '/about', linkType: 'Content' },
						{ title: 'Careers', url: '/careers', linkType: 'Content' }
					]
				}
			}
		},
		{
			content: {
				id: 'l2',
				contentType: 'navigationArea',
				properties: {
					title: {
						content: {
							contentType: 'naviationTitleLink',
							id: 't2',
							properties: {
								titleLink: [
									{ title: 'Services (Clickable)', url: '/services', linkType: 'Content' }
								]
							}
						}
					},
					links: [
						{ title: 'Consulting', url: '/services/consulting', linkType: 'Content' },
						{ title: 'Development', url: '/services/development', linkType: 'Content' }
					]
				}
			}
		},
		{
			content: {
				id: 'l3',
				contentType: 'naviationTitleLink' as const,
				properties: {
					titleLink: [
						{
							title: 'About',
							url: '/about',
							linkType: 'External' as const
						}
					]
				}
			}
		}
	]
};

export const Default: Story = {
	args: {
		siteName: 'My Awesome Blog',
		logo: [mockLogo],
		links: mockLinks
	}
};

export const NoLogo: Story = {
	args: {
		siteName: 'Brand Name Only',
		links: mockLinks
	}
};

export const NoLinks: Story = {
	args: {
		siteName: 'Under Construction',
		logo: [mockLogo]
	}
};
