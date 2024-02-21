import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMapSvgOverlay from './map-svg-overlay.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCMapSvgOverlay>('awc-map-svg-overlay');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Map/Vector Layers/SVG Overlay',
  component: 'awc-map-svg-overlay',
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
} satisfies Meta<AWCMapSvgOverlay>;
export default meta;

type Story = StoryObj<AWCMapSvgOverlay & typeof args>;

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
    <awc-map class="h-[800px]" latitude="23.558003" longitude="-108.851295" zoom="4">
      <awc-map-tilelayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" max-zoom="19">
        Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contr.,
        <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ©
        <a href="http://mapbox.com">Mapbox</a>
      </awc-map-tilelayer>
      <awc-map-svg-overlay lat-lng-bounds="[[32, -130],[13, -100]]" opacity="0.6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <rect width="200" height="200" />
          <rect x="75" y="23" width="50" height="50" style="fill:red" />
          <rect x="75" y="123" width="50" height="50" style="fill:#0013ff" />
        </svg>
      </awc-map-svg-overlay>
    </awc-map>
  `
};
