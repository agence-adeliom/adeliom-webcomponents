---
meta:
  title: Divider
  description: Dividers are used to visually separate or group elements.
layout: component
---

```html:preview
<awc-divider></awc-divider>
```

```jsx:react
import { AWCDivider } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCDivider />;
```

## Examples

### Width

Use the `--width` custom property to change the width of the divider.

```html:preview
<awc-divider style="--width: 4px;"></awc-divider>
```

{% raw %}

```jsx:react
import { AWCDivider } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCDivider style={{ '--width': '4px' }} />;
```

{% endraw %}

### Color

Use the `--color` custom property to change the color of the divider.

```html:preview
<awc-divider style="--color: tomato;"></awc-divider>
```

{% raw %}

```jsx:react
import { AWCDivider } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCDivider style={{ '--color': 'tomato' }} />;
```

{% endraw %}

### Spacing

Use the `--spacing` custom property to change the amount of space between the divider and it's neighboring elements.

```html:preview
<div style="text-align: center;">
  Above
  <awc-divider style="--spacing: 2rem;"></awc-divider>
  Below
</div>
```

{% raw %}

```jsx:react
import { AWCDivider } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    Above
    <AWCDivider style={{ '--spacing': '2rem' }} />
    Below
  </>
);
```

{% endraw %}

### Vertical

Add the `vertical` attribute to draw the divider in a vertical orientation. The divider will span the full height of its container. Vertical dividers work especially well inside of a flex container.

```html:preview
<div style="display: flex; align-items: center; height: 2rem;">
  First
  <awc-divider vertical></awc-divider>
  Middle
  <awc-divider vertical></awc-divider>
  Last
</div>
```

{% raw %}

```jsx:react
import { AWCDivider } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      height: '2rem'
    }}
  >
    First
    <AWCDivider vertical />
    Middle
    <AWCDivider vertical />
    Last
  </div>
);
```

{% endraw %}

### Menu Dividers

Use dividers in [menus](/components/menu) to visually group menu items.

```html:preview
<awc-menu style="max-width: 200px;">
  <awc-menu-item value="1">Option 1</awc-menu-item>
  <awc-menu-item value="2">Option 2</awc-menu-item>
  <awc-menu-item value="3">Option 3</awc-menu-item>
  <awc-divider></awc-divider>
  <awc-menu-item value="4">Option 4</awc-menu-item>
  <awc-menu-item value="5">Option 5</awc-menu-item>
  <awc-menu-item value="6">Option 6</awc-menu-item>
</awc-menu>
```

{% raw %}

```jsx:react
import { AWCDivider, AWCMenu, AWCMenuItem } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCMenu style={{ maxWidth: '200px' }}>
    <AWCMenuItem value="1">Option 1</AWCMenuItem>
    <AWCMenuItem value="2">Option 2</AWCMenuItem>
    <AWCMenuItem value="3">Option 3</AWCMenuItem>
    <awc-divider />
    <AWCMenuItem value="4">Option 4</AWCMenuItem>
    <AWCMenuItem value="5">Option 5</AWCMenuItem>
    <AWCMenuItem value="6">Option 6</AWCMenuItem>
  </AWCMenu>
);
```

{% endraw %}
