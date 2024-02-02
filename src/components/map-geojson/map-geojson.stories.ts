/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMapGeojson from './map-geojson.js';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-map-geojson');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Map/Other Layers/GeoJSON',
  component: 'awc-map-geojson',
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
} satisfies Meta<AWCMapGeojson & typeof args>;
export default meta;

type Story = StoryObj<AWCMapGeojson & typeof args>;

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
    <awc-map class="h-[800px] map-geojson" longitude="102.0" latitude="0.5" zoom="8">
      <awc-map-tilelayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" max-zoom="19">
        Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contr.,
        <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ©
        <a href="http://mapbox.com">Mapbox</a>
      </awc-map-tilelayer>
      <awc-map-geojson>
        <script type="application/json">
          {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [102.0, 0.5]
                },
                "properties": {
                  "prop0": "value0"
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "LineString",
                  "coordinates": [
                    [102.0, 0.0],
                    [103.0, 1.0],
                    [104.0, 0.0],
                    [105.0, 1.0]
                  ]
                },
                "properties": {
                  "prop0": "value0",
                  "prop1": 0.0
                }
              },
              {
                "type": "Feature",
                "geometry": {
                  "type": "Polygon",
                  "coordinates": [
                    [
                      [100.0, 0.0],
                      [101.0, 0.0],
                      [101.0, 1.0],
                      [100.0, 1.0],
                      [100.0, 0.0]
                    ]
                  ]
                },
                "properties": {
                  "prop0": "value0",
                  "prop1": {
                    "this": "that"
                  }
                }
              }
            ]
          }
        </script>
      </awc-map-geojson>
    </awc-map>
  `
};
