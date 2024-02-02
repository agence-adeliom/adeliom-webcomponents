/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCSwitch from './switch';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-switch');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Switch',
  component: 'awc-switch',
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
        component: `> This component works with standard \`<form>\` elements. Please refer to the section on [form controls](?path=/docs/getting-started-form-controls--documentation) to learn more about form submission and client-side validation.`
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCSwitch & typeof args>;

export default meta;

type Story = StoryObj<AWCSwitch & typeof args>;

export const Primary: Story = {
  name: 'Default',
  args: {
    'default-slot': `Lorem`
  }
};

export const Checked: Story = {
  name: 'Checked',
  args: {
    ...Primary.args,
    checked: true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`checked\` attribute to activate the switch.`
      }
    }
  }
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    ...Primary.args,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`disabled\` attribute to disable the switch.`
      }
    }
  }
};

export const Sizes: Story = {
  name: 'Sizes',
  render: () =>
    html`<awc-switch size="small">Small</awc-switch>
      <br />
      <awc-switch size="medium">Medium</awc-switch>
      <br />
      <awc-switch size="large">Large</awc-switch>`,
  parameters: {
    docs: {
      description: {
        story: "Use the `size` attribute to change a switch's size."
      }
    }
  }
};

export const CustomStyles: Story = {
  name: 'Custom Styles',
  render: () => html`<awc-switch style="--width: 80px; --height: 40px; --thumb-size: 36px;">Really big</awc-switch>`,
  parameters: {
    docs: {
      description: {
        story: `Use the available custom properties to change how the switch is styled.`
      }
    }
  }
};
