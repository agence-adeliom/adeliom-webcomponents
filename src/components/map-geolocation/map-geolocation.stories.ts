import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMapGeolocation from './map-geolocation.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCMapGeolocation>('awc-map-geolocation');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Map/Controls/Geolocation',
  component: 'awc-map-geolocation',
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
} satisfies Meta<AWCMapGeolocation>;
export default meta;

type Story = StoryObj<AWCMapGeolocation & typeof args>;

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
    <awc-map class="map-geolocation h-[800px]" longitude="102.0" latitude="0.5" zoom="8">
      <awc-map-geolocation enable-high-accuracy></awc-map-geolocation>
    </awc-map>
    <script>
      document.querySelector('.map-geolocation').addEventListener(
        'locationfound',
        e => {
          const { latlng, bounds, accuracy, altitude, altitudeAccuracy, heading, speed, timestamp } = e.detail;
          alert(
            'Location found : ' +
              JSON.stringify({
                lat: latlng.lat,
                lng: latlng.lng,
                bounds,
                accuracy,
                altitude,
                altitudeAccuracy,
                heading,
                speed,
                timestamp
              })
          );
        },
        { once: true }
      );
    </script>
  `
};
