---
meta:
  title: Select
  description: Selects allow you to choose items from a menu of predefined options.
layout: component
---

```html:preview
<awc-select>
  <awc-option value="option-1">Option 1</awc-option>
  <awc-option value="option-2">Option 2</awc-option>
  <awc-option value="option-3">Option 3</awc-option>
  <awc-option value="option-4">Option 4</awc-option>
  <awc-option value="option-5">Option 5</awc-option>
  <awc-option value="option-6">Option 6</awc-option>
</awc-select>
```

```jsx:react
import { AWCOption, AWCSelect } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCSelect>
    <AWCOption value="option-1">Option 1</AWCOption>
    <AWCOption value="option-2">Option 2</AWCOption>
    <AWCOption value="option-3">Option 3</AWCOption>
    <AWCOption value="option-4">Option 4</AWCOption>
    <AWCOption value="option-5">Option 5</AWCOption>
    <AWCOption value="option-6">Option 6</AWCOption>
  </AWCSelect>
);
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Labels

Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.

```html:preview
<awc-select label="Select one">
  <awc-option value="option-1">Option 1</awc-option>
  <awc-option value="option-2">Option 2</awc-option>
  <awc-option value="option-3">Option 3</awc-option>
</awc-select>
```

```jsx:react
import { AWCOption, AWCSelect } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCSelect label="Select one">
    <AWCOption value="option-1">Option 1</AWCOption>
    <AWCOption value="option-2">Option 2</AWCOption>
    <AWCOption value="option-3">Option 3</AWCOption>
  </AWCSelect>
);
```

### Help Text

Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<awc-select label="Experience" help-text="Please tell us your skill level.">
  <awc-option value="1">Novice</awc-option>
  <awc-option value="2">Intermediate</awc-option>
  <awc-option value="3">Advanced</awc-option>
</awc-select>
```

```jsx:react
import { AWCOption, AWCSelect } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCSelect label="Experience" help-text="Please tell us your skill level.">
    <AWCOption value="1">Novice</AWCOption>
    <AWCOption value="2">Intermediate</AWCOption>
    <AWCOption value="3">Advanced</AWCOption>
  </AWCSelect>
);
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html:preview
<awc-select placeholder="Select one">
  <awc-option value="option-1">Option 1</awc-option>
  <awc-option value="option-2">Option 2</awc-option>
  <awc-option value="option-3">Option 3</awc-option>
</awc-select>
```

```jsx:react
import { AWCOption, AWCSelect } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCSelect placeholder="Select one">
    <AWCOption value="option-1">Option 1</AWCOption>
    <AWCOption value="option-2">Option 2</AWCOption>
    <AWCOption value="option-3">Option 3</AWCOption>
  </AWCSelect>
);
```

### Clearable

Use the `clearable` attribute to make the control clearable. The clear button only appears when an option is selected.

```html:preview
<awc-select clearable value="option-1">
  <awc-option value="option-1">Option 1</awc-option>
  <awc-option value="option-2">Option 2</awc-option>
  <awc-option value="option-3">Option 3</awc-option>
</awc-select>
```

```jsx:react
import { AWCOption, AWCSelect } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCSelect placeholder="Clearable" clearable>
    <AWCOption value="option-1">Option 1</AWCOption>
    <AWCOption value="option-2">Option 2</AWCOption>
    <AWCOption value="option-3">Option 3</AWCOption>
  </AWCSelect>
);
```

### Filled Selects

Add the `filled` attribute to draw a filled select.

```html:preview
<awc-select filled>
  <awc-option value="option-1">Option 1</awc-option>
  <awc-option value="option-2">Option 2</awc-option>
  <awc-option value="option-3">Option 3</awc-option>
</awc-select>
```

```jsx:react
import { AWCOption, AWCSelect } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCSelect filled>
    <AWCOption value="option-1">Option 1</AWCOption>
    <AWCOption value="option-2">Option 2</AWCOption>
    <AWCOption value="option-3">Option 3</AWCOption>
  </AWCSelect>
);
```

### Pill

Use the `pill` attribute to give selects rounded edges.

```html:preview
<awc-select pill>
  <awc-option value="option-1">Option 1</awc-option>
  <awc-option value="option-2">Option 2</awc-option>
  <awc-option value="option-3">Option 3</awc-option>
</awc-select>
```

