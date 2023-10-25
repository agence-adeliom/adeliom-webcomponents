import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMenuItem from './menu-item';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-menu-item');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Menu/Item',
  component: 'awc-menu-item',
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
} satisfies Meta<AWCMenuItem & typeof args>;

export default meta;

type Story = StoryObj<AWCMenuItem & typeof args>;

export const Primary: Story = {
  name: 'Example',
  render: () => html`<awc-menu style="max-width: 200px;">
      <awc-menu-item>Option 1</awc-menu-item>
      <awc-menu-item>Option 2</awc-menu-item>
      <awc-menu-item>Option 3</awc-menu-item>
      <awc-divider></awc-divider>
      <awc-menu-item type="checkbox" checked>Checkbox</awc-menu-item>
      <awc-menu-item disabled>Disabled</awc-menu-item>
      <awc-divider></awc-divider>
      <awc-menu-item>
          Prefix Icon
          <awc-icon slot="prefix" name="gift"></awc-icon>
      </awc-menu-item>
      <awc-menu-item>
          Suffix Icon
          <awc-icon slot="suffix" name="heart"></awc-icon>
      </awc-menu-item>
  </awc-menu>`
};

export const Disabled: Story = {
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: `Add the \`disabled\` attribute to disable the menu item so it cannot be selected.`
      }
    }
  },
  render: () => html`<awc-menu style="max-width: 200px;">
      <awc-menu-item>Option 1</awc-menu-item>
      <awc-menu-item disabled>Option 2</awc-menu-item>
      <awc-menu-item>Option 3</awc-menu-item>
  </awc-menu>`
};


export const PrefixSuffix: Story = {
  name: 'Prefix & Suffix',
  parameters: {
    docs: {
      description: {
        story: `Add content to the start and end of menu items using the \`prefix\` and \`suffix\` slots.`
      }
    }
  },
  render: () => html`<awc-menu style="max-width: 200px;">
      <awc-menu-item>
          <awc-icon slot="prefix" name="house"></awc-icon>
          Home
      </awc-menu-item>

      <awc-menu-item>
          <awc-icon slot="prefix" name="envelope"></awc-icon>
          Messages
          <awc-badge slot="suffix" variant="primary" pill>12</awc-badge>
      </awc-menu-item>

      <awc-divider></awc-divider>

      <awc-menu-item>
          <awc-icon slot="prefix" name="gear"></awc-icon>
          Settings
      </awc-menu-item>
  </awc-menu>`
};

export const CheckboxItems: Story = {
  name: 'Checkbox Menu Items',
  parameters: {
    docs: {
      description: {
        story: `Set the \`type\` attribute to \`checkbox\` to create a menu item that will toggle on and off when selected. You can use the \`checked\` attribute to set the initial state.

Checkbox menu items are visually indistinguishable from regular menu items. Their ability to be toggled is primarily inferred from context, much like you'd find in the menu of a native app.`
      }
    }
  },
  render: () => html`<awc-menu style="max-width: 200px;">
      <awc-menu-item type="checkbox">Autosave</awc-menu-item>
      <awc-menu-item type="checkbox" checked>Check Spelling</awc-menu-item>
      <awc-menu-item type="checkbox">Word Wrap</awc-menu-item>
  </awc-menu>`
};

export const ValueSelection: Story = {
  name: 'Value & Selection',
  parameters: {
    docs: {
      description: {
        story: `The \`value\` attribute can be used to assign a hidden value, such as a unique identifier, to a menu item. When an item is selected, the \`awc-select\` event will be emitted and a reference to the item will be available at \`event.detail.item\`. You can use this reference to access the selected item's value, its checked state, and more.`
      }
    }
  },
  render: () => html`
      <awc-menu class="menu-value" style="max-width: 200px;">
          <awc-menu-item value="opt-1">Option 1</awc-menu-item>
          <awc-menu-item value="opt-2">Option 2</awc-menu-item>
          <awc-menu-item value="opt-3">Option 3</awc-menu-item>
          <awc-divider></awc-divider>
          <awc-menu-item type="checkbox" value="opt-4">Checkbox 4</awc-menu-item>
          <awc-menu-item type="checkbox" value="opt-5">Checkbox 5</awc-menu-item>
          <awc-menu-item type="checkbox" value="opt-6">Checkbox 6</awc-menu-item>
      </awc-menu>

      <script>
          const menu = document.querySelector('.menu-value');

          menu.addEventListener('awc-select', event => {
              const item = event.detail.item;

              // Log value
              if (item.type === 'checkbox') {
                  console.log(\`Selected value: \${item.value} (\${item.checked ? 'checked' : 'unchecked'})\`);
              } else {
                  console.log(\`Selected value: \${item.value}\`);
              }
          });
      </script>`
};
