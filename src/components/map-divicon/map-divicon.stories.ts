import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMapDivicon from './map-divicon.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCMapDivicon>('awc-map-divicon');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Map/Icon/DivIcon',
  component: 'awc-map-divicon',
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
} satisfies Meta<AWCMapDivicon>;
export default meta;

type Story = StoryObj<AWCMapDivicon & typeof args>;

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
      <awc-map-divicon id="myicon">
        <awc-badge pill pulse><awc-icon name="house"></awc-icon></awc-badge>
      </awc-map-divicon>

      <awc-map-marker latitude="51.5" longitude="-0.09" title="Popup Demo" icon="myicon">
        <b>Bold</b>
        <p>Text</p>
      </awc-map-marker>
    </awc-map>
  `
};
