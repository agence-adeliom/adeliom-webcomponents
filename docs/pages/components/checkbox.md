---
meta:
  title: Checkbox
  description: Checkboxes allow the user to toggle an option on or off.
layout: component
---

```html:preview
<awc-checkbox>Checkbox</awc-checkbox>
```

```jsx:react
import { AWCCheckbox } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCCheckbox>Checkbox</AWCCheckbox>;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Checked

Use the `checked` attribute to activate the checkbox.

```html:preview
<awc-checkbox checked>Checked</awc-checkbox>
```

```jsx:react
import { AWCCheckbox } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCCheckbox checked>Checked</AWCCheckbox>;
```

### Indeterminate

Use the `indeterminate` attribute to make the checkbox indeterminate.

```html:preview
<awc-checkbox indeterminate>Indeterminate</awc-checkbox>
```

```jsx:react
import { AWCCheckbox } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCCheckbox indeterminate>Indeterminate</AWCCheckbox>;
```

### Disabled

Use the `disabled` attribute to disable the checkbox.

```html:preview
<awc-checkbox disabled>Disabled</awc-checkbox>
```

```jsx:react
import { AWCCheckbox } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCCheckbox disabled>Disabled</AWCCheckbox>;
```

### Sizes

Use the `size` attribute to change a checkbox's size.

```html:preview
<awc-checkbox size="small">Small</awc-checkbox>
<br />
<awc-checkbox size="medium">Medium</awc-checkbox>
<br />
<awc-checkbox size="large">Large</awc-checkbox>
```

```jsx:react
import { AWCCheckbox } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCCheckbox size="small">Small</AWCCheckbox>
    <br />
    <AWCCheckbox size="medium">Medium</AWCCheckbox>
    <br />
    <AWCCheckbox size="large">Large</AWCCheckbox>
  </>
);
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html:preview
<form class="custom-validity">
  <awc-checkbox>Check me</awc-checkbox>
  <br />
  <awc-button type="submit" variant="primary" style="margin-top: 1rem;">Submit</awc-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const checkbox = form.querySelector('awc-checkbox');
  const errorMessage = `Don't forget to check me!`;

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('awc-checkbox').then(async () => {
    await checkbox.updateComplete;
    checkbox.setCustomValidity(errorMessage);
  });

  // Update validity on change
  checkbox.addEventListener('awc-change', () => {
    checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
  });

  // Handle submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

{% raw %}

```jsx:react
import { useEffect, useRef } from 'react';
import { AWCButton, AWCCheckbox } from '@agence-adeliom/awc/dist/react';

const App = () => {
  const checkbox = useRef(null);
  const errorMessage = `Don't forget to check me!`;

  function handleChange() {
    checkbox.current.setCustomValidity(checkbox.current.checked ? '' : errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  useEffect(() => {
    checkbox.current.setCustomValidity(errorMessage);
  }, []);

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <AWCCheckbox ref={checkbox} onAwcChange={handleChange}>
        Check me
      </AWCCheckbox>
      <br />
      <AWCButton type="submit" variant="primary" style={{ marginTop: '1rem' }}>
        Submit
      </AWCButton>
    </form>
  );
};
```

{% endraw %}
