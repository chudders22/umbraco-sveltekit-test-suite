import type { Meta, StoryObj } from '@storybook/svelte';
import ServiceCard from './ServiceCard.svelte';

const meta = {
	title: 'Blocks/ServicesBlock/ServiceCard',
	component: ServiceCard,
	tags: ['autodocs']
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Executive Search',
		description:
			'We identify and secure senior leaders who match your strategy, culture, and growth stage.',
		image: [
			{
				id: '1',
				name: 'Executive Search',
				mediaType: 'Image',
				url: 'https://placehold.co/900x540/0f172a/ffffff?text=Executive+Search',
				properties: {}
			}
		],
		link: [
			{
				title: 'Explore service',
				url: '/services/executive-search',
				target: '_self',
				linkType: 'External'
			}
		]
	}
};

export const NoImage: Story = {
	args: {
		title: 'Leadership Advisory',
		description:
			'Support for succession planning, role design, and long-term leadership capability.',
		link: [
			{
				title: 'See advisory offer',
				url: '/services/leadership-advisory',
				target: '_self',
				linkType: 'External'
			}
		]
	}
};

export const NoLink: Story = {
	args: {
		title: 'Interim Leadership',
		description: 'Rapid access to experienced interim leaders for high-priority transitions.',
		image: [
			{
				id: '2',
				name: 'Interim Leadership',
				mediaType: 'Image',
				url: 'https://placehold.co/900x540/1e293b/ffffff?text=Interim+Leadership',
				properties: {}
			}
		]
	}
};
