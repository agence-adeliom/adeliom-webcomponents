import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCMenu from './menu';
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
        component: `You can use [menu items](/docs/components-menu-item--docs), [menu labels](/docs/components-menu-label--docs), and [dividers](/docs/components-divider--docs) to compose a menu. Menus support keyboard interactions, including type-to-select an option.

> Menus are intended for system menus (dropdown menus, select menus, context menus, etc.). They should not be mistaken for navigation menus which serve a different purpose and have a different semantic meaning. If you're building navigation, use \`<nav>\` and \`<a>\` elements instead.`
      }
    }
  },
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
