---
meta:
  title: Menu Label
  description: Menu labels are used to describe a group of menu items.
layout: component
---

```html:preview
<awc-menu style="max-width: 200px;">
  <awc-menu-label>Fruits</awc-menu-label>
  <awc-menu-item value="apple">Apple</awc-menu-item>
  <awc-menu-item value="banana">Banana</awc-menu-item>
  <awc-menu-item value="orange">Orange</awc-menu-item>
  <awc-divider></awc-divider>
  <awc-menu-label>Vegetables</awc-menu-label>
  <awc-menu-item value="broccoli">Broccoli</awc-menu-item>
  <awc-menu-item value="carrot">Carrot</awc-menu-item>
  <awc-menu-item value="zucchini">Zucchini</awc-menu-item>
</awc-menu>
```

{% raw %}

```jsx:react
import { AWCDivider, AWCMenu, AWCMenuLabel, AWCMenuItem } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCMenu style={{ maxWidth: '200px' }}>
    <AWCMenuLabel>Fruits</AWCMenuLabel>
    <AWCMenuItem value="apple">Apple</AWCMenuItem>
    <AWCMenuItem value="banana">Banana</AWCMenuItem>
    <AWCMenuItem value="orange">Orange</AWCMenuItem>
    <AWCDivider />
    <AWCMenuLabel>Vegetables</AWCMenuLabel>
    <AWCMenuItem value="broccoli">Broccoli</AWCMenuItem>
    <AWCMenuItem value="carrot">Carrot</AWCMenuItem>
    <AWCMenuItem value="zucchini">Zucchini</AWCMenuItem>
  </AWCMenu>
);
```

{% endraw %}
