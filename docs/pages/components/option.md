---
meta:
  title: Option
  description: Options define the selectable items within various form controls such as select.
layout: component
---

```html:preview
<awc-select label="Select one">
  <awc-option value="option-1">Option 1</awc-option>
  <awc-option value="option-2">Option 2</awc-option>
  <awc-option value="option-3">Option 3</awc-option>
</awc-select>
```

```jsx:react
import { AWCOption, AWCSelect } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCSelect>
    <AWCOption value="option-1">Option 1</AWCOption>
    <AWCOption value="option-2">Option 2</AWCOption>
    <AWCOption value="option-3">Option 3</AWCOption>
  </AWCSelect>
);
```

## Examples

### Disabled

Use the `disabled` attribute to disable an option and prevent it from being selected.

```html:preview
<awc-select label="Select one">
  <awc-option value="option-1">Option 1</awc-option>
  <awc-option value="option-2" disabled>Option 2</awc-option>
  <awc-option value="option-3">Option 3</awc-option>
</awc-select>
```

```jsx:react
import { AWCOption, AWCSelect } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCSelect>
    <AWCOption value="option-1">Option 1</AWCOption>
    <AWCOption value="option-2" disabled>
      Option 2
    </AWCOption>
    <AWCOption value="option-3">Option 3</AWCOption>
  </AWCSelect>
);
```

### Prefix & Suffix

Add icons to the start and end of menu items using the `prefix` and `suffix` slots.

```html:preview
<awc-select label="Select one">
  <awc-option value="option-1">
    <awc-icon slot="prefix" name="envelope"></awc-icon>
    Email
    <awc-icon slot="suffix" name="patch-check"></awc-icon>
  </awc-option>

  <awc-option value="option-2">
    <awc-icon slot="prefix" name="telephone"></awc-icon>
    Phone
    <awc-icon slot="suffix" name="patch-check"></awc-icon>
  </awc-option>

  <awc-option value="option-3">
    <awc-icon slot="prefix" name="chat-dots"></awc-icon>
    Chat
    <awc-icon slot="suffix" name="patch-check"></awc-icon>
  </awc-option>
</awc-select>
```
