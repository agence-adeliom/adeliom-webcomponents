import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCTag from './tag.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-tag');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Tag',
  component: 'awc-tag',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-shadow
  render: context => template(context)
} satisfies Meta<AWCTag & typeof args>;
export default meta;

type Story = StoryObj<AWCTag & typeof args>;

export const Primary: Story = {
  name: 'Default',
  args: {
    variant: 'primary',
    'default-slot': `Lorem`
  }
};

export const Variants: Story = {
  name: 'Variants',
  args: {
    'default-slot': `Lorem`
  },
  render: context => html`
    ${template({
      ...context,
      variant: 'primary'
    })}
    ${template({
      ...context,
      variant: 'secondary'
    })}
    ${template({
      ...context,
      variant: 'tertiary'
    })}
    ${template({
      ...context,
      variant: 'success'
    })}
    ${template({
      ...context,
      variant: 'neutral'
    })}
    ${template({
      ...context,
      variant: 'warning'
    })}
    ${template({
      ...context,
      variant: 'danger'
    })}
  `,
  parameters: {
    docs: {
      description: {
        story: "Set the `variant` attribute to change the tag's variant."
      }
    }
  }
};

export const Sizes: Story = {
  name: 'Sizes',
  args: {
    ...Primary.args
  },
  render: context => html`
    ${template({ ...context, size: 'small' })} ${template({ ...context, size: 'medium' })}
    ${template({ ...context, size: 'large' })}
  `,
  parameters: {
    docs: {
      description: {
        story: "Use the `size` attribute to change a tab's size."
      }
    }
  }
};

export const Pill: Story = {
  name: 'Pill',
  args: {
    ...Primary.args,
    pill: true
  },
  render: context => html`
    ${template({ ...context, size: 'small' })} ${template({ ...context, size: 'medium' })}
    ${template({ ...context, size: 'large' })}
  `,
  parameters: {
    docs: {
      description: {
        story: 'Use the `pill` attribute to give tabs rounded edges.'
      }
    }
  }
};

export const Removable: Story = {
  name: 'Removable',
  render: () =>
    html`<div class="tags-removable">
        <awc-tag size="small" removable>Small</awc-tag>
        <awc-tag size="medium" removable>Medium</awc-tag>
        <awc-tag size="large" removable>Large</awc-tag>
      </div>

      <script>
        const div = document.querySelector('.tags-removable');

        div.addEventListener('awc-remove', event => {
          const tag = event.target;
          tag.style.opacity = '0';
          setTimeout(() => (tag.style.opacity = '1'), 2000);
        });
      </script>

      <style>
        .tags-removable awc-tag {
          transition: var(--awc-transition-medium) opacity;
        }
      </style>`,
  parameters: {
    docs: {
      description: {
        story: 'Use the `removable` attribute to add a remove button to the tag.'
      }
    }
  }
};
