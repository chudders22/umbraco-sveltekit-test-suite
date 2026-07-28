// Template: a co-located Storybook story for a block component.
// Copy to src/lib/components/<Name>/<Name>.stories.ts, rename, and adapt.
//
// Conventions this template encodes:
//   - title: 'Blocks/<Name>'
//   - tags: ['autodocs', 'snapshot']  (snapshot => visual regression via storybook-addon-vis)
//   - a component-level docs description
//   - realistic default args plus edge-case stories (empty, missing optionals)
import type { Meta, StoryObj } from '@storybook/svelte';
import ExampleBlock from './ExampleBlock.svelte';

const meta = {
	title: 'Blocks/ExampleBlock',
	component: ExampleBlock,
	tags: ['autodocs', 'snapshot'],
	parameters: {
		docs: {
			description: {
				component: `Describe the block: which Umbraco content type it maps to, its props, and any special rendering behaviour. Corresponds to the \`exampleBlock\` Umbraco content type.`
			}
		}
	}
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

const makeItem = (heading: string, body?: string) => ({
	content: {
		contentType: 'exampleItem',
		properties: { heading, body: body ?? null }
	}
});

const items = [
	makeItem('First', 'A short supporting description.'),
	makeItem('Second', 'Another supporting description.'),
	makeItem('Third', 'One more for the grid.')
];

export const Default: Story = {
	args: {
		items: { items }
	}
};

export const WithTitle: Story = {
	args: {
		title: 'Section heading',
		items: { items }
	}
};

export const Empty: Story = {
	parameters: {
		docs: {
			description: {
				story: 'The empty-state placeholder shown when no items have been added in the Umbraco backoffice.'
			}
		}
	},
	args: {
		items: { items: [] }
	}
};
