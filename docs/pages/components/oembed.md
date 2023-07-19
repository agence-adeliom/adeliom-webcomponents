---
meta:
  title: Oembed
  description:
layout: component
---

```html:preview
<awc-oembed src="https://www.youtube.com/watch?v=YE7VzlLtp-4" aspectRatio="1.5" layout="fullWidth"></awc-oembed>
```

```jsx:react
import { AWCOembed } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCOembed
      src="https://www.youtube.com/watch?v=YE7VzlLtp-4"
      layout="fullWidth"
      aspectRatio="1.5"
    ></AWCImage>
  </>
);
```

## Settings

### `layout`

The resizing behaviour of the image.

- `constrained`: (default) the image will be rendered at a maximum of `width` and `height`, but will scale down automatically if the container is smaller, maintaining the aspect ratio.
- `fullWidth`: the image will be rendered at full width of its container. This is optimized for full-width hero images. You can set `height` to a fixed value, which will mean the image will be rendered at that fixed height and scale horizontally to fill the container.
- `fixed`: the image will be rendered at the exact size specified by `width` and `height`

### `aspectRatio`

Instead of specifying both `width` and `height`, you can specify can `aspectRatio`.
