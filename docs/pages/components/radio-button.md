---
meta:
  title: Radio Button
  description: Radios buttons allow the user to select a single option from a group using a button-like control.
layout: component
---

Radio buttons are designed to be used with [radio groups](/components/radio-group). When a radio button has focus, the arrow keys can be used to change the selected option just like standard radio controls.

```html:preview
<awc-radio-group label="Select an option" name="a" value="1">
  <awc-radio-button value="1">Option 1</awc-radio-button>
  <awc-radio-button value="2">Option 2</awc-radio-button>
  <awc-radio-button value="3">Option 3</awc-radio-button>
</awc-radio-group>
```

```jsx:react
import { AWCRadioButton, AWCRadioGroup } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCRadioGroup label="Select an option" name="a" value="1">
    <AWCRadioButton value="1">Option 1</AWCRadioButton>
    <AWCRadioButton value="2">Option 2</AWCRadioButton>
    <AWCRadioButton value="3">Option 3</AWCRadioButton>
  </AWCRadioGroup>
);
```

## Examples

### Checked States

To set the initial value and checked state, use the `value` attribute on the containing radio group.

```html:preview
<awc-radio-group label="Select an option" name="a" value="1">
  <awc-radio-button value="1">Option 1</awc-radio-button>
  <awc-radio-button value="2">Option 2</awc-radio-button>
  <awc-radio-button value="3">Option 3</awc-radio-button>
</awc-radio-group>
```

```jsx:react
import { AWCRadioButton, AWCRadioGroup } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCRadioGroup label="Select an option" name="a" value="1">
    <AWCRadioButton value="1">Option 1</AWCRadioButton>
    <AWCRadioButton value="2">Option 2</AWCRadioButton>
    <AWCRadioButton value="3">Option 3</AWCRadioButton>
  </AWCRadioGroup>
);
```

### Disabled

Use the `disabled` attribute to disable a radio button.

```html:preview
<awc-radio-group label="Select an option" name="a" value="1">
  <awc-radio-button value="1">Option 1</awc-radio-button>
  <awc-radio-button value="2" disabled>Option 2</awc-radio-button>
  <awc-radio-button value="3">Option 3</awc-radio-button>
</awc-radio-group>
```

```jsx:react
import { AWCRadioButton, AWCRadioGroup } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCRadioGroup label="Select an option" name="a" value="1">
    <AWCRadioButton value="1">Option 1</AWCRadioButton>
    <AWCRadioButton value="2" disabled>
      Option 2
    </AWCRadioButton>
    <AWCRadioButton value="3">Option 3</AWCRadioButton>
  </AWCRadioGroup>
);
```

### Sizes

Use the `size` attribute to change a radio button's size.

```html:preview
<awc-radio-group label="Select an option" name="a" value="1">
  <awc-radio-button size="small" value="1">Option 1</awc-radio-button>
  <awc-radio-button size="small" value="2">Option 2</awc-radio-button>
  <awc-radio-button size="small" value="3">Option 3</awc-radio-button>
</awc-radio-group>

<br />

<awc-radio-group label="Select an option" name="a" value="1">
  <awc-radio-button size="medium" value="1">Option 1</awc-radio-button>
  <awc-radio-button size="medium" value="2">Option 2</awc-radio-button>
  <awc-radio-button size="medium" value="3">Option 3</awc-radio-button>
</awc-radio-group>

<br />

<awc-radio-group label="Select an option" name="a" value="1">
  <awc-radio-button size="large" value="1">Option 1</awc-radio-button>
  <awc-radio-button size="large" value="2">Option 2</awc-radio-button>
  <awc-radio-button size="large" value="3">Option 3</awc-radio-button>
</awc-radio-group>
```

```jsx:react
import { AWCRadioButton, AWCRadioGroup } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCRadioGroup label="Select an option" name="a" value="1">
    <AWCRadioButton size="small" value="1">Option 1</AWCRadioButton>
    <AWCRadioButton size="small" value="2">Option 2</AWCRadioButton>
    <AWCRadioButton size="small" value="3">Option 3</AWCRadioButton>
  </AWCRadioGroup>

  <br />

  <AWCRadioGroup label="Select an option" name="a" value="1">
    <AWCRadioButton size="medium" value="1">Option 1</AWCRadioButton>
    <AWCRadioButton size="medium" value="2">Option 2</AWCRadioButton>
    <AWCRadioButton size="medium" value="3">Option 3</AWCRadioButton>
  </AWCRadioGroup>

  <br />

  <AWCRadioGroup label="Select an option" name="a" value="1">
    <AWCRadioButton size="large" value="1">Option 1</AWCRadioButton>
    <AWCRadioButton size="large" value="2">Option 2</AWCRadioButton>
    <AWCRadioButton size="large" value="3">Option 3</AWCRadioButton>
  </AWCRadioGroup>
);
```

### Pill Buttons

Use the `pill` attribute to give radio buttons rounded edges.

