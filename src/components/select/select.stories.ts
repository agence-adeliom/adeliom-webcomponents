/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCSelect from './select.js';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-select');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Select',
  component: 'awc-select',
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
} satisfies Meta<AWCSelect & typeof args>;

export default meta;

type Story = StoryObj<AWCSelect & typeof args>;

export const Primary: Story = {
  name: 'Default',
  parameters: {
    docs: {
      story: {
        height: '200px'
      }
    }
  },
  render: () =>
    html`<awc-select>
      <awc-option value="option-1">Option 1</awc-option>
      <awc-option value="option-2">Option 2</awc-option>
      <awc-option value="option-3">Option 3</awc-option>
      <awc-option value="option-4">Option 4</awc-option>
      <awc-option value="option-5">Option 5</awc-option>
      <awc-option value="option-6">Option 6</awc-option>
    </awc-select>`
};

export const Labels: Story = {
  name: 'Labels',
  render: () =>
    html`<awc-select label="Select one">
      <awc-option value="option-1">Option 1</awc-option>
      <awc-option value="option-2">Option 2</awc-option>
      <awc-option value="option-3">Option 3</awc-option>
    </awc-select>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`label\` attribute to give the select an accessible label. For labels that contain HTML, use the \`label\` slot instead.`
      },
      story: {
        height: '200px'
      }
    }
  }
};

export const HelpText: Story = {
  name: 'Help Text',
  render: () =>
    html`<awc-select label="Experience" help-text="Please tell us your skill level.">
      <awc-option value="1">Novice</awc-option>
      <awc-option value="2">Intermediate</awc-option>
      <awc-option value="3">Advanced</awc-option>
    </awc-select>`,
  parameters: {
    docs: {
      description: {
        story: `Add descriptive help text to a select with the \`help-text\` attribute. For help texts that contain HTML, use the \`help-text\` slot instead.`
      },
      story: {
        height: '200px'
      }
    }
  }
};

export const Placeholders: Story = {
  name: 'Placeholders',
  render: () =>
    html`<awc-select placeholder="Select one">
      <awc-option value="option-1">Option 1</awc-option>
      <awc-option value="option-2">Option 2</awc-option>
      <awc-option value="option-3">Option 3</awc-option>
    </awc-select>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`placeholder\` attribute to add a placeholder.`
      },
      story: {
        height: '200px'
      }
    }
  }
};

export const Clearable: Story = {
  name: 'Clearable',
  render: () =>
    html`<awc-select clearable value="option-1">
      <awc-option value="option-1">Option 1</awc-option>
      <awc-option value="option-2">Option 2</awc-option>
      <awc-option value="option-3">Option 3</awc-option>
    </awc-select>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`clearable\` attribute to make the control clearable. The clear button only appears when an option is selected.`
      },
      story: {
        height: '200px'
      }
    }
  }
};

export const FilledSelects: Story = {
  name: 'Filled Selects',
  render: () =>
    html`<awc-select filled>
      <awc-option value="option-1">Option 1</awc-option>
      <awc-option value="option-2">Option 2</awc-option>
      <awc-option value="option-3">Option 3</awc-option>
    </awc-select>`,
  parameters: {
    docs: {
      description: {
        story: `Add the \`filled\` attribute to draw a filled select.`
      },
      story: {
        height: '200px'
      }
    }
  }
};

export const Pill: Story = {
  name: 'Pill',
  render: () =>
    html`<awc-select pill>
      <awc-option value="option-1">Option 1</awc-option>
      <awc-option value="option-2">Option 2</awc-option>
      <awc-option value="option-3">Option 3</awc-option>
    </awc-select>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`pill\` attribute to give selects rounded edges.`
      },
      story: {
        height: '200px'
      }
    }
  }
};

export const Disabled: Story = {
  name: 'Disabled',
  render: () =>
    html`<awc-select placeholder="Disabled" disabled>
      <awc-option value="option-1">Option 1</awc-option>
      <awc-option value="option-2">Option 2</awc-option>
      <awc-option value="option-3">Option 3</awc-option>
    </awc-select>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`disabled\` attribute to disable a select.`
      }
    }
  }
};

export const Multiple: Story = {
  name: 'Multiple',
  render: () =>
    html`<awc-select label="Select a Few" value="option-1,option-2,option-3" multiple clearable>
      <awc-option value="option-1">Option 1</awc-option>
      <awc-option value="option-2">Option 2</awc-option>
      <awc-option value="option-3">Option 3</awc-option>
      <awc-option value="option-4">Option 4</awc-option>
      <awc-option value="option-5">Option 5</awc-option>
      <awc-option value="option-6">Option 6</awc-option>
    </awc-select>`,
  parameters: {
    docs: {
      description: {
        story: `To allow multiple options to be selected, use the \`multiple\` attribute. It's a good practice to use \`clearable\` when this option is enabled. To set multiple values at once, set \`value\` to a comma-delimited list of values.

> Note that multi-select options may wrap, causing the control to expand vertically. You can use the \`max-options-visible\` attribute to control the maximum number of selected options to show at once.`
      },
      story: {
        height: '200px'
      }
    }
  }
};

