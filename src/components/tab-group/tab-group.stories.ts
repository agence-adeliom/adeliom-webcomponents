import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCTabGroup from './tab-group.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCTabGroup>('awc-tab-group');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Tab/Group',
  component: 'awc-tab-group',
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
        component: `Tab groups make use of [tabs](?path=/docs/components-tab--documentation) and [tab panels](?path=/docs/components-tab-panel--documentation). Each tab must be slotted into the \`nav\` slot and its \`panel\` must refer to a tab panel of the same name.`
      }
    }
  },

  render: context => template(context)
} satisfies Meta<AWCTabGroup>;
export default meta;

type Story = StoryObj<AWCTabGroup & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () =>
    html`<awc-tab-group>
      <awc-tab slot="nav" panel="general">General</awc-tab>
      <awc-tab slot="nav" panel="custom">Custom</awc-tab>
      <awc-tab slot="nav" panel="advanced">Advanced</awc-tab>
      <awc-tab slot="nav" panel="disabled" disabled>Disabled</awc-tab>

      <awc-tab-panel name="general">This is the general tab panel.</awc-tab-panel>
      <awc-tab-panel name="custom">This is the custom tab panel.</awc-tab-panel>
      <awc-tab-panel name="advanced">This is the advanced tab panel.</awc-tab-panel>
      <awc-tab-panel name="disabled">This is a disabled tab panel.</awc-tab-panel>
    </awc-tab-group>`
};

export const Bottom: Story = {
  name: 'Tabs on Bottom',
  render: () =>
    html`<awc-tab-group placement="bottom">
      <awc-tab slot="nav" panel="general">General</awc-tab>
      <awc-tab slot="nav" panel="custom">Custom</awc-tab>
      <awc-tab slot="nav" panel="advanced">Advanced</awc-tab>
      <awc-tab slot="nav" panel="disabled" disabled>Disabled</awc-tab>

      <awc-tab-panel name="general">This is the general tab panel.</awc-tab-panel>
      <awc-tab-panel name="custom">This is the custom tab panel.</awc-tab-panel>
      <awc-tab-panel name="advanced">This is the advanced tab panel.</awc-tab-panel>
      <awc-tab-panel name="disabled">This is a disabled tab panel.</awc-tab-panel>
    </awc-tab-group>`,
  parameters: {
    docs: {
      description: {
        story: 'Tabs can be shown on the bottom by setting `placement` to `bottom`.'
      }
    }
  }
};

export const Start: Story = {
  name: 'Tabs on Start',
  render: () =>
    html`<awc-tab-group placement="start">
      <awc-tab slot="nav" panel="general">General</awc-tab>
      <awc-tab slot="nav" panel="custom">Custom</awc-tab>
      <awc-tab slot="nav" panel="advanced">Advanced</awc-tab>
      <awc-tab slot="nav" panel="disabled" disabled>Disabled</awc-tab>

      <awc-tab-panel name="general">This is the general tab panel.</awc-tab-panel>
      <awc-tab-panel name="custom">This is the custom tab panel.</awc-tab-panel>
      <awc-tab-panel name="advanced">This is the advanced tab panel.</awc-tab-panel>
      <awc-tab-panel name="disabled">This is a disabled tab panel.</awc-tab-panel>
    </awc-tab-group>`,
  parameters: {
    docs: {
      description: {
        story: 'Tabs can be shown on the starting side by setting `placement` to `start`.'
      }
    }
  }
};

export const End: Story = {
  name: 'Tabs on End',
  render: () =>
    html`<awc-tab-group placement="end">
      <awc-tab slot="nav" panel="general">General</awc-tab>
      <awc-tab slot="nav" panel="custom">Custom</awc-tab>
      <awc-tab slot="nav" panel="advanced">Advanced</awc-tab>
      <awc-tab slot="nav" panel="disabled" disabled>Disabled</awc-tab>

      <awc-tab-panel name="general">This is the general tab panel.</awc-tab-panel>
      <awc-tab-panel name="custom">This is the custom tab panel.</awc-tab-panel>
      <awc-tab-panel name="advanced">This is the advanced tab panel.</awc-tab-panel>
      <awc-tab-panel name="disabled">This is a disabled tab panel.</awc-tab-panel>
    </awc-tab-group>`,
  parameters: {
    docs: {
      description: {
        story: 'Tabs can be shown on the ending side by setting `placement` to `end`.'
      }
    }
  }
};

export const Closable: Story = {
  name: 'Closable Tabs',
  render: () =>
    html`<awc-tab-group class="tabs-closable">
        <awc-tab slot="nav" panel="general">General</awc-tab>
        <awc-tab slot="nav" panel="closable-1" closable>Closable 1</awc-tab>
        <awc-tab slot="nav" panel="closable-2" closable>Closable 2</awc-tab>
        <awc-tab slot="nav" panel="closable-3" closable>Closable 3</awc-tab>

        <awc-tab-panel name="general">This is the general tab panel.</awc-tab-panel>
        <awc-tab-panel name="closable-1">This is the first closable tab panel.</awc-tab-panel>
        <awc-tab-panel name="closable-2">This is the second closable tab panel.</awc-tab-panel>
        <awc-tab-panel name="closable-3">This is the third closable tab panel.</awc-tab-panel>
      </awc-tab-group>

      <script>
        const tabGroup = document.querySelector('.tabs-closable');

        tabGroup.addEventListener('awc-close', async event => {
          const tab = event.target;
          const panel = tabGroup.querySelector(\`awc-tab-panel[name="\${tab.panel}"]\`);

          // Show the previous tab if the tab is currently active
          if (tab.active) {
            tabGroup.show(tab.previousElementSibling.panel);
          }

          // Remove the tab + panel
          tab.remove();
          panel.remove();
        });
      </script>`,
  parameters: {
    docs: {
      description: {
        story:
          'Add the `closable` attribute to a tab to show a close button. This example shows how you can dynamically remove tabs from the DOM when the close button is activated.'
      }
    }
  }
};

