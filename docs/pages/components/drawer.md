---
meta:
  title: Drawer
  description: Drawers slide in from a container to expose additional options and information.
layout: component
---

<!-- cspell:dictionaries lorem-ipsum -->

```html:preview
<awc-drawer label="Drawer" class="drawer-overview">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <awc-button slot="footer" variant="primary">Close</awc-button>
</awc-drawer>

<awc-button>Open Drawer</awc-button>

<script>
  const drawer = document.querySelector('.drawer-overview');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('awc-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx:react
import { useState } from 'react';
import { AWCButton, AWCDrawer } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AWCDrawer label="Drawer" open={open} onAwcAfterHide={() => setOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <AWCButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </AWCButton>
      </AWCDrawer>

      <AWCButton onClick={() => setOpen(true)}>Open Drawer</AWCButton>
    </>
  );
};
```

## Examples

### Slide in From Start

By default, drawers slide in from the end. To make the drawer slide in from the start, set the `placement` attribute to `start`.

```html:preview
<awc-drawer label="Drawer" placement="start" class="drawer-placement-start">
  This drawer slides in from the start.
  <awc-button slot="footer" variant="primary">Close</awc-button>
</awc-drawer>

<awc-button>Open Drawer</awc-button>

<script>
  const drawer = document.querySelector('.drawer-placement-start');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('awc-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx:react
import { useState } from 'react';
import { AWCButton, AWCDrawer } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AWCDrawer label="Drawer" placement="start" open={open} onAwcAfterHide={() => setOpen(false)}>
        This drawer slides in from the start.
        <AWCButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </AWCButton>
      </AWCDrawer>

      <AWCButton onClick={() => setOpen(true)}>Open Drawer</AWCButton>
    </>
  );
};
```

### Slide in From Top

To make the drawer slide in from the top, set the `placement` attribute to `top`.

```html:preview
<awc-drawer label="Drawer" placement="top" class="drawer-placement-top">
  This drawer slides in from the top.
  <awc-button slot="footer" variant="primary">Close</awc-button>
</awc-drawer>

<awc-button>Open Drawer</awc-button>

<script>
  const drawer = document.querySelector('.drawer-placement-top');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('awc-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx:react
import { useState } from 'react';
import { AWCButton, AWCDrawer } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AWCDrawer label="Drawer" placement="top" open={open} onAwcAfterHide={() => setOpen(false)}>
        This drawer slides in from the top.
        <AWCButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </AWCButton>
      </AWCDrawer>

      <AWCButton onClick={() => setOpen(true)}>Open Drawer</AWCButton>
    </>
  );
};
```

### Slide in From Bottom

To make the drawer slide in from the bottom, set the `placement` attribute to `bottom`.

```html:preview
<awc-drawer label="Drawer" placement="bottom" class="drawer-placement-bottom">
  This drawer slides in from the bottom.
  <awc-button slot="footer" variant="primary">Close</awc-button>
</awc-drawer>

<awc-button>Open Drawer</awc-button>

<script>
  const drawer = document.querySelector('.drawer-placement-bottom');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('awc-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx:react
import { useState } from 'react';
import { AWCButton, AWCDrawer } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AWCDrawer label="Drawer" placement="bottom" open={open} onAwcAfterHide={() => setOpen(false)}>
        This drawer slides in from the bottom.
        <AWCButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </AWCButton>
      </AWCDrawer>

      <AWCButton onClick={() => setOpen(true)}>Open Drawer</AWCButton>
    </>
  );
};
```

### Contained to an Element

By default, drawers slide out of their [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block), which is usually the viewport. To make a drawer slide out of a parent element, add the `contained` attribute to the drawer and apply `position: relative` to its parent.

Unlike normal drawers, contained drawers are not modal. This means they do not show an overlay, they do not trap focus, and they are not dismissible with [[Escape]]. This is intentional to allow users to interact with elements outside of the drawer.

