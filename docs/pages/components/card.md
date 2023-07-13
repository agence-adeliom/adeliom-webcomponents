---
meta:
  title: Card
  description: Cards can be used to group related subjects in a container.
layout: component
---

```html:preview
<awc-card class="card-overview">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
    alt="A kitten sits patiently between a terracotta pot and decorative grasses."
  />

  <strong>Mittens</strong><br />
  This kitten is as cute as he is playful. Bring him home today!<br />
  <small>6 weeks old</small>

  <div slot="footer">
    <awc-button variant="primary" pill>More Info</awc-button>
    <awc-rating></awc-rating>
  </div>
</awc-card>

<style>
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--awc-color-neutral-500);
  }

  .card-overview [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
```

```jsx:react
import { AWCButton, AWCCard, AWCRating } from '@agence-adeliom/awc/dist/react';

const css = `
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--awc-color-neutral-500);
  }

  .card-overview [slot="footer"] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const App = () => (
  <>
    <AWCCard className="card-overview">
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        alt="A kitten sits patiently between a terracotta pot and decorative grasses."
      />
      <strong>Mittens</strong>
      <br />
      This kitten is as cute as he is playful. Bring him home today!
      <br />
      <small>6 weeks old</small>
      <div slot="footer">
        <AWCButton variant="primary" pill>
          More Info
        </AWCButton>
        <AWCRating></AWCRating>
      </div>
    </AWCCard>

    <style>{css}</style>
  </>
);
```

## Examples

### Basic Card

Basic cards aren't very exciting, but they can display any content you want them to.

```html:preview
<awc-card class="card-basic">
  This is just a basic card. No image, no header, and no footer. Just your content.
</awc-card>

<style>
  .card-basic {
    max-width: 300px;
  }
</style>
```

```jsx:react
import { AWCCard } from '@agence-adeliom/awc/dist/react';

const css = `
  .card-basic {
    max-width: 300px;
  }
`;

const App = () => (
  <>
    <AWCCard className="card-basic">
      This is just a basic card. No image, no header, and no footer. Just your content.
    </AWCCard>

    <style>{css}</style>
  </>
);
```

### Card with Header

Headers can be used to display titles and more.

```html:preview
<awc-card class="card-header">
  <div slot="header">
    Header Title
    <awc-icon-button name="gear" label="Settings"></awc-icon-button>
  </div>

  This card has a header. You can put all sorts of things in it!
</awc-card>

<style>
  .card-header {
    max-width: 300px;
  }

  .card-header [slot='header'] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-header h3 {
    margin: 0;
  }

  .card-header awc-icon-button {
    font-size: var(--awc-font-size-medium);
  }
</style>
```

```jsx:react
import { AWCCard, AWCIconButton } from '@agence-adeliom/awc/dist/react';

const css = `
  .card-header {
    max-width: 300px;
  }

  .card-header [slot="header"] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-header h3 {
    margin: 0;
  }

  .card-header awc-icon-button {
    font-size: var(--awc-font-size-medium);
  }
`;

const App = () => (
  <>
    <AWCCard className="card-header">
      <div slot="header">
        Header Title
        <AWCIconButton name="gear"></AWCIconButton>
      </div>
      This card has a header. You can put all sorts of things in it!
    </AWCCard>

    <style>{css}</style>
  </>
);
```

### Card with Footer

Footers can be used to display actions, summaries, or other relevant content.

```html:preview
<awc-card class="card-footer">
  This card has a footer. You can put all sorts of things in it!

  <div slot="footer">
    <awc-rating></awc-rating>
    <awc-button variant="primary">Preview</awc-button>
  </div>
</awc-card>

<style>
  .card-footer {
    max-width: 300px;
  }

  .card-footer [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
```

```jsx:react
import { AWCButton, AWCCard, AWCRating } from '@agence-adeliom/awc/dist/react';

const css = `
  .card-footer {
    max-width: 300px;
  }

  .card-footer [slot="footer"] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const App = () => (
  <>
    <AWCCard className="card-footer">
      This card has a footer. You can put all sorts of things in it!
      <div slot="footer">
        <AWCRating></AWCRating>
        <AWCButton slot="footer" variant="primary">
          Preview
        </AWCButton>
      </div>
    </AWCCard>

    <style>{css}</style>
  </>
);
```

### Images

Cards accept an `image` slot. The image is displayed atop the card and stretches to fit.

```html:preview
<awc-card class="card-image">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
    alt="A kitten walks towards camera on top of pallet."
  />
  This is a kitten, but not just any kitten. This kitten likes walking along pallets.
</awc-card>

<style>
  .card-image {
    max-width: 300px;
  }
</style>
```

```jsx:react
import { AWCCard } from '@agence-adeliom/awc/dist/react';

const css = `
  .card-image {
    max-width: 300px;
  }
`;

const App = () => (
  <>
    <AWCCard className="card-image">
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
        alt="A kitten walks towards camera on top of pallet."
      />
      This is a kitten, but not just any kitten. This kitten likes walking along pallets.
    </AWCCard>

    <style>{css}</style>
  </>
);
```
