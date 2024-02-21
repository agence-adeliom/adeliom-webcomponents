import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCStepper from './stepper.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCStepper>('awc-stepper');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Stepper',
  component: 'awc-stepper',
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
} satisfies Meta<AWCStepper>;
export default meta;

type Story = StoryObj<AWCStepper & typeof args>;

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
      <awc-stepper-item label="Step 1" completed> Step 1 </awc-stepper-item>
      <awc-stepper-item label="Step 2" completed> Step 2 </awc-stepper-item>
      <awc-stepper-item label="Step 3" completed> Step 3 </awc-stepper-item>
      <awc-stepper-item label="Step 4" active> Step 4 </awc-stepper-item>
      <awc-stepper-item label="Step 5"> Step 5 </awc-stepper-item>
      <awc-stepper-item label="Step 6"> Step 6 </awc-stepper-item>
    </awc-stepper>`
};

export const Vertical: Story = {
  name: 'Vertical',
  parameters: {
    docs: {
      description: {
        story: `The attribute \`vertical\` can be used to display the steps vertically.`
      }
    }
  },
  args: {},
  render: () =>
    html`<awc-stepper vertical class="w-96">
      <awc-stepper-item label="Step 1" completed>
        <p class="mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil quos voluptate voluptatum voluptatibus
          voluptatum.
        </p>
      </awc-stepper-item>
      <awc-stepper-item label="Step 2" active>
        <p class="mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil quos voluptate voluptatum voluptatibus
          voluptatum.
        </p>
      </awc-stepper-item>
      <awc-stepper-item label="Step 3">
        <p class="mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil quos voluptate voluptatum voluptatibus
          voluptatum.
        </p>
      </awc-stepper-item>
    </awc-stepper>`
};

export const Icons: Story = {
  name: 'Icons',
  parameters: {
    docs: {
      description: {
        story: `You can use the slot \`step\` to display an icon. And the slot \`completed-icon\` to display a icon when the step is completed.`
      }
    }
  },
  args: {},
  render: () =>
    html`<awc-stepper>
      <awc-icon slot="completed-icon" name="patch-check"></awc-icon>

      <awc-stepper-item label="Step 1" completed>
        <awc-icon slot="step" name="activity"></awc-icon>
        <p class="mb-8">Lorem ipsum</p>
      </awc-stepper-item>
      <awc-stepper-item label="Step 2" active>
        <awc-icon slot="step" name="award-fill"></awc-icon>
        <p class="mb-8">Dolor sit</p>
      </awc-stepper-item>
      <awc-stepper-item label="Step 3">
        <awc-icon slot="step" name="browser-safari"></awc-icon>
        <p class="mb-8">Isicing elit</p>
      </awc-stepper-item>
    </awc-stepper>`
};
