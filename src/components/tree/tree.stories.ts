import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCTree from './tree.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCTree>('awc-tree');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Tree',
  component: 'awc-tree',
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
} satisfies Meta<AWCTree>;

export default meta;

type Story = StoryObj<AWCTree & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () =>
    html`<awc-tree>
      <awc-tree-item>
        Deciduous
        <awc-tree-item>Birch</awc-tree-item>
        <awc-tree-item>
          Maple
          <awc-tree-item>Field maple</awc-tree-item>
          <awc-tree-item>Red maple</awc-tree-item>
          <awc-tree-item>Sugar maple</awc-tree-item>
        </awc-tree-item>
        <awc-tree-item>Oak</awc-tree-item>
      </awc-tree-item>

      <awc-tree-item>
        Coniferous
        <awc-tree-item>Cedar</awc-tree-item>
        <awc-tree-item>Pine</awc-tree-item>
        <awc-tree-item>Spruce</awc-tree-item>
      </awc-tree-item>

      <awc-tree-item>
        Non-trees
        <awc-tree-item>Bamboo</awc-tree-item>
        <awc-tree-item>Cactus</awc-tree-item>
        <awc-tree-item>Fern</awc-tree-item>
      </awc-tree-item>
    </awc-tree>`
};

export const SelectionModes: Story = {
  name: 'Selection Modes',
  render: () =>
    html`<awc-select id="selection-mode" value="single" label="Selection">
        <awc-option value="single">Single</awc-option>
        <awc-option value="multiple">Multiple</awc-option>
        <awc-option value="leaf">Leaf</awc-option>
      </awc-select>

      <br />

      <awc-tree class="tree-selectable">
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
      </awc-tree>

      <script>
        const selectionMode = document.querySelector('#selection-mode');
        const tree = document.querySelector('.tree-selectable');

        selectionMode.addEventListener('awc-change', () => {
          tree.querySelectorAll('awc-tree-item').forEach(item => (item.selected = false));
          tree.selection = selectionMode.value;
        });
      </script>`,
  parameters: {
    docs: {
      description: {
        story: `The \`selection\` attribute lets you change the selection behavior of the tree.

- Use \`single\` to allow the selection of a single item (default).
- Use \`multiple\` to allow the selection of multiple items.
- Use \`leaf\` to only allow leaf nodes to be selected.`
      }
    }
  }
};

export const IndentGuides: Story = {
  name: 'Showing Indent Guides',
  render: () =>
    html`<awc-tree class="tree-with-lines">
        <awc-tree-item expanded>
          Deciduous
          <awc-tree-item>Birch</awc-tree-item>
          <awc-tree-item expanded>
            Maple
            <awc-tree-item>Field maple</awc-tree-item>
            <awc-tree-item>Red maple</awc-tree-item>
            <awc-tree-item>Sugar maple</awc-tree-item>
          </awc-tree-item>
          <awc-tree-item>Oak</awc-tree-item>
        </awc-tree-item>

        <awc-tree-item>
          Coniferous
          <awc-tree-item>Cedar</awc-tree-item>
          <awc-tree-item>Pine</awc-tree-item>
          <awc-tree-item>Spruce</awc-tree-item>
        </awc-tree-item>

        <awc-tree-item>
          Non-trees
          <awc-tree-item>Bamboo</awc-tree-item>
          <awc-tree-item>Cactus</awc-tree-item>
          <awc-tree-item>Fern</awc-tree-item>
        </awc-tree-item>
      </awc-tree>

      <style>
        .tree-with-lines {
          --indent-guide-width: 1px;
        }
      </style>`,
  parameters: {
    docs: {
      description: {
        story:
          'Indent guides can be drawn by setting `--indent-guide-width`. You can also change the color, offset, and style, using `--indent-guide-color`, `--indent-guide-style`, and `--indent-guide-offset`, respectively.'
      }
    }
  }
};

