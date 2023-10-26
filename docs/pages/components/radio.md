---
meta:
  title: Radio
  description: Radios allow the user to select a single option from a group.
layout: component
---

Radios are designed to be used with [radio groups](/components/radio-group).

```html:preview
<awc-radio-group label="Select an option" name="a" value="1">
  <awc-radio value="1">Option 1</awc-radio>
  <awc-radio value="2">Option 2</awc-radio>
  <awc-radio value="3">Option 3</awc-radio>
</awc-radio-group>
```

```jsx:react
import { AWCRadio, AWCRadioGroup } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCRadioGroup label="Select an option" name="a" value="1">
    <AWCRadio value="1">Option 1</AWCRadio>
    <AWCRadio value="2">Option 2</AWCRadio>
    <AWCRadio value="3">Option 3</AWCRadio>
  </AWCRadioGroup>
);
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Initial Value

To set the initial value and checked state, use the `value` attribute on the containing radio group.

```html:preview
<awc-radio-group label="Select an option" name="a" value="3">
  <awc-radio value="1">Option 1</awc-radio>
  <awc-radio value="2">Option 2</awc-radio>
  <awc-radio value="3">Option 3</awc-radio>
</awc-radio-group>
```

```jsx:react
import { AWCRadio, AWCRadioGroup } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCRadioGroup label="Select an option" name="a" value="3">
    <AWCRadio value="1">Option 1</AWCRadio>
    <AWCRadio value="2">Option 2</AWCRadio>
    <AWCRadio value="3">Option 3</AWCRadio>
  </AWCRadioGroup>
);
```

### Disabled

Use the `disabled` attribute to disable a radio.

```html:preview
<awc-radio-group label="Select an option" name="a" value="1">
  <awc-radio value="1">Option 1</awc-radio>
  <awc-radio value="2" disabled>Option 2</awc-radio>
  <awc-radio value="3">Option 3</awc-radio>
</awc-radio-group>
```

```jsx:react
import { AWCRadio, AWCRadioGroup } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCRadioGroup label="Select an option" name="a" value="1">
    <AWCRadio value="1">Option 1</AWCRadio>
    <AWCRadio value="2" disabled>
      Option 2
    </AWCRadio>
    <AWCRadio value="3">Option 3</AWCRadio>
  </AWCRadioGroup>
);
```

## Sizes

Add the `size` attribute to the [Radio Group](/components/radio-group) to change the radios' size.

```html preview
<awc-radio-group size="small" value="1">
  <awc-radio value="1">Small 1</awc-radio>
  <awc-radio value="2">Small 2</awc-radio>
  <awc-radio value="3">Small 3</awc-radio>
</awc-radio-group>

<br />

<awc-radio-group size="medium" value="1">
  <awc-radio value="1">Medium 1</awc-radio>
  <awc-radio value="2">Medium 2</awc-radio>
  <awc-radio value="3">Medium 3</awc-radio>
</awc-radio-group>

<br />

<awc-radio-group size="large" value="1">
  <awc-radio value="1">Large 1</awc-radio>
  <awc-radio value="2">Large 2</awc-radio>
  <awc-radio value="3">Large 3</awc-radio>
</awc-radio-group>
```

```jsx react
import { AWCRadio } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    <AWCRadioGroup size="small" value="1">
      <AWCRadio value="1">Small 1</AWCRadio>
      <AWCRadio value="2">Small 2</AWCRadio>
      <AWCRadio value="3">Small 3</AWCRadio>
    </AWCRadioGroup>

    <br />

    <AWCRadioGroup size="medium" value="1">
      <AWCRadio value="1">Medium 1</AWCRadio>
      <AWCRadio value="2">Medium 2</AWCRadio>
      <AWCRadio value="3">Medium 3</AWCRadio>
    </AWCRadioGroup>

    <br />

    <AWCRadioGroup size="large" value="1">
      <AWCRadio value="1">Large 1</AWCRadio>
      <AWCRadio value="2">Large 2</AWCRadio>
      <AWCRadio value="3">Large 3</AWCRadio>
    </AWCRadioGroup>
  </>
);
```
