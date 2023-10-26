---
meta:
  title: Tree
  description: Trees allow you to display a hierarchical list of selectable tree items. Items with children can be expanded and collapsed as desired by the user.
layout: component
---

```html:preview
<awc-tree>
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
```

<!-- prettier-ignore -->
```jsx:react
import { AWCTree, AWCTreeItem } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCTree>
    <AWCTreeItem>
      Deciduous
      <AWCTreeItem>Birch</AWCTreeItem>
      <AWCTreeItem>
        Maple
        <AWCTreeItem>Field maple</AWCTreeItem>
        <AWCTreeItem>Red maple</AWCTreeItem>
        <AWCTreeItem>Sugar maple</AWCTreeItem>
      </AWCTreeItem>
      <AWCTreeItem>Oak</AWCTreeItem>
    </AWCTreeItem>

    <AWCTreeItem>
      Coniferous
      <AWCTreeItem>Cedar</AWCTreeItem>
      <AWCTreeItem>Pine</AWCTreeItem>
      <AWCTreeItem>Spruce</AWCTreeItem>
    </AWCTreeItem>

    <AWCTreeItem>
      Non-trees
      <AWCTreeItem>Bamboo</AWCTreeItem>
      <AWCTreeItem>Cactus</AWCTreeItem>
      <AWCTreeItem>Fern</AWCTreeItem>
    </AWCTreeItem>
  </AWCTree>
);
```

## Examples

### Selection Modes

The `selection` attribute lets you change the selection behavior of the tree.

- Use `single` to allow the selection of a single item (default).
- Use `multiple` to allow the selection of multiple items.
- Use `leaf` to only allow leaf nodes to be selected.

```html:preview
<awc-select id="selection-mode" value="single" label="Selection">
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
</script>
```

<!-- prettier-ignore -->
```jsx:react
import { AWCTree, AWCTreeItem } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => {
  const [selection, setSelection] = useState('single');

  return (
    <>
      <AWCSelect label="Selection" value={selection} onAwcChange={event => setSelection(event.target.value)}>
        <AWCMenuItem value="single">single</AWCMenuItem>
        <AWCMenuItem value="multiple">multiple</AWCMenuItem>
        <AWCMenuItem value="leaf">leaf</AWCMenuItem>
      </AWCSelect>

      <br />

      <AWCTree selection={selection}>
        <AWCTreeItem>
          Item 1
          <AWCTreeItem>
            Item A
            <AWCTreeItem>Item Z</AWCTreeItem>
            <AWCTreeItem>Item Y</AWCTreeItem>
            <AWCTreeItem>Item X</AWCTreeItem>
          </AWCTreeItem>
          <AWCTreeItem>Item B</AWCTreeItem>
          <AWCTreeItem>Item C</AWCTreeItem>
        </AWCTreeItem>
        <AWCTreeItem>Item 2</AWCTreeItem>
        <AWCTreeItem>Item 3</AWCTreeItem>
      </AWCTree>
    </>
  );
};
```

### Showing Indent Guides

Indent guides can be drawn by setting `--indent-guide-width`. You can also change the color, offset, and style, using `--indent-guide-color`, `--indent-guide-style`, and `--indent-guide-offset`, respectively.

```html:preview
<awc-tree class="tree-with-lines">
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
</style>
```

{% raw %}

<!-- prettier-ignore -->
```jsx:react
import { AWCTree, AWCTreeItem } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCTree class="tree-with-lines" style={{ '--indent-guide-width': '1px' }}>
    <AWCTreeItem expanded>
      Deciduous
      <AWCTreeItem>Birch</AWCTreeItem>
      <AWCTreeItem expanded>
        Maple
        <AWCTreeItem>Field maple</AWCTreeItem>
        <AWCTreeItem>Red maple</AWCTreeItem>
        <AWCTreeItem>Sugar maple</AWCTreeItem>
      </AWCTreeItem>
      <AWCTreeItem>Oak</AWCTreeItem>
    </AWCTreeItem>

    <AWCTreeItem>
      Coniferous
      <AWCTreeItem>Cedar</AWCTreeItem>
      <AWCTreeItem>Pine</AWCTreeItem>
      <AWCTreeItem>Spruce</AWCTreeItem>
    </AWCTreeItem>

    <AWCTreeItem>
      Non-trees
      <AWCTreeItem>Bamboo</AWCTreeItem>
      <AWCTreeItem>Cactus</AWCTreeItem>
      <AWCTreeItem>Fern</AWCTreeItem>
    </AWCTreeItem>
  </AWCTree>
);
```

