/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMapImageOverlay from './map-image-overlay.js';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-map-image-overlay');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Map/Raster Layers/Image Overlay',
  component: 'awc-map-image-overlay',
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
} satisfies Meta<AWCMapImageOverlay & typeof args>;
export default meta;

type Story = StoryObj<AWCMapImageOverlay & typeof args>;

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
    <awc-map class="h-[800px]" latitude="40.712216" longitude="-74.22655" zoom="12">
      <awc-map-tilelayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" max-zoom="19">
        Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contr.,
        <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ©
        <a href="http://mapbox.com">Mapbox</a>
      </awc-map-tilelayer>
      <awc-map-image-overlay
        url="https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
        lat-lng-bounds="[[40.712216, -74.22655], [40.773941, -74.12544]]"
      ></awc-map-image-overlay>
    </awc-map>
  `
};
