import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMap from './map.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-map');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Map',
  component: 'awc-map',
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
        component: `This simple example will show a map of the world. It is pan and zoomable.`
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCMap & typeof args>;
export default meta;

type Story = StoryObj<AWCMap & typeof args>;

export const Primary: Story = {
  name: 'Default',
  parameters: {
    docs: {
      description: {
        story: ``
      }
    }
  },
  args: {},
  render: () => html` <awc-map class="h-[800px]"></awc-map> `
};

export const Initial: Story = {
  name: 'Initial view',
  parameters: {
    docs: {
      description: {
        story: `Initial view with latitude, longitude and zoom.`
      }
    }
  },
  args: {
    latitude: 51.505,
    longitude: -0.09,
    zoom: 13
  },
  render: args => html`
    <awc-map class="h-[800px]" latitude="${args.latitude}" longitude="${args.longitude}" zoom="${args.zoom}"></awc-map>
  `
};

export const Marker: Story = {
  name: 'Markers, popup and circle',
  parameters: {
    docs: {
      description: {
        story: ``
      }
    }
  },
  render: () => html`
    <awc-map class="h-[800px]" fit-to-markers>
      <awc-map-marker latitude="51.5" longitude="-0.10" title="Transparent" opacity="0.6"></awc-map-marker>

      <awc-map-marker latitude="51.5" longitude="-0.09" title="Popup Demo">
        <b>Bold</b>
        <p>Text</p>
      </awc-map-marker>

      <awc-map-circle
        latitude="51.46"
        longitude="-0.095"
        radius="2000"
        color="#0a0"
        fill-color="#aa0"
        fill-opacity="0.5"
        fill="true"
      >
        Hi, I am a <strong>circle</strong>
      </awc-map-circle>
    </awc-map>
  `
};

export const Controls: Story = {
  name: 'Controls',
  parameters: {
    docs: {
      description: {
        story: `Set custom styles for the leaflet container and popup.`
      }
    }
  },
  render: () => html`
    <awc-map class="h-[800px]" fit-to-markers>
      <awc-map-fullscreen-control position="topright"></awc-map-fullscreen-control>
      <awc-map-geolocation position="topright"></awc-map-geolocation>
      <awc-map-zoom-control position="topright"></awc-map-zoom-control>
      <awc-map-scale-control position="bottomright"></awc-map-scale-control>
      <awc-map-marker latitude="51.5" longitude="-0.10" title="Transparent" opacity="0.6"></awc-map-marker>

      <awc-map-marker latitude="51.5" longitude="-0.09" title="Popup Demo">
        <b>Bold</b>
        <p>Text</p>
      </awc-map-marker>
    </awc-map>
  `
};

export const Styles: Story = {
  name: 'Styling',
  parameters: {
    docs: {
      description: {
        story: `Set custom styles for the leaflet container and popup.`
      }
    }
  },
  render: () => html`
    <awc-map
      class="h-[800px]"
      fit-to-markers
      style="--popup-background-color: purple; --popup-text-color: white; --controls-background-color: red; --controls-text-color: white;"
    >
      <awc-map-marker latitude="51.5" longitude="-0.10" title="Transparent" opacity="0.6"></awc-map-marker>

      <awc-map-marker latitude="51.5" longitude="-0.09" title="Popup Demo">
        <b>Bold</b>
        <p>Text</p>
      </awc-map-marker>
    </awc-map>
  `
};
