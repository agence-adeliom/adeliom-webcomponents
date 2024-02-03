import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMapPolygon from './map-polygon.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCMapPolygon>('awc-map-polygon');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Map/Vector Layers/Polygon',
  component: 'awc-map-polygon',
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
} satisfies Meta<AWCMapPolygon>;
export default meta;

type Story = StoryObj<AWCMapPolygon & typeof args>;

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
    <awc-map class="h-[800px]" longitude="77.6" latitude="12.95" zoom="12">
      <awc-map-polygon color="#f00">
        <awc-map-point longitude="77.5700" latitude="12.9700"></awc-map-point>
        <awc-map-point longitude="77.6034" latitude="13.0001"></awc-map-point>
        <awc-map-point longitude="77.6006" latitude="12.9547"></awc-map-point>

        Hi, I am a <b>polygon</b>.
      </awc-map-polygon>
    </awc-map>
  `
};
