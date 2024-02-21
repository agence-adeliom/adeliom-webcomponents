import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCColorPicker from './color-picker.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCColorPicker>('awc-color-picker');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Color Picker',
  component: 'awc-color-picker',
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
        component: `>❗ This component works with standard \`<form>\` elements. Please refer to the section on [form controls](?path=/docs/getting-started-form-controls--documentation) to learn more about form submission and client-side validation.`
      },
      story: {
        height: '400px'
      }
    }
  },

  render: context => template(context)
} satisfies Meta<AWCColorPicker>;

export default meta;

type Story = StoryObj<AWCColorPicker & typeof args>;

export const Primary: Story = {
  name: 'Default',
  args: {
    label: 'Select a color'
  }
};

export const InitialValue: Story = {
  name: 'Initial Value',
  args: {
    ...Primary.args,
    value: '#4a90e2'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the `value` attribute to set an initial value for the color picker.'
      }
    }
  }
};

export const Opacity: Story = {
  name: 'Opacity',
  args: {
    ...Primary.args,
    value: '#f5a623ff',
    opacity: true
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use the `opacity` attribute to enable the opacity slider. When this is enabled, the value will be displayed as HEXA, RGBA, HSLA, or HSVA based on `format`.'
      }
    }
  }
};

export const Formats: Story = {
  name: 'Formats',
  args: {
    ...Primary.args
  },
  render: context => html`
    ${template({ ...context, format: 'hex', value: '#4a90e2' })}
    ${template({ ...context, format: 'rgb', value: 'rgb(80, 227, 194)' })}
    ${template({ ...context, format: 'hsl', value: 'hsl(290, 87%, 47%)' })}
    ${template({ ...context, format: 'hsv', value: 'hsv(55, 89%, 97%)' })}
  `,
  parameters: {
    docs: {
      description: {
        story:
          "Set the color picker's format with the `format` attribute. Valid options include `hex`, `rgb`, `hsl`, and `hsv`. Note that the color picker's input will accept any parsable format (including CSS color names) regardless of this option.<br><br> To prevent users from toggling the format themselves, add the `no-format-toggle` attribute."
      }
    }
  }
};

export const Swatches: Story = {
  name: 'Swatches',
  args: {
    ...Primary.args,
    swatches:
      '#d0021b; #f5a623; #f8e71c; #8b572a; #7ed321; #417505; #bd10e0; #9013fe;#4a90e2; #50e3c2; #b8e986; #000; #444; #888; #ccc; #fff;'
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use the `swatches` attribute to add convenient presets to the color picker. Any format the color picker can parse is acceptable (including CSS color names), but each value must be separated by a semicolon (`;`). Alternatively, you can pass an array of color values to this property using JavaScript.'
      },
      story: {
        height: '480px'
      }
    }
  }
};

export const Sizes: Story = {
  name: 'Sizes',
  args: {
    ...Primary.args
  },
  render: context => html`
    ${template({ ...context, size: 'small' })} ${template({ ...context, size: 'medium' })}
    ${template({ ...context, size: 'large' })}
  `,
  parameters: {
    docs: {
      description: {
        story: "Use the `size` attribute to change the color picker's trigger size."
      }
    }
  }
};

export const Inline: Story = {
  name: 'Inline',
  args: {
    ...Primary.args,
    inline: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The color picker can be rendered inline instead of in a dropdown using the `inline` attribute.'
      },
      story: {
        height: '300px'
      }
    }
  }
};
