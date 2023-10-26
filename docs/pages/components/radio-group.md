---
meta:
  title: Radio Group
  description: Radio groups are used to group multiple radios or radio buttons so they function as a single form control.
layout: component
---

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

## Examples

### Help Text

Add descriptive help text to a radio group with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<awc-radio-group label="Select an option" help-text="Choose the most appropriate option." name="a" value="1">
  <awc-radio value="1">Option 1</awc-radio>
  <awc-radio value="2">Option 2</awc-radio>
  <awc-radio value="3">Option 3</awc-radio>
</awc-radio-group>
```

```jsx:react
import { AWCRadio, AWCRadioGroup } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCRadioGroup label="Select an option" help-text="Choose the most appropriate option." name="a" value="1">
    <AWCRadio value="1">Option 1</AWCRadio>
    <AWCRadio value="2">Option 2</AWCRadio>
    <AWCRadio value="3">Option 3</AWCRadio>
  </AWCRadioGroup>
);
```

### Radio Buttons

[Radio buttons](/components/radio-button) offer an alternate way to display radio controls. In this case, an internal [button group](/components/button-group) is used to group the buttons into a single, cohesive control.

```html:preview
<awc-radio-group label="Select an option" help-text="Select an option that makes you proud." name="a" value="1">
  <awc-radio-button value="1">Option 1</awc-radio-button>
  <awc-radio-button value="2">Option 2</awc-radio-button>
  <awc-radio-button value="3">Option 3</awc-radio-button>
</awc-radio-group>
```

```jsx:react
import { AWCRadioButton, AWCRadioGroup } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCRadioGroup label="Select an option" name="a" value="1">
    <AWCRadioButton value="1">Option 1</AWCRadioButton>
    <AWCRadioButton value="2">Option 2</AWCRadioButton>
    <AWCRadioButton value="3">Option 3</AWCRadioButton>
  </AWCRadioGroup>
);
```

### Disabling Options

Radios and radio buttons can be disabled by adding the `disabled` attribute to the respective options inside the radio group.

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

### Sizing Options

The size of [Radios](/components/radio) and [Radio Buttons](/components/radio-buttons) will be determined by the Radio Group's `size` attribute.

```html preview
<awc-radio-group label="Select an option" size="medium" value="medium" class="radio-group-size">
  <awc-radio value="small">Small</awc-radio>
  <awc-radio value="medium">Medium</awc-radio>
  <awc-radio value="large">Large</awc-radio>
</awc-radio-group>

<script>
  const radioGroup = document.querySelector('.radio-group-size');

  radioGroup.addEventListener('awc-change', () => {
    radioGroup.size = radioGroup.value;
  });
</script>
```

```jsx react
import { useState } from 'react';
import { AWCRadio, AWCRadioGroup } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => {
  const [size, setSize] = useState('medium');

  return (
    <>
      <AWCRadioGroup
        label="Select an option"
        size={size}
        value={size}
        class="radio-group-size"
        onAwcChange={event => setSize(event.target.value)}
      >
        <AWCRadio value="small">Small</AWCRadio>
        <AWCRadio value="medium">Medium</AWCRadio>
        <AWCRadio value="large">Large</AWCRadio>
      </AWCRadioGroup>
    </>
  );
};
```

:::tip
[Radios](/components/radio) and [Radio Buttons](/components/radio-button) also have a `size` attribute. This can be useful in certain compositions, but it will be ignored when used inside of a Radio Group.
:::

### Validation

Setting the `required` attribute to make selecting an option mandatory. If a value has not been selected, it will prevent the form from submitting and display an error message.

```html:preview
<form class="validation">
  <awc-radio-group label="Select an option" name="a" required>
    <awc-radio value="1">Option 1</awc-radio>
    <awc-radio value="2">Option 2</awc-radio>
    <awc-radio value="3">Option 3</awc-radio>
  </awc-radio-group>
  <br />
  <awc-button type="submit" variant="primary">Submit</awc-button>
</form>

<script>
  const form = document.querySelector('.validation');

  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx:react
import { AWCButton, AWCIcon, AWCRadio, AWCRadioGroup } from '@agence-adeliom/awc/%NPMDIR%/react';
const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <AWCRadioGroup label="Select an option" name="a" required onAwcChange={handleChange}>
        <AWCRadio value="1">
          Option 1
        </AWCRadio>
        <AWCRadiovalue="2">
          Option 2
        </AWCRadio>
        <AWCRadio value="3">
          Option 3
        </AWCRadio>
      </AWCRadioGroup>
      <br />
      <AWCButton type="submit" variant="primary">
        Submit
      </AWCButton>
    </form>
  );
};
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html:preview
<form class="custom-validity">
  <awc-radio-group label="Select an option" name="a" value="1">
    <awc-radio value="1">Not me</awc-radio>
    <awc-radio value="2">Me neither</awc-radio>
    <awc-radio value="3">Choose me</awc-radio>
  </awc-radio-group>
  <br />
  <awc-button type="submit" variant="primary">Submit</awc-button>
</form>

<script>
  const form = document.querySelector('.custom-validity');
  const radioGroup = form.querySelector('awc-radio-group');
  const errorMessage = 'You must choose the last option';

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('awc-radio').then(() => {
    radioGroup.setCustomValidity(errorMessage);
  });

  // Update validity when a selection is made
  form.addEventListener('awc-change', () => {
    const isValid = radioGroup.value === '3';
    radioGroup.setCustomValidity(isValid ? '' : errorMessage);
  });

  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx:react
import { useEffect, useRef } from 'react';
import { AWCButton, AWCIcon, AWCRadio, AWCRadioGroup } from '@agence-adeliom/awc/%NPMDIR%/react';
const App = () => {
  const radioGroup = useRef(null);
  const errorMessage = 'You must choose this option';

  function handleChange() {
    radioGroup.current.setCustomValidity(radioGroup.current.value === '3' ? '' : errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  useEffect(() => {
    radio.current.setCustomValidity(errorMessage);
  }, []);

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <AWCRadioGroup ref={radioGroup} label="Select an option" name="a" value="1" onAwcChange={handleChange}>
        <AWCRadio value="1">Not me</AWCRadio>
        <AWCRadio value="2">Me neither</AWCRadio>
        <AWCRadio value="3">Choose me</AWCRadio>
      </AWCRadioGroup>
      <br />
      <AWCButton type="submit" variant="primary">
        Submit
      </AWCButton>
    </form>
  );
};
```
