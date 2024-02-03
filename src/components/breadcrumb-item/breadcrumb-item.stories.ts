import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCBreadcrumbItem from './breadcrumb-item.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCBreadcrumbItem>('awc-breadcrumb-item');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Breadcrumb/Breadcrumb Item',
  component: 'awc-breadcrumb-item',
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
} satisfies Meta<AWCBreadcrumbItem>;

export default meta;

type Story = StoryObj<AWCBreadcrumbItem & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () =>
    html`<awc-breadcrumb>
      <awc-breadcrumb-item>
        <awc-icon slot="prefix" name="house"></awc-icon>
        Home
      </awc-breadcrumb-item>
      <awc-breadcrumb-item>Clothing</awc-breadcrumb-item>
      <awc-breadcrumb-item>Shirts</awc-breadcrumb-item>
    </awc-breadcrumb>`
};
