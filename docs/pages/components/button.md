---
meta:
  title: Button
  description: Buttons represent actions that are available to the user.
layout: component
---

```html:preview
<awc-button>Button</awc-button>
```

```jsx:react
import { AWCButton } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => <AWCButton>Button</AWCButton>;
```

## Examples

### Variants

Use the `variant` attribute to set the button's variant.

```html:preview
<awc-button variant="default">Default</awc-button>
<awc-button variant="primary">Primary</awc-button>
<awc-button variant="secondary">Secondary</awc-button>
<awc-button variant="tertiary">Tertiary</awc-button>
<awc-button variant="success">Success</awc-button>
<awc-button variant="neutral">Neutral</awc-button>
<awc-button variant="warning">Warning</awc-button>
<awc-button variant="danger">Danger</awc-button>
<awc-button variant="ghost">Ghost</awc-button>
```

```jsx:react
import { AWCButton } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    <AWCButton variant="default">Default</AWCButton>
    <AWCButton variant="primary">Primary</AWCButton>
    <AWCButton variant="secondary">Secondary</AWCButton>
    <AWCButton variant="tertiary">Tertiary</AWCButton>
    <AWCButton variant="success">Success</AWCButton>
    <AWCButton variant="neutral">Neutral</AWCButton>
    <AWCButton variant="warning">Warning</AWCButton>
    <AWCButton variant="danger">Danger</AWCButton>
    <AWCButton variant="ghost">Ghost</AWCButton>
  </>
);
```

### Sizes

Use the `size` attribute to change a button's size.

```html:preview
<awc-button size="small">Small</awc-button>
<awc-button size="medium">Medium</awc-button>
<awc-button size="large">Large</awc-button>
```

```jsx:react
import { AWCButton } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    <AWCButton size="small">Small</AWCButton>
    <AWCButton size="medium">Medium</AWCButton>
    <AWCButton size="large">Large</AWCButton>
  </>
);
```

### Outline Buttons

Use the `outline` attribute to draw outlined buttons with transparent backgrounds.

```html:preview
<awc-button variant="default" outline>Default</awc-button>
<awc-button variant="primary" outline>Primary</awc-button>
<awc-button variant="secondary" outline>Secondary</awc-button>
<awc-button variant="tertiary" outline>Tertiary</awc-button>
<awc-button variant="success" outline>Success</awc-button>
<awc-button variant="neutral" outline>Neutral</awc-button>
<awc-button variant="warning" outline>Warning</awc-button>
<awc-button variant="danger" outline>Danger</awc-button>
```

```jsx:react
import { AWCButton } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    <AWCButton variant="default" outline>
      Default
    </AWCButton>
    <AWCButton variant="primary" outline>
      Primary
    </AWCButton>
    <AWCButton variant="secondary" outline>
      Secondary
    </AWCButton>
    <AWCButton variant="tertiary" outline>
      Tertiary
    </AWCButton>
    <AWCButton variant="success" outline>
      Success
    </AWCButton>
    <AWCButton variant="neutral" outline>
      Neutral
    </AWCButton>
    <AWCButton variant="warning" outline>
      Warning
    </AWCButton>
    <AWCButton variant="danger" outline>
      Danger
    </AWCButton>
  </>
);
```

### Pill Buttons

Use the `pill` attribute to give buttons rounded edges.

```html:preview
<awc-button size="small" pill>Small</awc-button>
<awc-button size="medium" pill>Medium</awc-button>
<awc-button size="large" pill>Large</awc-button>
```

```jsx:react
import { AWCButton } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    <AWCButton size="small" pill>
      Small
    </AWCButton>
    <AWCButton size="medium" pill>
      Medium
    </AWCButton>
    <AWCButton size="large" pill>
      Large
    </AWCButton>
  </>
);
```

### Circle Buttons

Use the `circle` attribute to create circular icon buttons. When this attribute is set, the button expects a single `<awc-icon>` in the default slot.

```html:preview
<awc-button variant="default" size="small" circle>
  <awc-icon name="gear" label="Settings"></awc-icon>
</awc-button>

<awc-button variant="default" size="medium" circle>
  <awc-icon name="gear" label="Settings"></awc-icon>
</awc-button>

<awc-button variant="default" size="large" circle>
  <awc-icon name="gear" label="Settings"></awc-icon>
</awc-button>
```

```jsx:react
import { AWCButton, AWCIcon } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    <AWCButton variant="default" size="small" circle>
      <AWCIcon name="gear" />
    </AWCButton>
    <AWCButton variant="default" size="medium" circle>
      <AWCIcon name="gear" />
    </AWCButton>
    <AWCButton variant="default" size="large" circle>
      <AWCIcon name="gear" />
    </AWCButton>
  </>
);
```

### Text Buttons

Use the `text` variant to create text buttons that share the same size as regular buttons but don't have backgrounds or borders.

```html:preview
<awc-button variant="text" size="small">Text</awc-button>
<awc-button variant="text" size="medium">Text</awc-button>
<awc-button variant="text" size="large">Text</awc-button>
```

