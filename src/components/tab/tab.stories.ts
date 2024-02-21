import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCTab from './tab.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCTab>('awc-tab');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Tab',
  component: 'awc-tab',
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
        component: `> Additional demonstrations can be found in the [tab group examples](?path=/docs/components-tab-group--documentation).`
      }
    }
  },
  render: context => template(context)
} satisfies Meta<AWCTab>;
export default meta;

type Story = StoryObj<AWCTab & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () =>
    html`<awc-tab>Tab</awc-tab>
      <awc-tab active>Active</awc-tab>
      <awc-tab closable>Closable</awc-tab>
      <awc-tab disabled>Disabled</awc-tab>`
};
