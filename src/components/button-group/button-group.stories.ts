import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCButtonGroup from './button-group.ts';
import {html} from "lit";
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-button-group');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Button/Group',
  component: 'awc-button-group',
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
} satisfies Meta<AWCButtonGroup & typeof args>;

export default meta;

type Story = StoryObj<AWCButtonGroup & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () => html`<awc-button-group label="Alignment">
  <awc-button>Left</awc-button>
  <awc-button>Center</awc-button>
  <awc-button>Right</awc-button>
</awc-button-group>`
};

export const ButtonSizes: Story = {
  name: 'Button Sizes',
  render: () => html`<awc-button-group label="Alignment">
  <awc-button size="small">Left</awc-button>
  <awc-button size="small">Center</awc-button>
  <awc-button size="small">Right</awc-button>
</awc-button-group>

<br /><br />

<awc-button-group label="Alignment">
  <awc-button size="medium">Left</awc-button>
  <awc-button size="medium">Center</awc-button>
  <awc-button size="medium">Right</awc-button>
</awc-button-group>

<br /><br />

<awc-button-group label="Alignment">
  <awc-button size="large">Left</awc-button>
  <awc-button size="large">Center</awc-button>
  <awc-button size="large">Right</awc-button>
</awc-button-group>`,
  parameters: {
    docs: {
      description: {
        story: "All button sizes are supported, but avoid mixing sizes within the same button group."
      }
    }
  }
};

export const ThemeButtons: Story = {
  name: 'Theme Buttons',
  render: () => html`<awc-button-group label="Alignment">
  <awc-button variant="primary">Left</awc-button>
  <awc-button variant="primary">Center</awc-button>
  <awc-button variant="primary">Right</awc-button>
</awc-button-group>

<br /><br />

<awc-button-group label="Alignment">
  <awc-button variant="success">Left</awc-button>
  <awc-button variant="success">Center</awc-button>
  <awc-button variant="success">Right</awc-button>
</awc-button-group>

<br /><br />

<awc-button-group label="Alignment">
  <awc-button variant="neutral">Left</awc-button>
  <awc-button variant="neutral">Center</awc-button>
  <awc-button variant="neutral">Right</awc-button>
</awc-button-group>

<br /><br />

<awc-button-group label="Alignment">
  <awc-button variant="warning">Left</awc-button>
  <awc-button variant="warning">Center</awc-button>
  <awc-button variant="warning">Right</awc-button>
</awc-button-group>

<br /><br />

<awc-button-group label="Alignment">
  <awc-button variant="danger">Left</awc-button>
  <awc-button variant="danger">Center</awc-button>
  <awc-button variant="danger">Right</awc-button>
</awc-button-group>`,
  parameters: {
    docs: {
      description: {
        story: "Theme buttons are supported through the button's `variant` attribute."
      }
    }
  }
};

export const PillButtons: Story = {
  name: 'Pill Buttons',
  render: () => html`<awc-button-group label="Alignment">
  <awc-button size="small" pill>Left</awc-button>
  <awc-button size="small" pill>Center</awc-button>
  <awc-button size="small" pill>Right</awc-button>
</awc-button-group>

<br /><br />

<awc-button-group label="Alignment">
  <awc-button size="medium" pill>Left</awc-button>
  <awc-button size="medium" pill>Center</awc-button>
  <awc-button size="medium" pill>Right</awc-button>
</awc-button-group>

<br /><br />

<awc-button-group label="Alignment">
  <awc-button size="large" pill>Left</awc-button>
  <awc-button size="large" pill>Center</awc-button>
  <awc-button size="large" pill>Right</awc-button>
</awc-button-group>`,
  parameters: {
    docs: {
      description: {
        story: "Pill buttons are supported through the button's `pill` attribute."
      }
    }
  }
};

export const Dropdowns: Story = {
  name: 'Dropdowns in Button Groups',
  render: () => html`<awc-button-group label="Example Button Group">
  <awc-button>Button</awc-button>
  <awc-button>Button</awc-button>
  <awc-dropdown>
    <awc-button slot="trigger" caret>Dropdown</awc-button>
    <awc-menu>
      <awc-menu-item>Item 1</awc-menu-item>
      <awc-menu-item>Item 2</awc-menu-item>
      <awc-menu-item>Item 3</awc-menu-item>
    </awc-menu>
  </awc-dropdown>
</awc-button-group>`,
  parameters: {
    docs: {
      description: {
        story: "Dropdowns can be placed inside button groups as long as the trigger is an `<awc-button>` element."
      }
    }
  }
};

export const SplitButtons: Story = {
  name: 'Split Buttons',
  render: () => html`<awc-button-group label="Example Button Group">
  <awc-button variant="primary">Save</awc-button>
  <awc-dropdown placement="bottom-end">
    <awc-button slot="trigger" variant="primary" caret>
      <awc-visually-hidden>More options</awc-visually-hidden>
    </awc-button>
    <awc-menu>
      <awc-menu-item>Save</awc-menu-item>
      <awc-menu-item>Save as&hellip;</awc-menu-item>
      <awc-menu-item>Save all</awc-menu-item>
    </awc-menu>
  </awc-dropdown>
</awc-button-group>`,
  parameters: {
    docs: {
      description: {
        story: "Create a split button using a button and a dropdown. Use a [visually hidden](/components/visually-hidden) label to ensure the dropdown is accessible to users with assistive devices."
      }
    }
  }
};

export const ToolbarExample: Story = {
  name: 'Toolbar Example',
  render: () => html`<div class="button-group-toolbar">
  <awc-button-group label="History">
    <awc-tooltip content="Undo">
      <awc-button><awc-icon name="arrow-counterclockwise" label="Undo"></awc-icon></awc-button>
    </awc-tooltip>
    <awc-tooltip content="Redo">
      <awc-button><awc-icon name="arrow-clockwise" label="Redo"></awc-icon></awc-button>
    </awc-tooltip>
  </awc-button-group>

  <awc-button-group label="Formatting">
    <awc-tooltip content="Bold">
      <awc-button><awc-icon name="type-bold" label="Bold"></awc-icon></awc-button>
    </awc-tooltip>
    <awc-tooltip content="Italic">
      <awc-button><awc-icon name="type-italic" label="Italic"></awc-icon></awc-button>
    </awc-tooltip>
    <awc-tooltip content="Underline">
      <awc-button><awc-icon name="type-underline" label="Underline"></awc-icon></awc-button>
    </awc-tooltip>
  </awc-button-group>

  <awc-button-group label="Alignment">
    <awc-tooltip content="Align Left">
      <awc-button><awc-icon name="justify-left" label="Align Left"></awc-icon></awc-button>
    </awc-tooltip>
    <awc-tooltip content="Align Center">
      <awc-button><awc-icon name="justify" label="Align Center"></awc-icon></awc-button>
    </awc-tooltip>
    <awc-tooltip content="Align Right">
      <awc-button><awc-icon name="justify-right" label="Align Right"></awc-icon></awc-button>
    </awc-tooltip>
  </awc-button-group>
</div>

<style>
  .button-group-toolbar awc-button-group:not(:last-of-type) {
    margin-right: var(--awc-spacing-x-small);
  }
</style>`,
  parameters: {
    docs: {
      description: {
        story: "Create interactive toolbars with button groups."
      }
    }
  }
};
