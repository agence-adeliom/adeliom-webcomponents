/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCInclude from './include.js';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-include');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Include',
  component: 'awc-include',
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
        component: `Included files are asynchronously requested using \`window.fetch()\`. Requests are cached, so the same file can be included multiple times, but only one request will be made.

The included content will be inserted into the \`<awc-include>\` element's default slot so it can be easily accessed and styled through the light DOM.`
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCInclude & typeof args>;

export default meta;

type Story = StoryObj<AWCInclude & typeof args>;

export const Primary: Story = {
  name: 'Example',
  args: {
    src: '/examples/include.html'
  }
};

export const Listening: Story = {
  name: 'Listening for Events',
  parameters: {
    docs: {
      description: {
        story: `When an include file loads successfully, the \`awc-load\` event will be emitted. You can listen for this event to add custom loading logic to your includes.

If the request fails, the \`awc-error\` event will be emitted. In this case, \`event.detail.status\` will contain the resulting HTTP status code of the request, e.g. 404 (not found).`
      }
    }
  },
  render: () =>
    html`<awc-include src="/examples/include.html"></awc-include>

      <script>
        const include = document.querySelector('awc-include');

        include.addEventListener('awc-load', event => {
          if (event.eventPhase === Event.AT_TARGET) {
            console.log('Success');
          }
        });

        include.addEventListener('awc-error', event => {
          if (event.eventPhase === Event.AT_TARGET) {
            console.log('Error', event.detail.status);
          }
        });
      </script>`
};
