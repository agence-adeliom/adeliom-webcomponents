import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCLottie from './lottie.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-lottie');

const meta = {
  title: 'Components/Lottie',
  component: 'awc-lottie',
  tags: ['autodocs'],
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
} satisfies Meta<AWCLottie & typeof args>;

export default meta;

type Story = StoryObj<AWCLottie & typeof args>;

export const Test: Story = {
  name: 'Default',
  render: () => html`
    <awc-lottie autoplay controls loop mode="normal" src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json">
    </awc-lottie>
  `
};
