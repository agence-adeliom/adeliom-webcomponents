import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCAnimation from './animation.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCAnimation>('awc-animation');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Animation',
  component: 'awc-animation',
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
        component: `To animate an element, wrap it in \`<awc-animation>\` and set an animation \`name\`. The animation will not start until you add the \`play\` attribute. Refer to the [properties table](#properties) for a list of all animation options.

>❗The animation will only be applied to the first child element found in \`<awc-animation>\`.`
      }
    }
  },
  render: context => template(context)
} satisfies Meta<AWCAnimation>;

export default meta;

type Story = StoryObj<AWCAnimation & typeof args>;

export const Primary: Story = {
  name: 'Example',
  render: () =>
    html`<div class="animation-overview">
        <awc-animation name="bounce" duration="2000" play><div class="box"></div></awc-animation>
        <awc-animation name="jello" duration="2000" play><div class="box"></div></awc-animation>
        <awc-animation name="heartBeat" duration="2000" play><div class="box"></div></awc-animation>
        <awc-animation name="flip" duration="2000" play><div class="box"></div></awc-animation>
      </div>

      <style>
        .animation-overview .box {
          display: inline-block;
          width: 100px;
          height: 100px;
          background-color: var(--awc-color-primary-600);
          margin: 1.5rem;
        }
      </style>`
};

export const AnimationsEasings: Story = {
  name: 'Animations & Easings',
  render: () =>
    html`<div class="animation-sandbox">
        <awc-animation name="bounce" easing="ease-in-out" duration="2000" play>
          <div class="box"></div>
        </awc-animation>

        <div class="controls">
          <awc-select label="Animation" value="bounce"></awc-select>
          <awc-select label="Easing" value="linear"></awc-select>
          <awc-input label="Playback Rate" type="number" min="0" max="2" step=".25" value="1"></awc-input>
        </div>
      </div>

      <script type="module">
        import {
          getAnimationNames,
          getEasingNames
        } from 'https://cdn.jsdelivr.net/npm/@agence-adeliom/awc@latest/dist/utilities/animation.js';

        const containerEasing = document.querySelector('.animation-sandbox');
        const animationEasing = containerEasing.querySelector('awc-animation');
        const animationName = containerEasing.querySelector('.controls awc-select:nth-child(1)');
        const easingName = containerEasing.querySelector('.controls awc-select:nth-child(2)');
        const playbackRate = containerEasing.querySelector('awc-input[type="number"]');
        const animations = getAnimationNames();
        const easings = getEasingNames();

        animations.map(name => {
          const option = Object.assign(document.createElement('awc-option'), {
            textContent: name,
            value: name
          });
          animationName.appendChild(option);
        });

        easings.map(name => {
          const option = Object.assign(document.createElement('awc-option'), {
            textContent: name,
            value: name
          });
          easingName.appendChild(option);
        });

        animationName.addEventListener('awc-change', () => (animationEasing.name = animationName.value));
        easingName.addEventListener('awc-change', () => (animationEasing.easing = easingName.value));
        playbackRate.addEventListener('awc-input', () => (animationEasing.playbackRate = playbackRate.value));
      </script>

      <style>
        .animation-sandbox .box {
          width: 100px;
          height: 100px;
          background-color: var(--awc-color-primary-600);
        }

        .animation-sandbox .controls {
          max-width: 300px;
          margin-top: 2rem;
        }

        .animation-sandbox .controls awc-select {
          margin-bottom: 1rem;
        }
      </style>`,
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates all of the baked-in animations and easings. Animations are based on those found in the popular [Animate.css](https://animate.style/) library.'
      }
    }
  }
};

export const IntersectionObserver: Story = {
  name: 'Using Intersection Observer',
  render: () =>
    html`<div class="animation-scroll">
        <awc-animation name="jackInTheBox" duration="2000" iterations="1"><div class="box"></div></awc-animation>
      </div>

      <script>
        const containerIntersectionObserver = document.querySelector('.animation-scroll');
        const animationIntersectionObserver = containerIntersectionObserver.querySelector('awc-animation');
        const box = animationIntersectionObserver.querySelector('.box');

        // Watch for the box to enter and exit the viewport. Note that we're observing the box, not the animation element!
        const observer = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting) {
            // Start the animation when the box enters the viewport
            animationIntersectionObserver.play = true;
          } else {
            animationIntersectionObserver.play = false;
            animationIntersectionObserver.currentTime = 0;
          }
        });
        observer.observe(box);
      </script>

      <style>
        .animation-scroll .box {
          display: inline-block;
          width: 100px;
          height: 100px;
          background-color: var(--awc-color-primary-600);
        }
      </style>`,
  parameters: {
    docs: {
      description: {
        story:
          'Use an [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to control the animation when an element enters or exits the viewport. For example, scroll the box below in and out of your screen. The animation stops when the box exits the viewport and restarts each time it enters the viewport.'
      }
    }
  }
};

export const CustomKeyframe: Story = {
  name: 'Custom Keyframe Formats',
  render: () =>
    html`<div class="animation-keyframes">
        <awc-animation easing="ease-in-out" duration="2000" play>
          <div class="box"></div>
        </awc-animation>
      </div>

      <script>
        const animationKeyframes = document.querySelector('.animation-keyframes awc-animation');
        animationKeyframes.keyframes = [
          {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(0)'
          },
          {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(90deg)'
          }
        ];
      </script>

      <style>
        .animation-keyframes .box {
          width: 100px;
          height: 100px;
          background-color: var(--awc-color-primary-600);
        }
      </style>`,
  parameters: {
    docs: {
      description: {
        story:
          'Supply your own [keyframe formats](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) to build custom animations.'
      }
    }
  }
};

export const PlayingAnimationsDemand: Story = {
  name: 'Playing Animations on Demand',
  render: () =>
    html`<div class="animation-form">
        <awc-animation name="rubberBand" duration="1000" iterations="1">
          <awc-button variant="primary">Click me</awc-button>
        </awc-animation>
      </div>

      <script>
        const containerOnDemand = document.querySelector('.animation-form');
        const animationOnDemand = containerOnDemand.querySelector('awc-animation');
        const buttonOnDemand = containerOnDemand.querySelector('awc-button');

        buttonOnDemand.addEventListener('click', () => {
          animationOnDemand.play = true;
        });
      </script>`,
  parameters: {
    docs: {
      description: {
        story:
          "Animations won't play until you apply the `play` attribute. You can omit it initially, then apply it on demand such as after a user interaction. In this example, the button will animate once every time the button is clicked."
      }
    }
  }
};
