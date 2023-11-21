import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMapGeolocation from './map-geolocation.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-map-geolocation');

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
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCMapGeolocation & typeof args>;
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
      document.querySelector('.map-geolocation').addEventListener('locationfound', e => {
        alert(
          'Location found : ' +
            JSON.stringify({
              lat: e.latlng.lat,
              lng: e.latlng.lng,
              bounds: e.bounds,
              accuracy: e.accuracy,
              altitude: e.altitude,
              altitudeAccuracy: e.altitudeAccuracy,
              heading: e.heading,
              speed: e.speed,
              timestamp: e.timestamp
            })
        );
      });
    </script>
  `
};
