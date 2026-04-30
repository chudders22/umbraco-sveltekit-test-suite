import type { Meta, StoryObj } from '@storybook/svelte';
import TestimonialsBlock from './TestimonialsBlock.svelte';

const meta = {
	title: 'Blocks/TestimonialsBlock',
	component: TestimonialsBlock,
	tags: ['autodocs', 'snapshot'],
	parameters: {
		docs: {
			description: {
				component: `A grid of customer testimonials. Corresponds to the \`testimonialsBlock\` Umbraco content type. Renders a 1→2→3 column responsive grid of testimonial cards. Each card shows a decorative opening quote mark, the \`quote\` text, and a footer with an optional circular \`authorImage\`, \`authorName\`, and combined \`authorRole\`/\`authorCompany\` attribution. Props: \`title\`, \`subTitle\`, and \`testimonials\` (a BlockList of \`testimonialItem\` blocks). Shows a dashed empty-state placeholder when no testimonials are present. Supports dark mode.`
			}
		}
	}
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

const withAvatar = (url: string, name: string) => [
	{ id: '1', url, name, mediaType: 'image', properties: {} }
];

export const Default: Story = {
	args: {
		title: 'Client Stories',
		subTitle: 'What our partners say about working with us.',
		testimonials: {
			items: [
				{
					content: {
						contentType: 'testimonialItem',
						properties: {
							quote:
								'The team completely transformed our digital presence. They delivered a headless CMS solution that our editors love, and our page load times dropped by 60%. Could not ask for a better partner.',
							authorName: 'Sarah Okafor',
							authorRole: 'Head of Digital',
							authorCompany: 'Meridian Financial Group',
							authorImage: withAvatar('https://i.pravatar.cc/80?img=47', 'Sarah Okafor')
						}
					}
				},
				{
					content: {
						contentType: 'testimonialItem',
						properties: {
							quote:
								'From discovery to launch in eight weeks. The SvelteKit frontend is blazing fast and our conversion rate has gone up significantly since we relaunched. Exceptional work throughout.',
							authorName: 'Tom Hargreaves',
							authorRole: 'CTO',
							authorCompany: 'Vantage Retail',
							authorImage: withAvatar('https://i.pravatar.cc/80?img=12', 'Tom Hargreaves')
						}
					}
				},
				{
					content: {
						contentType: 'testimonialItem',
						properties: {
							quote:
								'They took the time to understand our workflows before writing a single line of code. The custom Umbraco integrations they built have saved our content team hours every week.',
							authorName: 'Priya Nair',
							authorRole: 'Marketing Director',
							authorCompany: 'Solace Health',
							authorImage: null
						}
					}
				}
			]
		}
	}
};

export const Single: Story = {
	args: {
		title: 'What Clients Say',
		testimonials: {
			items: [
				{
					content: {
						contentType: 'testimonialItem',
						properties: {
							quote:
								'Working with this team was the best technology decision we made last year. They delivered on every promise and the site has been rock-solid in production.',
							authorName: 'James Whitfield',
							authorRole: 'CEO',
							authorCompany: 'Beacon Logistics',
							authorImage: withAvatar('https://i.pravatar.cc/80?img=33', 'James Whitfield')
						}
					}
				}
			]
		}
	}
};

export const NoImages: Story = {
	parameters: {
		docs: {
			description: {
				story: 'All testimonials without `authorImage` — the avatar slot is omitted and the author name/role row renders flush without the image gap.'
			}
		}
	},
	args: {
		title: 'Testimonials',
		subTitle: 'Trusted by teams across industries.',
		testimonials: {
			items: [
				{
					content: {
						contentType: 'testimonialItem',
						properties: {
							quote:
								'Our new platform handles three times the traffic without breaking a sweat. The architecture decisions they made have given us room to grow for years.',
							authorName: 'Fatima Al-Rashid',
							authorRole: 'VP Engineering',
							authorCompany: 'CloudPath Technologies',
							authorImage: null
						}
					}
				},
				{
					content: {
						contentType: 'testimonialItem',
						properties: {
							quote:
								'The accessibility audit and remediation work they did was genuinely impressive. We passed WCAG 2.1 AA on the first independent review — a first for us.',
							authorName: 'Oliver Marsh',
							authorRole: 'Product Owner',
							authorCompany: 'Civic Connect',
							authorImage: null
						}
					}
				},
				{
					content: {
						contentType: 'testimonialItem',
						properties: {
							quote:
								"I appreciated that they pushed back when our brief didn't make sense. That honesty led to a much better product than we originally planned.",
							authorName: 'Yuki Tanaka',
							authorRole: 'Digital Lead',
							authorCompany: 'Orium Agency',
							authorImage: null
						}
					}
				}
			]
		}
	}
};

export const Empty: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Shows the empty-state placeholder rendered when no testimonial items have been added in the Umbraco backoffice.'
			}
		}
	},
	args: {
		title: 'Testimonials',
		testimonials: { items: [] }
	}
};
