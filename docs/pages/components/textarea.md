---
meta:
  title: Textarea
  description: Textareas collect data from the user and allow multiple lines of text.
layout: component
---

```html:preview
<awc-textarea></awc-textarea>
```

```jsx:react
import { AWCTextarea } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCTextarea />;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Labels

Use the `label` attribute to give the textarea an accessible label. For labels that contain HTML, use the `label` slot instead.

```html:preview
<awc-textarea label="Comments"></awc-textarea>
```

```jsx:react
import { AWCTextarea } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCTextarea label="Comments" />;
```

### Help Text

Add descriptive help text to a textarea with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<awc-textarea label="Feedback" help-text="Please tell us what you think."> </awc-textarea>
```

```jsx:react
import { AWCTextarea } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCTextarea label="Feedback" help-text="Please tell us what you think." />;
```

### Rows

Use the `rows` attribute to change the number of text rows that get shown.

```html:preview
<awc-textarea rows="2"></awc-textarea>
```

```jsx:react
import { AWCTextarea } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCTextarea rows={2} />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html:preview
<awc-textarea placeholder="Type something"></awc-textarea>
```

```jsx:react
import { AWCTextarea } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCTextarea placeholder="Type something" />;
```

### Filled Textareas

Add the `filled` attribute to draw a filled textarea.

```html:preview
<awc-textarea placeholder="Type something" filled></awc-textarea>
```

```jsx:react
import { AWCTextarea } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCTextarea placeholder="Type something" filled />;
```

### Disabled

Use the `disabled` attribute to disable a textarea.

```html:preview
<awc-textarea placeholder="Textarea" disabled></awc-textarea>
```

```jsx:react
import { AWCTextarea } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCTextarea placeholder="Textarea" disabled />;
```

### Sizes

Use the `size` attribute to change a textarea's size.

```html:preview
<awc-textarea placeholder="Small" size="small"></awc-textarea>
<br />
<awc-textarea placeholder="Medium" size="medium"></awc-textarea>
<br />
<awc-textarea placeholder="Large" size="large"></awc-textarea>
```

```jsx:react
import { AWCTextarea } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCTextarea placeholder="Small" size="small"></AWCTextarea>
    <br />
    <AWCTextarea placeholder="Medium" size="medium"></AWCTextarea>
    <br />
    <AWCTextarea placeholder="Large" size="large"></AWCTextarea>
  </>
);
```

### Prevent Resizing

By default, textareas can be resized vertically by the user. To prevent resizing, set the `resize` attribute to `none`.

```html:preview
<awc-textarea resize="none"></awc-textarea>
```

```jsx:react
import { AWCTextarea } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCTextarea resize="none" />;
```

### Expand with Content

Textareas will automatically resize to expand to fit their content when `resize` is set to `auto`.

```html:preview
<awc-textarea resize="auto"></awc-textarea>
```

```jsx:react
import { AWCTextarea } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCTextarea resize="auto" />;
```
