/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMapRectangle from './map-rectangle.js';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-map-rectangle');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Map/Vector Layers/Rectangle',
  component: 'awc-map-rectangle',
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
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCMapRectangle & typeof args>;
export default meta;

type Story = StoryObj<AWCMapRectangle & typeof args>;

export const Primary: Story = {
  name: 'Default',
  parameters: {
    docs: {
      description: {
        story: ``
      }
    }
  },
  render: () => html`
    <awc-map class="h-[800px]" latitude="54.559322" longitude="-5.767822" zoom="6">
      <awc-map-rectangle color="#f00" lat-lng-bounds="[[54.559322, -5.767822], [56.1210604, -3.021240]]">
        Hi, I am a <b>polygon</b>.
      </awc-map-rectangle>
    </awc-map>
  `
};
