---
meta:
  title: Preact
  description: Tips for using Adeliom WebComponents in your Preact app.
---

# Preact

Preact [plays nice](https://custom-elements-everywhere.com/#preact) with custom elements, so you can use Adeliom WebComponents in your Preact apps with ease.

## Installation

To add Adeliom WebComponents to your Preact app, install the package from npm.

```bash
npm install @agence-adeliom/awc
```

Next, [include a theme](/getting-started/themes) and set the [base path](/getting-started/installation#setting-the-base-path) for icons and other assets. In this example, we'll import the light theme and use the CDN as a base path.

```jsx
import '@agence-adeliom/awc/dist/themes/light.css';
import { setBasePath } from '@agence-adeliom/awc/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@agence-adeliom/awc@%VERSION%/%CDNDIR%/');
```

:::tip
If you'd rather not use the CDN for assets, you can create a build task that copies `node_modules/@agence-adeliom/awc/dist/assets` into a public folder in your app. Then you can point the base path to that folder instead.
:::

## Usage

### QR code generator example

```jsx
import '@agence-adeliom/awc/dist/components/qr-code/qr-code.js';
import '@agence-adeliom/awc/dist/components/input/input.js';
import { useState } from 'preact/hooks';

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState();

  return (
    <div>
      <h1>QR code generator</h1>
      <awc-input
        maxlength="255"
        clearable
        label="Value"
        onawc-change={event => setQrCode(event.target.value)}
      ></awc-input>
      <awc-qr-code value={qrCode}></awc-qr-code>
    </div>
  );
};

export default QRCodeGenerator;
```
