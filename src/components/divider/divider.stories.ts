import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCDivider from './divider.ts';
import {html} from "lit";
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-divider');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Divider',
  component: 'awc-divider',
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
} satisfies Meta<AWCDivider & typeof args>;

export default meta;

type Story = StoryObj<AWCDivider & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () =>
    html`<awc-divider></awc-divider>`,
};

export const Width: Story = {
  name: 'Width',
  render: () =>
    html`<awc-divider style="--width: 4px;"></awc-divider>`,
  parameters: {
    docs: {
      description: {
        story: "Use the `--width` custom property to change the width of the divider."
      }
    }
  }
};

export const Color: Story = {
  name: 'Color',
  render: () =>
    html`<awc-divider style="--color: red;"></awc-divider>`,
  parameters: {
    docs: {
      description: {
        story: "Use the `--color` custom property to change the color of the divider."
      }
    }
  }
};

export const Spacing: Story = {
  name: 'Spacing',
  render: () =>
    html`<div style="text-align: center;">
    Above
    <awc-divider style="--spacing: 2rem;"></awc-divider>
    Below
  </div>`,
  parameters: {
    docs: {
      description: {
        story: "Use the `--spacing` custom property to change the amount of space between the divider and it's neighboring elements."
      }
    }
  }
};

export const Vertical: Story = {
  name: 'Vertical',
  render: () =>
    html`<div style="display: flex; align-items: center; height: 2rem;">
    First
    <awc-divider vertical></awc-divider>
    Middle
    <awc-divider vertical></awc-divider>
    Last
  </div>`,
  parameters: {
    docs: {
      description: {
        story: "Add the `vertical` attribute to draw the divider in a vertical orientation. The divider will span the full height of its container. Vertical dividers work especially well inside of a flex container."
      }
    }
  }
};

export const MenuDividers: Story = {
  name: 'Menu Dividers',
  render: () =>
    html`<awc-menu style="max-width: 200px;">
    <awc-menu-item value="1">Option 1</awc-menu-item>
    <awc-menu-item value="2">Option 2</awc-menu-item>
    <awc-menu-item value="3">Option 3</awc-menu-item>
    <awc-divider></awc-divider>
    <awc-menu-item value="4">Option 4</awc-menu-item>
    <awc-menu-item value="5">Option 5</awc-menu-item>
    <awc-menu-item value="6">Option 6</awc-menu-item>
  </awc-menu>`,
  parameters: {
    docs: {
      description: {
        story: "Use dividers in [menus](/docs/components-menu--docs) to visually group menu items."
      }
    }
  }
};
/*
 export const CustomWidth: Story = {
  name: 'Custom Width',
  render: () =>
    html`<awc-dialog label="Dialog" class="dialog-width" style="--width: 50vw;">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <awc-button slot="footer" variant="primary">Close</awc-button>
</awc-dialog>

<awc-button>Open Dialog</awc-button>

<script>
  const dialogWidth = document.querySelector('.dialog-width');
  const openButtonWidth = dialogWidth.nextElementSibling;
  const closeButtonWidth = dialogWidth.querySelector('awc-button[slot="footer"]');

  openButtonWidth.addEventListener('click', () => dialogWidth.show());
  closeButtonWidth.addEventListener('click', () => dialogWidth.hide());
</script>`,
  parameters: {
    docs: {
      description: {
        story: "Use the `--width` custom property to set the dialog's width."
      }
    }
  }
};

export const Scrolling: Story = {
  name: 'Scrolling',
  render: () =>
    html`<awc-dialog label="Dialog" class="dialog-scrolling">
    <div style="height: 150vh; border: dashed 2px var(--awc-color-neutral-200); padding: 0 1rem;">
      <p>Scroll down and give it a try! 👇</p>
    </div>
    <awc-button slot="footer" variant="primary">Close</awc-button>
  </awc-dialog>

  <awc-button>Open Dialog</awc-button>

  <script>
    const dialogScrolling = document.querySelector('.dialog-scrolling');
    const openButtonScrolling = dialogScrolling.nextElementSibling;
    const closeButtonScrolling = dialogScrolling.querySelector('awc-button[slot="footer"]');

    openButtonScrolling.addEventListener('click', () => dialogScrolling.show());
    closeButtonScrolling.addEventListener('click', () => dialogScrolling.hide());
  </script>`,
  parameters: {
    docs: {
      description: {
        story: "By design, a dialog's height will never exceed that of the viewport. As such, dialogs will not scroll with the page ensuring the header and footer are always accessible to the user."
      },
      story: {
        height: "400px"
      }
    }
  }
};

export const HeaderActions: Story = {
  name: 'Header Actions',
  render: () =>
    html`<awc-dialog label="Dialog" class="dialog-header-actions">
    <awc-icon-button class="new-window" slot="header-actions" name="box-arrow-up-right"></awc-icon-button>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <awc-button slot="footer" variant="primary">Close</awc-button>
  </awc-dialog>

  <awc-button>Open Dialog</awc-button>

  <script>
    const dialogHeaderActions = document.querySelector('.dialog-header-actions');
    const openButtonHeaderActions = dialogHeaderActions.nextElementSibling;
    const closeButtonHeaderActions = dialogHeaderActions.querySelector('awc-button[slot="footer"]');
    const newWindowButton = dialogHeaderActions.querySelector('.new-window');

    openButtonHeaderActions.addEventListener('click', () => dialogHeaderActions.show());
    closeButtonHeaderActions.addEventListener('click', () => dialogHeaderActions.hide());
    newWindowButton.addEventListener('click', () => window.open(location.href));
  </script>`,
  parameters: {
    docs: {
      description: {
        story: "The header shows a functional close button by default. You can use the `header-actions` slot to add additional [icon buttons](/docs/components-button-icon--docs) if needed."
      }
    }
  }
};
 */
