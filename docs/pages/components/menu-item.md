---
meta:
  title: Menu Item
  description: Menu items provide options for the user to pick from in a menu.
layout: component
---

```html:preview
<awc-menu style="max-width: 200px;">
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
</awc-menu>
```

{% raw %}

```jsx:react
import { AWCDivider, AWCIcon, AWCMenu, AWCMenuItem } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCMenu style={{ maxWidth: '200px' }}>
    <AWCMenuItem>Option 1</AWCMenuItem>
    <AWCMenuItem>Option 2</AWCMenuItem>
    <AWCMenuItem>Option 3</AWCMenuItem>
    <AWCDivider />
    <AWCMenuItem type="checkbox" checked>
      Checkbox
    </AWCMenuItem>
    <AWCMenuItem disabled>Disabled</AWCMenuItem>
    <AWCDivider />
    <AWCMenuItem>
      Prefix Icon
      <AWCIcon slot="prefix" name="gift" />
    </AWCMenuItem>
    <AWCMenuItem>
      Suffix Icon
      <AWCIcon slot="suffix" name="heart" />
    </AWCMenuItem>
  </AWCMenu>
);
```

{% endraw %}

## Examples

### Disabled

Add the `disabled` attribute to disable the menu item so it cannot be selected.

```html:preview
<awc-menu style="max-width: 200px;">
  <awc-menu-item>Option 1</awc-menu-item>
  <awc-menu-item disabled>Option 2</awc-menu-item>
  <awc-menu-item>Option 3</awc-menu-item>
</awc-menu>
```

{% raw %}

```jsx:react
import { AWCMenu, AWCMenuItem } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCMenu style={{ maxWidth: '200px' }}>
    <AWCMenuItem>Option 1</AWCMenuItem>
    <AWCMenuItem disabled>Option 2</AWCMenuItem>
    <AWCMenuItem>Option 3</AWCMenuItem>
  </AWCMenu>
);
```

{% endraw %}

### Prefix & Suffix

Add content to the start and end of menu items using the `prefix` and `suffix` slots.

```html:preview
<awc-menu style="max-width: 200px;">
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
</awc-menu>
```

{% raw %}

```jsx:react
import { AWCBadge, AWCDivider, AWCIcon, AWCMenu, AWCMenuItem } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCMenu style={{ maxWidth: '200px' }}>
    <AWCMenuItem>
      <AWCIcon slot="prefix" name="house" />
      Home
    </AWCMenuItem>

    <AWCMenuItem>
      <AWCIcon slot="prefix" name="envelope" />
      Messages
      <AWCBadge slot="suffix" variant="primary" pill>
        12
      </AWCBadge>
    </AWCMenuItem>

    <AWCDivider />

    <AWCMenuItem>
      <AWCIcon slot="prefix" name="gear" />
      Settings
    </AWCMenuItem>
  </AWCMenu>
);
```

{% endraw %}

### Checkbox Menu Items

Set the `type` attribute to `checkbox` to create a menu item that will toggle on and off when selected. You can use the `checked` attribute to set the initial state.

Checkbox menu items are visually indistinguishable from regular menu items. Their ability to be toggled is primarily inferred from context, much like you'd find in the menu of a native app.

```html:preview
<awc-menu style="max-width: 200px;">
  <awc-menu-item type="checkbox">Autosave</awc-menu-item>
  <awc-menu-item type="checkbox" checked>Check Spelling</awc-menu-item>
  <awc-menu-item type="checkbox">Word Wrap</awc-menu-item>
</awc-menu>
```

{% raw %}

```jsx:react
import { AWCMenu, AWCMenuItem } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCMenu style={{ maxWidth: '200px' }}>
    <AWCMenuItem type="checkbox">Autosave</AWCMenuItem>
    <AWCMenuItem type="checkbox" checked>
      Check Spelling
    </AWCMenuItem>
    <AWCMenuItem type="checkbox">Word Wrap</AWCMenuItem>
  </AWCMenu>
);
```

{% endraw %}

### Value & Selection

The `value` attribute can be used to assign a hidden value, such as a unique identifier, to a menu item. When an item is selected, the `awc-select` event will be emitted and a reference to the item will be available at `event.detail.item`. You can use this reference to access the selected item's value, its checked state, and more.

```html:preview
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
      console.log(`Selected value: ${item.value} (${item.checked ? 'checked' : 'unchecked'})`);
    } else {
      console.log(`Selected value: ${item.value}`);
    }
  });
</script>
```

{% raw %}

```jsx:react
import { AWCMenu, AWCMenuItem } from '@agence-adeliom/awc/dist/react';

const App = () => {
  function handleSelect(event) {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  }

  return (
    <AWCMenu style={{ maxWidth: '200px' }} onAwcSelect={handleSelect}>
      <AWCMenuItem value="opt-1">Option 1</AWCMenuItem>
      <AWCMenuItem value="opt-2">Option 2</AWCMenuItem>
      <AWCMenuItem value="opt-3">Option 3</AWCMenuItem>
    </AWCMenu>
  );
};
```

{% endraw %}
