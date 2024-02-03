import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMapPolyline from './map-polyline.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCMapPolyline>('awc-map-polyline');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Map/Vector Layers/Polyline',
  component: 'awc-map-polyline',
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
} satisfies Meta<AWCMapPolyline>;
export default meta;

type Story = StoryObj<AWCMapPolyline & typeof args>;

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
      <awc-map-polyline color="#f00">
        <awc-map-point longitude="77.6400" latitude="12.9100"> </awc-map-point>
        <awc-map-point longitude="77.6229" latitude="12.9259"> </awc-map-point>
        <awc-map-point longitude="77.6499" latitude="12.9699"> </awc-map-point>
        <awc-map-point longitude="77.6119" latitude="12.9738"> </awc-map-point>

        Hi, I am a <b>polyline</b>.
      </awc-map-polyline>
    </awc-map>
  `
};
