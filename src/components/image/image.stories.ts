import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCImage from './image.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCImage>('awc-image');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Image',
  component: 'awc-image',
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    }
  },

  render: context => template(context)
} satisfies Meta<AWCImage>;

export default meta;

type Story = StoryObj<AWCImage & typeof args>;

export const Primary: Story = {
  name: 'Constrained',
  args: {
    src: 'https://placehold.co/1200x300',
    layout: 'constrained',
    width: 600,
    height: 150
  }
};

export const Fullwidth: Story = {
  name: 'Fullwidth',
  args: {
    src: 'https://placehold.co/1200x300',
    layout: 'fullWidth',
    width: 600,
    height: 150
  }
};

export const Fixed: Story = {
  name: 'Fixed',
  args: {
    src: 'https://placehold.co/1200x300',
    layout: 'fixed',
    width: 600,
    height: 150
  }
};
