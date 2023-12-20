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

export const Default: Story = {
  name: 'Default',
  render: () => html`
    <awc-lottie class="w-fit h-fit mx-auto" autoplay controls loop mode="normal" src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json">
    </awc-lottie>
  `
};

export const Interesct: Story = {
  name: 'Intersect',
  render: () => html`
    <div class="w-full min-h-[300vh] flex items-center flex-col gap-[20vh]">
      <awc-lottie class="w-fit h-fit" mode="normal" src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json">
      </awc-lottie>
      <awc-lottie class="w-fit h-fit" mode="normal" src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json">
      </awc-lottie>
      <awc-lottie class="w-fit h-fit" mode="normal" src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json">
      </awc-lottie>
    </div>

    <script>
      document.addEventListener("DOMContentLoaded", () => {
        const animations = document.querySelectorAll('awc-lottie')
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const animationsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target
                    const anim = target.getLottie()
                    if (anim && anim.isLoaded) {
                        target.play()
                        const totalFrames = anim.totalFrames;
                        const frameToStop = totalFrames - 2;
                        anim.addEventListener('complete', () => {
                            target.seek(frameToStop)
                        });
                    }
                }
            });
        }, options);

        animations.forEach((section) => {
          section.addEventListener('ready', () => {
              animationsObserver.observe(section);
          })
        })
      })
    </script>
  `
};