```jsx:react
import { AWCButton } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    <AWCButton variant="text" size="small">
      Text
    </AWCButton>
    <AWCButton variant="text" size="medium">
      Text
    </AWCButton>
    <AWCButton variant="text" size="large">
      Text
    </AWCButton>
  </>
);
```

### Link Buttons

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. [[CMD/CTRL/SHIFT]] + [[CLICK]]) and exposes the `target` and `download` attributes.

```html:preview
<awc-button href="https://example.com/">Link</awc-button>
<awc-button href="https://example.com/" target="_blank">New Window</awc-button>
<awc-button href="/assets/images/wordmark.svg" download="wordmark.svg">Download</awc-button>
<awc-button href="https://example.com/" disabled>Disabled</awc-button>
```

```jsx:react
import { AWCButton } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    <AWCButton href="https://example.com/">Link</AWCButton>
    <AWCButton href="https://example.com/" target="_blank">
      New Window
    </AWCButton>
    <AWCButton href="/assets/images/wordmark.svg" download="wordmark.svg">
      Download
    </AWCButton>
    <AWCButton href="https://example.com/" disabled>
      Disabled
    </AWCButton>
  </>
);
```

:::tip
When a `target` is set, the link will receive `rel="noreferrer noopener"` for [security reasons](https://mathiasbynens.github.io/rel-noopener/).
:::

### Setting a Custom Width

As expected, buttons can be given a custom width by setting the `width` attribute. This is useful for making buttons span the full width of their container on smaller screens.

```html:preview
<awc-button variant="default" size="small" style="width: 100%; margin-bottom: 1rem;">Small</awc-button>
<awc-button variant="default" size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</awc-button>
<awc-button variant="default" size="large" style="width: 100%;">Large</awc-button>
```

{% raw %}

```jsx:react
import { AWCButton } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    <AWCButton variant="default" size="small" style={{ width: '100%', marginBottom: '1rem' }}>
      Small
    </AWCButton>
    <AWCButton variant="default" size="medium" style={{ width: '100%', marginBottom: '1rem' }}>
      Medium
    </AWCButton>
    <AWCButton variant="default" size="large" style={{ width: '100%' }}>
      Large
    </AWCButton>
  </>
);
```

{% endraw %}

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html:preview
<awc-button variant="default" size="small">
  <awc-icon slot="prefix" name="gear"></awc-icon>
  Settings
</awc-button>

<awc-button variant="default" size="small">
  <awc-icon slot="suffix" name="arrow-counterclockwise"></awc-icon>
  Refresh
</awc-button>

<awc-button variant="default" size="small">
  <awc-icon slot="prefix" name="link-45deg"></awc-icon>
  <awc-icon slot="suffix" name="box-arrow-up-right"></awc-icon>
  Open
</awc-button>

<br /><br />

<awc-button variant="default">
  <awc-icon slot="prefix" name="gear"></awc-icon>
  Settings
</awc-button>

<awc-button variant="default">
  <awc-icon slot="suffix" name="arrow-counterclockwise"></awc-icon>
  Refresh
</awc-button>

<awc-button variant="default">
  <awc-icon slot="prefix" name="link-45deg"></awc-icon>
  <awc-icon slot="suffix" name="box-arrow-up-right"></awc-icon>
  Open
</awc-button>

<br /><br />

<awc-button variant="default" size="large">
  <awc-icon slot="prefix" name="gear"></awc-icon>
  Settings
</awc-button>

<awc-button variant="default" size="large">
  <awc-icon slot="suffix" name="arrow-counterclockwise"></awc-icon>
  Refresh
</awc-button>

<awc-button variant="default" size="large">
  <awc-icon slot="prefix" name="link-45deg"></awc-icon>
  <awc-icon slot="suffix" name="box-arrow-up-right"></awc-icon>
  Open
</awc-button>
```

```jsx:react
import { AWCButton, AWCIcon } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    <AWCButton variant="default" size="small">
      <AWCIcon slot="prefix" name="gear"></AWCIcon>
      Settings
    </AWCButton>

    <AWCButton variant="default" size="small">
      <AWCIcon slot="suffix" name="arrow-counterclockwise"></AWCIcon>
      Refresh
    </AWCButton>

    <AWCButton variant="default" size="small">
      <AWCIcon slot="prefix" name="link-45deg"></AWCIcon>
      <AWCIcon slot="suffix" name="box-arrow-up-right"></AWCIcon>
      Open
    </AWCButton>

    <br />
    <br />

    <AWCButton variant="default">
      <AWCIcon slot="prefix" name="gear"></AWCIcon>
      Settings
    </AWCButton>

    <AWCButton variant="default">
      <AWCIcon slot="suffix" name="arrow-counterclockwise"></AWCIcon>
      Refresh
    </AWCButton>

    <AWCButton variant="default">
      <AWCIcon slot="prefix" name="link-45deg"></AWCIcon>
      <AWCIcon slot="suffix" name="box-arrow-up-right"></AWCIcon>
      Open
    </AWCButton>

    <br />
    <br />

    <AWCButton variant="default" size="large">
      <AWCIcon slot="prefix" name="gear"></AWCIcon>
      Settings
    </AWCButton>

    <AWCButton variant="default" size="large">
      <AWCIcon slot="suffix" name="arrow-counterclockwise"></AWCIcon>
      Refresh
    </AWCButton>

    <AWCButton variant="default" size="large">
      <AWCIcon slot="prefix" name="link-45deg"></AWCIcon>
      <AWCIcon slot="suffix" name="box-arrow-up-right"></AWCIcon>
      Open
    </AWCButton>
  </>
);
```

### Caret

Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

```html:preview
<awc-button size="small" caret>Small</awc-button>
<awc-button size="medium" caret>Medium</awc-button>
<awc-button size="large" caret>Large</awc-button>
```

```jsx:react
import { AWCButton } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    <AWCButton size="small" caret>
      Small
    </AWCButton>
    <AWCButton size="medium" caret>
      Medium
    </AWCButton>
    <AWCButton size="large" caret>
      Large
    </AWCButton>
  </>
);
```

### Loading

Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around. Clicks will be suppressed until the loading state is removed.

```html:preview
<awc-button variant="default" loading>Default</awc-button>
<awc-button variant="primary" loading>Primary</awc-button>
<awc-button variant="secondary" loading>Secondary</awc-button>
<awc-button variant="tertiary" loading>Tertiary</awc-button>
<awc-button variant="success" loading>Success</awc-button>
<awc-button variant="neutral" loading>Neutral</awc-button>
<awc-button variant="warning" loading>Warning</awc-button>
<awc-button variant="danger" loading>Danger</awc-button>
<awc-button variant="ghost" loading>Ghost</awc-button>

