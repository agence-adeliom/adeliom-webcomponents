---
meta:
  title: Alert
  description: Alerts are used to display important messages inline or as toast notifications.
layout: component
---

```html:preview
<awc-alert open>
  <awc-icon slot="icon" name="info-circle"></awc-icon>
  This is a standard alert. You can customize its content and even the icon.
</awc-alert>
```

```jsx:react
import { AWCAlert, AWCIcon } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCAlert open>
    <AWCIcon slot="icon" name="info-circle" />
    This is a standard alert. You can customize its content and even the icon.
  </AWCAlert>
);
```

:::tip
Alerts will not be visible if the `open` attribute is not present.
:::

## Examples

### Variants

Set the `variant` attribute to change the alert's variant.

```html:preview
<awc-alert variant="primary" open>
  <awc-icon slot="icon" name="info-circle"></awc-icon>
  <strong>This is super informative</strong><br />
  You can tell by how pretty the alert is.
</awc-alert>

<br />

<awc-alert variant="secondary" open>
  <awc-icon slot="icon" name="info-circle"></awc-icon>
  <strong>This is super informative</strong><br />
  You can tell by how pretty the alert is.
</awc-alert>

<br />

<awc-alert variant="tertiary" open>
  <awc-icon slot="icon" name="info-circle"></awc-icon>
  <strong>This is super informative</strong><br />
  You can tell by how pretty the alert is.
</awc-alert>

<br />

<awc-alert variant="success" open>
  <awc-icon slot="icon" name="check2-circle"></awc-icon>
  <strong>Your changes have been saved</strong><br />
  You can safely exit the app now.
</awc-alert>

<br />

<awc-alert variant="neutral" open>
  <awc-icon slot="icon" name="gear"></awc-icon>
  <strong>Your settings have been updated</strong><br />
  Settings will take affect on next login.
</awc-alert>

<br />

<awc-alert variant="warning" open>
  <awc-icon slot="icon" name="exclamation-triangle"></awc-icon>
  <strong>Your session has ended</strong><br />
  Please login again to continue.
</awc-alert>

<br />

<awc-alert variant="danger" open>
  <awc-icon slot="icon" name="exclamation-octagon"></awc-icon>
  <strong>Your account has been deleted</strong><br />
  We're very sorry to see you go!
</awc-alert>
```

```jsx:react
import { AWCAlert, AWCIcon } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCAlert variant="primary" open>
      <AWCIcon slot="icon" name="info-circle" />
      <strong>This is super informative</strong>
      <br />
      You can tell by how pretty the alert is.
    </AWCAlert>

    <br />

    <AWCAlert variant="secondary" open>
      <AWCIcon slot="icon" name="info-circle" />
      <strong>This is super informative</strong>
      <br />
      You can tell by how pretty the alert is.
    </AWCAlert>

    <br />

    <AWCAlert variant="tertiary" open>
      <AWCIcon slot="icon" name="info-circle" />
      <strong>This is super informative</strong>
      <br />
      You can tell by how pretty the alert is.
    </AWCAlert>

    <br />

    <AWCAlert variant="success" open>
      <AWCIcon slot="icon" name="check2-circle" />
      <strong>Your changes have been saved</strong>
      <br />
      You can safely exit the app now.
    </AWCAlert>

    <br />

    <AWCAlert variant="neutral" open>
      <AWCIcon slot="icon" name="gear" />
      <strong>Your settings have been updated</strong>
      <br />
      Settings will take affect on next login.
    </AWCAlert>

    <br />

    <AWCAlert variant="warning" open>
      <AWCIcon slot="icon" name="exclamation-triangle" />
      <strong>Your session has ended</strong>
      <br />
      Please login again to continue.
    </AWCAlert>

    <br />

    <AWCAlert variant="danger" open>
      <AWCIcon slot="icon" name="exclamation-octagon" />
      <strong>Your account has been deleted</strong>
      <br />
      We're very sorry to see you go!
    </AWCAlert>
  </>
);
```

### Closable

Add the `closable` attribute to show a close button that will hide the alert.

```html:preview
<awc-alert variant="primary" open closable class="alert-closable">
  <awc-icon slot="icon" name="info-circle"></awc-icon>
  You can close this alert any time!
</awc-alert>

<script>
  const alert = document.querySelector('.alert-closable');
  alert.addEventListener('awc-after-hide', () => {
    setTimeout(() => (alert.open = true), 2000);
  });
</script>
```

