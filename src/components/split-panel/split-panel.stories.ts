import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCSplitPanel from './split-panel';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-split-panel');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Split Panel',
  component: 'awc-split-panel',
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
} satisfies Meta<AWCSplitPanel & typeof args>;

export default meta;

type Story = StoryObj<AWCSplitPanel & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () =>
    html`<awc-split-panel>
      <div
        slot="start"
        style="height: 200px; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        Start
      </div>
      <div
        slot="end"
        style="height: 200px; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        End
      </div>
    </awc-split-panel>`
};

export const InitialPosition: Story = {
  name: 'Initial Position',
  render: () =>
    html`<awc-split-panel position="75">
      <div
        slot="start"
        style="height: 200px; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        Start
      </div>
      <div
        slot="end"
        style="height: 200px; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        End
      </div>
    </awc-split-panel>`,
  parameters: {
    docs: {
      description: {
        story: `To set the initial position, use the \`position\` attribute. If no position is provided, it will default to 50% of the available space.`
      }
    }
  }
};

export const InitialPositionPixels: Story = {
  name: 'Initial Position in Pixels',
  render: () =>
    html`<awc-split-panel position-in-pixels="150">
      <div
        slot="start"
        style="height: 200px; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        Start
      </div>
      <div
        slot="end"
        style="height: 200px; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        End
      </div>
    </awc-split-panel>`,
  parameters: {
    docs: {
      description: {
        story: `To set the initial position in pixels instead of a percentage, use the \`position-in-pixels\` attribute.`
      }
    }
  }
};

export const Vertical: Story = {
  name: 'Vertical',
  render: () =>
    html`<awc-split-panel vertical style="height: 400px;">
      <div
        slot="start"
        style="height: 100%; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        Start
      </div>
      <div
        slot="end"
        style="height: 100%; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        End
      </div>
    </awc-split-panel>`,
  parameters: {
    docs: {
      description: {
        story: `Add the \`vertical\` attribute to render the split panel in a vertical orientation where the start and end panels are stacked. You also need to set a height when using the vertical orientation.`
      }
    }
  }
};

export const Snapping: Story = {
  name: 'Snapping',
  render: () =>
    html`<div class="split-panel-snapping">
        <awc-split-panel snap="100px 50%">
          <div
            slot="start"
            style="height: 200px; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
          >
            Start
          </div>
          <div
            slot="end"
            style="height: 200px; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
          >
            End
          </div>
        </awc-split-panel>

        <div class="split-panel-snapping-dots"></div>
      </div>

      <style>
        .split-panel-snapping {
          position: relative;
        }

        .split-panel-snapping-dots::before,
        .split-panel-snapping-dots::after {
          content: '';
          position: absolute;
          bottom: -12px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--awc-color-neutral-400);
          transform: translateX(-3px);
        }

        .split-panel-snapping-dots::before {
          left: 100px;
        }

        .split-panel-snapping-dots::after {
          left: 50%;
        }
      </style>`,
  parameters: {
    docs: {
      description: {
        story: `To snap panels at specific positions while dragging, add the \`snap\` attribute with one or more space-separated values. Values must be in pixels or percentages. For example, to snap the panel at \`100px\` and \`50%\`, use \`snap="100px 50%"\`. You can also customize how close the divider must be before snapping with the \`snap-threshold\` attribute.`
      }
    }
  }
};

export const Disabled: Story = {
  name: 'Disabled',
  render: () =>
    html`<awc-split-panel disabled>
      <div
        slot="start"
        style="height: 200px; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        Start
      </div>
      <div
        slot="end"
        style="height: 200px; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        End
      </div>
    </awc-split-panel>`,
  parameters: {
    docs: {
      description: {
        story: `Add the \`disabled\` attribute to prevent the divider from being repositioned.`
      }
    }
  }
};

