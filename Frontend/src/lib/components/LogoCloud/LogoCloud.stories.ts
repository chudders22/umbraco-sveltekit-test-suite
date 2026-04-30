import type { Meta, StoryObj } from '@storybook/svelte';
import LogoCloud from './LogoCloud.svelte';
import type { components } from '$lib/types/umbraco';

// Helpers to generate mock logo block items
function makeLogo(name: string, slug: string): object {
	return {
		content: {
			contentType: 'logoBlock',
			properties: {
				logoName: name,
				logo: [
					{
						id: slug,
						name,
						mediaType: 'Image',
						url: `https://placehold.co/160x60/18181b/ffffff?text=${encodeURIComponent(name)}`,
						properties: {}
					}
				]
			}
		}
	};
}

const threeLogos = {
	items: [
		makeLogo('Acme Corp', 'acme'),
		makeLogo('Globex', 'globex'),
		makeLogo('Initech', 'initech')
	]
} as components['schemas']['ApiBlockListModel'];

const sixLogos = {
	items: [
		makeLogo('Acme Corp', 'acme'),
		makeLogo('Globex', 'globex'),
		makeLogo('Initech', 'initech'),
		makeLogo('Umbrella', 'umbrella'),
		makeLogo('Soylent Co', 'soylent'),
		makeLogo('Cyberdyne', 'cyberdyne')
	]
} as components['schemas']['ApiBlockListModel'];

const twelveLogos = {
	items: [
		makeLogo('Acme Corp', 'acme'),
		makeLogo('Globex', 'globex'),
		makeLogo('Initech', 'initech'),
		makeLogo('Umbrella', 'umbrella'),
		makeLogo('Soylent Co', 'soylent'),
		makeLogo('Cyberdyne', 'cyberdyne'),
		makeLogo('Weyland', 'weyland'),
		makeLogo('Tyrell Corp', 'tyrell'),
		makeLogo('Oscorp', 'oscorp'),
		makeLogo('Massive Dyn', 'massive'),
		makeLogo('Stark Ind', 'stark'),
		makeLogo('Wayne Ent', 'wayne')
	]
} as components['schemas']['ApiBlockListModel'];

const meta = {
	title: 'Blocks/LogoCloud',
	component: LogoCloud,
	tags: ['autodocs', 'snapshot'],
	parameters: {
		docs: {
			description: {
				component: `Displays a horizontal grid of client or partner logos. Corresponds to the \`logoCloud\` Umbraco content type. Accepts a \`logos\` BlockList where each item is a \`logoBlock\` with a \`logoName\` and \`logo\` image. In standalone mode (default) logos are centred in a full-width section with a border; in embedded mode (\`standalone={false}\`) they render in a container-query grid without a section wrapper (used by the Footer). All logos are rendered grayscale with reduced opacity and invert in dark mode. Shows a dashed empty-state placeholder when no logos are present.`
			}
		}
	}
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		logos: sixLogos
	}
};

export const FewLogos: Story = {
	args: {
		logos: threeLogos
	}
};

export const ManyLogos: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Shows the layout with 12 logos — verifies that the flex-wrap grid handles large numbers of logos without breaking the horizontal rhythm.'
			}
		}
	},
	args: {
		logos: twelveLogos
	}
};

export const Empty: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Shows the empty-state placeholder when no logo items have been added in the Umbraco backoffice.'
			}
		}
	},
	args: {
		logos: { items: [] }
	}
};
