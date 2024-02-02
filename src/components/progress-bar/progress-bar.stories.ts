/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCProgressBar from './progress-bar.js';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-progress-bar');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Progress/Bar',
  component: 'awc-progress-bar',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCProgressBar & typeof args>;

export default meta;

type Story = StoryObj<AWCProgressBar & typeof args>;

export const Primary: Story = {
  name: 'Default',
  args: {
    value: 25
  }
};

export const CustomHeight: Story = {
  name: 'Custom Height',
  args: {
    value: 50,
    '--height': '6px'
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`--height\` custom property to set the progress bar's height.`
      }
    }
  }
};

export const CustomRadius: Story = {
  name: 'Custom Radius',
  args: {
    value: 50,
    '--track-radius': '9999px',
    '--indicator-radius': '9999px'
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`--border-radius\` custom property to set the progress bar's radius.`
      }
    }
  }
};

export const Colors: Story = {
  name: 'Colors',
  args: {
    value: 50,
    '--track-color': 'pink',
    '--indicator-color': 'deeppink'
  },
  parameters: {
    docs: {
      description: {
        story: `To change the color, use the \`--track-color\` and \`--indicator-color\` custom properties.`
      }
    }
  }
};

export const Labels: Story = {
  name: 'Labels',
  args: {
    value: 50,
    label: 'Upload progress'
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`label\` attribute to label the progress ring and tell assistive devices how to announce it.`
      }
    }
  }
};

export const ShowingValues: Story = {
  name: 'Showing Values',
  render: () =>
    html` <awc-progress-bar value="50" class="progress-bar-values">50%</awc-progress-bar>

      <br />

      <awc-button circle>
        <awc-icon name="dash" label="Decrease"></awc-icon>
      </awc-button>
      <awc-button circle>
        <awc-icon name="plus" label="Increase"></awc-icon>
      </awc-button>

      <script>
        const progressBar = document.querySelector('.progress-bar-values');
        const subtractButton = progressBar.nextElementSibling.nextElementSibling;
        const addButton = subtractButton.nextElementSibling;

        addButton.addEventListener('click', () => {
          const value = Math.min(100, progressBar.value + 10);
          progressBar.value = value;
          progressBar.textContent = \`\${value}%\`;
        });

        subtractButton.addEventListener('click', () => {
          const value = Math.max(0, progressBar.value - 10);
          progressBar.value = value;
          progressBar.textContent = \`\${value}%\`;
        });
      </script>`,
  parameters: {
    docs: {
      description: {
        story: `Use the default slot to show a value`
      }
    }
  }
};

export const Indeterminate: Story = {
  name: 'Indeterminate',
  args: {
    indeterminate: true
  },
  parameters: {
    docs: {
      description: {
        story: `The \`indeterminate\` attribute can be used to inform the user that the operation is pending, but its status cannot currently be determined. In this state, \`value\` is ignored and the label, if present, will not be shown.`
      }
    }
  }
};
