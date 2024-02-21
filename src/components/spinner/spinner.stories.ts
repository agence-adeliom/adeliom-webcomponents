import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCSpinner from './spinner.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCSpinner>('awc-spinner');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Spinner',
  component: 'awc-spinner',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    }
  },

  render: context => template(context)
} satisfies Meta<AWCSpinner>;

export default meta;

type Story = StoryObj<AWCSpinner & typeof args>;

export const Primary: Story = {
  name: 'Default'
};

export const Size: Story = {
  name: 'Size',
  render: () =>
    html`<awc-spinner></awc-spinner>
      <awc-spinner style="font-size: 2rem;"></awc-spinner>
      <awc-spinner style="font-size: 3rem;"></awc-spinner>`,
  parameters: {
    docs: {
      description: {
        story: `Spinners are sized based on the current font size. To change their size, set the \`font-size\` property on the spinner itself or on a parent element as shown below.`
      }
    }
  }
};

export const TrackWidth: Story = {
  name: 'Track Width',
  render: () => html`<awc-spinner style="font-size: 50px; --track-width: 10px;"></awc-spinner>`,
  parameters: {
    docs: {
      description: {
        story: `The width of the spinner's track can be changed by setting the \`--track-width\` custom property.`
      }
    }
  }
};

export const Color: Story = {
  name: 'Color',
  render: () =>
    html`<awc-spinner style="font-size: 3rem; --indicator-color: deeppink; --track-color: pink;"></awc-spinner>`,
  parameters: {
    docs: {
      description: {
        story: `The spinner's colors can be changed by setting the \`--indicator-color\` and \`--track-color\` custom properties.`
      }
    }
  }
};