{% endraw %}

### Lazy Loading

Use the `lazy` attribute on a tree item to indicate that the content is not yet present and will be loaded later. When the user tries to expand the node, the `loading` state is set to `true` and the `awc-lazy-load` event will be emitted to allow you to load data asynchronously. The item will remain in a loading state until its content is changed.

If you want to disable this behavior after the first load, simply remove the `lazy` attribute and, on the next expand, the existing content will be shown instead.

```html:preview
<awc-tree>
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
</script>
```

```jsx:react
import { AWCTree, AWCTreeItem } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => {
  const [childItems, setChildItems] = useState([]);
  const [lazy, setLazy] = useState(true);

  const handleLazyLoad = () => {
    // Simulate asynchronous loading
    setTimeout(() => {
      setChildItems(['Birch', 'Cedar', 'Maple', 'Pine']);

      // Disable lazy mode once the content has been loaded
      setLazy(false);
    }, 1000);
  };

  return (
    <AWCTree>
      <AWCTreeItem lazy={lazy} onAwcLazyLoad={handleLazyLoad}>
        Available Trees
        {childItems.map(item => (
          <AWCTreeItem>{item}</AWCTreeItem>
        ))}
      </AWCTreeItem>
    </AWCTree>
  );
};
```

### Customizing the Expand and Collapse Icons

Use the `expand-icon` and `collapse-icon` slots to change the expand and collapse icons, respectively. To disable the animation, override the `rotate` property on the `expand-button` part as shown below.

```html:preview
<awc-tree class="custom-icons">
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
</style>
```

<!-- prettier-ignore -->
```jsx:react
import { AWCTree, AWCTreeItem } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCTree>
    <AWCIcon name="plus-square" slot="expand-icon"></AWCIcon>
    <AWCIcon name="dash-square" slot="collapse-icon"></AWCIcon>

    <AWCTreeItem>
      Deciduous
      <AWCTreeItem>Birch</AWCTreeItem>
      <AWCTreeItem>
        Maple
        <AWCTreeItem>Field maple</AWCTreeItem>
        <AWCTreeItem>Red maple</AWCTreeItem>
        <AWCTreeItem>Sugar maple</AWCTreeItem>
      </AWCTreeItem>
      <AWCTreeItem>Oak</AWCTreeItem>
    </AWCTreeItem>

    <AWCTreeItem>
      Coniferous
      <AWCTreeItem>Cedar</AWCTreeItem>
      <AWCTreeItem>Pine</AWCTreeItem>
      <AWCTreeItem>Spruce</AWCTreeItem>
    </AWCTreeItem>

    <AWCTreeItem>
      Non-trees
      <AWCTreeItem>Bamboo</AWCTreeItem>
      <AWCTreeItem>Cactus</AWCTreeItem>
      <AWCTreeItem>Fern</AWCTreeItem>
    </AWCTreeItem>
  </AWCTree>
);
```

### With Icons

Decorative icons can be used before labels to provide hints for each node.

```html:preview
<awc-tree class="tree-with-icons">
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
</awc-tree>
```

```jsx:react
import { AWCIcon, AWCTree, AWCTreeItem } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => {
  return (
    <AWCTree class="tree-with-icons">
      <AWCTreeItem expanded>
        <AWCIcon name="folder" />
        Root
        <AWCTreeItem>
          <AWCIcon name="folder" />
          Folder 1<AWCTreeItem>
            <AWCIcon name="files" />
            File 1 - 1
          </AWCTreeItem>
          <AWCTreeItem disabled>
            <AWCIcon name="files" />
            File 1 - 2
          </AWCTreeItem>
          <AWCTreeItem>
            <AWCIcon name="files" />
            File 1 - 3
          </AWCTreeItem>
        </AWCTreeItem>
        <AWCTreeItem>
          <AWCIcon name="files" />
          Folder 2<AWCTreeItem>
            <AWCIcon name="files" />
            File 2 - 1
          </AWCTreeItem>
          <AWCTreeItem>
            <AWCIcon name="files" />
            File 2 - 2
          </AWCTreeItem>
        </AWCTreeItem>
        <AWCTreeItem>
          <AWCIcon name="files" />
          File 1
        </AWCTreeItem>
      </AWCTreeItem>
    </AWCTree>
  );
};
```
