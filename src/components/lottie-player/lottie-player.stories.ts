import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import { PlayMode } from './utils.js';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCLottiePlayer from './lottie-player.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCLottiePlayer>('awc-lottie-player');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Lottie Player',
  component: 'awc-lottie-player',
  //tags: ['autodocs'],
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
} satisfies Meta<AWCLottiePlayer>;
export default meta;

type Story = StoryObj<AWCLottiePlayer & typeof args>;

export const Primary: Story = {
  name: 'Default',
  parameters: {
    docs: {
      description: {
        story: ``
      }
    }
  },
  args: {
    src: '/assets/examples/lottie/waving.lottie',
    autoplay: true
  },
  render: args => template(args)
};

export const Controls: Story = {
  name: 'Controls',
  parameters: {
    docs: {
      description: {
        story: "Displays the animation's controls toolbar."
      }
    }
  },
  args: {
    src: '/assets/examples/lottie/hero-web.lottie',
    controls: true
  },
  render: args => template(args)
};

export const SimpleControls: Story = {
  name: 'Controls (simple)',
  parameters: {
    docs: {
      description: {
        story: 'Displays the controls toolbar without loop and boomerang buttons.'
      }
    }
  },
  args: {
    src: '/assets/examples/lottie/hero-web.lottie',
    controls: true,
    simple: true
  },
  render: args => template(args)
};

export const Hover: Story = {
  name: 'Play on hover',
  parameters: {
    docs: {
      description: {
        story: '`hover` will play the animation on mouse hover.'
      }
    }
  },
  args: {
    src: '/assets/examples/lottie/waving.lottie',
    hover: true,
    controls: true
  },
  render: args => template(args)
};

export const Loop: Story = {
  name: 'Loop',
  parameters: {
    docs: {
      description: {
        story: 'Enables the animation to loop after it finishes playing.'
      }
    }
  },
  args: {
    src: '/assets/examples/lottie/bulb.lottie',
    autoplay: true,
    loop: true,
    controls: true
  },
  render: args => template(args)
};

export const Bounce: Story = {
  name: 'Bounce',
  parameters: {
    docs: {
      description: {
        story: 'Enables the animation to bounce after it finishes playing.'
      }
    }
  },
  args: {
    src: '/assets/examples/lottie/bulb.lottie',
    autoplay: true,
    loop: true,
    mode: PlayMode.Bounce,
    controls: true
  },
  render: args => template(args)
};

export const CanvasRenderer: Story = {
  name: 'Canvas renderer',
  parameters: {
    docs: {
      description: {
        story: 'Use a canvas renderer for better performance instead of the default SVG renderer.'
      }
    }
  },
  args: {
    src: '/assets/examples/lottie/blackCat.lottie',
    autoplay: true,
    loop: true,
    mode: PlayMode.Bounce,
    controls: true,
    renderer: 'canvas'
  },
  render: args => template(args)
};

export const Speed: Story = {
  name: 'Speed',
  parameters: {
    docs: {
      description: {
        story: 'Changes the speed of the animation.'
      }
    }
  },
  args: {
    src: '/assets/examples/lottie/hero-web.lottie',
    controls: true,
    speed: 2,
    autoplay: true
  },
  render: args => template(args)
};

export const LoadProgrammatically: Story = {
  name: 'Load programmatically',
  parameters: {
    docs: {
      description: {
        story: 'To set animations programmatically, use the `load()` method.'
      }
    }
  },
  args: {
    src: '/assets/examples/lottie/hero-web.lottie',
    controls: true
  },
  render: args => html`
    <div id="lottie-player-programmatically">
      ${template({
        controls: args.controls
      })}
      <script type="module">
        const lottiePlayer = document.querySelector('#lottie-player-programmatically > awc-lottie-player');
        lottiePlayer.load('${args.src}');
        lottiePlayer.addEventListener('awc-lottie-ready', () => {
          lottiePlayer.play();
        });
      </script>
    </div>
  `
};

export const Combined: Story = {
  name: 'Combined animations',
  parameters: {
    docs: {
      description: {
        story: 'Example of multiple animations.'
      }
    }
  },
  args: {
    src: '/assets/examples/lottie/combined.lottie',
    controls: true,
    autoplay: true
  },
  render: args => template(args)
};