export const PrimaryPanel: Story = {
  name: 'Setting the Primary Panel',
  render: () =>
    html`<div class="split-panel-primary">
        <awc-split-panel>
          <div
            slot="start"
            style="height: 200px; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
          >
            Start
          </div>
          <div
            slot="end"
            style="height: 200px; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
          >
            End
          </div>
        </awc-split-panel>

        <awc-select label="Primary Panel" value="" style="max-width: 200px; margin-top: 1rem;">
          <awc-option value="">None</awc-option>
          <awc-option value="start">Start</awc-option>
          <awc-option value="end">End</awc-option>
        </awc-select>
      </div>

      <script>
        const container = document.querySelector('.split-panel-primary');
        const splitPanel = container.querySelector('awc-split-panel');
        const select = container.querySelector('awc-select');

        select.addEventListener('awc-change', () => (splitPanel.primary = select.value));
      </script>`,
  parameters: {
    docs: {
      description: {
        story: `By default, both panels will grow or shrink proportionally when the host element is resized. If a primary panel is designated, it will maintain its size and the secondary panel will grow or shrink to fit the remaining space. You can set the primary panel to \`start\` or \`end\` using the \`primary\` attribute.

Try resizing the example below with each option and notice how the panels respond.`
      }
    }
  }
};

export const MinMax: Story = {
  name: 'Min & Max',
  render: () =>
    html`<awc-split-panel style="--min: 150px; --max: calc(100% - 150px);">
      <div
        slot="start"
        style="height: 200px; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        Start
      </div>
      <div
        slot="end"
        style="height: 200px; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        End
      </div>
    </awc-split-panel>`,
  parameters: {
    docs: {
      description: {
        story: `To set a minimum or maximum size of the primary panel, use the \`--min\` and \`--max\` custom properties. Since the secondary panel is flexible, size constraints can only be applied to the primary panel. If no primary panel is designated, these constraints will be applied to the \`start\` panel.

This examples demonstrates how you can ensure both panels are at least 150px using \`--min\`, \`--max\`, and the \`calc()\` function.`
      }
    }
  }
};

export const Nested: Story = {
  name: 'Nested Split Panels',
  render: () =>
    html`<awc-split-panel>
      <div
        slot="start"
        style="height: 400px; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        Start
      </div>
      <div slot="end">
        <awc-split-panel vertical style="height: 400px;">
          <div
            slot="start"
            style="height: 100%; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
          >
            Top
          </div>
          <div
            slot="end"
            style="height: 100%; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
          >
            Bottom
          </div>
        </awc-split-panel>
      </div>
    </awc-split-panel>`,
  parameters: {
    docs: {
      description: {
        story: `Create complex layouts that can be repositioned independently by nesting split panels.`
      }
    }
  }
};

export const Customizing: Story = {
  name: 'Customizing the Divider',
  render: () =>
    html`<awc-split-panel style="--divider-width: 20px;">
      <awc-icon slot="divider" name="grip-vertical"></awc-icon>
      <div
        slot="start"
        style="height: 200px; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        Start
      </div>
      <div
        slot="end"
        style="height: 200px; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        End
      </div>
    </awc-split-panel>`,
  parameters: {
    docs: {
      description: {
        story: `You can target the \`divider\` part to apply CSS properties to the divider. To add a custom handle, slot an icon into the \`divider\` slot. When customizing the divider, make sure to think about focus styles for keyboard users.`
      }
    }
  }
};

export const AdvancedCustomizing: Story = {
  name: 'Customizing the Divider (Advanced)',
  render: () =>
    html`<div class="split-panel-divider">
        <awc-split-panel>
          <awc-icon slot="divider" name="grip-vertical"></awc-icon>
          <div
            slot="start"
            style="height: 200px; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
          >
            Start
          </div>
          <div
            slot="end"
            style="height: 200px; background: var(--awc-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
          >
            End
          </div>
        </awc-split-panel>
      </div>

      <style>
        .split-panel-divider awc-split-panel {
          --divider-width: 2px;
        }

        .split-panel-divider awc-split-panel::part(divider) {
          background-color: var(--awc-color-primary-600);
        }

        .split-panel-divider awc-icon {
          position: absolute;
          border-radius: var(--awc-border-radius-small);
          background: var(--awc-color-primary-600);
          color: var(--awc-color-neutral-0);
          padding: 0.5rem 0.125rem;
        }

        .split-panel-divider awc-split-panel::part(divider):focus-visible {
          background-color: var(--awc-color-primary-600);
        }

        .split-panel-divider awc-split-panel:focus-within awc-icon {
          background-color: var(--awc-color-primary-600);
          color: var(--awc-color-neutral-0);
        }
      </style>`,
  parameters: {
    docs: {
      description: {
        story: `Here's a more elaborate example that changes the divider's color and width and adds a styled handle.`
      }
    }
  }
};
