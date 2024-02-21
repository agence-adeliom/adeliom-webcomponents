import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMutationObserver from './mutation-observer.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCMutationObserver>('awc-mutation-observer');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Mutation Observer',
  component: 'awc-mutation-observer',
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
        component: `The mutation observer will report changes to the content it wraps through the \`awc-mutation\` event. When emitted, a collection of [MutationRecord](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord) objects will be attached to \`event.detail\` that contains information about how it changed.

> When you create a mutation observer, you must indicate what changes it should respond to by including at least one of \`attr\`, \`child-list\`, or \`char-data\`. If you don't specify at least one of these attributes, no mutation events will be emitted.`
      }
    }
  },

  render: context => template(context)
} satisfies Meta<AWCMutationObserver>;

export default meta;

type Story = StoryObj<AWCMutationObserver & typeof args>;

export const Primary: Story = {
  name: 'Example',
  render: () =>
    html`<div class="mutation-overview">
      <awc-mutation-observer attr="variant">
        <awc-button variant="primary">Click to mutate</awc-button>
      </awc-mutation-observer>

      <br />
      👆 Click the button and watch the console

      <script>
        const containerOverview = document.querySelector('.mutation-overview');
        const mutationObserverOverview = containerOverview.querySelector('awc-mutation-observer');
        const buttonOverview = containerOverview.querySelector('awc-button');
        const variants = ['primary', 'success', 'neutral', 'warning', 'danger'];
        let clicks = 0;

        // Change the button's variant attribute
        buttonOverview.addEventListener('click', () => {
          clicks++;
          buttonOverview.setAttribute('variant', variants[clicks % variants.length]);
        });

        // Log mutations
        mutationObserverOverview.addEventListener('awc-mutation', event => {
          console.log(event.detail);
        });
      </script>

      <style>
        .mutation-overview awc-button {
          margin-bottom: 1rem;
        }
      </style>
    </div>`
};

export const ChildList: Story = {
  name: 'Child List',
  parameters: {
    docs: {
      description: {
        story: `Use the \`child-list\` attribute to watch for new child elements that are added or removed.`
      }
    }
  },
  render: () =>
    html`<div class="mutation-child-list">
      <awc-mutation-observer child-list>
        <div class="buttons">
          <awc-button variant="primary">Add button</awc-button>
        </div>
      </awc-mutation-observer>

      👆 Add and remove buttons and watch the console

      <script>
        const containerChildList = document.querySelector('.mutation-child-list');
        const mutationObserverChildList = containerChildList.querySelector('awc-mutation-observer');
        const buttonsChildList = containerChildList.querySelector('.buttons');
        const buttonChildList = containerChildList.querySelector('awc-button[variant="primary"]');
        let i = 0;

        // Add a button
        buttonChildList.addEventListener('click', () => {
          const button = document.createElement('awc-button');
          button.textContent = ++i;
          buttonsChildList.append(button);
        });

        // Remove a button
        buttonsChildList.addEventListener('click', event => {
          const target = event.target.closest('awc-button:not([variant="primary"])');
          event.stopPropagation();

          if (target) {
            target.remove();
          }
        });

        // Log mutations
        mutationObserverChildList.addEventListener('awc-mutation', event => {
          console.log(event.detail);
        });
      </script>

      <style>
        .mutation-child-list .buttons {
          display: flex;
          gap: 0.25rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }
      </style>
    </div>`
};
