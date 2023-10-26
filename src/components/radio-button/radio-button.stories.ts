import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCRadioButton from './radio-button';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-radio-button');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Radio/Button',
  component: 'awc-radio-button',
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
        component: `Radio buttons are designed to be used with [radio groups](/docs/components-radio-group--docs). When a radio button has focus, the arrow keys can be used to change the selected option just like standard radio controls.`
      }
    }
  },
  render: context => template(context)
} satisfies Meta<AWCRadioButton & typeof args>;

export default meta;

type Story = StoryObj<AWCRadioButton & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () =>
    html`<awc-radio-group label="Select an option" name="radio" value="1">
      <awc-radio-button value="1">Option 1</awc-radio-button>
      <awc-radio-button value="2">Option 2</awc-radio-button>
      <awc-radio-button value="3">Option 3</awc-radio-button>
    </awc-radio-group>`
};

export const Checked: Story = {
  name: 'Checked States',
  render: () =>
    html`<awc-radio-group label="Select an option" name="radio" value="1">
      <awc-radio-button value="1">Option 1</awc-radio-button>
      <awc-radio-button value="2">Option 2</awc-radio-button>
      <awc-radio-button value="3">Option 3</awc-radio-button>
    </awc-radio-group>`,
  parameters: {
    docs: {
      description: {
        story: `To set the initial value and checked state, use the \`value\` attribute on the containing radio group.`
      }
    }
  }
};

export const Disabled: Story = {
  name: 'Disabling',
  render: () =>
    html`<awc-radio-group label="Select an option" name="radio" value="1">
      <awc-radio-button value="1">Option 1</awc-radio-button>
      <awc-radio-button value="2" disabled>Option 2</awc-radio-button>
      <awc-radio-button value="3">Option 3</awc-radio-button>
    </awc-radio-group>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`disabled\` attribute to disable a radio button.`
      }
    }
  }
};

export const Sizes: Story = {
  name: 'Sizes',
  render: () =>
    html`<awc-radio-group label="Select an option" name="radio" value="1">
        <awc-radio-button size="small" value="1">Option 1</awc-radio-button>
        <awc-radio-button size="small" value="2">Option 2</awc-radio-button>
        <awc-radio-button size="small" value="3">Option 3</awc-radio-button>
      </awc-radio-group>

      <br />

      <awc-radio-group label="Select an option" name="radio" value="1">
        <awc-radio-button size="medium" value="1">Option 1</awc-radio-button>
        <awc-radio-button size="medium" value="2">Option 2</awc-radio-button>
        <awc-radio-button size="medium" value="3">Option 3</awc-radio-button>
      </awc-radio-group>

      <br />

      <awc-radio-group label="Select an option" name="radio" value="1">
        <awc-radio-button size="large" value="1">Option 1</awc-radio-button>
        <awc-radio-button size="large" value="2">Option 2</awc-radio-button>
        <awc-radio-button size="large" value="3">Option 3</awc-radio-button>
      </awc-radio-group>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`size\` attribute to change a radio button's size.`
      }
    }
  }
};

export const PillButtons: Story = {
  name: 'Pill Buttons',
  render: () =>
    html`<awc-radio-group label="Select an option" name="radio" value="1">
        <awc-radio-button pill size="small" value="1">Option 1</awc-radio-button>
        <awc-radio-button pill size="small" value="2">Option 2</awc-radio-button>
        <awc-radio-button pill size="small" value="3">Option 3</awc-radio-button>
      </awc-radio-group>

      <br />

      <awc-radio-group label="Select an option" name="radio" value="1">
        <awc-radio-button pill size="medium" value="1">Option 1</awc-radio-button>
        <awc-radio-button pill size="medium" value="2">Option 2</awc-radio-button>
        <awc-radio-button pill size="medium" value="3">Option 3</awc-radio-button>
      </awc-radio-group>

      <br />

      <awc-radio-group label="Select an option" name="radio" value="1">
        <awc-radio-button pill size="large" value="1">Option 1</awc-radio-button>
        <awc-radio-button pill size="large" value="2">Option 2</awc-radio-button>
        <awc-radio-button pill size="large" value="3">Option 3</awc-radio-button>
      </awc-radio-group>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`pill\` attribute to give radio buttons rounded edges.`
      }
    }
  }
};

export const PrefixSuffix: Story = {
  name: 'Prefix and Suffix Icons',
  render: () =>
    html`<awc-radio-group label="Select an option" name="radio" value="1">
      <awc-radio-button value="1">
        <awc-icon slot="prefix" name="archive"></awc-icon>
        Option 1
      </awc-radio-button>

      <awc-radio-button value="2">
        <awc-icon slot="suffix" name="bag"></awc-icon>
        Option 2
      </awc-radio-button>

      <awc-radio-button value="3">
        <awc-icon slot="prefix" name="gift"></awc-icon>
        <awc-icon slot="suffix" name="cart"></awc-icon>
        Option 3
      </awc-radio-button>
    </awc-radio-group>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`prefix\` and \`suffix\` slots to add icons.`
      }
    }
  }
};

export const ButtonsIcons: Story = {
  name: 'Buttons with Icons',
  render: () =>
    html`<awc-radio-group label="Select an option" name="radio" value="neutral">
      <awc-radio-button value="angry">
        <awc-icon name="emoji-angry" label="Angry"></awc-icon>
      </awc-radio-button>

      <awc-radio-button value="sad">
        <awc-icon name="emoji-frown" label="Sad"></awc-icon>
      </awc-radio-button>

      <awc-radio-button value="neutral">
        <awc-icon name="emoji-neutral" label="Neutral"></awc-icon>
      </awc-radio-button>

      <awc-radio-button value="happy">
        <awc-icon name="emoji-smile" label="Happy"></awc-icon>
      </awc-radio-button>

      <awc-radio-button value="laughing">
        <awc-icon name="emoji-laughing" label="Laughing"></awc-icon>
      </awc-radio-button>
    </awc-radio-group>`,
  parameters: {
    docs: {
      description: {
        story: `You can omit button labels and use icons instead. Make sure to set a \`label\` attribute on each icon so screen readers will announce each option correctly.`
      }
    }
  }
};
