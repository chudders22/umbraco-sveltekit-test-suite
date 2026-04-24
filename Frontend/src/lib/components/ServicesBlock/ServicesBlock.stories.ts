import type { Meta, StoryObj } from '@storybook/svelte';
import ServicesBlock from './ServicesBlock.svelte';
import type { components } from '$lib/types/umbraco';

const mockServices = {
	items: [
		{
			content: {
				contentType: 'serviceBlockItem',
				properties: {
					title: 'Executive Search',
					description: 'Specialist support to appoint transformational senior leaders.',
					image: [
						{
							id: '10',
							name: 'Executive Search',
							mediaType: 'Image',
							url: 'https://placehold.co/900x540/0f172a/ffffff?text=Executive+Search',
							properties: {}
						}
					],
					link: [
						{
							title: 'Read more',
							url: '/services/executive-search',
							target: '_self',
							linkType: 'External'
						}
					]
				}
			}
		},
		{
			content: {
				contentType: 'serviceBlockItem',
				properties: {
					title: 'Leadership Advisory',
					description: 'Guidance on succession, organisational design, and leadership performance.',
					link: [
						{
							title: 'Our approach',
							url: '/services/leadership-advisory',
							target: '_self',
							linkType: 'External'
						}
					]
				}
			}
		},
		{
			content: {
				contentType: 'serviceBlockItem',
				properties: {
					title: 'Interim Leadership',
					description: 'Experienced interim executives for urgent or business-critical periods.',
					image: [
						{
							id: '11',
							name: 'Interim Leadership',
							mediaType: 'Image',
							url: 'https://placehold.co/900x540/1e293b/ffffff?text=Interim+Leadership',
							properties: {}
						}
					]
				}
			}
		}
	]
} as components['schemas']['ApiBlockListModel'];

const meta = {
	title: 'Blocks/ServicesBlock',
	component: ServicesBlock,
	tags: ['autodocs']
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		services: mockServices
	}
};

export const Empty: Story = {
	args: {
		services: {
			items: []
		}
	}
};
