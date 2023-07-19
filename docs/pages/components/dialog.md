---
meta:
  title: Dialog
  description: 'Dialogs, sometimes called "modals", appear above the page and require the user''s immediate attention.'
layout: component
---

<!-- cspell:dictionaries lorem-ipsum -->

```html:preview
<awc-dialog label="Dialog" class="dialog-overview">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <awc-button slot="footer" variant="primary">Close</awc-button>
</awc-dialog>

<awc-button>Open Dialog</awc-button>

<script>
  const dialog = document.querySelector('.dialog-overview');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('awc-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

```jsx:react
import { useState } from 'react';
import { AWCButton, AWCDialog } from '@agence-adeliom/awc/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AWCDialog label="Dialog" open={open} onAwcAfterHide={() => setOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <AWCButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </AWCButton>
      </AWCDialog>

      <AWCButton onClick={() => setOpen(true)}>Open Dialog</AWCButton>
    </>
  );
};
```

## Examples

### Custom Width

Use the `--width` custom property to set the dialog's width.

```html:preview
<awc-dialog label="Dialog" class="dialog-width" style="--width: 50vw;">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <awc-button slot="footer" variant="primary">Close</awc-button>
</awc-dialog>

<awc-button>Open Dialog</awc-button>

<script>
  const dialog = document.querySelector('.dialog-width');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('awc-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import { AWCButton, AWCDialog } from '@agence-adeliom/awc/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AWCDialog label="Dialog" open={open} style={{ '--width': '50vw' }} onAwcAfterHide={() => setOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <AWCButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </AWCButton>
      </AWCDialog>

      <AWCButton onClick={() => setOpen(true)}>Open Dialog</AWCButton>
    </>
  );
};
```

{% endraw %}

### Scrolling

By design, a dialog's height will never exceed that of the viewport. As such, dialogs will not scroll with the page ensuring the header and footer are always accessible to the user.

```html:preview
<awc-dialog label="Dialog" class="dialog-scrolling">
  <div style="height: 150vh; border: dashed 2px var(--awc-color-neutral-200); padding: 0 1rem;">
    <p>Scroll down and give it a try! 👇</p>
  </div>
  <awc-button slot="footer" variant="primary">Close</awc-button>
</awc-dialog>

<awc-button>Open Dialog</awc-button>

<script>
  const dialog = document.querySelector('.dialog-scrolling');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('awc-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import { AWCButton, AWCDialog } from '@agence-adeliom/awc/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AWCDialog label="Dialog" open={open} onAwcAfterHide={() => setOpen(false)}>
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
      </AWCDialog>

      <AWCButton onClick={() => setOpen(true)}>Open Dialog</AWCButton>
    </>
  );
};
```

{% endraw %}

### Header Actions

The header shows a functional close button by default. You can use the `header-actions` slot to add additional [icon buttons](/components/icon-button) if needed.

```html:preview
<awc-dialog label="Dialog" class="dialog-header-actions">
  <awc-icon-button class="new-window" slot="header-actions" name="box-arrow-up-right"></awc-icon-button>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <awc-button slot="footer" variant="primary">Close</awc-button>
</awc-dialog>

<awc-button>Open Dialog</awc-button>

<script>
  const dialog = document.querySelector('.dialog-header-actions');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('awc-button[slot="footer"]');
  const newWindowButton = dialog.querySelector('.new-window');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
  newWindowButton.addEventListener('click', () => window.open(location.href));
</script>
```

```jsx:react
import { useState } from 'react';
import { AWCButton, AWCDialog, AWCIconButton } from '@agence-adeliom/awc/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AWCDialog label="Dialog" open={open} onAwcAfterHide={() => setOpen(false)}>
        <AWCIconButton
          class="new-window"
          slot="header-actions"
          name="box-arrow-up-right"
          onClick={() => window.open(location.href)}
        />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <AWCButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </AWCButton>
      </AWCDialog>

      <AWCButton onClick={() => setOpen(true)}>Open Dialog</AWCButton>
    </>
  );
};
```

### Preventing the Dialog from Closing

By default, dialogs will close when the user clicks the close button, clicks the overlay, or presses the [[Escape]] key. In most cases, the default behavior is the best behavior in terms of UX. However, there are situations where this may be undesirable, such as when data loss will occur.

To keep the dialog open in such cases, you can cancel the `awc-request-close` event. When canceled, the dialog will remain open and pulse briefly to draw the user's attention to it.

You can use `event.detail.source` to determine what triggered the request to close. This example prevents the dialog from closing when the overlay is clicked, but allows the close button or [[Escape]] to dismiss it.

```html:preview
<awc-dialog label="Dialog" class="dialog-deny-close">
  This dialog will not close when you click on the overlay.
  <awc-button slot="footer" variant="primary">Close</awc-button>
</awc-dialog>

<awc-button>Open Dialog</awc-button>

<script>
  const dialog = document.querySelector('.dialog-deny-close');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('awc-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());

  // Prevent the dialog from closing when the user clicks on the overlay
  dialog.addEventListener('awc-request-close', event => {
    if (event.detail.source === 'overlay') {
      event.preventDefault();
    }
  });
</script>
```

```jsx:react
import { useState } from 'react';
import { AWCButton, AWCDialog } from '@agence-adeliom/awc/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  // Prevent the dialog from closing when the user clicks on the overlay
  function handleRequestClose(event) {
    if (event.detail.source === 'overlay') {
      event.preventDefault();
    }
  }

  return (
    <>
      <AWCDialog label="Dialog" open={open} onAwcRequestClose={handleRequestClose} onAwcAfterHide={() => setOpen(false)}>
        This dialog will not close when you click on the overlay.
        <AWCButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </AWCButton>
      </AWCDialog>

      <AWCButton onClick={() => setOpen(true)}>Open Dialog</AWCButton>
    </>
  );
};
```

### Customizing Initial Focus

By default, the dialog's panel will gain focus when opened. This allows a subsequent tab press to focus on the first tabbable element in the dialog. If you want a different element to have focus, add the `autofocus` attribute to it as shown below.

```html:preview
<awc-dialog label="Dialog" class="dialog-focus">
  <awc-input autofocus placeholder="I will have focus when the dialog is opened"></awc-input>
  <awc-button slot="footer" variant="primary">Close</awc-button>
</awc-dialog>

<awc-button>Open Dialog</awc-button>

<script>
  const dialog = document.querySelector('.dialog-focus');
  const input = dialog.querySelector('awc-input');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('awc-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

```jsx:react
import { useState } from 'react';
import { AWCButton, AWCDialog, AWCInput } from '@agence-adeliom/awc/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AWCDialog label="Dialog" open={open} onAwcAfterHide={() => setOpen(false)}>
        <AWCInput autofocus placeholder="I will have focus when the dialog is opened" />
        <AWCButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </AWCButton>
      </AWCDialog>

      <AWCButton onClick={() => setOpen(true)}>Open Dialog</AWCButton>
    </>
  );
};
```

:::tip
You can further customize initial focus behavior by canceling the `awc-initial-focus` event and setting focus yourself inside the event handler.
:::
