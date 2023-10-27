import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCAlert from './alert.component.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-alert');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Alert',
  component: 'awc-alert',
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
        component: `>❗Alerts will not be visible if the \`open\` attribute is not present.`
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-shadow
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCAlert & typeof args>;
export default meta;

type Story = StoryObj<AWCAlert & typeof args>;

export const Primary: Story = {
  name: 'Default',
  args: {
    open: true,
    variant: 'primary',
    'icon-slot': `<awc-icon slot="icon" name="info-circle"></awc-icon>`,
    'default-slot': `<strong>This is super informative</strong><br /> You can tell by how pretty the alert is.`
  }
};

export const Variants: Story = {
  name: 'Variants',
  args: {
    open: true
  },
  render: context => html`
    ${template({
      ...context,
      variant: 'primary',
      'icon-slot': `<awc-icon slot="icon" name="info-circle"></awc-icon>`,
      'default-slot': `<strong>This is super informative</strong><br /> You can tell by how pretty the alert is.`
    })}
    <br />
    ${template({
      ...context,
      variant: 'secondary',
      'icon-slot': `<awc-icon slot="icon" name="info-circle"></awc-icon>`,
      'default-slot': `<strong>This is super informative</strong><br /> You can tell by how pretty the alert is.`
    })}
    <br />
    ${template({
      ...context,
      variant: 'tertiary',
      'icon-slot': `<awc-icon slot="icon" name="info-circle"></awc-icon>`,
      'default-slot': `<strong>This is super informative</strong><br /> You can tell by how pretty the alert is.`
    })}
    <br />
    ${template({
      ...context,
      variant: 'success',
      'icon-slot': `<awc-icon slot="icon" name="info-circle"></awc-icon>`,
      'default-slot': `<strong>This is super informative</strong><br /> You can tell by how pretty the alert is.`
    })}
    <br />
    ${template({
      ...context,
      variant: 'neutral',
      'icon-slot': `<awc-icon slot="icon" name="info-circle"></awc-icon>`,
      'default-slot': `<strong>This is super informative</strong><br /> You can tell by how pretty the alert is.`
    })}
    <br />
    ${template({
      ...context,
      variant: 'warning',
      'icon-slot': `<awc-icon slot="icon" name="info-circle"></awc-icon>`,
      'default-slot': `<strong>This is super informative</strong><br /> You can tell by how pretty the alert is.`
    })}
    <br />
    ${template({
      ...context,
      variant: 'danger',
      'icon-slot': `<awc-icon slot="icon" name="info-circle"></awc-icon>`,
      'default-slot': `<strong>This is super informative</strong><br /> You can tell by how pretty the alert is.`
    })}
  `,
  parameters: {
    docs: {
      description: {
        story: "Set the `variant` attribute to change the alert's variant."
      }
    }
  }
};

export const Closable: Story = {
  name: 'Closable',
  args: {
    ...Primary.args,
    closable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Add the `closable` attribute to show a close button that will hide the alert.'
      }
    }
  }
};

export const WithoutIcons: Story = {
  name: 'Without Icons',
  args: {
    ...Primary.args,
    'icon-slot': null
  },
  parameters: {
    docs: {
      description: {
        story: "Icons are optional. Simply omit the `icon` slot if you don't want them."
      }
    }
  }
};

export const Duration: Story = {
  name: 'Duration',
  args: {
    variant: 'primary',
    duration: 3000,
    closable: true
  },
  // eslint-disable-next-line @typescript-eslint/no-shadow
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: args =>
    html`<div class="alert-duration">
        <awc-button variant="primary">Show Alert</awc-button>

        <awc-alert variant="${args.variant}" duration="${args.duration}" ?closable="${args.closable}">
          <awc-icon slot="icon" name="info-circle"></awc-icon>
          This alert will automatically hide itself after three seconds, unless you interact with it.
        </awc-alert>
      </div>

      <script>
        const containerDuration = document.querySelector('.alert-duration');
        const buttonDuration = containerDuration.querySelector('awc-button');
        const alertDuration = containerDuration.querySelector('awc-alert');

        buttonDuration.addEventListener('click', () => alertDuration.show());
      </script>

      <style>
        .alert-duration awc-alert {
          margin-top: var(--awc-spacing-medium);
        }
      </style>`,
  parameters: {
    docs: {
      description: {
        story:
          "Set the `duration` attribute to automatically hide an alert after a period of time. This is useful for alerts that don't require acknowledgement."
      }
    }
  }
};

