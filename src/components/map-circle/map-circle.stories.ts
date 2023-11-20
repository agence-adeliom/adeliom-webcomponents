import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMapCircle from './map-circle.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-map-circle');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Map/Vector Layers/Circle',
  component: 'awc-map-circle',
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
} satisfies Meta<AWCMapCircle & typeof args>;
export default meta;

type Story = StoryObj<AWCMapCircle & typeof args>;

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
    <awc-map class="h-[800px]" longitude="77.6" latitude="12.95" zoom="12">
      <awc-map-circle
        longitude="77.58"
        latitude="12.93"
        radius="2000"
        color="#0a0"
        fill-color="#aa0"
        fill-opacity="0.5"
        fill="true"
      >
        Hi, I am a <strong>circle</strong>
      </awc-map-circle>
      <awc-map-circle longitude="77.64" latitude="12.93" radius="500" color="#0a0" fill-color="#077"></awc-map-circle>
    </awc-map>
  `
};