```html:preview
<div
  style="position: relative; border: solid 2px var(--awc-panel-border-color); height: 300px; padding: 1rem; margin-bottom: 1rem;"
>
  The drawer will be contained to this box. This content won't shift or be affected in any way when the drawer opens.

  <awc-drawer label="Drawer" contained class="drawer-contained" style="--size: 50%;">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <awc-button slot="footer" variant="primary">Close</awc-button>
  </awc-drawer>
</div>

<awc-button>Toggle Drawer</awc-button>

<script>
  const drawer = document.querySelector('.drawer-contained');
  const openButton = drawer.parentElement.nextElementSibling;
  const closeButton = drawer.querySelector('awc-button[variant="primary"]');

  openButton.addEventListener('click', () => (drawer.open = !drawer.open));
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import { AWCButton, AWCDrawer } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        style={{
          position: 'relative',
          border: 'solid 2px var(--awc-panel-border-color)',
          height: '300px',
          padding: '1rem',
          marginBottom: '1rem'
        }}
      >
        The drawer will be contained to this box. This content won't shift or be affected in any way when the drawer
        opens.
        <AWCDrawer
          label="Drawer"
          contained
          no-modal
          open={open}
          onAwcAfterHide={() => setOpen(false)}
          style={{ '--size': '50%' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <AWCButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
            Close
          </AWCButton>
        </AWCDrawer>
      </div>

      <AWCButton onClick={() => setOpen(true)}>Open Drawer</AWCButton>
    </>
  );
};
```

{% endraw %}

### Custom Size

Use the `--size` custom property to set the drawer's size. This will be applied to the drawer's width or height depending on its `placement`.

```html:preview
<awc-drawer label="Drawer" class="drawer-custom-size" style="--size: 50vw;">
  This drawer is always 50% of the viewport.
  <awc-button slot="footer" variant="primary">Close</awc-button>
</awc-drawer>

<awc-button>Open Drawer</awc-button>

<script>
  const drawer = document.querySelector('.drawer-custom-size');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('awc-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import { AWCButton, AWCDrawer } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AWCDrawer label="Drawer" open={open} onAwcAfterHide={() => setOpen(false)} style={{ '--size': '50vw' }}>
        This drawer is always 50% of the viewport.
        <AWCButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </AWCButton>
      </AWCDrawer>

      <AWCButton onClick={() => setOpen(true)}>Open Drawer</AWCButton>
    </>
  );
};
```

{% endraw %}

### Scrolling

By design, a drawer's height will never exceed 100% of its container. As such, drawers will not scroll with the page to ensure the header and footer are always accessible to the user.

```html:preview
<awc-drawer label="Drawer" class="drawer-scrolling">
  <div style="height: 150vh; border: dashed 2px var(--awc-color-neutral-200); padding: 0 1rem;">
    <p>Scroll down and give it a try! 👇</p>
  </div>
  <awc-button slot="footer" variant="primary">Close</awc-button>
</awc-drawer>

<awc-button>Open Drawer</awc-button>

<script>
  const drawer = document.querySelector('.drawer-scrolling');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('awc-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import { AWCButton, AWCDrawer } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AWCDrawer label="Drawer" open={open} onAwcAfterHide={() => setOpen(false)}>
        <div
          style={{
            height: '150vh',
            border: 'dashed 2px var(--awc-color-neutral-200)',
            padding: '0 1rem'
          }}
        >
          <p>Scroll down and give it a try! 👇</p>
        </div>
        <AWCButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </AWCButton>
      </AWCDrawer>

      <AWCButton onClick={() => setOpen(true)}>Open Drawer</AWCButton>
    </>
  );
};
```

{% endraw %}

### Header Actions

The header shows a functional close button by default. You can use the `header-actions` slot to add additional [icon buttons](/components/icon-button) if needed.

