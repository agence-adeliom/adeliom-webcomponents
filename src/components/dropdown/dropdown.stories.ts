import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCDropdown from './dropdown.ts';
import {html} from "lit";
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-dropdown');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Dropdown',
  component: 'awc-dropdown',
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
        component: `Dropdowns consist of a trigger and a panel. By default, activating the trigger will expose the panel and interacting outside of the panel will close it.<br>
        Dropdowns are designed to work well with [menus](/components/menu) to provide a list of options the user can select from. However, dropdowns can also be used in lower-level applications (e.g. [color picker](/components/color-picker) and [select](/components/select)). The API gives you complete control over showing, hiding, and positioning the panel.`
      },
      story: {
        height: "400px"
      }
    }
  },
  render: context => template(context)
} satisfies Meta<AWCDropdown & typeof args>;

export default meta;

type Story = StoryObj<AWCDropdown & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () =>
    html`<awc-dropdown>
    <awc-button slot="trigger" caret>Dropdown</awc-button>
    <awc-menu>
      <awc-menu-item>Dropdown Item 1</awc-menu-item>
      <awc-menu-item>Dropdown Item 2</awc-menu-item>
      <awc-menu-item>Dropdown Item 3</awc-menu-item>
      <awc-divider></awc-divider>
      <awc-menu-item type="checkbox" checked>Checkbox</awc-menu-item>
      <awc-menu-item disabled>Disabled</awc-menu-item>
      <awc-divider></awc-divider>
      <awc-menu-item>
        Prefix
        <awc-icon slot="prefix" name="gift"></awc-icon>
      </awc-menu-item>
      <awc-menu-item>
        Suffix Icon
        <awc-icon slot="suffix" name="heart"></awc-icon>
      </awc-menu-item>
    </awc-menu>
  </awc-dropdown>`,
};

 export const GettingSelectedItem: Story = {
  name: 'Getting the Selected Item',
  render: () =>
    html`<div class="dropdown-selection">
    <awc-dropdown>
      <awc-button slot="trigger" caret>Edit</awc-button>
      <awc-menu>
        <awc-menu-item value="cut">Cut</awc-menu-item>
        <awc-menu-item value="copy">Copy</awc-menu-item>
        <awc-menu-item value="paste">Paste</awc-menu-item>
      </awc-menu>
    </awc-dropdown>
  </div>
  
  <script>
    const containerSelection = document.querySelector('.dropdown-selection');
    const dropdown = containerSelection.querySelector('awc-dropdown');
  
    dropdown.addEventListener('awc-select', event => {
      const selectedItem = event.detail.item;
      console.log(selectedItem.value);
    });
  </script>`,
  parameters: {
    docs: {
      description: {
        story: "When dropdowns are used with [menus](/components/menu), you can listen for the [`awc-select`](/components/menu#events) event to determine which menu item was selected. The menu item element will be exposed in `event.detail.item`. You can set `value` props to make it easier to identify commands."
      }
    }
  }
};

export const GettingSelectedItemAlternative: Story = {
  name: 'Getting the Selected Item Alternative',
  render: () =>
    html`<div class="dropdown-selection-alt">
    <awc-dropdown>
      <awc-button slot="trigger" caret>Edit</awc-button>
      <awc-menu>
        <awc-menu-item value="cut">Cut</awc-menu-item>
        <awc-menu-item value="copy">Copy</awc-menu-item>
        <awc-menu-item value="paste">Paste</awc-menu-item>
      </awc-menu>
    </awc-dropdown>
  </div>
  
  <script>
    const containerSelectionAlt = document.querySelector('.dropdown-selection-alt');
    const cut = containerSelectionAlt.querySelector('awc-menu-item[value="cut"]');
    const copy = containerSelectionAlt.querySelector('awc-menu-item[value="copy"]');
    const paste = containerSelectionAlt.querySelector('awc-menu-item[value="paste"]');
  
    cut.addEventListener('click', () => console.log('cut'));
    copy.addEventListener('click', () => console.log('copy'));
    paste.addEventListener('click', () => console.log('paste'));
  </script>`,
  parameters: {
    docs: {
      description: {
        story: "Alternatively, you can listen for the `click` event on individual menu items. Note that, using this approach, disabled menu items will still emit a `click` event."
      }
    }
  }
};

export const Placement: Story = {
  name: 'Placement',
  render: () =>
    html`<awc-dropdown placement="top-start">
    <awc-button slot="trigger" caret>Edit</awc-button>
    <awc-menu>
      <awc-menu-item>Cut</awc-menu-item>
      <awc-menu-item>Copy</awc-menu-item>
      <awc-menu-item>Paste</awc-menu-item>
      <awc-divider></awc-divider>
      <awc-menu-item>Find</awc-menu-item>
      <awc-menu-item>Replace</awc-menu-item>
    </awc-menu>
  </awc-dropdown>`,
  parameters: {
    docs: {
      description: {
        story: "The preferred placement of the dropdown can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport."
      }
    }
  }
};

export const Distance: Story = {
  name: 'Distance',
  render: () =>
    html`<awc-dropdown distance="30">
    <awc-button slot="trigger" caret>Edit</awc-button>
    <awc-menu>
      <awc-menu-item>Cut</awc-menu-item>
      <awc-menu-item>Copy</awc-menu-item>
      <awc-menu-item>Paste</awc-menu-item>
      <awc-divider></awc-divider>
      <awc-menu-item>Find</awc-menu-item>
      <awc-menu-item>Replace</awc-menu-item>
    </awc-menu>
  </awc-dropdown>`,
  parameters: {
    docs: {
      description: {
        story: "The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels."
      }
    }
  }
};

export const Skidding: Story = {
  name: 'Custom Size',
  render: () =>
    html`<awc-dropdown skidding="30">
    <awc-button slot="trigger" caret>Edit</awc-button>
    <awc-menu>
      <awc-menu-item>Cut</awc-menu-item>
      <awc-menu-item>Copy</awc-menu-item>
      <awc-menu-item>Paste</awc-menu-item>
      <awc-divider></awc-divider>
      <awc-menu-item>Find</awc-menu-item>
      <awc-menu-item>Replace</awc-menu-item>
    </awc-menu>
  </awc-dropdown>`,
  parameters: {
    docs: {
      description: {
        story: "The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels."
      }
    }
  }
};

export const Hoisting: Story = {
  name: 'Scrolling',
  render: () =>
    html`<div class="dropdown-hoist">
    <awc-dropdown>
      <awc-button slot="trigger" caret>No Hoist</awc-button>
      <awc-menu>
        <awc-menu-item>Item 1</awc-menu-item>
        <awc-menu-item>Item 2</awc-menu-item>
        <awc-menu-item>Item 3</awc-menu-item>
      </awc-menu>
    </awc-dropdown>
  
    <awc-dropdown hoist>
      <awc-button slot="trigger" caret>Hoist</awc-button>
      <awc-menu>
        <awc-menu-item>Item 1</awc-menu-item>
        <awc-menu-item>Item 2</awc-menu-item>
        <awc-menu-item>Item 3</awc-menu-item>
      </awc-menu>
    </awc-dropdown>
  </div>
  
  <style>
    .dropdown-hoist {
      position: relative;
      border: solid 2px var(--awc-panel-border-color);
      padding: var(--awc-spacing-medium);
      overflow: hidden;
    }
  </style>`,
  parameters: {
    docs: {
      description: {
        story: "Dropdown panels will be clipped if they're inside a container that has `overflow: auto|hidden`. The `hoist` attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. In this case, the panel will be positioned relative to its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block), which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details."
      }
    }
  }
};
