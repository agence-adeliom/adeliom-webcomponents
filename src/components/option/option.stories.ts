import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCOption from './option';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-option');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Select/Option',
  component: 'awc-option',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    }
  },
  render: context => template(context)
} satisfies Meta<AWCOption & typeof args>;

export default meta;

type Story = StoryObj<AWCOption & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () =>
    html`<awc-select label="Select one">
      <awc-option value="option-1">Option 1</awc-option>
      <awc-option value="option-2">Option 2</awc-option>
      <awc-option value="option-3">Option 3</awc-option>
    </awc-select>`,
  parameters: {
    docs: {
      story: {
        height: '200px'
      }
    }
  }
};

export const Disabled: Story = {
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: `Use the \`disabled\` attribute to disable an option and prevent it from being selected.`
      },
      story: {
        height: '200px'
      }
    }
  },
  render: () =>
    html`<awc-select label="Select one">
      <awc-option value="option-1">Option 1</awc-option>
      <awc-option value="option-2" disabled>Option 2</awc-option>
      <awc-option value="option-3">Option 3</awc-option>
    </awc-select>`
};

export const PrefixSuffix: Story = {
  name: 'Prefix & Suffix',
  parameters: {
    docs: {
      description: {
        story: `Add icons to the start and end of menu items using the \`prefix\` and \`suffix\` slots.`
      },
      story: {
        height: '200px'
      }
    }
  },
  render: () =>
    html`<awc-select label="Select one">
      <awc-option value="option-1">
        <awc-icon slot="prefix" name="envelope"></awc-icon>
        Email
        <awc-icon slot="suffix" name="patch-check"></awc-icon>
      </awc-option>

      <awc-option value="option-2">
        <awc-icon slot="prefix" name="telephone"></awc-icon>
        Phone
        <awc-icon slot="suffix" name="patch-check"></awc-icon>
      </awc-option>

      <awc-option value="option-3">
        <awc-icon slot="prefix" name="chat-dots"></awc-icon>
        Chat
        <awc-icon slot="suffix" name="patch-check"></awc-icon>
      </awc-option>
    </awc-select>`
};
