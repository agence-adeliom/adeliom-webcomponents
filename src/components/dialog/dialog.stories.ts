/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCDialog from './dialog.js';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-dialog');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Dialog',
  component: 'awc-dialog',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    },
    docs: {
      story: {
        height: '400px'
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCDialog & typeof args>;

export default meta;

type Story = StoryObj<AWCDialog & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () =>
    html`<awc-dialog label="Dialog" class="dialog-overview">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <awc-button slot="footer" variant="primary">Close</awc-button>
      </awc-dialog>

      <awc-button>Open Dialog</awc-button>

      <script>
        const dialog = document.querySelector('.dialog-overview');
        const openButton = dialog.nextElementSibling;
        const closeButton = dialog.querySelector('awc-button[slot="footer"]');

        openButton.addEventListener('click', () => dialog.show());
        closeButton.addEventListener('click', () => dialog.hide());
      </script>`
};

export const CustomWidth: Story = {
  name: 'Custom Width',
  render: () =>
    html`<awc-dialog label="Dialog" class="dialog-width" style="--width: 50vw;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <awc-button slot="footer" variant="primary">Close</awc-button>
      </awc-dialog>

      <awc-button>Open Dialog</awc-button>

      <script>
        const dialogWidth = document.querySelector('.dialog-width');
        const openButtonWidth = dialogWidth.nextElementSibling;
        const closeButtonWidth = dialogWidth.querySelector('awc-button[slot="footer"]');

        openButtonWidth.addEventListener('click', () => dialogWidth.show());
        closeButtonWidth.addEventListener('click', () => dialogWidth.hide());
      </script>`,
  parameters: {
    docs: {
      description: {
        story: "Use the `--width` custom property to set the dialog's width."
      }
    }
  }
};

export const Scrolling: Story = {
  name: 'Scrolling',
  render: () =>
    html`<awc-dialog label="Dialog" class="dialog-scrolling">
        <div style="height: 150vh; border: dashed 2px var(--awc-color-neutral-200); padding: 0 1rem;">
          <p>Scroll down and give it a try! 👇</p>
        </div>
        <awc-button slot="footer" variant="primary">Close</awc-button>
      </awc-dialog>

      <awc-button>Open Dialog</awc-button>

      <script>
        const dialogScrolling = document.querySelector('.dialog-scrolling');
        const openButtonScrolling = dialogScrolling.nextElementSibling;
        const closeButtonScrolling = dialogScrolling.querySelector('awc-button[slot="footer"]');

        openButtonScrolling.addEventListener('click', () => dialogScrolling.show());
        closeButtonScrolling.addEventListener('click', () => dialogScrolling.hide());
      </script>`,
  parameters: {
    docs: {
      description: {
        story:
          "By design, a dialog's height will never exceed that of the viewport. As such, dialogs will not scroll with the page ensuring the header and footer are always accessible to the user."
      },
      story: {
        height: '400px'
      }
    }
  }
};

export const HeaderActions: Story = {
  name: 'Header Actions',
  render: () =>
    html`<awc-dialog label="Dialog" class="dialog-header-actions">
        <awc-icon-button class="new-window" slot="header-actions" name="box-arrow-up-right"></awc-icon-button>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <awc-button slot="footer" variant="primary">Close</awc-button>
      </awc-dialog>

      <awc-button>Open Dialog</awc-button>

      <script>
        const dialogHeaderActions = document.querySelector('.dialog-header-actions');
        const openButtonHeaderActions = dialogHeaderActions.nextElementSibling;
        const closeButtonHeaderActions = dialogHeaderActions.querySelector('awc-button[slot="footer"]');
        const newWindowButton = dialogHeaderActions.querySelector('.new-window');

        openButtonHeaderActions.addEventListener('click', () => dialogHeaderActions.show());
        closeButtonHeaderActions.addEventListener('click', () => dialogHeaderActions.hide());
        newWindowButton.addEventListener('click', () => window.open(location.href));
      </script>`,
  parameters: {
    docs: {
      description: {
        story:
          'The header shows a functional close button by default. You can use the `header-actions` slot to add additional [icon buttons](?path=/docs/components-button-icon--documentation) if needed.'
      }
    }
  }
};
