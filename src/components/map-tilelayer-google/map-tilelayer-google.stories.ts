import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMapTilelayerGoogle from './map-tilelayer-google.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-map-tilelayer-google');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Map/Raster Layers/TileLayer.Google',
  component: 'awc-map-tilelayer-google',
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
} satisfies Meta<AWCMapTilelayerGoogle & typeof args>;
export default meta;

type Story = StoryObj<AWCMapTilelayerGoogle & typeof args>;

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
  render: args => html`
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZBawO0huz4NT8v0Hj25mLbKT55eImDhA"
      async
      defer
    ></script>
    <awc-map class="h-[800px]" latitude="78.8" longitude="-96"> ${template(args)} </awc-map>
  `
};

export const Styles: Story = {
  name: 'Custom styles',
  parameters: {
    docs: {
      description: {
        story: ``
      }
    }
  },
  render: () => html`
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZBawO0huz4NT8v0Hj25mLbKT55eImDhA"
      async
      defer
    ></script>
    <awc-map class="h-[800px]" latitude="78.8" longitude="-96">
      <awc-map-tilelayer-google
        map-styles='[{"elementType":"labels","stylers":[{"visibility":"off"},{"color":"#f49f53"}]},{"featureType":"landscape","stylers":[{"color":"#f9ddc5"},{"lightness":-7}]},{"featureType":"road","stylers":[{"color":"#813033"},{"lightness":43}]},{"featureType":"poi.business","stylers":[{"color":"#645c20"},{"lightness":38}]},{"featureType":"water","stylers":[{"color":"#1994bf"},{"saturation":-69},{"gamma":0.99},{"lightness":43}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#f19f53"},{"weight":1.3},{"visibility":"on"},{"lightness":16}]},{"featureType":"poi.business"},{"featureType":"poi.park","stylers":[{"color":"#645c20"},{"lightness":39}]},{"featureType":"poi.school","stylers":[{"color":"#a95521"},{"lightness":35}]},{},{"featureType":"poi.medical","elementType":"geometry.fill","stylers":[{"color":"#813033"},{"lightness":38},{"visibility":"off"}]},{},{},{},{},{},{},{},{},{},{},{},{"elementType":"labels"},{"featureType":"poi.sports_complex","stylers":[{"color":"#9e5916"},{"lightness":32}]},{},{"featureType":"poi.government","stylers":[{"color":"#9e5916"},{"lightness":46}]},{"featureType":"transit.station","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","stylers":[{"color":"#813033"},{"lightness":22}]},{"featureType":"transit","stylers":[{"lightness":38}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#f19f53"},{"lightness":-10}]},{},{},{}]'
      ></awc-map-tilelayer-google>
    </awc-map>
  `
};
