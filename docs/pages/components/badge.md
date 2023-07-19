---
meta:
  title: Badge
  description: Badges are used to draw attention and display statuses or counts.
layout: component
---

```html:preview
<awc-badge>Badge</awc-badge>
```

```jsx:react
import { AWCBadge } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCBadge>Badge</AWCBadge>;
```

## Examples

### Variants

Set the `variant` attribute to change the badge's variant.

```html:preview
<awc-badge variant="primary">Primary</awc-badge>
<awc-badge variant="secondary">Secondary</awc-badge>
<awc-badge variant="tertiary">Tertiary</awc-badge>
<awc-badge variant="success">Success</awc-badge>
<awc-badge variant="neutral">Neutral</awc-badge>
<awc-badge variant="warning">Warning</awc-badge>
<awc-badge variant="danger">Danger</awc-badge>
```

```jsx:react
import { AWCBadge } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCBadge variant="primary">Primary</AWCBadge>
    <AWCBadge variant="secondary">Secondary</AWCBadge>
    <AWCBadge variant="tertiary">Tertiary</AWCBadge>
    <AWCBadge variant="success">Success</AWCBadge>
    <AWCBadge variant="neutral">Neutral</AWCBadge>
    <AWCBadge variant="warning">Warning</AWCBadge>
    <AWCBadge variant="danger">Danger</AWCBadge>
  </>
);
```

### Pill Badges

Use the `pill` attribute to give badges rounded edges.

```html:preview
<awc-badge variant="primary" pill>Primary</awc-badge>
<awc-badge variant="secondary" pill>Secondary</awc-badge>
<awc-badge variant="tertiary" pill>Tertiary</awc-badge>
<awc-badge variant="success" pill>Success</awc-badge>
<awc-badge variant="neutral" pill>Neutral</awc-badge>
<awc-badge variant="warning" pill>Warning</awc-badge>
<awc-badge variant="danger" pill>Danger</awc-badge>
```

```jsx:react
import { AWCBadge } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCBadge variant="primary" pill>
      Primary
    </AWCBadge>
    <AWCBadge variant="secondary" pill>
      Secondary
    </AWCBadge>
    <AWCBadge variant="tertiary" pill>
      Tertiary
    </AWCBadge>
    <AWCBadge variant="success" pill>
      Success
    </AWCBadge>
    <AWCBadge variant="neutral" pill>
      Neutral
    </AWCBadge>
    <AWCBadge variant="warning" pill>
      Warning
    </AWCBadge>
    <AWCBadge variant="danger" pill>
      Danger
    </AWCBadge>
  </>
);
```

### Pulsating Badges

Use the `pulse` attribute to draw attention to the badge with a subtle animation.

```html:preview
<div class="badge-pulse">
  <awc-badge variant="primary" pill pulse>1</awc-badge>
  <awc-badge variant="secondary" pill pulse>1</awc-badge>
  <awc-badge variant="tertiary" pill pulse>1</awc-badge>
  <awc-badge variant="success" pill pulse>1</awc-badge>
  <awc-badge variant="neutral" pill pulse>1</awc-badge>
  <awc-badge variant="warning" pill pulse>1</awc-badge>
  <awc-badge variant="danger" pill pulse>1</awc-badge>
</div>

<style>
  .badge-pulse awc-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
</style>
```

```jsx:react
import { AWCBadge } from '@agence-adeliom/awc/dist/react';

const css = `
  .badge-pulse awc-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const App = () => (
  <>
    <div className="badge-pulse">
      <AWCBadge variant="primary" pill pulse>
        1
      </AWCBadge>
      <AWCBadge variant="secondary" pill pulse>
        1
      </AWCBadge>
      <AWCBadge variant="tertiary" pill pulse>
        1
      </AWCBadge>
      <AWCBadge variant="success" pill pulse>
        1
      </AWCBadge>
      <AWCBadge variant="neutral" pill pulse>
        1
      </AWCBadge>
      <AWCBadge variant="warning" pill pulse>
        1
      </AWCBadge>
      <AWCBadge variant="danger" pill pulse>
        1
      </AWCBadge>
    </div>

    <style>{css}</style>
  </>
);
```

### With Buttons

One of the most common use cases for badges is attaching them to buttons. To make this easier, badges will be automatically positioned at the top-right when they're a child of a button.

```html:preview
<awc-button>
  Requests
  <awc-badge pill>30</awc-badge>
</awc-button>

<awc-button style="margin-inline-start: 1rem;">
  Warnings
  <awc-badge variant="warning" pill>8</awc-badge>
</awc-button>

<awc-button style="margin-inline-start: 1rem;">
  Errors
  <awc-badge variant="danger" pill>6</awc-badge>
</awc-button>
```

{% raw %}

```jsx:react
import { AWCBadge, AWCButton } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCButton>
      Requests
      <AWCBadge pill>30</AWCBadge>
    </AWCButton>

    <AWCButton style={{ marginInlineStart: '1rem' }}>
      Warnings
      <AWCBadge variant="warning" pill>
        8
      </AWCBadge>
    </AWCButton>

    <AWCButton style={{ marginInlineStart: '1rem' }}>
      Errors
      <AWCBadge variant="danger" pill>
        6
      </AWCBadge>
    </AWCButton>
  </>
);
```

{% endraw %}

### With Menu Items

When including badges in menu items, use the `suffix` slot to make sure they're aligned correctly.

```html:preview
<awc-menu style="max-width: 240px;">
  <awc-menu-label>Messages</awc-menu-label>
  <awc-menu-item>Comments <awc-badge slot="suffix" variant="neutral" pill>4</awc-badge></awc-menu-item>
  <awc-menu-item>Replies <awc-badge slot="suffix" variant="neutral" pill>12</awc-badge></awc-menu-item>
</awc-menu>
```

{% raw %}

```jsx:react
import { AWCBadge, AWCButton, AWCMenu, AWCMenuItem, AWCMenuLabel } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCMenu
    style={{
      maxWidth: '240px',
      border: 'solid 1px var(--awc-panel-border-color)',
      borderRadius: 'var(--awc-border-radius-medium)'
    }}
  >
    <AWCMenuLabel>Messages</AWCMenuLabel>
    <AWCMenuItem>
      Comments
      <AWCBadge slot="suffix" variant="neutral" pill>
        4
      </AWCBadge>
    </AWCMenuItem>
    <AWCMenuItem>
      Replies
      <AWCBadge slot="suffix" variant="neutral" pill>
        12
      </AWCBadge>
    </AWCMenuItem>
  </AWCMenu>
);
```

{% endraw %}
