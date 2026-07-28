import type { components } from '$lib/types/umbraco';
import type { Meta, StoryObj } from '@storybook/svelte';
import AccordionGalleryBlock from './AccordionGalleryBlock.svelte';

const makeImage = (id: string, color: string, label: string) =>
	({
		id,
		url: `https://placehold.co/1200x800/${color}/ffffff`,
		name: label,
		mediaType: 'Image',
		properties: {},
		createDate: '',
		updateDate: '',
		path: ''
	}) as any;

const makeAccordionItem = (id: string, title: string, contentHtml: string) => ({
	content: {
		id,
		contentType: 'accordionGalleryItem' as const,
		properties: {
			title,
			content: { markup: contentHtml, blocks: [] }
		}
	}
});

const defaultGallery = [
	makeImage('1', '1f2937', 'Workspace detail'),
	makeImage('2', '0f766e', 'Team workshop'),
	makeImage('3', '1d4ed8', 'Product launch')
];

const defaultAccordionItems: components['schemas']['ApiBlockListModel'] = {
	items: [
		makeAccordionItem(
			'accordion-item-1',
			'How should I sequence gallery and FAQ content?',
			'<p>Lead with visual context, then answer practical questions. This pattern helps visitors understand your offer quickly before they evaluate details.</p>'
		),
		makeAccordionItem(
			'accordion-item-2',
			'Can each accordion answer include links?',
			'<p>Yes. Answers are Rich Text, so links, emphasis, and short formatted copy are supported.</p>'
		),
		makeAccordionItem(
			'accordion-item-3',
			'What if an editor only adds gallery images?',
			'<p>The component renders an accordion empty-state so the page still feels intentional while content is being drafted.</p>'
		)
	]
};

const meta = {
	title: 'Blocks/AccordionGalleryBlock',
	component: AccordionGalleryBlock,
	tags: ['autodocs', 'snapshot'],
	parameters: {
		docs: {
			description: {
				component:
					'A responsive two-column block (stacked on mobile) combining a gallery and an FAQ-style accordion. Corresponds to the `accordionGalleryBlock` Umbraco content type with `title`, `gallery`, and `accordion` properties.'
			}
		}
	}
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Behind the Project',
		gallery: defaultGallery,
		accordion: defaultAccordionItems
	}
};

export const NoTitle: Story = {
	args: {
		gallery: defaultGallery,
		accordion: defaultAccordionItems
	}
};

export const EmptyGallery: Story = {
	args: {
		title: 'Behind the Project',
		gallery: [],
		accordion: defaultAccordionItems
	}
};

export const EmptyAccordion: Story = {
	args: {
		title: 'Behind the Project',
		gallery: defaultGallery,
		accordion: { items: [] }
	}
};
