import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCIconButton from './icon-button';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-icon-button');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Icon/Button',
  component: 'awc-icon-button',
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
        component: `For a full list of icons that come bundled with Adeliom WebComponents, refer to the [icon component](?path=/docs/components-icon--docs).`
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCIconButton & typeof args>;

export default meta;

type Story = StoryObj<AWCIconButton & typeof args>;

export const Primary: Story = {
  name: 'Example',
  args: {
    name: 'gear',
    label: 'Settings'
  }
};

export const Sizes: Story = {
  name: 'Sizes',
  parameters: {
    docs: {
      description: {
        story: `Icon buttons inherit their parent element's \`font-size\`.`
      }
    }
  },
  render: () =>
    html`<awc-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></awc-icon-button>
      <awc-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></awc-icon-button>
      <awc-icon-button name="pencil" label="Edit" style="font-size: 2.5rem;"></awc-icon-button>`
};

export const Colors: Story = {
  name: 'Colors',
  parameters: {
    docs: {
      description: {
        story: `Icon buttons are designed to have a uniform appearance, so their color is not inherited. However, you can still customize them by styling the \`base\` part.`
      }
    }
  },
  render: () =>
    html`<div class="icon-button-color">
        <awc-icon-button name="type-bold" label="Bold"></awc-icon-button>
        <awc-icon-button name="type-italic" label="Italic"></awc-icon-button>
        <awc-icon-button name="type-underline" label="Underline"></awc-icon-button>
      </div>

      <style>
        .icon-button-color awc-icon-button::part(base) {
          color: #b00091;
        }

        .icon-button-color awc-icon-button::part(base):hover,
        .icon-button-color awc-icon-button::part(base):focus {
          color: #c913aa;
        }

        .icon-button-color awc-icon-button::part(base):active {
          color: #960077;
        }
      </style>`
};

export const LinkButtons: Story = {
  name: 'Link Buttons',
  parameters: {
    docs: {
      description: {
        story: `Use the \`href\` attribute to convert the button to a link.`
      }
    }
  },
  args: {
    name: 'gear',
    label: 'Settings',
    href: 'https://example.com',
    target: '_blank'
  }
};

export const Tooltip: Story = {
  name: 'Icon Button with Tooltip',
  parameters: {
    docs: {
      description: {
        story: `Wrap a tooltip around an icon button to provide contextual information to the user.`
      }
    }
  },
  render: args => html`<awc-tooltip content="${args.label}"> ${template(args)} </awc-tooltip>`,
  args: {
    name: 'gear',
    label: 'Settings',
    href: 'https://example.com',
    target: '_blank'
  }
};

export const Disabled: Story = {
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: `Use the \`disabled\` attribute to disable the icon button.`
      }
    }
  },
  args: {
    name: 'gear',
    label: 'Settings',
    disabled: true
  }
};
