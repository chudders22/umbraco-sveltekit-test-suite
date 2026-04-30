import type { Meta, StoryObj } from '@storybook/react';
import HeadingBlock from './HeadingBlock';

const meta = {
	title: 'Blocks/HeadingBlock',
	component: HeadingBlock,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `A minimal section heading block. Corresponds to the \`heading\` Umbraco content type. Renders a single styled \`<h2>\` tag using the display font at large sizes (3xl → 4xl → 5xl). The \`headingText\` prop is required — if omitted the component renders nothing. Use this block to break up page content with section titles. For headings with body copy, consider \`TwoColumnBlock\` or other content blocks instead.`
			}
		}
	}
} satisfies Meta<typeof HeadingBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		headingText: 'This Is a Heading'
	}
};

export const LongHeading: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Shows how the heading wraps at longer lengths — useful for verifying line-height and tracking at large display sizes.'
			}
		}
	},
	args: {
		headingText: 'A Longer Heading That Spans Multiple Words Across The Page'
	}
};
