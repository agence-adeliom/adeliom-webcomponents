---
meta:
  title: Tag
  description: Tags are used as labels to organize things or to indicate a selection.
layout: component
---

```html:preview
<awc-tag variant="primary">Primary</awc-tag>
<awc-tag variant="secondary">Secondary</awc-tag>
<awc-tag variant="tertiary">Tertiary</awc-tag>
<awc-tag variant="success">Success</awc-tag>
<awc-tag variant="neutral">Neutral</awc-tag>
<awc-tag variant="warning">Warning</awc-tag>
<awc-tag variant="danger">Danger</awc-tag>
```

```jsx:react
import { AWCTag } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCTag variant="primary">Primary</AWCTag>
    <AWCTag variant="secondary">Secondary</AWCTag>
    <AWCTag variant="tertiary">Tertiary</AWCTag>
    <AWCTag variant="success">Success</AWCTag>
    <AWCTag variant="neutral">Neutral</AWCTag>
    <AWCTag variant="warning">Warning</AWCTag>
    <AWCTag variant="danger">Danger</AWCTag>
  </>
);
```

## Examples

### Sizes

Use the `size` attribute to change a tab's size.

```html:preview
<awc-tag size="small">Small</awc-tag>
<awc-tag size="medium">Medium</awc-tag>
<awc-tag size="large">Large</awc-tag>
```

```jsx:react
import { AWCTag } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCTag size="small">Small</AWCTag>
    <AWCTag size="medium">Medium</AWCTag>
    <AWCTag size="large">Large</AWCTag>
  </>
);
```

### Pill

Use the `pill` attribute to give tabs rounded edges.

```html:preview
<awc-tag size="small" pill>Small</awc-tag>
<awc-tag size="medium" pill>Medium</awc-tag>
<awc-tag size="large" pill>Large</awc-tag>
```

```jsx:react
import { AWCTag } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCTag size="small" pill>
      Small
    </AWCTag>
    <AWCTag size="medium" pill>
      Medium
    </AWCTag>
    <AWCTag size="large" pill>
      Large
    </AWCTag>
  </>
);
```

### Removable

Use the `removable` attribute to add a remove button to the tag.

```html:preview
<div class="tags-removable">
  <awc-tag size="small" removable>Small</awc-tag>
  <awc-tag size="medium" removable>Medium</awc-tag>
  <awc-tag size="large" removable>Large</awc-tag>
</div>

<script>
  const div = document.querySelector('.tags-removable');

  div.addEventListener('awc-remove', event => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  });
</script>

<style>
  .tags-removable awc-tag {
    transition: var(--awc-transition-medium) opacity;
  }
</style>
```

```jsx:react
import { AWCTag } from '@agence-adeliom/awc/dist/react';

const css = `
  .tags-removable awc-tag {
    transition: var(--awc-transition-medium) opacity;
  }
`;

const App = () => {
  function handleRemove(event) {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  }

  return (
    <>
      <div className="tags-removable">
        <AWCTag size="small" removable onAwcRemove={handleRemove}>
          Small
        </AWCTag>

        <AWCTag size="medium" removable onAwcRemove={handleRemove}>
          Medium
        </AWCTag>

        <AWCTag size="large" removable onAwcRemove={handleRemove}>
          Large
        </AWCTag>
      </div>

      <style>{css}</style>
    </>
  );
};
```
