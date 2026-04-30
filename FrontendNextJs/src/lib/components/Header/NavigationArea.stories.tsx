import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import NavigationArea from './NavigationArea';

function NavigationAreaWrapper(props: React.ComponentProps<typeof NavigationArea>) {
	const [isOpen, setIsOpen] = useState(props.isOpen ?? false);
	return (
		<ul>
			<NavigationArea {...props} isOpen={isOpen} onToggle={setIsOpen} />
		</ul>
	);
}

const meta = {
	title: 'Components/Header/NavigationArea',
	component: NavigationAreaWrapper,
	tags: ['autodocs', 'snapshot'],
	parameters: {
		docs: {
			description: {
				component: `A dropdown navigation group used inside the \`Header\`. Each area has a toggle button as its trigger and a flyout panel listing child \`NavigationLink\` items. Supports two title types: a plain \`navigationTitle\` (non-clickable label) and a \`naviationTitleLink\` (clickable link that also appends a "See all" link at the bottom of the dropdown). The toggle exposes \`aria-expanded\` and the dropdown closes on \`Escape\`. The component is wrapped in \`NavigationAreaWrapper\` to provide the controlled open/close state needed for stories.`
			}
		}
	}
} satisfies Meta<typeof NavigationAreaWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VisualTitleGroup: Story = {
	parameters: {
		docs: {
			description: {
				story: 'A navigation group whose title is a plain text label (`navigationTitle`) — it acts as a toggle only and does not navigate anywhere itself.'
			}
		}
	},
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
	parameters: {
		docs: {
			description: {
				story: 'A navigation group whose title is a clickable link (`naviationTitleLink`) — the toggle navigates to the section overview page, and a "See all Products" link is appended at the bottom of the dropdown.'
			}
		}
	},
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
