import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCTreeItem from './tree-item';
import {html} from "lit";
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-tree-item');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Tree/Item',
  component: 'awc-tree-item',
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
} satisfies Meta<AWCTreeItem & typeof args>;

export default meta;

type Story = StoryObj<AWCTreeItem & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () => html`<awc-tree>
    <awc-tree-item>
        Item 1
        <awc-tree-item>Item A</awc-tree-item>
        <awc-tree-item>Item B</awc-tree-item>
        <awc-tree-item>Item C</awc-tree-item>
    </awc-tree-item>
    <awc-tree-item>Item 2</awc-tree-item>
    <awc-tree-item>Item 3</awc-tree-item>
</awc-tree>`
};

export const Nested: Story = {
  name: 'Nested tree items',
  render: () => html`<awc-tree>
      <awc-tree-item>
          Item 1
          <awc-tree-item>
              Item A
              <awc-tree-item>Item Z</awc-tree-item>
              <awc-tree-item>Item Y</awc-tree-item>
              <awc-tree-item>Item X</awc-tree-item>
          </awc-tree-item>
          <awc-tree-item>Item B</awc-tree-item>
          <awc-tree-item>Item C</awc-tree-item>
      </awc-tree-item>
      <awc-tree-item>Item 2</awc-tree-item>
      <awc-tree-item>Item 3</awc-tree-item>
  </awc-tree>`,
  parameters: {
    docs: {
      description: {
        story: "A tree item can contain other tree items. This allows the node to be expanded or collapsed by the user."
      }
    }
  }
};

export const Selected: Story = {
  name: 'Selected',
  render: () => html`<awc-tree>
      <awc-tree-item selected>
          Item 1
          <awc-tree-item>Item A</awc-tree-item>
          <awc-tree-item>Item B</awc-tree-item>
          <awc-tree-item>Item C</awc-tree-item>
      </awc-tree-item>
      <awc-tree-item>Item 2</awc-tree-item>
      <awc-tree-item>Item 3</awc-tree-item>
  </awc-tree>`,
  parameters: {
    docs: {
      description: {
        story: "Use the `selected` attribute to select a tree item initially."
      }
    }
  }
};

export const Expanded: Story = {
  name: 'Expanded',
  render: () => html`<awc-tree>
    <awc-tree-item expanded>
        Item 1
        <awc-tree-item expanded>
            Item A
            <awc-tree-item>Item Z</awc-tree-item>
            <awc-tree-item>Item Y</awc-tree-item>
            <awc-tree-item>Item X</awc-tree-item>
        </awc-tree-item>
        <awc-tree-item>Item B</awc-tree-item>
        <awc-tree-item>Item C</awc-tree-item>
    </awc-tree-item>
    <awc-tree-item>Item 2</awc-tree-item>
    <awc-tree-item>Item 3</awc-tree-item>
</awc-tree>`,
  parameters: {
    docs: {
      description: {
        story: "Use the `expanded` attribute to expand a tree item initially"
      }
    }
  }
};
