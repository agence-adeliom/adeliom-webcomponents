/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCSkeleton from './skeleton.js';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-skeleton');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Skeleton',
  component: 'awc-skeleton',
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
        component: `These are simple containers for scaffolding layouts that mimic what users will see when content has finished loading. This prevents large areas of empty space during asynchronous operations.

Skeletons try not to be opinionated, as there are endless possibilities for designing layouts. Therefore, you'll likely use more than one skeleton to create the effect you want. If you find yourself using them frequently, consider creating a template that renders them with the desired arrangement and styles.`
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCSkeleton & typeof args>;

export default meta;

type Story = StoryObj<AWCSkeleton & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () =>
    html`<div class="skeleton-overview">
        <header>
          <awc-skeleton></awc-skeleton>
          <awc-skeleton></awc-skeleton>
        </header>

        <awc-skeleton></awc-skeleton>
        <awc-skeleton></awc-skeleton>
        <awc-skeleton></awc-skeleton>
      </div>

      <style>
        .skeleton-overview header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .skeleton-overview header awc-skeleton:last-child {
          flex: 0 0 auto;
          width: 30%;
        }

        .skeleton-overview awc-skeleton {
          margin-bottom: 1rem;
        }

        .skeleton-overview awc-skeleton:nth-child(1) {
          float: left;
          width: 3rem;
          height: 3rem;
          margin-right: 1rem;
          vertical-align: middle;
        }

        .skeleton-overview awc-skeleton:nth-child(3) {
          width: 95%;
        }

        .skeleton-overview awc-skeleton:nth-child(4) {
          width: 80%;
        }
      </style>`
};

export const Effects: Story = {
  name: 'Effects',
  render: () =>
    html`<div class="skeleton-effects">
        <awc-skeleton effect="none"></awc-skeleton>
        None

        <awc-skeleton effect="sheen"></awc-skeleton>
        Sheen

        <awc-skeleton effect="pulse"></awc-skeleton>
        Pulse
      </div>

      <style>
        .skeleton-effects {
          font-size: var(--awc-font-size-small);
        }

        .skeleton-effects awc-skeleton:not(:first-child) {
          margin-top: 1rem;
        }
      </style>`,
  parameters: {
    docs: {
      description: {
        story: `There are two built-in effects, \`sheen\` and \`pulse\`. Effects are intentionally subtle, as they can be distracting when used extensively. The default is \`none\`, which displays a static, non-animated skeleton.`
      }
    }
  }
};

export const Paragraphs: Story = {
  name: 'Paragraphs',
  render: () =>
    html`<div class="skeleton-paragraphs">
        <awc-skeleton></awc-skeleton>
        <awc-skeleton></awc-skeleton>
        <awc-skeleton></awc-skeleton>
        <awc-skeleton></awc-skeleton>
        <awc-skeleton></awc-skeleton>
      </div>

      <style>
        .skeleton-paragraphs awc-skeleton {
          margin-bottom: 1rem;
        }

        .skeleton-paragraphs awc-skeleton:nth-child(2) {
          width: 95%;
        }

        .skeleton-paragraphs awc-skeleton:nth-child(4) {
          width: 90%;
        }

        .skeleton-paragraphs awc-skeleton:last-child {
          width: 50%;
        }
      </style>`,
  parameters: {
    docs: {
      description: {
        story: `Use multiple skeletons and some clever styles to simulate paragraphs.`
      }
    }
  }
};

export const Avatars: Story = {
  name: 'Avatars',
  render: () =>
    html`<div class="skeleton-avatars">
        <awc-skeleton></awc-skeleton>
        <awc-skeleton></awc-skeleton>
        <awc-skeleton></awc-skeleton>
      </div>

      <style>
        .skeleton-avatars awc-skeleton {
          display: inline-block;
          width: 3rem;
          height: 3rem;
          margin-right: 0.5rem;
        }

        .skeleton-avatars awc-skeleton:nth-child(1) {
          --border-radius: 0;
        }

        .skeleton-avatars awc-skeleton:nth-child(2) {
          --border-radius: var(--awc-border-radius-medium);
        }
      </style>`,
  parameters: {
    docs: {
      description: {
        story: `Set a matching width and height to make a circle, square, or rounded avatar skeleton.`
      }
    }
  }
};

export const CustomShapes: Story = {
  name: 'Custom Shapes',
  render: () =>
    html`<div class="skeleton-shapes">
        <awc-skeleton class="square"></awc-skeleton>
        <awc-skeleton class="circle"></awc-skeleton>
        <awc-skeleton class="triangle"></awc-skeleton>
        <awc-skeleton class="cross"></awc-skeleton>
        <awc-skeleton class="comment"></awc-skeleton>
      </div>

      <style>
        .skeleton-shapes awc-skeleton {
          display: inline-flex;
          width: 50px;
          height: 50px;
        }

        .skeleton-shapes .square::part(indicator) {
          --border-radius: var(--awc-border-radius-medium);
        }

        .skeleton-shapes .circle::part(indicator) {
          --border-radius: var(--awc-border-radius-circle);
        }

        .skeleton-shapes .triangle::part(indicator) {
          --border-radius: 0;
          clip-path: polygon(50% 0, 0 100%, 100% 100%);
        }

        .skeleton-shapes .cross::part(indicator) {
          --border-radius: 0;
          clip-path: polygon(
            20% 0%,
            0% 20%,
            30% 50%,
            0% 80%,
            20% 100%,
            50% 70%,
            80% 100%,
            100% 80%,
            70% 50%,
            100% 20%,
            80% 0%,
            50% 30%
          );
        }

        .skeleton-shapes .comment::part(indicator) {
          --border-radius: 0;
          clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
        }

        .skeleton-shapes awc-skeleton:not(:last-child) {
          margin-right: 0.5rem;
        }
      </style>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`--border-radius\` custom property to make circles, squares, and rectangles. For more complex shapes, you can apply \`clip-path\` to the \`indicator\` part. [Try Clippy](https://bennettfeely.com/clippy/) if you need help generating custom shapes.`
      }
    }
  }
};

export const CustomColors: Story = {
  name: 'Custom Colors',
  render: () => html`<awc-skeleton effect="sheen" style="--color: tomato; --sheen-color: #ffb094;"></awc-skeleton>`,
  parameters: {
    docs: {
      description: {
        story: `Set the \`--color\` and \`--sheen-color\` custom properties to adjust the skeleton's color.`
      }
    }
  }
};
