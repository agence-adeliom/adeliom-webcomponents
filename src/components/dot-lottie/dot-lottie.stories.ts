import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCDotLottie from './dot-lottie.ts';
const { events, args, template } = getWcStorybookHelpers('awc-dot-lottie');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Dot Lottie',
  component: 'awc-dot-lottie',
  tags: ['autodocs'],
  args,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    },
    docs: {
      description: {
        component: `This component is made to work with DotLottie files. For more informations, please visit https://dotlottie.io/.`
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCDotLottie & typeof args>;
export default meta;

type Story = StoryObj<AWCDotLottie & typeof args>;

export const Default: Story = {
  name: 'Default',
  render: () => html`
    <awc-dot-lottie
      class="w-fit h-fit mx-auto"
      autoplay
      controls
      loop
      mode="normal"
      src="https://assets2.lottiefiles.com/dotlotties/dlf10_l12sw9oo.lottie"
    >
    </awc-dot-lottie>
  `
};

export const Interesct: Story = {
  name: 'Intersect',
  render: () => html`
    <div class="w-full min-h-[300vh] flex items-center flex-col gap-[20vh]">
      <awc-dot-lottie class="w-fit h-fit" mode="normal" src="https://assets2.lottiefiles.com/dotlotties/dlf10_l12sw9oo.lottie">
      </awc-dot-lottie>
      <awc-dot-lottie class="w-fit h-fit" mode="normal" src="https://assets2.lottiefiles.com/dotlotties/dlf10_l12sw9oo.lottie">
      </awc-dot-lottie>
      <awc-dot-lottie class="w-fit h-fit" mode="normal" src="https://assets2.lottiefiles.com/dotlotties/dlf10_l12sw9oo.lottie">
      </awc-dot-lottie>
    </div>

    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const animations = document.querySelectorAll('awc-dot-lottie');
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5
        };

        const animationsObserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const target = entry.target;
              const anim = target.getLottie();
              if (anim && anim.isLoaded) {
                target.play();
                const totalFrames = anim.totalFrames;
                const frameToStop = totalFrames - 2;
                anim.addEventListener('complete', () => {
                  target.seek(frameToStop);
                });
              }
            }
          });
        }, options);

        animations.forEach(section => {
          section.addEventListener('ready', () => {
            animationsObserver.observe(section);
          });
        });
      });
    </script>
  `
};
