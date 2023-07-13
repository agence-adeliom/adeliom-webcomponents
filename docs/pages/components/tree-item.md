---
meta:
  title: Tree Item
  description: A tree item serves as a hierarchical node that lives inside a tree.
layout: component
---

```html:preview
<awc-tree>
  <awc-tree-item>
    Item 1
    <awc-tree-item>Item A</awc-tree-item>
    <awc-tree-item>Item B</awc-tree-item>
    <awc-tree-item>Item C</awc-tree-item>
  </awc-tree-item>
  <awc-tree-item>Item 2</awc-tree-item>
  <awc-tree-item>Item 3</awc-tree-item>
</awc-tree>
```

<!-- prettier-ignore -->
```jsx:react
import { AWCTree, AWCTreeItem } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCTree>
    <AWCTreeItem>
      Item 1
      <AWCTreeItem>Item A</AWCTreeItem>
      <AWCTreeItem>Item B</AWCTreeItem>
      <AWCTreeItem>Item C</AWCTreeItem>
    </AWCTreeItem>
    <AWCTreeItem>Item 2</AWCTreeItem>
    <AWCTreeItem>Item 3</AWCTreeItem>
  </AWCTree>
);
```

## Examples

### Nested tree items

A tree item can contain other tree items. This allows the node to be expanded or collapsed by the user.

```html:preview
<awc-tree>
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
```

<!-- prettier-ignore -->
```jsx:react
import { AWCTree, AWCTreeItem } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCTree>
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
);
```

### Selected

Use the `selected` attribute to select a tree item initially.

```html:preview
<awc-tree>
  <awc-tree-item selected>
    Item 1
    <awc-tree-item>Item A</awc-tree-item>
    <awc-tree-item>Item B</awc-tree-item>
    <awc-tree-item>Item C</awc-tree-item>
  </awc-tree-item>
  <awc-tree-item>Item 2</awc-tree-item>
  <awc-tree-item>Item 3</awc-tree-item>
</awc-tree>
```

<!-- prettier-ignore -->
```jsx:react
import { AWCTree, AWCTreeItem } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCTree>
    <AWCTreeItem selected>
      Item 1
      <AWCTreeItem>Item A</AWCTreeItem>
      <AWCTreeItem>Item B</AWCTreeItem>
      <AWCTreeItem>Item C</AWCTreeItem>
    </AWCTreeItem>
    <AWCTreeItem>Item 2</AWCTreeItem>
    <AWCTreeItem>Item 3</AWCTreeItem>
  </AWCTree>
);
```

### Expanded

Use the `expanded` attribute to expand a tree item initially.

```html:preview
<awc-tree>
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
</awc-tree>
```

<!-- prettier-ignore -->
```jsx:react
import { AWCTree, AWCTreeItem } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCTree>
    <AWCTreeItem expanded>
      Item 1
      <AWCTreeItem expanded>
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
);
```
