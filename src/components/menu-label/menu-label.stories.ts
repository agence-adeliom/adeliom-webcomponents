import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMenuLabel from './menu-label.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCMenuLabel>('awc-menu-label');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Menu/Label',
  component: 'awc-menu-label',
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
} satisfies Meta<AWCMenuLabel>;

export default meta;

type Story = StoryObj<AWCMenuLabel & typeof args>;

export const Primary: Story = {
  name: 'Example',
  render: () =>
    html`<awc-menu style="max-width: 200px;">
      <awc-menu-label>Fruits</awc-menu-label>
      <awc-menu-item value="apple">Apple</awc-menu-item>
      <awc-menu-item value="banana">Banana</awc-menu-item>
      <awc-menu-item value="orange">Orange</awc-menu-item>
      <awc-divider></awc-divider>
      <awc-menu-label>Vegetables</awc-menu-label>
      <awc-menu-item value="broccoli">Broccoli</awc-menu-item>
      <awc-menu-item value="carrot">Carrot</awc-menu-item>
      <awc-menu-item value="zucchini">Zucchini</awc-menu-item>
    </awc-menu>`
};
