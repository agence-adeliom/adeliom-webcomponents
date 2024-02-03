import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCStepperItem from './stepper-item.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCStepperItem>('awc-stepper-item');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Stepper/Item',
  component: 'awc-stepper-item',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    },
    docs: {
      description: {
        component: ``
      }
    }
  },

  render: context => template(context)
} satisfies Meta<AWCStepperItem>;
export default meta;

type Story = StoryObj<AWCStepperItem & typeof args>;

export const Primary: Story = {
  name: 'Default',
  parameters: {
    docs: {
      description: {
        story: ``
      }
    }
  },
  args: {},
  render: () =>
    html`<awc-stepper>
      <awc-stepper-item label="Step 1">
        <p class="mb-8">Lorem ipsum</p>
      </awc-stepper-item>
    </awc-stepper>`
};

export const Active: Story = {
  name: 'Active',
  parameters: {
    docs: {
      description: {
        story: `The attribute \`active\` can be used to mark a step as active.`
      }
    }
  },
  args: {},
  render: () =>
    html`<awc-stepper>
      <awc-stepper-item label="Step 1" active>
        <p class="mb-8">Lorem ipsum</p>
      </awc-stepper-item>
    </awc-stepper>`
};

export const Completed: Story = {
  name: 'Completed',
  parameters: {
    docs: {
      description: {
        story: `The attribute \`completed\` can be used to mark a step as completed.`
      }
    }
  },
  args: {},
  render: () =>
    html`<awc-stepper>
      <awc-stepper-item label="Step 1" completed>
        <p class="mb-8">Lorem ipsum</p>
      </awc-stepper-item>
    </awc-stepper>`
};

export const CustomIcon: Story = {
  name: 'Custom Icon',
  parameters: {
    docs: {
      description: {
        story: `The slot \`step\` can be used to add a custom content for the step badge, it can also be used to add an icon.`
      }
    }
  },
  args: {},
  render: () =>
    html`<awc-stepper>
      <awc-stepper-item label="Step 1">
        <awc-icon slot="step" name="patch-check"></awc-icon>
        <p class="mb-8">Lorem ipsum</p>
      </awc-stepper-item>
    </awc-stepper>`
};