```

```jsx:react
import { AWCButton } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    <AWCButton variant="default" loading>
      Default
    </AWCButton>
    <AWCButton variant="primary" loading>
      Primary
    </AWCButton>
    <AWCButton variant="secondary" loading>
      Secondary
    </AWCButton>
    <AWCButton variant="tertiary" loading>
      Tertiary
    </AWCButton>
    <AWCButton variant="success" loading>
      Success
    </AWCButton>
    <AWCButton variant="neutral" loading>
      Neutral
    </AWCButton>
    <AWCButton variant="warning" loading>
      Warning
    </AWCButton>
    <AWCButton variant="danger" loading>
      Danger
    </AWCButton>
    <AWCButton variant="ghost" loading>
      Ghost
    </AWCButton>
  </>
);
```

### Disabled

Use the `disabled` attribute to disable a button. Clicks will be suppressed until the disabled state is removed.

```html:preview
<awc-button variant="default" disabled>Default</awc-button>
<awc-button variant="primary" disabled>Primary</awc-button>
<awc-button variant="secondary" disabled>Secondary</awc-button>
<awc-button variant="tertiary" disabled>Tertiary</awc-button>
<awc-button variant="success" disabled>Success</awc-button>
<awc-button variant="neutral" disabled>Neutral</awc-button>
<awc-button variant="warning" disabled>Warning</awc-button>
<awc-button variant="danger" disabled>Danger</awc-button>
<awc-button variant="ghost" disabled>Ghost</awc-button>
```

```jsx:react
import { AWCButton } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    <AWCButton variant="default" disabled>
      Default
    </AWCButton>

    <AWCButton variant="primary" disabled>
      Primary
    </AWCButton>

    <AWCButton variant="secondary" disabled>
      Secondary
    </AWCButton>

    <AWCButton variant="tertiary" disabled>
      Tertiary
    </AWCButton>

    <AWCButton variant="success" disabled>
      Success
    </AWCButton>

    <AWCButton variant="neutral" disabled>
      Neutral
    </AWCButton>

    <AWCButton variant="warning" disabled>
      Warning
    </AWCButton>

    <AWCButton variant="danger" disabled>
      Danger
    </AWCButton>

    <AWCButton variant="ghost" disabled>
      Ghost
    </AWCButton>
  </>
);
```

### Styling Buttons

This example demonstrates how to style buttons using a custom class. This is the recommended approach if you need to add additional variations. To customize an existing variation, modify the selector to target the button's `variant` attribute instead of a class (e.g. `awc-button[variant="primary"]`).

```html:preview
<awc-button class="pink">Pink Button</awc-button>

<style>
  awc-button.pink::part(base) {
    /* Set design tokens for height and border width */
    --awc-input-height-medium: 48px;
    --awc-input-border-width: 4px;

    border-radius: 0;
    background-color: #ff1493;
    border-top-color: #ff7ac1;
    border-left-color: #ff7ac1;
    border-bottom-color: #ad005c;
    border-right-color: #ad005c;
    color: white;
    font-size: 1.125rem;
    box-shadow: 0 2px 10px #0002;
    transition: var(--awc-transition-medium) transform ease, var(--awc-transition-medium) border ease;
  }

  awc-button.pink::part(base):hover {
    transform: scale(1.05) rotate(-1deg);
  }

  awc-button.pink::part(base):active {
    border-top-color: #ad005c;
    border-right-color: #ff7ac1;
    border-bottom-color: #ff7ac1;
    border-left-color: #ad005c;
    transform: scale(1.05) rotate(-1deg) translateY(2px);
  }

  awc-button.pink::part(base):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>
```
