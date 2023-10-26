---
meta:
  title: Svelte
  description: Tips for using Adeliom WebComponents in your Preact app.
---

# Svelte

Svelte [plays nice](https://custom-elements-everywhere.com/#svelte) with custom elements, so you can use Adeliom WebComponents in your Svelte apps with ease.

## Installation

To add Adeliom WebComponents to your Svelte app, install the package from npm.

```bash
npm install @agence-adeliom/awc
```

Next, [include a theme](/getting-started/themes) and set the [base path](/getting-started/installation#setting-the-base-path) for icons and other assets. In this example, we'll import the light theme and use the CDN as a base path.

```jsx
import '@agence-adeliom/awc/%NPMDIR%/themes/light.css';
import { setBasePath } from '@agence-adeliom/awc/%NPMDIR%/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@agence-adeliom/awc@%VERSION%/%CDNDIR%/');
```

:::tip
If you'd rather not use the CDN for assets, you can create a build task that copies `node_modules/@agence-adeliom/awc/%NPMDIR%/assets` into a public folder in your app. Then you can point the base path to that folder instead.
:::

## Usage

### QR code generator example

```html
<script>
  import '@agence-adeliom/awc/%NPMDIR%/components/qr-code/qr-code.js';
  import '@agence-adeliom/awc/%NPMDIR%/components/input/input.js';

  let qrCode;
  function setQrCode(e) {
    qrCode = e.target.value;
  }
</script>

<main>
  <h1>QR code generator</h1>
  <awc-input maxlength="255" clearable label="Value" on:awc-change="{setQrCode}"></awc-input>
  <awc-qr-code value="{qrCode}"></awc-qr-code>
</main>
```