export const ToastNotifications: Story = {
  name: 'Toast Notifications',
  parameters: {
    docs: {
      description: {
        story: `To display an alert as a toast notification, or "toast", create the alert and call its \`toast()\` method. This will move the alert out of its position in the DOM and into [the toast stack](#the-toast-stack) where it will be shown. Once dismissed, it will be removed from the DOM completely. To reuse a toast, store a reference to it and call \`toast()\` again later on.

You should always use the \`closable\` attribute so users can dismiss the notification. It's also common to set a reasonable \`duration\` when the notification doesn't require acknowledgement.`
      }
    }
  },
  render: () =>
    html`<div class="alert-toast">
        <awc-button variant="primary">Primary</awc-button>
        <awc-button variant="success">Success</awc-button>
        <awc-button variant="neutral">Neutral</awc-button>
        <awc-button variant="warning">Warning</awc-button>
        <awc-button variant="danger">Danger</awc-button>

        <awc-alert variant="primary" duration="3000" closable>
          <awc-icon slot="icon" name="info-circle"></awc-icon>
          <strong>This is super informative</strong><br />
          You can tell by how pretty the alert is.
        </awc-alert>

        <awc-alert variant="success" duration="3000" closable>
          <awc-icon slot="icon" name="check2-circle"></awc-icon>
          <strong>Your changes have been saved</strong><br />
          You can safely exit the app now.
        </awc-alert>

        <awc-alert variant="neutral" duration="3000" closable>
          <awc-icon slot="icon" name="gear"></awc-icon>
          <strong>Your settings have been updated</strong><br />
          Settings will take effect on next login.
        </awc-alert>

        <awc-alert variant="warning" duration="3000" closable>
          <awc-icon slot="icon" name="exclamation-triangle"></awc-icon>
          <strong>Your session has ended</strong><br />
          Please login again to continue.
        </awc-alert>

        <awc-alert variant="danger" duration="3000" closable>
          <awc-icon slot="icon" name="exclamation-octagon"></awc-icon>
          <strong>Your account has been deleted</strong><br />
          We're very sorry to see you go!
        </awc-alert>
      </div>

      <script>
        ['primary', 'success', 'neutral', 'warning', 'danger'].map(variant => {
          const containerToast = document.querySelector('.alert-toast');
          const button = containerToast.querySelector('awc-button[variant="' + variant + '"]');
          const alert = containerToast.querySelector('awc-alert[variant="' + variant + '"]');

          button.addEventListener('click', () => alert.toast());
        });
      </script>`
};

export const ImperativeToastNotifications: Story = {
  name: 'Imperative Toast Notifications',
  parameters: {
    docs: {
      story: {
        inline: false
      },
      description: {
        story: `For convenience, you can create a utility that emits toast notifications with a function call rather than composing them in your HTML. To do this, generate the alert with JavaScript, append it to the body, and call the \`toast()\` method as shown in the example below.`
      }
    }
  },
  render: () =>
    html`<div class="alert-toast-wrapper">
        <awc-button variant="primary">Create Toast</awc-button>
      </div>

      <script>
        const containerToastWrapper = document.querySelector('.alert-toast-wrapper');
        const buttonToastWrapper = containerToastWrapper.querySelector('awc-button');
        let count = 0;

        // Always escape HTML for text arguments!
        function escapeHtml(html) {
          const div = document.createElement('div');
          div.textContent = html;
          return div.innerHTML;
        }

        // Custom function to emit toast notifications
        function notify(message, variant = 'primary', icon = 'info-circle', duration = 3000) {
          const alert = Object.assign(document.createElement('awc-alert'), {
            variant,
            closable: true,
            duration: duration,
            innerHTML: \`
        <awc-icon name="\${icon}" slot="icon"></awc-icon>
        \${escapeHtml(message)}
      \`
          });

          document.body.append(alert);
          return alert.toast();
        }

        buttonToastWrapper.addEventListener('click', () => {
          notify(\`This is custom toast #\${++count}\`);
        });
      </script>`
};
