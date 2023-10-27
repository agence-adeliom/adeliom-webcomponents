import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCBadge from './badge.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-badge');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Badge',
  component: 'awc-badge',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCBadge & typeof args>;

export default meta;

type Story = StoryObj<AWCBadge & typeof args>;

export const Primary: Story = {
  name: 'Default badge',
  args: {
    'default-slot': 'Badge'
  }
};

export const Variants: Story = {
  name: 'Variants',
  args: {
    ...Primary.args
  },
  render: context => html`
    ${template({ ...context, variant: 'primary' })} ${template({ ...context, variant: 'secondary' })}
    ${template({ ...context, variant: 'tertiary' })} ${template({ ...context, variant: 'success' })}
    ${template({ ...context, variant: 'neutral' })} ${template({ ...context, variant: 'warning' })}
    ${template({ ...context, variant: 'danger' })}
  `,
  parameters: {
    docs: {
      description: {
        story: "Set the `variant` attribute to change the badge's variant."
      }
    }
  }
};

export const PillBadges: Story = {
  name: 'Pill Badges',
  args: {
    ...Primary.args,
    pill: true
  },
  render: context => html`
    ${template({ ...context, variant: 'primary' })} ${template({ ...context, variant: 'secondary' })}
    ${template({ ...context, variant: 'tertiary' })} ${template({ ...context, variant: 'success' })}
    ${template({ ...context, variant: 'neutral' })} ${template({ ...context, variant: 'warning' })}
    ${template({ ...context, variant: 'danger' })}
  `,
  parameters: {
    docs: {
      description: {
        story: 'Use the `pill` attribute to give badges rounded edges.'
      }
    }
  }
};

export const PulsatingBadges: Story = {
  name: 'Pulsating Badges',
  args: {
    ...Primary.args,
    'default-slot': '1',
    pill: true,
    pulse: true
  },
  render: context =>
    html`<div class="badge-pulse">
        ${template({ ...context, variant: 'primary' })} ${template({ ...context, variant: 'secondary' })}
        ${template({ ...context, variant: 'tertiary' })} ${template({ ...context, variant: 'success' })}
        ${template({ ...context, variant: 'neutral' })} ${template({ ...context, variant: 'warning' })}
        ${template({ ...context, variant: 'danger' })}
      </div>

      <style>
        .badge-pulse awc-badge:not(:last-of-type) {
          margin-right: 1rem;
        }
      </style> `,
  parameters: {
    docs: {
      description: {
        story: 'Use the `pulse` attribute to draw attention to the badge with a subtle animation.'
      }
    }
  }
};

export const WithButtons: Story = {
  name: 'With Buttons',
  render: () =>
    html`<awc-button>
        Requests
        <awc-badge pill>30</awc-badge>
      </awc-button>

      <awc-button style="margin-inline-start: 1rem;">
        Warnings
        <awc-badge variant="warning" pill>8</awc-badge>
      </awc-button>

      <awc-button style="margin-inline-start: 1rem;">
        Errors
        <awc-badge variant="danger" pill>6</awc-badge>
      </awc-button>`,
  parameters: {
    docs: {
      description: {
        story: `One of the most common use cases for badges is attaching them to buttons. To make this easier, badges will be automatically positioned at the top-right when they're a child of a button.`
      }
    }
  }
};

export const WithMenuItems: Story = {
  name: 'With Menu Items',
  render: () =>
    html`<awc-menu style="max-width: 240px;">
      <awc-menu-label>Messages</awc-menu-label>
      <awc-menu-item>Comments <awc-badge slot="suffix" variant="neutral" pill>4</awc-badge></awc-menu-item>
      <awc-menu-item>Replies <awc-badge slot="suffix" variant="neutral" pill>12</awc-badge></awc-menu-item>
    </awc-menu>`,
  parameters: {
    docs: {
      description: {
        story: `When including badges in menu items, use the \`suffix\` slot to make sure they're aligned correctly.`
      }
    }
  }
};
