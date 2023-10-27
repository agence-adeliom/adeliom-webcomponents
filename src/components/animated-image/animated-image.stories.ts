import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCAnimatedImage from './animated-image.ts';
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
      handles: events
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCAnimatedImage & typeof args>;

export default meta;

type Story = StoryObj<AWCAnimatedImage & typeof args>;

export const Primary: Story = {
  name: 'Default Animation',
  args: {
    src: '/assets/images/walk.gif',
    alt: 'Animation of untied shoes walking on pavement'
  }
};

export const WEBPImage: Story = {
  args: {
    src: '/assets/images/tie.webp',
    alt: 'Animation of a shoe being tied'
  },
  parameters: {
    docs: {
      description: {
        story: 'Both GIF and WEBP images are supported.'
      }
    }
  }
};

export const Sized: Story = {
  name: 'Setting a Width and Height',
  args: {
    src: '/assets/images/walk.gif',
    alt: 'Animation of untied shoes walking on pavement',
    style: 'width: 150px; height: 200px;'
  },
  parameters: {
    docs: {
      inline: false,
      description: {
        story: 'To set a custom size, apply a width and/or height to the host element.'
      }
    }
  }
};

export const Customized: Story = {
  name: 'Customizing the Control Box',
  args: {
    src: '/assets/images/tie.webp',
    alt: 'Animation of untied shoes walking on pavement',
    'control-box-part': `top: auto;
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
        story:
          'You can change the appearance and location of the control box by targeting the control-box part in your styles.'
      }
    }
  }
};
