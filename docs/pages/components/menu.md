---
meta:
  title: Menu
  description: Menus provide a list of options for the user to choose from.
layout: component
---

You can use [menu items](/components/menu-item), [menu labels](/components/menu-label), and [dividers](/components/divider) to compose a menu. Menus support keyboard interactions, including type-to-select an option.

```html:preview
<awc-menu style="max-width: 200px;">
  <awc-menu-item value="undo">Undo</awc-menu-item>
  <awc-menu-item value="redo">Redo</awc-menu-item>
  <awc-divider></awc-divider>
  <awc-menu-item value="cut">Cut</awc-menu-item>
  <awc-menu-item value="copy">Copy</awc-menu-item>
  <awc-menu-item value="paste">Paste</awc-menu-item>
  <awc-menu-item value="delete">Delete</awc-menu-item>
</awc-menu>
```

{% raw %}

```jsx:react
import { AWCDivider, AWCMenu, AWCMenuItem } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCMenu style={{ maxWidth: '200px' }}>
    <AWCMenuItem value="undo">Undo</AWCMenuItem>
    <AWCMenuItem value="redo">Redo</AWCMenuItem>
    <AWCDivider />
    <AWCMenuItem value="cut">Cut</AWCMenuItem>
    <AWCMenuItem value="copy">Copy</AWCMenuItem>
    <AWCMenuItem value="paste">Paste</AWCMenuItem>
    <AWCMenuItem value="delete">Delete</AWCMenuItem>
  </AWCMenu>
);
```

{% endraw %}

:::tip
Menus are intended for system menus (dropdown menus, select menus, context menus, etc.). They should not be mistaken for navigation menus which serve a different purpose and have a different semantic meaning. If you're building navigation, use `<nav>` and `<a>` elements instead.
:::
