import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCCarouselItem from './carousel-item.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-carousel-item');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Carousel Item',
  component: 'awc-carousel-item',
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
        component: `> Additional demonstrations can be found in the [carousel examples](/components/carousel).`
      }
    }
  },
  render: context => template(context)
} satisfies Meta<AWCCarouselItem & typeof args>;

export default meta;

type Story = StoryObj<AWCCarouselItem & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () => html`
    <awc-carousel pagination>
      <awc-carousel-item>
        <img
          alt="The sun shines on the mountains and trees - Photo by Adam Kool on Unsplash"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A waterfall in the middle of a forest - Photo by Thomas Kelly on Unsplash"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="The sun is setting over a lavender field - Photo by Leonard Cotte on Unsplash"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A field of grass with the sun setting in the background - Photo by Sapan Patel on Unsplash"
          src="/assets/examples/carousel/field.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A scenic view of a mountain with clouds rolling in - Photo by V2osk on Unsplash"
          src="/assets/examples/carousel/valley.jpg"
        />
      </awc-carousel-item>
    </awc-carousel>
  `
};
