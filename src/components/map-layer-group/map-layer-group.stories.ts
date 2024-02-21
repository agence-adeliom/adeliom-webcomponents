import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMapLayerGroup from './map-layer-group.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCMapLayerGroup>('awc-map-layer-group');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Map/Other Layers/LayerGroup',
  component: 'awc-map-layer-group',
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
} satisfies Meta<AWCMapLayerGroup>;
export default meta;

type Story = StoryObj<AWCMapLayerGroup & typeof args>;

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
    <awc-map class="h-[800px]" latitude="51.5" longitude="-0.09" zoom="14">
      <awc-map-layer-group>
        <awc-map-marker latitude="51.5" longitude="-0.10" title="Transparent" opacity="0.6"></awc-map-marker>

        <awc-map-marker latitude="51.5" longitude="-0.09" title="Popup Demo">
          <b>Bold</b>
          <p>Text</p>
        </awc-map-marker>
      </awc-map-layer-group>
    </awc-map>
  `
};
