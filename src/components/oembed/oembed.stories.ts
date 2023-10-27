import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCOembed from './oembed';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-oembed');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/OEmbed',
  component: 'awc-oembed',
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCOembed & typeof args>;

export default meta;

type Story = StoryObj<AWCOembed & typeof args>;

export const Primary: Story = {
  name: 'Example',
  args: {
    src: 'https://www.youtube.com/watch?v=YE7VzlLtp-4',
    aspectRatio: 1.76,
    layout: 'fullWidth'
  }
};
