import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCInput from './input';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-input');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Input',
  component: 'awc-input',
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
        component: `> This component works with standard \`<form>\` elements. Please refer to the section on [form controls](?path=/docs/getting-started-form-controls--docs) to learn more about form submission and client-side validation.`
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCInput & typeof args>;

export default meta;

type Story = StoryObj<AWCInput & typeof args>;

export const Primary: Story = {
  name: 'Default'
};

export const Labels: Story = {
  name: 'Labels',
  parameters: {
    docs: {
      description: {
        story: `Use the \`label\` attribute to give the input an accessible label. For labels that contain HTML, use the \`label\` slot instead.`
      }
    }
  },
  args: {
    label: 'What is your name?'
  }
};

export const HelpText: Story = {
  name: 'Help Text',
  parameters: {
    docs: {
      description: {
        story: `Add descriptive help text to an input with the \`help-text\` attribute. For help texts that contain HTML, use the \`help-text\` slot instead.`
      }
    }
  },
  args: {
    label: 'Nickname',
    'help-text': 'What would you like people to call you?'
  }
};

export const Placeholders: Story = {
  name: 'Placeholders',
  parameters: {
    docs: {
      description: {
        story: `Use the \`placeholder\` attribute to add a placeholder.`
      }
    }
  },
  args: {
    placeholder: 'Type something'
  }
};

export const Clearable: Story = {
  name: 'Clearable',
  parameters: {
    docs: {
      description: {
        story: `Add the \`clearable\` attribute to add a clear button when the input has content.`
      }
    }
  },
  args: {
    placeholder: 'Type something',
    clearable: true
  }
};

export const TogglePassword: Story = {
  name: 'Toggle Password',
  parameters: {
    docs: {
      description: {
        story: `Add the \`password-toggle\` attribute to add a toggle button that will show the password when activated.`
      }
    }
  },
  args: {
    type: 'password',
    placeholder: 'Password Toggle',
    'password-toggle': true
  }
};

export const FilledInputs: Story = {
  name: 'Filled Inputs',
  parameters: {
    docs: {
      description: {
        story: `Add the \`filled\` attribute to draw a filled input.`
      }
    }
  },
  args: {
    placeholder: 'Type something',
    filled: true
  }
};

export const Disabled: Story = {
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: `Use the \`disabled\` attribute to disable an input.`
      }
    }
  },
  args: {
    placeholder: 'Type something',
    disabled: true
  }
};

export const Sizes: Story = {
  name: 'Sizes',
  parameters: {
    docs: {
      description: {
        story: `Use the \`size\` attribute to change an input's size.`
      }
    }
  },
  render: () =>
    html`<awc-input placeholder="Small" size="small"></awc-input>
      <br />
      <awc-input placeholder="Medium" size="medium"></awc-input>
      <br />
      <awc-input placeholder="Large" size="large"></awc-input>`
};

export const Pill: Story = {
  name: 'Pill',
  parameters: {
    docs: {
      description: {
        story: `Use the \`pill\` attribute to give inputs rounded edges.`
      }
    }
  },
  render: () =>
    html`<awc-input placeholder="Small" size="small" pill></awc-input>
      <br />
      <awc-input placeholder="Medium" size="medium" pill></awc-input>
      <br />
      <awc-input placeholder="Large" size="large" pill></awc-input>`
};

export const InputTypes: Story = {
  name: 'Input Types',
  parameters: {
    docs: {
      description: {
        story: `The \`type\` attribute controls the type of input the browser renders.`
      }
    }
  },
  render: () =>
    html`<awc-input type="email" placeholder="Email"></awc-input>
      <br />
      <awc-input type="number" placeholder="Number"></awc-input>
      <br />
      <awc-input type="date" placeholder="Date"></awc-input>`
};

export const PrefixSuffixIcons: Story = {
  name: 'Prefix & Suffix Icons',
  parameters: {
    docs: {
      description: {
        story: `Use the \`prefix\` and \`suffix\` slots to add icons.`
      }
    }
  },
  render: () =>
    html`<awc-input placeholder="Small" size="small">
        <awc-icon name="house" slot="prefix"></awc-icon>
        <awc-icon name="chat" slot="suffix"></awc-icon>
      </awc-input>
      <br />
      <awc-input placeholder="Medium" size="medium">
        <awc-icon name="house" slot="prefix"></awc-icon>
        <awc-icon name="chat" slot="suffix"></awc-icon>
      </awc-input>
      <br />
      <awc-input placeholder="Large" size="large">
        <awc-icon name="house" slot="prefix"></awc-icon>
        <awc-icon name="chat" slot="suffix"></awc-icon>
      </awc-input>`
};

export const CustomizingLabelPosition: Story = {
  name: 'Customizing Label Position',
  parameters: {
    docs: {
      description: {
        story: `Use [CSS parts](#css-parts) to customize the way form controls are drawn. This example uses CSS grid to position the label to the left of the control, but the possible orientations are nearly endless. The same technique works for inputs, textareas, radio groups, and similar form controls.`
      }
    }
  },
  render: () =>
    html`<awc-input class="label-on-left" label="Name" help-text="Enter your name"></awc-input>
      <awc-input class="label-on-left" label="Email" type="email" help-text="Enter your email"></awc-input>
      <awc-textarea class="label-on-left" label="Bio" help-text="Tell us something about yourself"></awc-textarea>

      <style>
        .label-on-left {
          --label-width: 3.75rem;
          --gap-width: 1rem;
        }

        .label-on-left + .label-on-left {
          margin-top: var(--awc-spacing-medium);
        }

        .label-on-left::part(form-control) {
          display: grid;
          grid: auto / var(--label-width) 1fr;
          gap: var(--awc-spacing-3x-small) var(--gap-width);
          align-items: center;
        }

        .label-on-left::part(form-control-label) {
          text-align: right;
        }

        .label-on-left::part(form-control-help-text) {
          grid-column-start: 2;
        }
      </style>`
};