```html:preview
<awc-drawer label="Drawer" class="drawer-header-actions">
  <awc-icon-button class="new-window" slot="header-actions" name="box-arrow-up-right"></awc-icon-button>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <awc-button slot="footer" variant="primary">Close</awc-button>
</awc-drawer>

<awc-button>Open Drawer</awc-button>

<script>
  const drawer = document.querySelector('.drawer-header-actions');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('awc-button[variant="primary"]');
  const newWindowButton = drawer.querySelector('.new-window');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
  newWindowButton.addEventListener('click', () => window.open(location.href));
</script>
```

```jsx:react
import { useState } from 'react';
import { AWCButton, AWCDrawer, AWCIconButton } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AWCDrawer label="Drawer" open={open} onAwcAfterHide={() => setOpen(false)}>
        <AWCIconButton slot="header-actions" name="box-arrow-up-right" onClick={() => window.open(location.href)} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <AWCButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </AWCButton>
      </AWCDrawer>

      <AWCButton onClick={() => setOpen(true)}>Open Drawer</AWCButton>
    </>
  );
};
```

### Preventing the Drawer from Closing

By default, drawers will close when the user clicks the close button, clicks the overlay, or presses the [[Escape]] key. In most cases, the default behavior is the best behavior in terms of UX. However, there are situations where this may be undesirable, such as when data loss will occur.

To keep the drawer open in such cases, you can cancel the `awc-request-close` event. When canceled, the drawer will remain open and pulse briefly to draw the user's attention to it.

You can use `event.detail.source` to determine what triggered the request to close. This example prevents the drawer from closing when the overlay is clicked, but allows the close button or [[Escape]] to dismiss it.

```html:preview
<awc-drawer label="Drawer" class="drawer-deny-close">
  This drawer will not close when you click on the overlay.
  <awc-button slot="footer" variant="primary">Close</awc-button>
</awc-drawer>

<awc-button>Open Drawer</awc-button>

<script>
  const drawer = document.querySelector('.drawer-deny-close');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('awc-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());

  // Prevent the drawer from closing when the user clicks on the overlay
  drawer.addEventListener('awc-request-close', event => {
    if (event.detail.source === 'overlay') {
      event.preventDefault();
    }
  });
</script>
```

```jsx:react
import { useState } from 'react';
import { AWCButton, AWCDrawer } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => {
  const [open, setOpen] = useState(false);

  // Prevent the drawer from closing when the user clicks on the overlay
  function handleRequestClose(event) {
    if (event.detail.source === 'overlay') {
      event.preventDefault();
    }
  }

  return (
    <>
      <AWCDrawer label="Drawer" open={open} onAwcRequestClose={handleRequestClose} onAwcAfterHide={() => setOpen(false)}>
        This drawer will not close when you click on the overlay.
        <AWCButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Save &amp; Close
        </AWCButton>
      </AWCDrawer>

      <AWCButton onClick={() => setOpen(true)}>Open Drawer</AWCButton>
    </>
  );
};
```

### Customizing Initial Focus

By default, the drawer's panel will gain focus when opened. This allows a subsequent tab press to focus on the first tabbable element in the drawer. If you want a different element to have focus, add the `autofocus` attribute to it as shown below.

```html:preview
<awc-drawer label="Drawer" class="drawer-focus">
  <awc-input autofocus placeholder="I will have focus when the drawer is opened"></awc-input>
  <awc-button slot="footer" variant="primary">Close</awc-button>
</awc-drawer>

<awc-button>Open Drawer</awc-button>

<script>
  const drawer = document.querySelector('.drawer-focus');
  const input = drawer.querySelector('awc-input');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('awc-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

```jsx:react
import { useState } from 'react';
import { AWCButton, AWCDrawer, AWCInput } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AWCDrawer label="Drawer" open={open} onAwcAfterHide={() => setOpen(false)}>
        <AWCInput autofocus placeholder="I will have focus when the drawer is opened" />
        <AWCButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </AWCButton>
      </AWCDrawer>

      <AWCButton onClick={() => setOpen(true)}>Open Drawer</AWCButton>
    </>
  );
};
```

:::tip
You can further customize initial focus behavior by canceling the `awc-initial-focus` event and setting focus yourself inside the event handler.
:::
