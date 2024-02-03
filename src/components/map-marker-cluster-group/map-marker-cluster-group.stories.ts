import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMapMarkerClusterGroup from './map-marker-cluster-group.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCMapMarkerClusterGroup>('awc-map-marker-cluster-group');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Map/Other Layers/MarkerClusterGroup',
  component: 'awc-map-marker-cluster-group',
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
} satisfies Meta<AWCMapMarkerClusterGroup>;
export default meta;

type Story = StoryObj<AWCMapMarkerClusterGroup & typeof args>;

const getRandom = (from: number, to: number, fixed: number): number => {
  return Number((Math.random() * (to - from) + from).toFixed(fixed));
};

const getRandomCoordinates = () => {
  return {
    latitude: getRandom(-45, 45, 5),
    longitude: getRandom(-90, 90, 5)
  };
};

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
    <awc-map class="h-[800px]" latitude="51.5" longitude="-0.09" zoom="2">
      <awc-map-marker-cluster-group>
        ${Array(1000)
          .fill(0)
          .map(() => {
            const coords = getRandomCoordinates();
            return html`
              <awc-map-marker latitude="${coords.latitude}" longitude="${coords.longitude}">
                latitude: "${coords.latitude}" <br />
                longitude: "${coords.longitude}"
              </awc-map-marker>
            `;
          })}
      </awc-map-marker-cluster-group>
    </awc-map>
  `
};
