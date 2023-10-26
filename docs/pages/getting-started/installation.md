---
meta:
  title: Installation
  description: Choose the installation method that works best for you.
---

# Installation

You can load Adeliom WebComponents via CDN or by installing it locally. If you're using a framework, make sure to check out the pages for [React](/frameworks/react), [Vue](/frameworks/vue), and [Angular](/frameworks/angular) for additional information.

## CDN Installation (Easiest)

<awc-tab-group>
<awc-tab slot="nav" panel="autoloader" active>Autoloader</awc-tab>
<awc-tab slot="nav" panel="traditional">Traditional Loader</awc-tab>

<awc-tab-panel name="autoloader">

The experimental autoloader is the easiest and most efficient way to use Adeliom WebComponents. A lightweight script watches the DOM for unregistered Adeliom WebComponents elements and lazy loads them for you — even if they're added dynamically.

While convenient, autoloading may lead to a [Flash of Undefined Custom Elements](https://www.abeautifulsite.net/posts/flash-of-undefined-custom-elements/). The linked article describes some ways to alleviate it.

<!-- prettier-ignore -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@agence-adeliom/awc@%VERSION%/%CDNDIR%/themes/light.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@agence-adeliom/awc@%VERSION%/%CDNDIR%/awc-autoloader.js"></script>
```

</awc-tab-panel>

<awc-tab-panel name="traditional">

The traditional CDN loader registers all Adeliom WebComponents elements up front. Note that, if you're only using a handful of components, it will be much more efficient to stick with the autoloader. However, you can also [cherry pick](#cherry-picking) components if you want to load specific ones up front.

<!-- prettier-ignore -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@agence-adeliom/awc@%VERSION%/%CDNDIR%/themes/light.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@agence-adeliom/awc@%VERSION%/%CDNDIR%/awc.js" ></script>
```

</awc-tab-panel>
</awc-tab-group>

### Dark Theme

The code above will load the light theme. If you want to use the [dark theme](/getting-started/themes#dark-theme) instead, update the stylesheet as shown below and add `<html class="awc-theme-dark">` to your page.

<!-- prettier-ignore -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@agence-adeliom/awc@%VERSION%/%CDNDIR%/themes/dark.css" />
```

### Light & Dark Theme

If you want to load the light or dark theme based on the user's `prefers-color-scheme` setting, use the stylesheets below. The `media` attributes ensure that only the user's preferred theme stylesheet loads and the `onload` attribute sets the appropriate [theme class](/getting-started/themes) on the `<html>` element.

```html
<link
  rel="stylesheet"
  media="(prefers-color-scheme:light)"
  href="https://cdn.jsdelivr.net/npm/@agence-adeliom/awc@%VERSION%/%CDNDIR%/themes/light.css"
/>
<link
  rel="stylesheet"
  media="(prefers-color-scheme:dark)"
  href="https://cdn.jsdelivr.net/npm/@agence-adeliom/awc@%VERSION%/%CDNDIR%/themes/dark.css"
  onload="document.documentElement.classList.add('awc-theme-dark');"
/>
```

Now you can [start using Adeliom WebComponents!](/getting-started/usage)

## npm installation

If you don't want to use the CDN, you can install Adeliom WebComponents from npm with the following command.

```bash
npm install @agence-adeliom/awc
```

It's up to you to make the source files available to your app. One way to do this is to create a route in your app called `/awc` that serves static files from `node_modules/@agence-adeliom/awc`.

Once you've done that, add the following tags to your page. Make sure to update `href` and `src` so they point to the route you created.

```html
<link rel="stylesheet" href="/awc/%NPMDIR%/themes/light.css" />
<script type="module" src="/awc/%NPMDIR%/awc.js"></script>
```

Alternatively, [you can use a bundler](#bundling).

:::tip
For clarity, the docs will usually show imports from `@agence-adeliom/awc`. If you're not using a module resolver or bundler, you'll need to adjust these paths to point to the folder Adeliom WebComponents is in.
:::

## Setting the Base Path

Some components rely on assets (icons, images, etc.) and Adeliom WebComponents needs to know where they're located. For convenience, Adeliom WebComponents will try to auto-detect the correct location based on the script you've loaded it from. This assumes assets are colocated with `awc.js` or `awc-autoloader.js` and will "just work" for most users.

However, if you're [cherry picking](#cherry-picking) or [bundling](#bundling) Adeliom WebComponents, you'll need to set the base path. You can do this one of two ways.

```html
<!-- Option 1: the data-awc attribute -->
<script src="bundle.js" data-awc="/path/to/awc/%NPMDIR%"></script>

<!-- Option 2: the setBasePath() method -->
<script src="bundle.js"></script>
<script type="module">
  import { setBasePath } from '@agence-adeliom/awc/%NPMDIR%/utilities/base-path.js';
  setBasePath('/path/to/awc/%NPMDIR%');
</script>
```

:::tip
When setting a basePath, and easy way to check if it was down properly is by checking if an icon exists.

For example, if I set the basePath to `/dist`, I should be able to go to:

`https://<my-site>/dist/assets/icons/arrow-left.svg` and the browser should show me the SVG.

Adeliom WebComponents also exports a `getBasePath()` method you can use to reference assets.
:::

## Cherry Picking

Cherry picking can be done from [the CDN](#cdn-installation-easiest) or from [npm](#npm-installation). This approach will load only the components you need up front, while limiting the number of files the browser has to download. The disadvantage is that you need to import each individual component.

Here's an example that loads only the button component. Again, if you're not using a module resolver, you'll need to adjust the path to point to the folder Adeliom WebComponents is in.

```html
<link rel="stylesheet" href="/path/to/awc/%NPMDIR%/themes/light.css" />

<script type="module" data-awc="/path/to/awc/%NPMDIR%">
  import '@agence-adeliom/awc/%NPMDIR%/components/button/button.js';

  // <awc-button> is ready to use!
</script>
```

You can copy and paste the code to import a component from the "Importing" section of the component's documentation. Note that some components have dependencies that are automatically imported when you cherry pick. If a component has dependencies, they will be listed in the "Dependencies" section of its docs.

:::warning
Never cherry pick components or utilities from `awc.js` as this will cause the browser to load the entire library. Instead, cherry pick from specific modules as shown above.
:::

:::warning
You will see files named `chunk.[hash].js` in the `chunks` directory. Never import these files directly, as they are generated and change from version to version.
:::

## Bundling

Adeliom WebComponents is distributed as a collection of standard ES modules that [all modern browsers can understand](https://caniuse.com/es6-module). However, importing a lot of modules can result in a lot of HTTP requests and potentially longer load times. Using a CDN can alleviate this, but some users may wish to further optimize their imports with a bundler.

To use Adeliom WebComponents with a bundler, first install Adeliom WebComponents along with your bundler of choice.

```bash
npm install @agence-adeliom/awc
```

Now it's time to configure your bundler. Configurations vary for each tool, but here are some examples to help you get started.

<details>
<summary>Example webpack config</summary>

```js
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    // Bundle styles into main.css
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        // Copy AWC assets to dist/awc
        {
          from: path.resolve(__dirname, 'node_modules/@agence-adeliom/awc/%NPMDIR%/assets'),
          to: path.resolve(__dirname, 'dist/awc/assets')
        }
      ]
    })
  ]
};
```

</details>

<details>
<summary>Example Rollup config</summary>

```js
import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import css from 'rollup-plugin-css-only';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: [{ dir: path.resolve(__dirname, 'dist'), format: 'es' }],
  plugins: [
    resolve(),
    commonjs(),
    // Bundle styles into dist/bundle.css
    css({
      output: 'bundle.css'
    }),
    // Copy AWC assets to dist/awc
    copy({
      copyOnce: true,
      targets: [
        {
          src: path.resolve(__dirname, 'node_modules/@agence-adeliom/awc/%NPMDIR%/assets'),
          dest: path.resolve(__dirname, 'dist/awc')
        }
      ]
    })
  ]
};
```

</details>

#### Once your bundler is configured, you'll be able to import Adeliom WebComponents components and utilities.

```js
import '@agence-adeliom/awc/%NPMDIR%/themes/light.css';
import '@agence-adeliom/awc/%NPMDIR%/components/button/button.js';
import '@agence-adeliom/awc/%NPMDIR%/components/icon/icon.js';
import '@agence-adeliom/awc/%NPMDIR%/components/input/input.js';
import '@agence-adeliom/awc/%NPMDIR%/components/rating/rating.js';
import { setBasePath } from '@agence-adeliom/awc/%NPMDIR%/utilities/base-path.js';

// Set the base path to the folder you copied Adeliom WebComponents's assets to
setBasePath('/path/to/awc/%NPMDIR%

// <awc-button>, <awc-icon>, <awc-input>, and <awc-rating> are ready to use!
```

:::warning
Component modules include side effects for registration purposes. Because of this, importing directly from `@agence-adeliom/awc` may result in a larger bundle size than necessary. For optimal tree shaking, always cherry pick, i.e. import components and utilities from their respective files, as shown above.
:::

## The difference between CDN and npm

You'll notice that the CDN links all start with `/%CDNDIR%/<path>` and npm imports use `/%NPMDIR%/<path>`. The `/%CDNDIR%` files are bundled separately from the `/%NPMDIR%` files. The `/%CDNDIR%` files come pre-bundled, which means all dependencies are inlined so you do not need to worry about loading additional libraries. The `/%NPMDIR%` files **DO NOT** come pre-bundled, allowing your bundler of choice to more efficiently deduplicate dependencies, resulting in smaller bundles and optimal code sharing.

TL;DR:

- `@agence-adeliom/awc/%CDNDIR%` is for CDN users
- `@agence-adeliom/awc/%NPMDIR%` is for npm users

This change was introduced in `v1.0.0` to address issues around installations from npm loading multiple versions of libraries (such as the Lit) that Adeliom WebComponents uses internally.