export const InitialValues: Story = {
  name: 'Setting Initial Values',
  render: () =>
    html`<awc-select value="option-1,option-2" multiple clearable>
      <awc-option value="option-1">Option 1</awc-option>
      <awc-option value="option-2">Option 2</awc-option>
      <awc-option value="option-3">Option 3</awc-option>
      <awc-option value="option-4">Option 4</awc-option>
    </awc-select>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`value\` attribute to set the initial selection.

When using \`multiple\`, the \`value\` _attribute_ uses comma-delimited values to select more than one option. Because of this, \`<awc-option>\` values cannot contain commas. If you're accessing the \`value\` _property_ through Javascript, it will be an array.`
      },
      story: {
        height: '200px'
      }
    }
  }
};

export const Grouping: Story = {
  name: 'Grouping Options',
  render: () =>
    html`<awc-select>
      <small>Section 1</small>
      <awc-option value="option-1">Option 1</awc-option>
      <awc-option value="option-2">Option 2</awc-option>
      <awc-option value="option-3">Option 3</awc-option>
      <awc-divider></awc-divider>
      <small>Section 2</small>
      <awc-option value="option-4">Option 4</awc-option>
      <awc-option value="option-5">Option 5</awc-option>
      <awc-option value="option-6">Option 6</awc-option>
    </awc-select>`,
  parameters: {
    docs: {
      description: {
        story: `Use \`<awc-divider>\` to group listbox items visually. You can also use \`<small>\` to provide labels, but they won't be announced by most assistive devices.`
      },
      story: {
        height: '200px'
      }
    }
  }
};

export const Sizes: Story = {
  name: 'Sizes',
  render: () =>
    html`<awc-select placeholder="Small" size="small">
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>

      <br />

      <awc-select placeholder="Medium" size="medium">
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>

      <br />

      <awc-select placeholder="Large" size="large">
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`size\` attribute to change a select's size. Note that size does not apply to listbox options.`
      }
    }
  }
};

export const Placement: Story = {
  name: 'Placement',
  render: () =>
    html`<awc-select placement="top">
      <awc-option value="option-1">Option 1</awc-option>
      <awc-option value="option-2">Option 2</awc-option>
      <awc-option value="option-3">Option 3</awc-option>
    </awc-select>`,
  parameters: {
    docs: {
      description: {
        story: `The preferred placement of the select's listbox can be set with the \`placement\` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are \`top\` and \`bottom\`.`
      },
      story: {
        height: '200px'
      }
    }
  }
};

export const PrefixIcons: Story = {
  name: 'Prefix Icons',
  render: () =>
    html`<awc-select placeholder="Small" size="small" clearable>
        <awc-icon name="house" slot="prefix"></awc-icon>
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>
      <br />
      <awc-select placeholder="Medium" size="medium" clearable>
        <awc-icon name="house" slot="prefix"></awc-icon>
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>
      <br />
      <awc-select placeholder="Large" size="large" clearable>
        <awc-icon name="house" slot="prefix"></awc-icon>
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`prefix\` slot to prepend an icon to the control.`
      }
    }
  }
};

export const CustomTags: Story = {
  name: 'Custom Tags',
  render: () =>
    html`<awc-select placeholder="Small" size="small" clearable>
        <awc-icon name="house" slot="prefix"></awc-icon>
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>
      <br />
      <awc-select placeholder="Medium" size="medium" clearable>
        <awc-icon name="house" slot="prefix"></awc-icon>
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>
      <br />
      <awc-select placeholder="Large" size="large" clearable>
        <awc-icon name="house" slot="prefix"></awc-icon>
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>`,
  parameters: {
    docs: {
      description: {
        story: `
When multiple options can be selected, you can provide custom tags by passing a function to the \`getTag\` property. Your function can return a string of HTML, a <a href="https://lit.dev/docs/templates/overview/">Lit Template</a>, or an [\`HTMLElement\`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement). The \`getTag()\` function will be called for each option. The first argument is an \`<awc-option>\` element and the second argument is the tag's index (its position in the tag list).

Remember that custom tags are rendered in a shadow root. To style them, you can use the \`style\` attribute in your template or you can add your own [parts](/?path=/docs/getting-started-customizing--docs#css-parts) and target them with the [\`::part()\`](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) selector.

> 🚧 **Warning**
>
> Be sure you trust the content you are outputting! Passing unsanitized user input to \`getTag()\` can result in XSS vulnerabilities.`
      }
    }
  }
};