```html:preview
<awc-radio-group label="Select an option" name="a" value="1">
  <awc-radio-button pill size="small" value="1">Option 1</awc-radio-button>
  <awc-radio-button pill size="small" value="2">Option 2</awc-radio-button>
  <awc-radio-button pill size="small" value="3">Option 3</awc-radio-button>
</awc-radio-group>

<br />

<awc-radio-group label="Select an option" name="a" value="1">
  <awc-radio-button pill size="medium" value="1">Option 1</awc-radio-button>
  <awc-radio-button pill size="medium" value="2">Option 2</awc-radio-button>
  <awc-radio-button pill size="medium" value="3">Option 3</awc-radio-button>
</awc-radio-group>

<br />

<awc-radio-group label="Select an option" name="a" value="1">
  <awc-radio-button pill size="large" value="1">Option 1</awc-radio-button>
  <awc-radio-button pill size="large" value="2">Option 2</awc-radio-button>
  <awc-radio-button pill size="large" value="3">Option 3</awc-radio-button>
</awc-radio-group>
```

```jsx:react
import { AWCRadioButton, AWCRadioGroup } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCRadioGroup label="Select an option" name="a" value="1">
    <AWCRadioButton pill size="small" value="1">Option 1</AWCRadioButton>
    <AWCRadioButton pill size="small" value="2">Option 2</AWCRadioButton>
    <AWCRadioButton pill size="small" value="3">Option 3</AWCRadioButton>
  </AWCRadioGroup>

  <br />

  <AWCRadioGroup label="Select an option" name="a" value="1">
    <AWCRadioButton pill size="medium" value="1">Option 1</AWCRadioButton>
    <AWCRadioButton pill size="medium" value="2">Option 2</AWCRadioButton>
    <AWCRadioButton pill size="medium" value="3">Option 3</AWCRadioButton>
  </AWCRadioGroup>

  <br />

  <AWCRadioGroup label="Select an option" name="a" value="1">
    <AWCRadioButton pill size="large" value="1">Option 1</AWCRadioButton>
    <AWCRadioButton pill size="large" value="2">Option 2</AWCRadioButton>
    <AWCRadioButton pill size="large" value="3">Option 3</AWCRadioButton>
  </AWCRadioGroup>
);
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html:preview
<awc-radio-group label="Select an option" name="a" value="1">
  <awc-radio-button value="1">
    <awc-icon slot="prefix" name="archive"></awc-icon>
    Option 1
  </awc-radio-button>

  <awc-radio-button value="2">
    <awc-icon slot="suffix" name="bag"></awc-icon>
    Option 2
  </awc-radio-button>

  <awc-radio-button value="3">
    <awc-icon slot="prefix" name="gift"></awc-icon>
    <awc-icon slot="suffix" name="cart"></awc-icon>
    Option 3
  </awc-radio-button>
</awc-radio-group>
```

```jsx:react
import { AWCIcon, AWCRadioButton, AWCRadioGroup } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCRadioGroup label="Select an option" name="a" value="1">
    <AWCRadioButton value="1">
      <AWCIcon slot="prefix" name="archive" />
      Option 1
    </AWCRadioButton>

    <AWCRadioButton value="2">
      <AWCIcon slot="suffix" name="bag" />
      Option 2
    </AWCRadioButton>

    <AWCRadioButton value="3">
      <AWCIcon slot="prefix" name="gift" />
      <AWCIcon slot="suffix" name="cart" />
      Option 3
    </AWCRadioButton>
  </AWCRadioGroup>
);
```

### Buttons with Icons

You can omit button labels and use icons instead. Make sure to set a `label` attribute on each icon so screen readers will announce each option correctly.

```html:preview
<awc-radio-group label="Select an option" name="a" value="neutral">
  <awc-radio-button value="angry">
    <awc-icon name="emoji-angry" label="Angry"></awc-icon>
  </awc-radio-button>

  <awc-radio-button value="sad">
    <awc-icon name="emoji-frown" label="Sad"></awc-icon>
  </awc-radio-button>

  <awc-radio-button value="neutral">
    <awc-icon name="emoji-neutral" label="Neutral"></awc-icon>
  </awc-radio-button>

  <awc-radio-button value="happy">
    <awc-icon name="emoji-smile" label="Happy"></awc-icon>
  </awc-radio-button>

  <awc-radio-button value="laughing">
    <awc-icon name="emoji-laughing" label="Laughing"></awc-icon>
  </awc-radio-button>
</awc-radio-group>
```

```jsx:react
import { AWCIcon, AWCRadioButton, AWCRadioGroup } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCRadioGroup label="Select an option" name="a" value="neutral">
    <AWCRadioButton value="angry">
      <AWCIcon name="emoji-angry" label="Angry" />
    </AWCRadioButton>

    <AWCRadioButton value="sad">
      <AWCIcon name="emoji-frown" label="Sad" />
    </AWCRadioButton>

    <AWCRadioButton value="neutral">
      <AWCIcon name="emoji-neutral" label="Neutral" />
    </AWCRadioButton>

    <AWCRadioButton value="happy">
      <AWCIcon name="emoji-smile" label="Happy" />
    </AWCRadioButton>

    <AWCRadioButton value="laughing">
      <AWCIcon name="emoji-laughing" label="Laughing" />
    </AWCRadioButton>
  </AWCRadioGroup>
);
```