```jsx:react
import { useState } from 'react';
import { AWCAlert, AWCIcon } from '@agence-adeliom/awc/dist/react';

const App = () => {
  const [open, setOpen] = useState(true);

  function handleHide() {
    setOpen(false);
    setTimeout(() => setOpen(true), 2000);
  }

  return (
    <AWCAlert open={open} closable onAwcAfterHide={handleHide}>
      <AWCIcon slot="icon" name="info-circle" />
      You can close this alert any time!
    </AWCAlert>
  );
};
```

### Without Icons

Icons are optional. Simply omit the `icon` slot if you don't want them.

```html:preview
<awc-alert variant="primary" open> Nothing fancy here, just a simple alert. </awc-alert>
```

```jsx:react
import { AWCAlert } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCAlert variant="primary" open>
    Nothing fancy here, just a simple alert.
  </AWCAlert>
);
```

### Duration

Set the `duration` attribute to automatically hide an alert after a period of time. This is useful for alerts that don't require acknowledgement.

```html:preview
<div class="alert-duration">
  <awc-button variant="primary">Show Alert</awc-button>

  <awc-alert variant="primary" duration="3000" closable>
    <awc-icon slot="icon" name="info-circle"></awc-icon>
    This alert will automatically hide itself after three seconds, unless you interact with it.
  </awc-alert>
</div>

<script>
  const container = document.querySelector('.alert-duration');
  const button = container.querySelector('awc-button');
  const alert = container.querySelector('awc-alert');

  button.addEventListener('click', () => alert.show());
</script>

<style>
  .alert-duration awc-alert {
    margin-top: var(--awc-spacing-medium);
  }
</style>
```

```jsx:react
import { useState } from 'react';
import { AWCAlert, AWCButton, AWCIcon } from '@agence-adeliom/awc/dist/react';

const css = `
  .alert-duration awc-alert {
    margin-top: var(--awc-spacing-medium);
  }
`;

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="alert-duration">
        <AWCButton variant="primary" onClick={() => setOpen(true)}>
          Show Alert
        </AWCButton>

        <AWCAlert variant="primary" duration="3000" open={open} closable onAwcAfterHide={() => setOpen(false)}>
          <AWCIcon slot="icon" name="info-circle" />
          This alert will automatically hide itself after three seconds, unless you interact with it.
        </AWCAlert>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Toast Notifications

To display an alert as a toast notification, or "toast", create the alert and call its `toast()` method. This will move the alert out of its position in the DOM and into [the toast stack](#the-toast-stack) where it will be shown. Once dismissed, it will be removed from the DOM completely. To reuse a toast, store a reference to it and call `toast()` again later on.

You should always use the `closable` attribute so users can dismiss the notification. It's also common to set a reasonable `duration` when the notification doesn't require acknowledgement.

```html:preview
<div class="alert-toast">
  <awc-button variant="primary">Primary</awc-button>
  <awc-button variant="success">Success</awc-button>
  <awc-button variant="neutral">Neutral</awc-button>
  <awc-button variant="warning">Warning</awc-button>
  <awc-button variant="danger">Danger</awc-button>

  <awc-alert variant="primary" duration="3000" closable>
    <awc-icon slot="icon" name="info-circle"></awc-icon>
    <strong>This is super informative</strong><br />
    You can tell by how pretty the alert is.
  </awc-alert>

  <awc-alert variant="success" duration="3000" closable>
    <awc-icon slot="icon" name="check2-circle"></awc-icon>
    <strong>Your changes have been saved</strong><br />
    You can safely exit the app now.
  </awc-alert>

  <awc-alert variant="neutral" duration="3000" closable>
    <awc-icon slot="icon" name="gear"></awc-icon>
    <strong>Your settings have been updated</strong><br />
    Settings will take affect on next login.
  </awc-alert>

  <awc-alert variant="warning" duration="3000" closable>
    <awc-icon slot="icon" name="exclamation-triangle"></awc-icon>
    <strong>Your session has ended</strong><br />
    Please login again to continue.
  </awc-alert>

  <awc-alert variant="danger" duration="3000" closable>
    <awc-icon slot="icon" name="exclamation-octagon"></awc-icon>
    <strong>Your account has been deleted</strong><br />
    We're very sorry to see you go!
  </awc-alert>
