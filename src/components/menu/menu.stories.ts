/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMenu from './menu.js';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-menu');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Menu',
  component: 'awc-menu',
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
        component: `You can use [menu items](?path=/docs/components-menu-item--documentation), [menu labels](?path=/docs/components-menu-label--documentation), and [dividers](?path=/docs/components-divider--documentation) to compose a menu. Menus support keyboard interactions, including type-to-select an option.

> Menus are intended for system menus (dropdown menus, select menus, context menus, etc.). They should not be mistaken for navigation menus which serve a different purpose and have a different semantic meaning. If you're building navigation, use \`<nav>\` and \`<a>\` elements instead.`
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCMenu & typeof args>;

export default meta;

type Story = StoryObj<AWCMenu & typeof args>;

export const Primary: Story = {
  name: 'Example',
  render: () =>
    html`<awc-menu style="max-width: 200px;">
      <awc-menu-item value="undo">Undo</awc-menu-item>
      <awc-menu-item value="redo">Redo</awc-menu-item>
      <awc-divider></awc-divider>
      <awc-menu-item value="cut">Cut</awc-menu-item>
      <awc-menu-item value="copy">Copy</awc-menu-item>
      <awc-menu-item value="paste">Paste</awc-menu-item>
      <awc-menu-item value="delete">Delete</awc-menu-item>
    </awc-menu>`
};

export const Dropdowns: Story = {
  name: 'In Dropdowns',
  render: () =>
    html`<awc-dropdown>
      <awc-button slot="trigger" caret>Edit</awc-button>
      <awc-menu>
        <awc-menu-item value="cut">Cut</awc-menu-item>
        <awc-menu-item value="copy">Copy</awc-menu-item>
        <awc-menu-item value="paste">Paste</awc-menu-item>
      </awc-menu>
    </awc-dropdown>`,
  parameters: {
    docs: {
      description: {
        story: `Menus work really well when used inside [dropdowns](/?path=/docs/components-dropdown--documentation).`
      }
    }
  }
};

export const Submenus: Story = {
  name: 'Submenus',
  render: () =>
    html`<awc-menu style="max-width: 200px;">
      <awc-menu-item value="undo">Undo</awc-menu-item>
      <awc-menu-item value="redo">Redo</awc-menu-item>
      <awc-divider></awc-divider>
      <awc-menu-item value="cut">Cut</awc-menu-item>
      <awc-menu-item value="copy">Copy</awc-menu-item>
      <awc-menu-item value="paste">Paste</awc-menu-item>
      <awc-divider></awc-divider>
      <awc-menu-item>
        Find
        <awc-menu slot="submenu">
          <awc-menu-item value="find">Find…</awc-menu-item>
          <awc-menu-item value="find-previous">Find Next</awc-menu-item>
          <awc-menu-item value="find-next">Find Previous</awc-menu-item>
        </awc-menu>
      </awc-menu-item>
      <awc-menu-item>
        Transformations
        <awc-menu slot="submenu">
          <awc-menu-item value="uppercase">Make uppercase</awc-menu-item>
          <awc-menu-item value="lowercase">Make lowercase</awc-menu-item>
          <awc-menu-item value="capitalize">Capitalize</awc-menu-item>
        </awc-menu>
      </awc-menu-item>
    </awc-menu>`,
  parameters: {
    docs: {
      description: {
        story: `To create a submenu, nest an \`<awc-menu slot="submenu">\` in any [menu item](/?path=/docs/components-menu-item--documentation).
> 📘 **Tip**
>
> As a UX best practice, avoid using more than one level of submenu when possible.`
      }
    }
  }
};
