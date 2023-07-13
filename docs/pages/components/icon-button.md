---
meta:
  title: Icon Button
  description: Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.
layout: component
---

For a full list of icons that come bundled with Adeliom WebComponents, refer to the [icon component](/components/icon).

```html:preview
<awc-icon-button name="gear" label="Settings"></awc-icon-button>
```

```jsx:react
import { AWCIconButton } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCIconButton name="gear" label="Settings" />;
```

## Examples

### Sizes

Icon buttons inherit their parent element's `font-size`.

```html:preview
<awc-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></awc-icon-button>
<awc-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></awc-icon-button>
<awc-icon-button name="pencil" label="Edit" style="font-size: 2.5rem;"></awc-icon-button>
```

{% raw %}

```jsx:react
import { AWCIconButton } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCIconButton name="pencil" label="Edit" style={{ fontSize: '1.5rem' }} />
    <AWCIconButton name="pencil" label="Edit" style={{ fontSize: '2rem' }} />
    <AWCIconButton name="pencil" label="Edit" style={{ fontSize: '2.5rem' }} />
  </>
);
```

{% endraw %}

### Colors

Icon buttons are designed to have a uniform appearance, so their color is not inherited. However, you can still customize them by styling the `base` part.

```html:preview
<div class="icon-button-color">
  <awc-icon-button name="type-bold" label="Bold"></awc-icon-button>
  <awc-icon-button name="type-italic" label="Italic"></awc-icon-button>
  <awc-icon-button name="type-underline" label="Underline"></awc-icon-button>
</div>

<style>
  .icon-button-color awc-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color awc-icon-button::part(base):hover,
  .icon-button-color awc-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color awc-icon-button::part(base):active {
    color: #960077;
  }
</style>
```

```jsx:react
import { AWCIconButton } from '@agence-adeliom/awc/dist/react';

const css = `
  .icon-button-color awc-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color awc-icon-button::part(base):hover,
  .icon-button-color awc-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color awc-icon-button::part(base):active {
    color: #960077;
  }
`;

const App = () => (
  <>
    <div className="icon-button-color">
      <AWCIconButton name="type-bold" label="Bold" />
      <AWCIconButton name="type-italic" label="Italic" />
      <AWCIconButton name="type-underline" label="Underline" />
    </div>

    <style>{css}</style>
  </>
);
```

### Link Buttons

Use the `href` attribute to convert the button to a link.

```html:preview
<awc-icon-button name="gear" label="Settings" href="https://example.com" target="_blank"></awc-icon-button>
```

```jsx:react
import { AWCIconButton } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCIconButton name="gear" label="Settings" href="https://example.com" target="_blank" />;
```

### Icon Button with Tooltip

Wrap a tooltip around an icon button to provide contextual information to the user.

```html:preview
<awc-tooltip content="Settings">
  <awc-icon-button name="gear" label="Settings"></awc-icon-button>
</awc-tooltip>
```

```jsx:react
import { AWCIconButton, AWCTooltip } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCTooltip content="Settings">
    <AWCIconButton name="gear" label="Settings" />
  </AWCTooltip>
);
```

### Disabled

Use the `disabled` attribute to disable the icon button.

```html:preview
<awc-icon-button name="gear" label="Settings" disabled></awc-icon-button>
```

```jsx:react
import { AWCIconButton } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCIconButton name="gear" label="Settings" disabled />;
```
