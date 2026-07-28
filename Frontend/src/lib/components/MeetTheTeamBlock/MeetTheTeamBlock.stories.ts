import type { Meta, StoryObj } from '@storybook/svelte';
import MeetTheTeamBlock from './MeetTheTeamBlock.svelte';

const withProfileImage = (id: string, name: string, url: string) => [
	{
		id,
		name,
		mediaType: 'image',
		url,
		properties: {}
	}
];

const person = (
	id: string,
	personName: string,
	jobTitle: string,
	bioMarkup: string,
	profileImage: ReturnType<typeof withProfileImage> | null
) => ({
	content: {
		id,
		contentType: 'meetTheTeamPerson' as const,
		properties: {
			personName,
			jobTitle,
			profileImage,
			bio: {
				markup: bioMarkup,
				blocks: []
			}
		}
	}
});

const meta = {
	title: 'Blocks/MeetTheTeamBlock',
	component: MeetTheTeamBlock,
	tags: ['autodocs', 'snapshot'],
	parameters: {
		docs: {
			description: {
				component:
					'A team profile section backed by a `meetTheTeamBlock` with `title`, `subTitle`, and `people` (BlockList of `meetTheTeamPerson`) properties.'
			}
		}
	}
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Meet Our Team',
		subTitle: 'The people behind our strategy, design, and delivery.',
		people: {
			items: [
				person(
					'person-1',
					'Elena Ward',
					'Creative Director',
					'<p>Elena leads brand and digital experience work, aligning storytelling with measurable growth goals.</p>',
					withProfileImage('img-1', 'Elena Ward', 'https://i.pravatar.cc/160?img=12')
				),
				person(
					'person-2',
					'Marcus Patel',
					'Head of Engineering',
					'<p>Marcus architects performant, maintainable platforms and mentors cross-functional product teams.</p>',
					withProfileImage('img-2', 'Marcus Patel', 'https://i.pravatar.cc/160?img=15')
				),
				person(
					'person-3',
					'Sophia Kim',
					'Senior Content Strategist',
					'<p>Sophia translates complex services into clear messaging and editor-friendly content models.</p>',
					withProfileImage('img-3', 'Sophia Kim', 'https://i.pravatar.cc/160?img=32')
				)
			]
		}
	}
};

export const NoSubtitle: Story = {
	args: {
		title: 'Our Leadership Team',
		people: {
			items: [
				person(
					'person-1',
					'Elena Ward',
					'Creative Director',
					'<p>Elena leads brand and digital experience work, aligning storytelling with measurable growth goals.</p>',
					withProfileImage('img-1', 'Elena Ward', 'https://i.pravatar.cc/160?img=12')
				),
				person(
					'person-2',
					'Marcus Patel',
					'Head of Engineering',
					'<p>Marcus architects performant, maintainable platforms and mentors cross-functional product teams.</p>',
					withProfileImage('img-2', 'Marcus Patel', 'https://i.pravatar.cc/160?img=15')
				)
			]
		}
	}
};

export const MissingImages: Story = {
	args: {
		title: 'Meet the Specialists',
		subTitle: 'A multi-disciplinary team with broad delivery experience.',
		people: {
			items: [
				person(
					'person-1',
					'Alex Rios',
					'Technical Lead',
					'<p>Alex guides architectural decisions and keeps delivery focused on long-term maintainability.</p>',
					null
				),
				person(
					'person-2',
					'Priya Shah',
					'UX Researcher',
					'<p>Priya runs discovery workshops and translates user insight into practical product improvements.</p>',
					null
				)
			]
		}
	}
};

export const Empty: Story = {
	args: {
		title: 'Meet Our Team',
		people: {
			items: []
		}
	}
};
