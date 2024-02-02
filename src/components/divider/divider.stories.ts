import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCDivider from './divider.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-divider');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Divider',
  component: 'awc-divider',
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
} satisfies Meta<AWCDivider & typeof args>;

export default meta;

type Story = StoryObj<AWCDivider & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () => html`<awc-divider></awc-divider>`
};

export const Width: Story = {
  name: 'Width',
  render: () => html`<awc-divider style="--width: 4px;"></awc-divider>`,
  parameters: {
    docs: {
      description: {
        story: 'Use the `--width` custom property to change the width of the divider.'
      }
    }
  }
};

export const Color: Story = {
  name: 'Color',
  render: () => html`<awc-divider style="--color: red;"></awc-divider>`,
  parameters: {
    docs: {
      description: {
        story: 'Use the `--color` custom property to change the color of the divider.'
      }
    }
  }
};

export const Spacing: Story = {
  name: 'Spacing',
  render: () =>
    html`<div style="text-align: center;">
      Above
      <awc-divider style="--spacing: 2rem;"></awc-divider>
      Below
    </div>`,
  parameters: {
    docs: {
      description: {
        story:
          "Use the `--spacing` custom property to change the amount of space between the divider and it's neighboring elements."
      }
    }
  }
};

export const Vertical: Story = {
  name: 'Vertical',
  render: () =>
    html`<div style="display: flex; align-items: center; height: 2rem;">
      First
      <awc-divider vertical></awc-divider>
      Middle
      <awc-divider vertical></awc-divider>
      Last
    </div>`,
  parameters: {
    docs: {
      description: {
        story:
          'Add the `vertical` attribute to draw the divider in a vertical orientation. The divider will span the full height of its container. Vertical dividers work especially well inside of a flex container.'
      }
    }
  }
};

export const MenuDividers: Story = {
  name: 'Menu Dividers',
  render: () =>
    html`<awc-menu style="max-width: 200px;">
      <awc-menu-item value="1">Option 1</awc-menu-item>
      <awc-menu-item value="2">Option 2</awc-menu-item>
      <awc-menu-item value="3">Option 3</awc-menu-item>
      <awc-divider></awc-divider>
      <awc-menu-item value="4">Option 4</awc-menu-item>
      <awc-menu-item value="5">Option 5</awc-menu-item>
      <awc-menu-item value="6">Option 6</awc-menu-item>
    </awc-menu>`,
  parameters: {
    docs: {
      description: {
        story: 'Use dividers in [menus](?path=/docs/components-menu--documentation) to visually group menu items.'
      }
    }
  }
};
