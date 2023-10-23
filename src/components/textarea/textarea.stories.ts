import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCTextarea from './textarea';
import {html} from "lit";
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-textarea');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Textarea',
  component: 'awc-textarea',
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
        component: `> This component works with standard \`<form>\` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.`
      }
    },
  },
  render: context => template(context)
} satisfies Meta<AWCTextarea & typeof args>;

export default meta;

type Story = StoryObj<AWCTextarea & typeof args>;

export const Primary: Story = {
  name: 'Default',
};

export const Labels: Story = {
  name: 'Labels',
  args: {
    label: 'Comments'
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`label\` attribute to give the textarea an accessible label. For labels that contain HTML, use the \`label\` slot instead.`
      }
    }
  }
};

export const HelpText: Story = {
  name: 'Help Text',
  args: {
    label: 'Feedback',
    'help-text': 'Please tell us what you think.'
  },
  parameters: {
    docs: {
      description: {
        story: `Add descriptive help text to a textarea with the \`help-text\` attribute. For help texts that contain HTML, use the \`help-text\` slot instead.`
      }
    }
  }
};

export const Rows: Story = {
  name: 'Rows',
  args: {
    rows: '2'
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`rows\` attribute to change the number of text rows that get shown.`
      }
    }
  }
};

export const Placeholders: Story = {
  name: 'Placeholders',
  args: {
    placeholder: "Type something"
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`placeholder\` attribute to add a placeholder.`
      }
    }
  }
};

export const Filled: Story = {
  name: 'Filled Textareas',
  args: {
    placeholder: "Type something",
    filled: true
  },
  parameters: {
    docs: {
      description: {
        story: `Add the \`filled\` attribute to draw a filled textarea.`
      }
    }
  }
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    placeholder: "Type something",
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`disabled\` attribute to disable a textarea.`
      }
    }
  }
};


export const Sizes: Story = {
  name: 'Sizes',
  render: () => html`<awc-textarea placeholder="Small" size="small"></awc-textarea>
<br />
<awc-textarea placeholder="Medium" size="medium"></awc-textarea>
<br />
<awc-textarea placeholder="Large" size="large"></awc-textarea>`,
  parameters: {
    docs: {
      description: {
        story: "Use the `size` attribute to change a textarea's size."
      }
    }
  }
};


export const PreventResizing: Story = {
  name: 'Prevent Resizing',
  args: {
    placeholder: "Type something",
    resize: 'none'
  },
  parameters: {
    docs: {
      description: {
        story: `By default, textareas can be resized vertically by the user. To prevent resizing, set the \`resize\` attribute to \`none\`.`
      }
    }
  }
};

export const ExpandContent: Story = {
  name: 'Expand with Content',
  args: {
    placeholder: "Type something",
    resize: 'auto'
  },
  parameters: {
    docs: {
      description: {
        story: `Textareas will automatically resize to expand to fit their content when \`resize\` is set to \`auto\`.`
      }
    }
  }
};