</div>

<script>
  const container = document.querySelector('.alert-toast');

  ['primary', 'success', 'neutral', 'warning', 'danger'].map(variant => {
    const button = container.querySelector(`awc-button[variant="${variant}"]`);
    const alert = container.querySelector(`awc-alert[variant="${variant}"]`);

    button.addEventListener('click', () => alert.toast());
  });
</script>
```

```jsx:react
import { useRef } from 'react';
import { AWCAlert, AWCButton, AWCIcon } from '@agence-adeliom/awc/dist/react';

function showToast(alert) {
  alert.toast();
}

const App = () => {
  const primary = useRef(null);
  const success = useRef(null);
  const neutral = useRef(null);
  const warning = useRef(null);
  const danger = useRef(null);

  return (
    <>
      <AWCButton variant="primary" onClick={() => primary.current.toast()}>
        Primary
      </AWCButton>

      <AWCButton variant="success" onClick={() => success.current.toast()}>
        Success
      </AWCButton>

      <AWCButton variant="neutral" onClick={() => neutral.current.toast()}>
        Neutral
      </AWCButton>

      <AWCButton variant="warning" onClick={() => warning.current.toast()}>
        Warning
      </AWCButton>

      <AWCButton variant="danger" onClick={() => danger.current.toast()}>
        Danger
      </AWCButton>

      <AWCAlert ref={primary} variant="primary" duration="3000" closable>
        <AWCIcon slot="icon" name="info-circle" />
        <strong>This is super informative</strong>
        <br />
        You can tell by how pretty the alert is.
      </AWCAlert>

      <AWCAlert ref={success} variant="success" duration="3000" closable>
        <AWCIcon slot="icon" name="check2-circle" />
        <strong>Your changes have been saved</strong>
        <br />
        You can safely exit the app now.
      </AWCAlert>

      <AWCAlert ref={neutral} variant="neutral" duration="3000" closable>
        <AWCIcon slot="icon" name="gear" />
        <strong>Your settings have been updated</strong>
        <br />
        Settings will take affect on next login.
      </AWCAlert>

      <AWCAlert ref={warning} variant="warning" duration="3000" closable>
        <AWCIcon slot="icon" name="exclamation-triangle" />
        <strong>Your session has ended</strong>
        <br />
        Please login again to continue.
      </AWCAlert>

      <AWCAlert ref={danger} variant="danger" duration="3000" closable>
        <AWCIcon slot="icon" name="exclamation-octagon" />
        <strong>Your account has been deleted</strong>
        <br />
        We're very sorry to see you go!
      </AWCAlert>
    </>
  );
};
```

### Creating Toasts Imperatively

For convenience, you can create a utility that emits toast notifications with a function call rather than composing them in your HTML. To do this, generate the alert with JavaScript, append it to the body, and call the `toast()` method as shown in the example below.

```html:preview
<div class="alert-toast-wrapper">
  <awc-button variant="primary">Create Toast</awc-button>
</div>

<script>
  const container = document.querySelector('.alert-toast-wrapper');
  const button = container.querySelector('awc-button');
  let count = 0;

  // Always escape HTML for text arguments!
  function escapeHtml(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  // Custom function to emit toast notifications
  function notify(message, variant = 'primary', icon = 'info-circle', duration = 3000) {
    const alert = Object.assign(document.createElement('awc-alert'), {
      variant,
      closable: true,
      duration: duration,
      innerHTML: `
        <awc-icon name="${icon}" slot="icon"></awc-icon>
        ${escapeHtml(message)}
      `
    });

    document.body.append(alert);
    return alert.toast();
  }

  button.addEventListener('click', () => {
    notify(`This is custom toast #${++count}`);
  });
</script>
```

### The Toast Stack

The toast stack is a fixed position singleton element created and managed internally by the alert component. It will be added and removed from the DOM as needed when toasts are shown. When more than one toast is visible, they will stack vertically in the toast stack.

By default, the toast stack is positioned at the top-right of the viewport. You can change its position by targeting `.awc-toast-stack` in your stylesheet. To make toasts appear at the top-left of the viewport, for example, use the following styles.

```css
.awc-toast-stack {
  left: 0;
  right: auto;
}
```

:::tip
By design, it is not possible to show toasts in more than one stack simultaneously. Such behavior is confusing and makes for a poor user experience.
:::