export const Scrolling: Story = {
  name: 'Scrolling Tabs',
  render: () =>
    html`<awc-tab-group>
      <awc-tab slot="nav" panel="tab-1">Tab 1</awc-tab>
      <awc-tab slot="nav" panel="tab-2">Tab 2</awc-tab>
      <awc-tab slot="nav" panel="tab-3">Tab 3</awc-tab>
      <awc-tab slot="nav" panel="tab-4">Tab 4</awc-tab>
      <awc-tab slot="nav" panel="tab-5">Tab 5</awc-tab>
      <awc-tab slot="nav" panel="tab-6">Tab 6</awc-tab>
      <awc-tab slot="nav" panel="tab-7">Tab 7</awc-tab>
      <awc-tab slot="nav" panel="tab-8">Tab 8</awc-tab>
      <awc-tab slot="nav" panel="tab-9">Tab 9</awc-tab>
      <awc-tab slot="nav" panel="tab-10">Tab 10</awc-tab>
      <awc-tab slot="nav" panel="tab-11">Tab 11</awc-tab>
      <awc-tab slot="nav" panel="tab-12">Tab 12</awc-tab>
      <awc-tab slot="nav" panel="tab-13">Tab 13</awc-tab>
      <awc-tab slot="nav" panel="tab-14">Tab 14</awc-tab>
      <awc-tab slot="nav" panel="tab-15">Tab 15</awc-tab>
      <awc-tab slot="nav" panel="tab-16">Tab 16</awc-tab>
      <awc-tab slot="nav" panel="tab-17">Tab 17</awc-tab>
      <awc-tab slot="nav" panel="tab-18">Tab 18</awc-tab>
      <awc-tab slot="nav" panel="tab-19">Tab 19</awc-tab>
      <awc-tab slot="nav" panel="tab-20">Tab 20</awc-tab>

      <awc-tab-panel name="tab-1">Tab panel 1</awc-tab-panel>
      <awc-tab-panel name="tab-2">Tab panel 2</awc-tab-panel>
      <awc-tab-panel name="tab-3">Tab panel 3</awc-tab-panel>
      <awc-tab-panel name="tab-4">Tab panel 4</awc-tab-panel>
      <awc-tab-panel name="tab-5">Tab panel 5</awc-tab-panel>
      <awc-tab-panel name="tab-6">Tab panel 6</awc-tab-panel>
      <awc-tab-panel name="tab-7">Tab panel 7</awc-tab-panel>
      <awc-tab-panel name="tab-8">Tab panel 8</awc-tab-panel>
      <awc-tab-panel name="tab-9">Tab panel 9</awc-tab-panel>
      <awc-tab-panel name="tab-10">Tab panel 10</awc-tab-panel>
      <awc-tab-panel name="tab-11">Tab panel 11</awc-tab-panel>
      <awc-tab-panel name="tab-12">Tab panel 12</awc-tab-panel>
      <awc-tab-panel name="tab-13">Tab panel 13</awc-tab-panel>
      <awc-tab-panel name="tab-14">Tab panel 14</awc-tab-panel>
      <awc-tab-panel name="tab-15">Tab panel 15</awc-tab-panel>
      <awc-tab-panel name="tab-16">Tab panel 16</awc-tab-panel>
      <awc-tab-panel name="tab-17">Tab panel 17</awc-tab-panel>
      <awc-tab-panel name="tab-18">Tab panel 18</awc-tab-panel>
      <awc-tab-panel name="tab-19">Tab panel 19</awc-tab-panel>
      <awc-tab-panel name="tab-20">Tab panel 20</awc-tab-panel>
    </awc-tab-group>`,
  parameters: {
    docs: {
      description: {
        story: 'When there are more tabs than horizontal space allows, the nav will be scrollable.'
      }
    }
  }
};

export const ManualActivation: Story = {
  name: 'Manual Activation',
  render: () =>
    html`<awc-tab-group activation="manual">
      <awc-tab slot="nav" panel="general">General</awc-tab>
      <awc-tab slot="nav" panel="custom">Custom</awc-tab>
      <awc-tab slot="nav" panel="advanced">Advanced</awc-tab>
      <awc-tab slot="nav" panel="disabled" disabled>Disabled</awc-tab>

      <awc-tab-panel name="general">This is the general tab panel.</awc-tab-panel>
      <awc-tab-panel name="custom">This is the custom tab panel.</awc-tab-panel>
      <awc-tab-panel name="advanced">This is the advanced tab panel.</awc-tab-panel>
      <awc-tab-panel name="disabled">This is a disabled tab panel.</awc-tab-panel>
    </awc-tab-group>`,
  parameters: {
    docs: {
      description: {
        story:
          'When focused, keyboard users can press `Left` or `Right` to select the desired tab. By default, the corresponding tab panel will be shown immediately (automatic activation). You can change this behavior by setting `activation="manual"` which will require the user to press `Space` or `Enter` before showing the tab panel (manual activation).'
      }
    }
  }
};
