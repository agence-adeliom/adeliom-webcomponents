import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCTooltip from './tooltip';
import {html} from "lit";
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-tooltip');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Tooltip',
  component: 'awc-tooltip',
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
        component: `A tooltip's target is its _first child element_, so you should only wrap one element inside of the tooltip. If you need the tooltip to show up for multiple elements, nest them inside a container first.

Tooltips use \`display: contents\` so they won't interfere with how elements are positioned in a flex or grid layout.`
      }
    }
  },
  render: context => template(context)
} satisfies Meta<AWCTooltip & typeof args>;

export default meta;

type Story = StoryObj<AWCTooltip & typeof args>;

export const Primary: Story = {
  name: 'Default',
  args: {
    content: 'This is a tooltip',
    'default-slot': `<awc-button>Hover Me</awc-button>`
  }
};

export const Placement: Story = {
  name: 'Placement',
  render: () => html`<div class="tooltip-placement-example">
      <div class="tooltip-placement-example-row">
          <awc-tooltip content="top-start" placement="top-start">
              <awc-button></awc-button>
          </awc-tooltip>

          <awc-tooltip content="top" placement="top">
              <awc-button></awc-button>
          </awc-tooltip>

          <awc-tooltip content="top-end" placement="top-end">
              <awc-button></awc-button>
          </awc-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
          <awc-tooltip content="left-start" placement="left-start">
              <awc-button></awc-button>
          </awc-tooltip>

          <awc-tooltip content="right-start" placement="right-start">
              <awc-button></awc-button>
          </awc-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
          <awc-tooltip content="left" placement="left">
              <awc-button></awc-button>
          </awc-tooltip>

          <awc-tooltip content="right" placement="right">
              <awc-button></awc-button>
          </awc-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
          <awc-tooltip content="left-end" placement="left-end">
              <awc-button></awc-button>
          </awc-tooltip>

          <awc-tooltip content="right-end" placement="right-end">
              <awc-button></awc-button>
          </awc-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
          <awc-tooltip content="bottom-start" placement="bottom-start">
              <awc-button></awc-button>
          </awc-tooltip>

          <awc-tooltip content="bottom" placement="bottom">
              <awc-button></awc-button>
          </awc-tooltip>

          <awc-tooltip content="bottom-end" placement="bottom-end">
              <awc-button></awc-button>
          </awc-tooltip>
      </div>
  </div>

  <style>
      .tooltip-placement-example {
          width: 250px;
          margin: 1rem;
      }

      .tooltip-placement-example-row:after {
          content: '';
          display: table;
          clear: both;
      }

      .tooltip-placement-example awc-button {
          float: left;
          width: 2.5rem;
          margin-right: 0.25rem;
          margin-bottom: 0.25rem;
      }

      .tooltip-placement-example-row:nth-child(1) awc-tooltip:first-child awc-button,
      .tooltip-placement-example-row:nth-child(5) awc-tooltip:first-child awc-button {
          margin-left: calc(40px + 0.25rem);
      }

      .tooltip-placement-example-row:nth-child(2) awc-tooltip:nth-child(2) awc-button,
      .tooltip-placement-example-row:nth-child(3) awc-tooltip:nth-child(2) awc-button,
      .tooltip-placement-example-row:nth-child(4) awc-tooltip:nth-child(2) awc-button {
          margin-left: calc((40px * 3) + (0.25rem * 3));
      }
  </style>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`placement\` attribute to set the preferred placement of the tooltip.`
      }
    }
  }
};

export const ClickTrigger: Story = {
  name: 'Click Trigger',
  args: {
    content: 'Click again to dismiss',
    trigger: 'click',
    'default-slot': `<awc-button>Click to Toggle</awc-button>`
  },
  parameters: {
    docs: {
      description: {
        story: "Set the `trigger` attribute to `click` to toggle the tooltip on click instead of hover."
      }
    }
  }
};

export const ManualTrigger: Story = {
  name: 'Manual Trigger',
  render: () => html`<awc-button style="margin-right: 4rem;">Toggle Manually</awc-button>

  <awc-tooltip content="This is an avatar" trigger="manual" class="manual-tooltip">
      <awc-avatar label="User"></awc-avatar>
  </awc-tooltip>

  <script>
      const tooltip = document.querySelector('.manual-tooltip');
      const toggle = tooltip.previousElementSibling;

      toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
  </script>`,
  parameters: {
    docs: {
      description: {
        story: "Tooltips can be controller programmatically by setting the `trigger` attribute to `manual`. Use the `open` attribute to control when the tooltip is shown."
      }
    }
  }
};

export const RemovingArrows: Story = {
  name: 'Removing Arrows',
  render: () => html`<awc-tooltip content="This is a tooltip" style="--awc-tooltip-arrow-size: 0;">
    <awc-button>No Arrow</awc-button>
</awc-tooltip>`,
  parameters: {
    docs: {
      description: {
        story: `You can control the size of tooltip arrows by overriding the \`--awc-tooltip-arrow-size\` design token. To remove them, set the value to \`0\` as shown below.

To override it globally, set it in a root block in your stylesheet after the Adeliom WebComponents stylesheet is loaded.

\`\`\`css
:root {
  --awc-tooltip-arrow-size: 0;
}
\`\`\``
      }
    }
  }
};

export const HTML: Story = {
  name: 'HTML in Tooltips',
  args: {
    'content-slot': '<div slot="content">I\'m not <strong>just</strong> a tooltip, I\'m a <em>tooltip</em> with HTML!</div>',
    'default-slot': `<awc-button>Hover Me</awc-button>`
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`content\` slot to create tooltips with HTML content. Tooltips are designed only for text and presentational elements. Avoid placing interactive content, such as buttons, links, and form controls, in a tooltip.`
      }
    }
  }
};

export const MaximumWidth: Story = {
  name: 'Setting a Maximum Width',
  render: () => html`<awc-tooltip style="--max-width: 80px;" content="This tooltip will wrap after only 80 pixels.">
    <awc-button>Hover me</awc-button>
</awc-tooltip>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`--max-width\` custom property to change the width the tooltip can grow to before wrapping occurs.`
      }
    }
  }
};


export const Hoisting: Story = {
  name: 'Hoisting',
  render: () => html`<div class="tooltip-hoist">
    <awc-tooltip content="This is a tooltip">
        <awc-button>No Hoist</awc-button>
    </awc-tooltip>

    <awc-tooltip content="This is a tooltip" hoist>
        <awc-button>Hoist</awc-button>
    </awc-tooltip>
</div>

<style>
    .tooltip-hoist {
        position: relative;
        border: solid 2px var(--awc-panel-border-color);
        overflow: hidden;
        padding: var(--awc-spacing-medium);
    }
</style>`,
  parameters: {
    docs: {
      description: {
        story: `Tooltips will be clipped if they're inside a container that has \`overflow: auto|hidden|scroll\`. The \`hoist\` attribute forces the tooltip to use a fixed positioning strategy, allowing it to break out of the container. In this case, the tooltip will be positioned relative to its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block), which is usually the viewport unless an ancestor uses a \`transform\`, \`perspective\`, or \`filter\`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.`
      }
    }
  }
};
