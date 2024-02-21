import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMapVideoOverlay from './map-video-overlay.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCMapVideoOverlay>('awc-map-video-overlay');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Map/Raster Layers/Video Overlay',
  component: 'awc-map-video-overlay',
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
} satisfies Meta<AWCMapVideoOverlay>;
export default meta;

type Story = StoryObj<AWCMapVideoOverlay & typeof args>;

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
    <awc-map class="h-[800px]" latitude="23.509199" longitude="-110.373491" zoom="4" >
      <awc-map-tilelayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" max-zoom="19">
            Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contr.,
            <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
            Imagery © <a href="http://mapbox.com">Mapbox</a>
      </awc-map-tilelayer>
      <awc-map-video-overlay url="https://www.mapbox.com/bites/00188/patricia_nasa.webm" lat-lng-bounds="[[ 32, -130], [ 13, -100]]"></awc-map-image-overlay>
    </awc-map>
  `
};
