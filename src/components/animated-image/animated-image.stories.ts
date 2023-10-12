import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCAnimatedImage from './animated-image.ts';
import {getWcStorybookHelpers} from "../../../.storybook/wc-helper";
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-animated-image');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Animated Image',
  component: 'awc-animated-image',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events,
    }
  },
  render: (args) => template(args),
} satisfies Meta<AWCAnimatedImage & typeof args>;

export default meta;

type Story = StoryObj<AWCAnimatedImage & typeof args>;

export const Primary: Story = {
  name: "Default Animation",
  args: {
    src: "https://awc.a-dev.cloud/assets/images/walk.gif",
    alt: "Animation of untied shoes walking on pavement"
  },
  parameters: {
    docs: {
      description: {
        story: 'Another description, overriding the comments'
      },
    },
  }
};

export const WEBPImage: Story = {
  args: {
    src: "https://awc.a-dev.cloud/assets/images/tie.webp",
    alt: "Animation of a shoe being tied"
  },
  parameters: {
    docs: {
      description: {
        story: 'Both GIF and WEBP images are supported.'
      },
    },
  }
};

export const Sized: Story = {
  name: "Setting a Width and Height",
  args: {
    src: "https://awc.a-dev.cloud/assets/images/tie.webp",
    alt: "Animation of untied shoes walking on pavement",
    style: "width: 150px; height: 200px;"
  },
  parameters: {
    docs: {
      inline: false,
      description: {
        story: 'To set a custom size, apply a width and/or height to the host element.'
      },
    },
  },
};

export const Customized: Story = {
  name: "Customizing the Control Box",
  args: {
    src: "https://awc.a-dev.cloud/assets/images/tie.webp",
    alt: "Animation of untied shoes walking on pavement",
    "control-box-part": `top: auto;
    right: auto;
    bottom: 1rem;
    left: 1rem;
    background-color: deeppink;
    border: none;
    color: pink;`
  },
  parameters: {
    docs: {
      description: {
        story: 'You can change the appearance and location of the control box by targeting the control-box part in your styles.'
      },
    },
  }
};
