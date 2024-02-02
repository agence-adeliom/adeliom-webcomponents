/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMapTilelayer from './map-tilelayer.js';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-map-tilelayer');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Map/Raster Layers/TileLayer',
  component: 'awc-map-tilelayer',
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
} satisfies Meta<AWCMapTilelayer & typeof args>;
export default meta;

type Story = StoryObj<AWCMapTilelayer & typeof args>;

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
    url: 'https://stendhalgame.org/map/3/{z}-{x}-{y}.png',
    attribution: 'Map source: <a href="https://stendhalgame.org">Stendhal MMORPG</a>',
    maxZoom: 6,
    minZoom: 2,
    noWrap: true
  },
  render: args => html`
    <awc-map class="h-[800px]" latitude="78.8" longitude="-96" zoom="5" max-zoom="6" min-zoom="2">
      ${template(args)}
    </awc-map>
  `
};
