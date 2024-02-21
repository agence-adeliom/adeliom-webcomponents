import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCProgressRing from './progress-ring.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCProgressRing>('awc-progress-ring');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Progress/Ring',
  component: 'awc-progress-ring',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    }
  },

  render: context => template(context)
} satisfies Meta<AWCProgressRing>;

export default meta;

type Story = StoryObj<AWCProgressRing & typeof args>;

export const Primary: Story = {
  name: 'Default',
  args: {
    value: 25
  }
};

export const Size: Story = {
  name: 'Size',
  args: {
    value: 50,
    '--size': '200px'
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`--size\` custom property to set the diameter of the progress ring.`
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

export const TrackIndicatorWidth: Story = {
  name: 'Track and Indicator Width',
  args: {
    value: 50,
    '--track-width': '6px',
    '--indicator-width': '12px'
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`--track-width\` and \`--indicator-width\` custom properties to set the width of the progress ring's track and indicator.`
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
    html` <awc-progress-ring value="50" class="progress-ring-values" style="margin-bottom: .5rem;"
        >50%</awc-progress-ring
      >

      <br />

      <awc-button circle>
        <awc-icon name="dash" label="Decrease"></awc-icon>
      </awc-button>
      <awc-button circle>
        <awc-icon name="plus" label="Increase"></awc-icon>
      </awc-button>

      <script>
        const progressRing = document.querySelector('.progress-ring-values');
        const subtractButton = progressRing.nextElementSibling.nextElementSibling;
        const addButton = subtractButton.nextElementSibling;

        addButton.addEventListener('click', () => {
          const value = Math.min(100, progressRing.value + 10);
          progressRing.value = value;
          progressRing.textContent = \`\${value}%\`;
        });

        subtractButton.addEventListener('click', () => {
          const value = Math.max(0, progressRing.value - 10);
          progressRing.value = value;
          progressRing.textContent = \`\${value}%\`;
        });
      </script>`,
  parameters: {
    docs: {
      description: {
        story: `Use the default slot to show a label inside the progress ring.`
      }
    }
  }
};
