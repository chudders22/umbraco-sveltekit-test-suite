import type { Meta, StoryObj } from '@storybook/svelte';
import StorybookWrapper from './StorybookNavigationAreaWrapper.svelte';

const meta = {
	title: 'Components/Header/NavigationArea',
	component: StorybookWrapper,
	tags: ['autodocs', 'snapshot']
};

export default meta;
type Story = StoryObj<typeof meta>;

// Workaround for storybook args mapping to Svelte 5 props
export const VisualTitleGroup: Story = {
	args: {
		item: {
			content: {
				id: 'area-1',
				contentType: 'navigationArea',
				properties: {
					title: {
						content: {
							contentType: 'navigationTitle',
							id: 't1',
							properties: { title: 'Our Services' }
						}
					},
					links: [
						{ title: 'Web Design', url: '/services/design', linkType: 'Content' },
						{ title: 'SEO Optimization', url: '/services/seo', linkType: 'Content' }
					]
				}
			}
		}
	}
};

export const ClickableTitleGroup: Story = {
	args: {
		item: {
			content: {
				id: 'area-2',
				contentType: 'navigationArea',
				properties: {
					title: {
						content: {
							contentType: 'naviationTitleLink',
							id: 't2',
							properties: {
								titleLink: [{ title: 'Products', url: '/products', linkType: 'Content' }]
							}
						}
					},
					links: [
						{ title: 'Software', url: '/products/software', linkType: 'Content' },
						{ title: 'Hardware', url: '/products/hardware', linkType: 'Content' }
					]
				}
			}
		}
	}
};
