import type { Meta, StoryObj } from '@storybook/react';
import NewsletterSignup from './NewsletterSignup';

const meta = {
  title: 'Blocks/NewsletterSignup',
  component: NewsletterSignup,
  tags: ['autodocs', 'snapshot'],
  parameters: {
    docs: {
      description: {
        component: `An email capture section with a heading, optional description, email input, and submit button. Props: \`heading\`, \`description\` (optional), \`buttonLabel\` (defaults to \`'Subscribe'\`), \`placeholderText\` (defaults to \`'you@example.com'\`). Manages its own submission state (\`idle\` → \`loading\` → \`success\` / \`error\`) and shows a success confirmation message after submission. Features a decorative dot-grid texture matching the \`CallToActionBlock\`. The submit endpoint should be wired up to your newsletter provider (e.g. Mailchimp, ConvertKit). All fields except \`heading\` are optional.`
      }
    }
  }
} satisfies Meta<typeof NewsletterSignup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'Stay in the loop',
    description:
      'Get the latest insights on software development, digital strategy, and industry trends — delivered straight to your inbox.',
    buttonLabel: 'Subscribe',
    placeholderText: 'you@example.com'
  }
};

export const MinimalCopy: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows the minimal state — only `heading` and `buttonLabel` provided, with no description text and the default placeholder. Demonstrates that the description is optional.'
      }
    }
  },
  args: {
    heading: 'Subscribe to our newsletter',
    buttonLabel: 'Subscribe'
  }
};

export const CustomCTA: Story = {
  args: {
    heading: 'Never miss an update',
    description: 'Join 2,000+ developers and decision-makers who read our monthly digest.',
    buttonLabel: 'Get the digest',
    placeholderText: 'Enter your work email'
  }
};

export const HeadingOnly: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The absolute minimum — only a heading is provided. The form still renders with default placeholder text and button label.'
      }
    }
  },
  args: {
    heading: "Let's keep in touch"
  }
};
