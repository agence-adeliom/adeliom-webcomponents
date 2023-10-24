import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCRange from './range';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-range');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Range',
  component: 'awc-range',
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
    }
  },
  render: context => template(context)
} satisfies Meta<AWCRange & typeof args>;

export default meta;

type Story = StoryObj<AWCRange & typeof args>;

export const Primary: Story = {
  name: 'Default'
};

export const Labels: Story = {
  name: 'Labels',
  render: () => html`<awc-range label="Volume" min="0" max="100"></awc-range>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`label\` attribute to give the range an accessible label. For labels that contain HTML, use the \`label\` slot instead.`
      }
    }
  }
};

export const HelpText: Story = {
  name: 'Help Text',
  render: () =>
    html`<awc-range label="Volume" help-text="Controls the volume of the current song." min="0" max="100"></awc-range>`,
  parameters: {
    docs: {
      description: {
        story: `Add descriptive help text to a range with the \`help-text\` attribute. For help texts that contain HTML, use the \`help-text\` slot instead.`
      }
    }
  }
};

export const MinMaxStep: Story = {
  name: 'Min, Max, and Step',
  render: () => html`<awc-range min="0" max="10" step="1"></awc-range>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`min\` and \`max\` attributes to set the range's minimum and maximum values, respectively. The \`step\` attribute determines the value's interval when increasing and decreasing.`
      }
    }
  }
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`disabled\` attribute to disable a slider.`
      }
    }
  }
};

export const TooltipPlacement: Story = {
  name: 'Tooltip Placement',
  args: {
    tooltip: 'bottom'
  },
  parameters: {
    docs: {
      description: {
        story: `By default, the tooltip is shown on top. Set \`tooltip\` to \`bottom\` to show it below the slider.`
      }
    }
  }
};

export const TooltipDisabled: Story = {
  name: 'Disable the Tooltip',
  args: {
    tooltip: 'none'
  },
  parameters: {
    docs: {
      description: {
        story: `To disable the tooltip, set \`tooltip\` to \`none\``
      }
    }
  }
};

export const CustomTrackColors: Story = {
  name: 'Custom Track Colors',
  args: {
    '--track-color-active': 'var(--awc-color-primary-600)',
    '--track-color-inactive': 'var(--awc-color-primary-200)'
  },
  parameters: {
    docs: {
      description: {
        story: `You can customize the active and inactive portions of the track using the \`--track-color-active\` and \`--track-color-inactive\` custom properties.`
      }
    }
  }
};

export const CustomTrackOffset: Story = {
  name: 'Custom Track Colors',
  args: {
    min: -100,
    max: 100,
    '--track-color-active': 'var(--awc-color-primary-600)',
    '--track-color-inactive': 'var(--awc-color-primary-200)',
    '--track-color-offset': '50%'
  },
  parameters: {
    docs: {
      description: {
        story: `You can customize the initial offset of the active track using the \`--track-active-offset\` custom property.`
      }
    }
  }
};

export const CustomTrackFormatter: Story = {
  name: 'Custom Tooltip Formatter',
  render: () =>
    html` <awc-range min="0" max="100" step="1" class="range-with-custom-formatter"></awc-range>

      <script>
        const range = document.querySelector('.range-with-custom-formatter');
        range.tooltipFormatter = value => \`Total - \${value}%\`;
      </script>`,
  parameters: {
    docs: {
      description: {
        story: `You can change the tooltip's content by setting the \`tooltipFormatter\` property to a function that accepts the range's value as an argument.`
      }
    }
  }
};
