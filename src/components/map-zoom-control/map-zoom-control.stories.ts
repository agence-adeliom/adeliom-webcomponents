/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMapZoomControl from './map-zoom-control.js';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-map-zoom-control');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Map/Controls/Zoom',
  component: 'awc-map-zoom-control',
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
} satisfies Meta<AWCMapZoomControl & typeof args>;
export default meta;

type Story = StoryObj<AWCMapZoomControl & typeof args>;

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
    <awc-map class="h-[800px]" longitude="102.0" latitude="0.5" zoom="8"> ${template(args)} </awc-map>
  `
};
