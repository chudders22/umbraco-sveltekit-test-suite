import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta = {
	title: 'Components/Header',
	component: Header,
	tags: ['autodocs', 'snapshot'],
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `The sticky global site header with a frosted-glass background. Accepts \`siteName\`, an optional \`logo\` image array, and a \`links\` BlockList of navigation items. Supports two navigation item types: \`navigationArea\` (a dropdown group with an optional title and child links) and \`naviationTitleLink\` (a standalone clickable top-level link). Each \`navigationArea\` can have either a plain text title (\`navigationTitle\`) or a clickable title (\`naviationTitleLink\`) that renders a "See all" link at the bottom of its dropdown. Includes a \`ThemeToggle\` button and a mobile menu button (mobile drawer not yet implemented). Uses fullscreen layout in Storybook.`
			}
		}
	}
} satisfies Meta<typeof Header>;

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
	parameters: {
		docs: {
			description: {
				story: 'Shows the header when no `logo` image is provided — only the site name text is used for branding.'
			}
		}
	},
	args: {
		siteName: 'Brand Name Only',
		links: mockLinks
	}
};

export const NoLinks: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Shows the header with no navigation links — the nav area and mobile menu button are hidden entirely, leaving only the logo/site name.'
			}
		}
	},
	args: {
		siteName: 'Under Construction',
		logo: [mockLogo]
	}
};
