import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCImageComparer from './image-comparer.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCImageComparer>('awc-image-comparer');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Image Comparer',
  component: 'awc-image-comparer',
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
        component: `For best results, use images that share the same dimensions. The slider can be controlled by dragging or pressing the left and right arrow keys. (Tip: press shift + arrows to move the slider in larger intervals, or home + end to jump to the beginning or end.)`
      }
    }
  },

  render: context => template(context)
} satisfies Meta<AWCImageComparer>;

export default meta;

type Story = StoryObj<AWCImageComparer & typeof args>;

export const Primary: Story = {
  name: 'Example',
  render: () =>
    html`<awc-image-comparer>
      <img
        slot="before"
        src="${`https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?fit=crop&w=800&q=80&sat=-100&bri=-5`}"
        alt="Grayscale version of kittens in a basket looking around."
      />
      <img
        slot="after"
        src="${`https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?auto=format&fit=crop&w=800&q=80`}"
        alt="Color version of kittens in a basket looking around."
      />
    </awc-image-comparer>`
};

export const InitialPosition: Story = {
  name: 'Initial Position',
  parameters: {
    docs: {
      description: {
        story: `Use the \`position\` attribute to set the initial position of the slider. This is a percentage from \`0\` to \`100\`.`
      }
    }
  },
  render: () =>
    html`<awc-image-comparer position="25">
      <img
        slot="before"
        src="${`https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?fit=crop&w=800&q=80&sat=-100&bri=-5`}"
        alt="Grayscale version of kittens in a basket looking around."
      />
      <img
        slot="after"
        src="${`https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?auto=format&fit=crop&w=800&q=80`}"
        alt="Color version of kittens in a basket looking around."
      />
    </awc-image-comparer>`
};
