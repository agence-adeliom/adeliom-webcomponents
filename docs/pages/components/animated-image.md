---
meta:
  title: Animated Image
  description: A component for displaying animated GIFs and WEBPs that play and pause on interaction.
layout: component
---

```html:preview
<awc-animated-image
  src="https://awc.a-dev.cloud/assets/images/walk.gif"
  alt="Animation of untied shoes walking on pavement"
></awc-animated-image>
```

```jsx:react
import { AWCAnimatedImage } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCAnimatedImage
    src="https://awc.a-dev.cloud/assets/images/walk.gif"
    alt="Animation of untied shoes walking on pavement"
  />
);
```

:::tip
This component uses `<canvas>` to draw freeze frames, so images are subject to [cross-origin restrictions](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image).
:::

## Examples

### WEBP Images

Both GIF and WEBP images are supported.

```html:preview
<awc-animated-image
  src="https://awc.a-dev.cloud/assets/images/tie.webp"
  alt="Animation of a shoe being tied"
></awc-animated-image>
```

```jsx:react
import { AWCAnimatedImage } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCAnimatedImage src="https://awc.a-dev.cloud/assets/images/tie.webp" alt="Animation of a shoe being tied" />
);
```

### Setting a Width and Height

To set a custom size, apply a width and/or height to the host element.

```html:preview
<awc-animated-image
  src="https://awc.a-dev.cloud/assets/images/walk.gif"
  alt="Animation of untied shoes walking on pavement"
  style="width: 150px; height: 200px;"
>
</awc-animated-image>
```

{% raw %}

```jsx:react
import { AWCAnimatedImage } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCAnimatedImage
    src="https://awc.a-dev.cloud/assets/images/walk.gif"
    alt="Animation of untied shoes walking on pavement"
    style={{ width: '150px', height: '200px' }}
  />
);
```

{% endraw %}

### Customizing the Control Box

You can change the appearance and location of the control box by targeting the `control-box` part in your styles.

```html:preview
<awc-animated-image
  src="https://awc.a-dev.cloud/assets/images/walk.gif"
  alt="Animation of untied shoes walking on pavement"
  class="animated-image-custom-control-box"
></awc-animated-image>

<style>
  .animated-image-custom-control-box::part(control-box) {
    top: auto;
    right: auto;
    bottom: 1rem;
    left: 1rem;
    background-color: deeppink;
    border: none;
    color: pink;
  }
</style>
```

```jsx:react
import { AWCAnimatedImage } from '@agence-adeliom/awc/%NPMDIR%/react';

const css = `
  .animated-image-custom-control-box::part(control-box) {
    top: auto;
    right: auto;
    bottom: 1rem;
    left: 1rem;
    background-color: deeppink;
    border: none;
    color: pink;
  }
`;

const App = () => (
  <>
    <AWCAnimatedImage
      className="animated-image-custom-control-box"
      src="https://awc.a-dev.cloud/assets/images/walk.gif"
      alt="Animation of untied shoes walking on pavement"
    />

    <style>{css}</style>
  </>
);
```