export const LazyLoading: Story = {
  name: 'Lazy Loading',
  render: () =>
    html`<awc-tree>
        <awc-tree-item lazy>Available Trees</awc-tree-item>
      </awc-tree>

      <script type="module">
        const lazyItem = document.querySelector('awc-tree-item[lazy]');

        lazyItem.addEventListener('awc-lazy-load', () => {
          // Simulate asynchronous loading
          setTimeout(() => {
            const subItems = ['Birch', 'Cedar', 'Maple', 'Pine'];

            for (const item of subItems) {
              const treeItem = document.createElement('awc-tree-item');
              treeItem.innerText = item;
              lazyItem.append(treeItem);
            }

            // Disable lazy mode once the content has been loaded
            lazyItem.lazy = false;
          }, 1000);
        });
      </script>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`lazy\` attribute on a tree item to indicate that the content is not yet present and will be loaded later. When the user tries to expand the node, the \`loading\` state is set to \`true\` and the \`awc-lazy-load\` event will be emitted to allow you to load data asynchronously. The item will remain in a loading state until its content is changed.

If you want to disable this behavior after the first load, simply remove the \`lazy\` attribute and, on the next expand, the existing content will be shown instead.`
      }
    }
  }
};

export const CustomizingIcons: Story = {
  name: 'Customizing the Expand and Collapse Icons',
  render: () =>
    html`<awc-tree class="custom-icons">
        <awc-icon name="plus-square" slot="expand-icon"></awc-icon>
        <awc-icon name="dash-square" slot="collapse-icon"></awc-icon>

        <awc-tree-item>
          Deciduous
          <awc-tree-item>Birch</awc-tree-item>
          <awc-tree-item>
            Maple
            <awc-tree-item>Field maple</awc-tree-item>
            <awc-tree-item>Red maple</awc-tree-item>
            <awc-tree-item>Sugar maple</awc-tree-item>
          </awc-tree-item>
          <awc-tree-item>Oak</awc-tree-item>
        </awc-tree-item>

        <awc-tree-item>
          Coniferous
          <awc-tree-item>Cedar</awc-tree-item>
          <awc-tree-item>Pine</awc-tree-item>
          <awc-tree-item>Spruce</awc-tree-item>
        </awc-tree-item>

        <awc-tree-item>
          Non-trees
          <awc-tree-item>Bamboo</awc-tree-item>
          <awc-tree-item>Cactus</awc-tree-item>
          <awc-tree-item>Fern</awc-tree-item>
        </awc-tree-item>
      </awc-tree>

      <style>
        .custom-icons awc-tree-item::part(expand-button) {
          /* Disable the expand/collapse animation */
          rotate: none;
        }
      </style>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`expand-icon\` and \`collapse-icon\` slots to change the expand and collapse icons, respectively. To disable the animation, override the \`rotate\` property on the \`expand-button\` part as shown below.`
      }
    }
  }
};

export const WithIcons: Story = {
  name: 'With Icons',
  render: () =>
    html`<awc-tree class="tree-with-icons">
      <awc-tree-item expanded>
        <awc-icon name="folder"></awc-icon>
        Documents

        <awc-tree-item>
          <awc-icon name="folder"> </awc-icon>
          Photos
          <awc-tree-item>
            <awc-icon name="image"></awc-icon>
            birds.jpg
          </awc-tree-item>
          <awc-tree-item>
            <awc-icon name="image"></awc-icon>
            kitten.jpg
          </awc-tree-item>
          <awc-tree-item>
            <awc-icon name="image"></awc-icon>
            puppy.jpg
          </awc-tree-item>
        </awc-tree-item>

        <awc-tree-item>
          <awc-icon name="folder"></awc-icon>
          Writing
          <awc-tree-item>
            <awc-icon name="file"></awc-icon>
            draft.txt
          </awc-tree-item>
          <awc-tree-item>
            <awc-icon name="file-pdf"></awc-icon>
            final.pdf
          </awc-tree-item>
          <awc-tree-item>
            <awc-icon name="file-bar-graph"></awc-icon>
            sales.xls
          </awc-tree-item>
        </awc-tree-item>
      </awc-tree-item>
    </awc-tree>`,
  parameters: {
    docs: {
      description: {
        story: `Decorative icons can be used before labels to provide hints for each node.`
      }
    }
  }
};
