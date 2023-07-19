---
meta:
  title: Input
  description: Inputs collect data from the user.
layout: component
---

```html:preview
<awc-input></awc-input>
```

```jsx:react
import { AWCInput } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCInput />;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Labels

Use the `label` attribute to give the input an accessible label. For labels that contain HTML, use the `label` slot instead.

```html:preview
<awc-input label="What is your name?"></awc-input>
```

```jsx:react
import { AWCIcon, AWCInput } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCInput label="What is your name?" />;
```

### Help Text

Add descriptive help text to an input with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<awc-input label="Nickname" help-text="What would you like people to call you?"></awc-input>
```

```jsx:react
import { AWCIcon, AWCInput } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCInput label="Nickname" help-text="What would you like people to call you?" />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html:preview
<awc-input placeholder="Type something"></awc-input>
```

```jsx:react
import { AWCInput } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCInput placeholder="Type something" />;
```

### Clearable

Add the `clearable` attribute to add a clear button when the input has content.

```html:preview
<awc-input placeholder="Clearable" clearable></awc-input>
```

```jsx:react
import { AWCInput } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCInput placeholder="Clearable" clearable />;
```

### Toggle Password

Add the `password-toggle` attribute to add a toggle button that will show the password when activated.

```html:preview
<awc-input type="password" placeholder="Password Toggle" password-toggle></awc-input>
```

```jsx:react
import { AWCInput } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCInput type="password" placeholder="Password Toggle" size="medium" password-toggle />;
```

### Filled Inputs

Add the `filled` attribute to draw a filled input.

```html:preview
<awc-input placeholder="Type something" filled></awc-input>
```

```jsx:react
import { AWCInput } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCInput placeholder="Type something" filled />;
```

### Disabled

Use the `disabled` attribute to disable an input.

```html:preview
<awc-input placeholder="Disabled" disabled></awc-input>
```

```jsx:react
import { AWCInput } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCInput placeholder="Disabled" disabled />;
```

### Sizes

Use the `size` attribute to change an input's size.

```html:preview
<awc-input placeholder="Small" size="small"></awc-input>
<br />
<awc-input placeholder="Medium" size="medium"></awc-input>
<br />
<awc-input placeholder="Large" size="large"></awc-input>
```

```jsx:react
import { AWCInput } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCInput placeholder="Small" size="small" />
    <br />
    <AWCInput placeholder="Medium" size="medium" />
    <br />
    <AWCInput placeholder="Large" size="large" />
  </>
);
```

### Pill

Use the `pill` attribute to give inputs rounded edges.

```html:preview
<awc-input placeholder="Small" size="small" pill></awc-input>
<br />
<awc-input placeholder="Medium" size="medium" pill></awc-input>
<br />
<awc-input placeholder="Large" size="large" pill></awc-input>
```

```jsx:react
import { AWCInput } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCInput placeholder="Small" size="small" pill />
    <br />
    <AWCInput placeholder="Medium" size="medium" pill />
    <br />
    <AWCInput placeholder="Large" size="large" pill />
  </>
);
```

### Input Types

The `type` attribute controls the type of input the browser renders.

```html:preview
<awc-input type="email" placeholder="Email"></awc-input>
<br />
<awc-input type="number" placeholder="Number"></awc-input>
<br />
<awc-input type="date" placeholder="Date"></awc-input>
```

```jsx:react
import { AWCInput } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCInput type="email" placeholder="Email" />
    <br />
    <AWCInput type="number" placeholder="Number" />
    <br />
    <AWCInput type="date" placeholder="Date" />
  </>
);
```

### Prefix & Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html:preview
<awc-input placeholder="Small" size="small">
  <awc-icon name="house" slot="prefix"></awc-icon>
  <awc-icon name="chat" slot="suffix"></awc-icon>
</awc-input>
<br />
<awc-input placeholder="Medium" size="medium">
  <awc-icon name="house" slot="prefix"></awc-icon>
  <awc-icon name="chat" slot="suffix"></awc-icon>
</awc-input>
<br />
<awc-input placeholder="Large" size="large">
  <awc-icon name="house" slot="prefix"></awc-icon>
  <awc-icon name="chat" slot="suffix"></awc-icon>
</awc-input>
```

```jsx:react
import { AWCIcon, AWCInput } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCInput placeholder="Small" size="small">
      <AWCIcon name="house" slot="prefix"></AWCIcon>
      <AWCIcon name="chat" slot="suffix"></AWCIcon>
    </AWCInput>
    <br />
    <AWCInput placeholder="Medium" size="medium">
      <AWCIcon name="house" slot="prefix"></AWCIcon>
      <AWCIcon name="chat" slot="suffix"></AWCIcon>
    </AWCInput>
    <br />
    <AWCInput placeholder="Large" size="large">
      <AWCIcon name="house" slot="prefix"></AWCIcon>
      <AWCIcon name="chat" slot="suffix"></AWCIcon>
    </AWCInput>
  </>
);
```

### Customizing Label Position

Use [CSS parts](#css-parts) to customize the way form controls are drawn. This example uses CSS grid to position the label to the left of the control, but the possible orientations are nearly endless. The same technique works for inputs, textareas, radio groups, and similar form controls.

```html:preview
<awc-input class="label-on-left" label="Name" help-text="Enter your name"></awc-input>
<awc-input class="label-on-left" label="Email" type="email" help-text="Enter your email"></awc-input>
<awc-textarea class="label-on-left" label="Bio" help-text="Tell us something about yourself"></awc-textarea>

<style>
  .label-on-left {
    --label-width: 3.75rem;
    --gap-width: 1rem;
  }

  .label-on-left + .label-on-left {
    margin-top: var(--awc-spacing-medium);
  }

  .label-on-left::part(form-control) {
    display: grid;
    grid: auto / var(--label-width) 1fr;
    gap: var(--awc-spacing-3x-small) var(--gap-width);
    align-items: center;
  }

  .label-on-left::part(form-control-label) {
    text-align: right;
  }

  .label-on-left::part(form-control-help-text) {
    grid-column-start: 2;
  }
</style>
```
