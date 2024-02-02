/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMapIcon from './map-icon.js';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-map-icon');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Map/Icon',
  component: 'awc-map-icon',
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
} satisfies Meta<AWCMapIcon & typeof args>;
export default meta;

type Story = StoryObj<AWCMapIcon & typeof args>;

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
    <awc-map class="h-[800px]" fit-to-markers>
      <awc-map-icon id="myicon" icon-url="https://stendhalgame.org/images/mapmarker/me.png"></awc-map-icon>

      <awc-map-marker latitude="51.5" longitude="-0.09" title="Popup Demo" icon="myicon">
        <b>Bold</b>
        <p>Text</p>
      </awc-map-marker>
    </awc-map>
  `
};

export const PlainJSON: Story = {
  name: 'Using JSON',
  parameters: {
    docs: {
      description: {
        story: ``
      }
    }
  },
  render: () => html`
    <awc-map class="h-[800px]" fit-to-markers>
      <awc-map-marker
        latitude="51.5"
        longitude="-0.09"
        title="Popup Demo"
        icon='{"iconUrl": "https://stendhalgame.org/images/mapmarker/dungeon.png"}'
      >
        <b>Bold</b>
        <p>Text</p>
      </awc-map-marker>
    </awc-map>
  `
};

export const Script: Story = {
  name: 'Using Script',
  parameters: {
    docs: {
      description: {
        story: ``
      }
    }
  },
  render: () => html`
    <awc-map class="h-[800px]" fit-to-markers>
      <awc-map-marker latitude="51.5" longitude="-0.09" title="Popup Demo" class="myicon">
        <b>Bold</b>
        <p>Text</p>
      </awc-map-marker>
    </awc-map>
    <script>
      document.querySelectorAll('.myicon').forEach(function (marker) {
        marker.icon = L.icon({
          iconUrl: 'https://stendhalgame.org/images/mapmarker/npc.png',
          iconSize: L.point(26, 25),
          iconAnchor: L.point(0, 0)
        });
      });
    </script>
  `
};
