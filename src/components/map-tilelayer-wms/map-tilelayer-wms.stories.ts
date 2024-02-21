import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMapTilelayerWMS from './map-tilelayer-wms.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCMapTilelayerWMS>('awc-map-tilelayer-wms');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Map/Raster Layers/TileLayer.WMS',
  component: 'awc-map-tilelayer-wms',
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
} satisfies Meta<AWCMapTilelayerWMS>;
export default meta;

type Story = StoryObj<AWCMapTilelayerWMS & typeof args>;

export const Primary: Story = {
  name: 'Default',
  parameters: {
    docs: {
      description: {
        story: ``
      }
    }
  },
  args: {
    url: 'https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi',
    layers: 'nexrad-n0r-900913',
    format: 'image/png',
    transparent: true,
    opacity: 0.5,
    'default-slot': 'Weather data &copy; 2012 IEM Nexrad'
  },
  render: args => html`
    <awc-map class="h-[800px]" latitude="40" longitude="-85" zoom="4">
      <awc-map-tilelayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" max-zoom="19">
        Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contr.,
        <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ©
        <a href="http://mapbox.com">Mapbox</a>
      </awc-map-tilelayer>
      ${template(args)}
    </awc-map>
  `
};
