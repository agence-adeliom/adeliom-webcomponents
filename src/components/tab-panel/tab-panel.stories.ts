import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCTabPanel from './tab-panel.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-tab-panel');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Tab/Panel',
  component: 'awc-tab-panel',
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
        component: `> Additional demonstrations can be found in the [tab group examples](?path=/docs/components-tab-group--docs).`
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-shadow
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCTabPanel & typeof args>;
export default meta;

type Story = StoryObj<AWCTabPanel & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () =>
    html`<awc-tab-group>
      <awc-tab slot="nav" panel="general">General</awc-tab>
      <awc-tab slot="nav" panel="custom">Custom</awc-tab>
      <awc-tab slot="nav" panel="advanced">Advanced</awc-tab>
      <awc-tab slot="nav" panel="disabled" disabled>Disabled</awc-tab>

      <awc-tab-panel name="general">This is the general tab panel.</awc-tab-panel>
      <awc-tab-panel name="custom">This is the custom tab panel.</awc-tab-panel>
      <awc-tab-panel name="advanced">This is the advanced tab panel.</awc-tab-panel>
      <awc-tab-panel name="disabled">This is a disabled tab panel.</awc-tab-panel>
    </awc-tab-group>`
};
