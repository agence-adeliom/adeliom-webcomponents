---
meta:
  title: QR Code
  description: Generates a QR code and renders it using the Canvas API.
layout: component
---

QR codes are useful for providing small pieces of information to users who can quickly scan them with a smartphone. Most smartphones have built-in QR code scanners, so simply pointing the camera at a QR code will decode it and allow the user to visit a website, dial a phone number, read a message, etc.

```html:preview
<div class="qr-overview">
  <awc-qr-code value="https://awc.a-dev.cloud/" label="Scan this code to visit Adeliom WebComponents on the web!"></awc-qr-code>
  <br />

  <awc-input maxlength="255" clearable label="Value"></awc-input>
</div>

<script>
  const container = document.querySelector('.qr-overview');
  const qrCode = container.querySelector('awc-qr-code');
  const input = container.querySelector('awc-input');

  customElements.whenDefined('awc-qr-code').then(() => {
    input.value = qrCode.value;
    input.addEventListener('awc-input', () => (qrCode.value = input.value));
  });
</script>

<style>
  .qr-overview {
    max-width: 256px;
  }

  .qr-overview awc-input {
    margin-top: 1rem;
  }
</style>
```

```jsx:react
import { useState } from 'react';
import { AWCQrCode, AWCInput } from '@agence-adeliom/awc/dist/react';

const css = `
  .qr-overview {
    max-width: 256px;
  }

  .qr-overview awc-input {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [value, setValue] = useState('https://awc.a-dev.cloud/');

  return (
    <>
      <div className="qr-overview">
        <AWCQrCode value={value} label="Scan this code to visit Adeliom WebComponents on the web!" />
        <br />

        <AWCInput maxlength="255" clearable onInput={event => setValue(event.target.value)} />
      </div>

      <style>{css}</style>
    </>
  );
};
```

## Examples

### Colors

Use the `fill` and `background` attributes to modify the QR code's colors. You should always ensure good contrast for optimal compatibility with QR code scanners.

```html:preview
<awc-qr-code value="https://awc.a-dev.cloud/" fill="deeppink" background="white"></awc-qr-code>
```

```jsx:react
import { AWCQrCode } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCQrCode value="https://awc.a-dev.cloud/" fill="deeppink" background="white" />;
```

### Size

Use the `size` attribute to change the size of the QR code.

```html:preview
<awc-qr-code value="https://awc.a-dev.cloud/" size="64"></awc-qr-code>
```

```jsx:react
import { AWCQrCode } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCQrCode value="https://awc.a-dev.cloud/" size="64" />;
```

### Radius

Create a rounded effect with the `radius` attribute.

```html:preview
<awc-qr-code value="https://awc.a-dev.cloud/" radius="0.5"></awc-qr-code>
```

```jsx:react
import { AWCQrCode } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCQrCode value="https://awc.a-dev.cloud/" radius="0.5" />;
```

### Error Correction

QR codes can be rendered with various levels of [error correction](https://www.qrcode.com/en/about/error_correction.html) that can be set using the `error-correction` attribute. This example generates four codes with the same value using different error correction levels.

```html:preview
<div class="qr-error-correction">
  <awc-qr-code value="https://awc.a-dev.cloud/" error-correction="L"></awc-qr-code>
  <awc-qr-code value="https://awc.a-dev.cloud/" error-correction="M"></awc-qr-code>
  <awc-qr-code value="https://awc.a-dev.cloud/" error-correction="Q"></awc-qr-code>
  <awc-qr-code value="https://awc.a-dev.cloud/" error-correction="H"></awc-qr-code>
</div>

<style>
  .qr-error-correction {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
```

```jsx:react
import { AWCQrCode } from '@agence-adeliom/awc/dist/react';

const css = `
  .qr-error-correction {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const App = () => {
  return (
    <>
      <div className="qr-error-correction">
        <AWCQrCode value="https://awc.a-dev.cloud/" error-correction="L" />
        <AWCQrCode value="https://awc.a-dev.cloud/" error-correction="M" />
        <AWCQrCode value="https://awc.a-dev.cloud/" error-correction="Q" />
        <AWCQrCode value="https://awc.a-dev.cloud/" error-correction="H" />
      </div>

      <style>{css}</style>
    </>
  );
};
```
