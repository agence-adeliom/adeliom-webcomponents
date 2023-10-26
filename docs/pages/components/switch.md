---
meta:
  title: Switch
  description: Switches allow the user to toggle an option on or off.
layout: component
---

```html:preview
<awc-switch>Switch</awc-switch>
```

```jsx:react
import { AWCSwitch } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => <AWCSwitch>Switch</AWCSwitch>;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Checked

Use the `checked` attribute to activate the switch.

```html:preview
<awc-switch checked>Checked</awc-switch>
```

```jsx:react
import { AWCSwitch } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => <AWCSwitch checked>Checked</AWCSwitch>;
```

### Disabled

Use the `disabled` attribute to disable the switch.

```html:preview
<awc-switch disabled>Disabled</awc-switch>
```

```jsx:react
import { AWCSwitch } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => <AWCSwitch disabled>Disabled</AWCSwitch>;
```

### Sizes

Use the `size` attribute to change a switch's size.

```html:preview
<awc-switch size="small">Small</awc-switch>
<br />
<awc-switch size="medium">Medium</awc-switch>
<br />
<awc-switch size="large">Large</awc-switch>
```

```jsx:react
import { AWCSwitch } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    <AWCSwitch size="small">Small</AWCSwitch>
    <br />
    <AWCSwitch size="medium">Medium</AWCSwitch>
    <br />
    <AWCSwitch size="large">Large</AWCSwitch>
  </>
);
```

### Custom Styles

Use the available custom properties to change how the switch is styled.

```html:preview
<awc-switch style="--width: 80px; --height: 40px; --thumb-size: 36px;">Really big</awc-switch>
```

{% raw %}

```jsx:react
import { AWCSwitch } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCSwitch
    style={{
      '--width': '80px',
      '--height': '32px',
      '--thumb-size': '26px'
    }}
  />
);
```

{% endraw %}
