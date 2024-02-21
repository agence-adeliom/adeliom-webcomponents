import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCDetails from './details.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCDetails>('awc-details');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Details',
  component: 'awc-details',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    }
  },

  render: context => template(context)
} satisfies Meta<AWCDetails>;

export default meta;

type Story = StoryObj<AWCDetails & typeof args>;

export const Primary: Story = {
  name: 'Default',
  args: {
    summary: 'Toggle Me',
    'default-slot':
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna<br>aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  render: context => html`<awc-details summary="${context.summary}"> ${context['default-slot']} </awc-details>`
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    ...Primary.args,
    summary: 'Disabled'
  },
  render: context =>
    html`<awc-details summary="${context.summary}" disabled> ${context['default-slot']} </awc-details>`,
  parameters: {
    docs: {
      description: {
        story: 'Use the `disable` attribute to prevent the details from expanding.'
      }
    }
  }
};

export const CustomizingSummaryIcon: Story = {
  name: 'Customizing the Summary Icon',
  render: () =>
    html`<awc-details summary="Toggle Me" class="custom-icons">
        <awc-icon name="plus-square" slot="expand-icon"></awc-icon>
        <awc-icon name="dash-square" slot="collapse-icon"></awc-icon>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </awc-details>

      <style>
        awc-details.custom-icons::part(summary-icon) {
          /* Disable the expand/collapse animation */
          rotate: none;
        }
      </style>`,
  parameters: {
    docs: {
      description: {
        story:
          'Use the `expand-icon` and `collapse-icon` slots to change the expand and collapse icons, respectively. To disable the animation, override the `rotate` property on the `summary-icon` part as shown below.'
      }
    }
  }
};

export const GroupingDetails: Story = {
  name: 'Grouping Details',
  render: () =>
    html`<div class="details-group-example">
        <awc-details summary="First" open>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </awc-details>

        <awc-details summary="Second">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </awc-details>

        <awc-details summary="Third">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </awc-details>
      </div>

      <script>
        // Close all other details when one is shown
        document.querySelector('.details-group-example').addEventListener('awc-show', event => {
          if (event.target.localName !== 'awc-details') return;
          [...event.currentTarget.querySelectorAll('awc-details')].map(
            details => (details.open = event.target === details)
          );
        });
      </script>

      <style>
        .details-group-example awc-details:not(:last-of-type) {
          margin-bottom: var(--awc-spacing-2x-small);
        }
      </style>`,
  parameters: {
    docs: {
      description: {
        story:
          'Details are designed to function independently, but you can simulate a group or "accordion" where only one is shown at a time by listening for the `awc-show` event.'
      }
    }
  }
};