```jsx:react
import { AWCOption, AWCSelect } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCSelect pill>
    <AWCOption value="option-1">Option 1</AWCOption>
    <AWCOption value="option-2">Option 2</AWCOption>
    <AWCOption value="option-3">Option 3</AWCOption>
  </AWCSelect>
);
```

### Disabled

Use the `disabled` attribute to disable a select.

```html:preview
<awc-select placeholder="Disabled" disabled>
  <awc-option value="option-1">Option 1</awc-option>
  <awc-option value="option-2">Option 2</awc-option>
  <awc-option value="option-3">Option 3</awc-option>
</awc-select>
```

```jsx:react
import { AWCOption, AWCSelect } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCSelect placeholder="Disabled" disabled>
    <AWCOption value="option-1">Option 1</AWCOption>
    <AWCOption value="option-2">Option 2</AWCOption>
    <AWCOption value="option-3">Option 3</AWCOption>
  </AWCSelect>
);
```

### Multiple

To allow multiple options to be selected, use the `multiple` attribute. It's a good practice to use `clearable` when this option is enabled. To set multiple values at once, set `value` to a space-delimited list of values.

```html:preview
<awc-select label="Select a Few" value="option-1 option-2 option-3" multiple clearable>
  <awc-option value="option-1">Option 1</awc-option>
  <awc-option value="option-2">Option 2</awc-option>
  <awc-option value="option-3">Option 3</awc-option>
  <awc-option value="option-4">Option 4</awc-option>
  <awc-option value="option-5">Option 5</awc-option>
  <awc-option value="option-6">Option 6</awc-option>
</awc-select>
```

```jsx:react
import { AWCOption, AWCSelect } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCSelect label="Select a Few" value="option-1 option-2 option-3" multiple clearable>
    <AWCOption value="option-1">Option 1</AWCOption>
    <AWCOption value="option-2">Option 2</AWCOption>
    <AWCOption value="option-3">Option 3</AWCOption>
    <AWCOption value="option-4">Option 4</AWCOption>
    <AWCOption value="option-5">Option 5</AWCOption>
    <AWCOption value="option-6">Option 6</AWCOption>
  </AWCSelect>
);
```

:::tip
Note that multi-select options may wrap, causing the control to expand vertically. You can use the `max-options-visible` attribute to control the maximum number of selected options to show at once.
:::

### Setting Initial Values

Use the `value` attribute to set the initial selection. When using `multiple`, use space-delimited values to select more than one option.

```html:preview
<awc-select value="option-1 option-2" multiple clearable>
  <awc-option value="option-1">Option 1</awc-option>
  <awc-option value="option-2">Option 2</awc-option>
  <awc-option value="option-3">Option 3</awc-option>
  <awc-option value="option-4">Option 4</awc-option>
</awc-select>
```

```jsx:react
import { AWCDivider, AWCOption, AWCSelect } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCSelect value="option-1 option-2" multiple clearable>
    <AWCOption value="option-1">Option 1</AWCOption>
    <AWCOption value="option-2">Option 2</AWCOption>
    <AWCOption value="option-3">Option 3</AWCOption>
  </AWCSelect>
);
```

### Grouping Options

Use `<awc-divider>` to group listbox items visually. You can also use `<small>` to provide labels, but they won't be announced by most assistive devices.

```html:preview
<awc-select>
  <small>Section 1</small>
  <awc-option value="option-1">Option 1</awc-option>
  <awc-option value="option-2">Option 2</awc-option>
  <awc-option value="option-3">Option 3</awc-option>
  <awc-divider></awc-divider>
  <small>Section 2</small>
  <awc-option value="option-4">Option 4</awc-option>
  <awc-option value="option-5">Option 5</awc-option>
  <awc-option value="option-6">Option 6</awc-option>
</awc-select>
```

```jsx:react
import { AWCOption, AWCSelect } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCSelect>
    <AWCOption value="option-1">Option 1</AWCOption>
    <AWCOption value="option-2">Option 2</AWCOption>
    <AWCOption value="option-3">Option 3</AWCOption>
    <AWCOption value="option-4">Option 4</AWCOption>
    <AWCOption value="option-5">Option 5</AWCOption>
    <AWCOption value="option-6">Option 6</AWCOption>
  </AWCSelect>
);
```

### Sizes

Use the `size` attribute to change a select's size. Note that size does not apply to listbox options.

