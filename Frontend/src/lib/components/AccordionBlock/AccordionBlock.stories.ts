import type { Meta, StoryObj } from '@storybook/svelte';
import AccordionBlock from './AccordionBlock.svelte';

interface AccordionItem {
	question?: string | null;
	answer?: { markup?: string | null } | null;
}

interface AccordionItemEntry {
	content: { contentType: string; properties: AccordionItem };
}

function makeItem(question: string, answerHtml: string): AccordionItemEntry {
	return {
		content: {
			contentType: 'accordionItem',
			properties: {
				question,
				answer: { markup: answerHtml }
			}
		}
	};
}

const faqItems = {
	items: [
		makeItem(
			'How much does a typical project cost?',
			'<p>Every project is scoped individually, but most of our engagements fall between £15,000 and £150,000 depending on complexity, timeline, and ongoing support requirements. We provide a detailed fixed-price proposal after an initial discovery call so there are never any surprises.</p>'
		),
		makeItem(
			'How long does it take to build a website or web app?',
			'<p>A marketing site typically takes 6–10 weeks from kick-off to launch. A complex web application with custom integrations can range from 3 to 9 months. During discovery we agree a delivery roadmap upfront, and we use regular sprint demos to keep you informed throughout.</p>'
		),
		makeItem(
			'What technologies do you work with?',
			'<p>We work across the modern web stack. On the frontend we favour <a href="#">SvelteKit</a>, React, and Next.js. On the backend we use .NET, Node.js, and headless CMS platforms like Umbraco and Contentful. We choose the right tool for each project rather than forcing a single stack.</p>'
		),
		makeItem(
			'Do you offer ongoing support and maintenance?',
			'<p>Yes — all projects include a 30-day warranty period after launch. Beyond that we offer retainer packages covering hosting management, security updates, feature development, and priority support. Around 70% of our clients move onto a retainer once their initial project is live.</p>'
		),
		makeItem(
			'How do I get started working with you?',
			'<p>The best first step is a free 30-minute discovery call. We\'ll listen to your goals, ask the right questions, and give you an honest assessment of scope and cost. <a href="#">Book a call</a> using the link on our contact page — we typically respond within one business day.</p>'
		)
	]
};

const singleItem = {
	items: [
		makeItem(
			'How much does a typical project cost?',
			'<p>Every project is scoped individually, but most of our engagements fall between £15,000 and £150,000 depending on complexity, timeline, and ongoing support requirements. We provide a detailed fixed-price proposal after an initial discovery call so there are never any surprises.</p>'
		)
	]
};

const meta = {
	title: 'Blocks/AccordionBlock',
	component: AccordionBlock,
	tags: ['autodocs', 'snapshot']
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		items: faqItems
	}
};

export const WithTitle: Story = {
	args: {
		title: 'Frequently Asked Questions',
		subTitle: 'Everything you need to know about working with us.',
		items: faqItems
	}
};

export const SingleItem: Story = {
	args: {
		items: singleItem,
		openFirst: true
	}
};

export const Empty: Story = {
	args: {
		title: 'Frequently Asked Questions',
		items: { items: [] }
	}
};
