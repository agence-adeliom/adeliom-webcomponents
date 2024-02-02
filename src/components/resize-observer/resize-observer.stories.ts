/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCResizeObserver from './resize-observer.js';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-resize-observer');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Resize Observer',
  component: 'awc-resize-observer',
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
        component: `The resize observer will report changes to the dimensions of the elements it wraps through the \`awc-resize\` event. When emitted, a collection of [\`ResizeObserverEntry\`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry) objects will be attached to \`event.detail\` that contains the target element and information about its dimensions.`
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCResizeObserver & typeof args>;

export default meta;

type Story = StoryObj<AWCResizeObserver & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () =>
    html`<div class="resize-observer-overview">
        <awc-resize-observer>
          <div>Resize this window and watch the console 👉</div>
        </awc-resize-observer>
      </div>

      <script>
        const container = document.querySelector('.resize-observer-overview');
        const resizeObserver = container.querySelector('awc-resize-observer');

        resizeObserver.addEventListener('awc-resize', event => {
          console.log(event.detail);
        });
      </script>

      <style>
        .resize-observer-overview div {
          display: flex;
          border: solid 2px var(--awc-input-border-color);
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 2rem;
        }
      </style>`
};