```html:preview
<awc-select placeholder="Small" size="small">
  <awc-option value="option-1">Option 1</awc-option>
  <awc-option value="option-2">Option 2</awc-option>
  <awc-option value="option-3">Option 3</awc-option>
</awc-select>

<br />

<awc-select placeholder="Medium" size="medium">
  <awc-option value="option-1">Option 1</awc-option>
  <awc-option value="option-2">Option 2</awc-option>
  <awc-option value="option-3">Option 3</awc-option>
</awc-select>

<br />

<awc-select placeholder="Large" size="large">
  <awc-option value="option-1">Option 1</awc-option>
  <awc-option value="option-2">Option 2</awc-option>
  <awc-option value="option-3">Option 3</awc-option>
</awc-select>
```

```jsx:react
import { AWCOption, AWCSelect } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    <AWCSelect placeholder="Small" size="small">
      <AWCOption value="option-1">Option 1</AWCOption>
      <AWCOption value="option-2">Option 2</AWCOption>
      <AWCOption value="option-3">Option 3</AWCOption>
    </AWCSelect>

    <br />

    <AWCSelect placeholder="Medium" size="medium">
      <AWCOption value="option-1">Option 1</AWCOption>
      <AWCOption value="option-2">Option 2</AWCOption>
      <AWCOption value="option-3">Option 3</AWCOption>
    </AWCSelect>

    <br />

    <AWCSelect placeholder="Large" size="large">
      <AWCOption value="option-1">Option 1</AWCOption>
      <AWCOption value="option-2">Option 2</AWCOption>
      <AWCOption value="option-3">Option 3</AWCOption>
    </AWCSelect>
  </>
);
```

### Placement

The preferred placement of the select's listbox can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are `top` and `bottom`.

```html:preview
<awc-select placement="top">
  <awc-option value="option-1">Option 1</awc-option>
  <awc-option value="option-2">Option 2</awc-option>
  <awc-option value="option-3">Option 3</awc-option>
</awc-select>
```

```jsx:react
import {
  SlOption,
  SlSelect
} from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCSelect placement="top">
    <AWCOption value="option-1">Option 1</AWCOption>
    <AWCOption value="option-2">Option 2</AWCOption>
    <AWCOption value="option-3">Option 3</AWCOption>
  </AWCDropdown>
);
```

### Prefix Icons

Use the `prefix` slot to prepend an icon to the control.

```html:preview
<awc-select placeholder="Small" size="small" clearable>
  <awc-icon name="house" slot="prefix"></awc-icon>
  <awc-option value="option-1">Option 1</awc-option>
  <awc-option value="option-2">Option 2</awc-option>
  <awc-option value="option-3">Option 3</awc-option>
</awc-select>
<br />
<awc-select placeholder="Medium" size="medium" clearable>
  <awc-icon name="house" slot="prefix"></awc-icon>
  <awc-option value="option-1">Option 1</awc-option>
  <awc-option value="option-2">Option 2</awc-option>
  <awc-option value="option-3">Option 3</awc-option>
</awc-select>
<br />
<awc-select placeholder="Large" size="large" clearable>
  <awc-icon name="house" slot="prefix"></awc-icon>
  <awc-option value="option-1">Option 1</awc-option>
  <awc-option value="option-2">Option 2</awc-option>
  <awc-option value="option-3">Option 3</awc-option>
</awc-select>
```

```jsx:react
import { AWCIcon, AWCOption, AWCSelect } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    <AWCSelect placeholder="Small" size="small">
      <AWCIcon name="house" slot="prefix"></AWCIcon>
      <AWCOption value="option-1">Option 1</AWCOption>
      <AWCOption value="option-2">Option 2</AWCOption>
      <AWCOption value="option-3">Option 3</AWCOption>
    </AWCSelect>
    <br />
    <AWCSelect placeholder="Medium" size="medium">
      <AWCIcon name="house" slot="prefix"></AWCIcon>
      <AWCOption value="option-1">Option 1</AWCOption>
      <AWCOption value="option-2">Option 2</AWCOption>
      <AWCOption value="option-3">Option 3</AWCOption>
    </AWCSelect>
    <br />
    <AWCSelect placeholder="Large" size="large">
      <AWCIcon name="house" slot="prefix"></AWCIcon>
      <AWCOption value="option-1">Option 1</AWCOption>
      <AWCOption value="option-2">Option 2</AWCOption>
      <AWCOption value="option-3">Option 3</AWCOption>
    </AWCSelect>
  </>
);
```
