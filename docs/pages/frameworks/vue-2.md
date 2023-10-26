---
meta:
  title: Vue (version 2)
  description: Tips for using Adeliom WebComponents in your Vue 2 app.
---

# Vue (version 2)

Vue [plays nice](https://custom-elements-everywhere.com/#vue) with custom elements, so you can use Adeliom WebComponents in your Vue apps with ease.

:::tip
These instructions are for Vue 2. If you're using Vue 3 or above, please see the [Vue 3 instructions](/frameworks/vue).
:::

## Installation

To add Adeliom WebComponents to your Vue app, install the package from npm.

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

## Configuration

You'll need to tell Vue to ignore Adeliom WebComponents components. This is pretty easy because they all start with `awc-`.

```js
import Vue from 'vue';
import App from './App.vue';

Vue.config.ignoredElements = [/awc-/];

const app = new Vue({
  render: h => h(App)
});

app.$mount('#app');
```

Now you can start using Adeliom WebComponents components in your app!

## Usage

### Binding Complex Data

When binding complex data such as objects and arrays, use the `.prop` modifier to make Vue bind them as a property instead of an attribute.

```html
<awc-color-picker :swatches.prop="mySwatches" />
```

### Two-way Binding

One caveat is there's currently [no support for v-model on custom elements](https://github.com/vuejs/vue/issues/7830), but you can still achieve two-way binding manually.

```html
<!-- This doesn't work -->
<awc-input v-model="name"></awc-input>
<!-- This works, but it's a bit longer -->
<awc-input :value="name" @input="name = $event.target.value"></awc-input>
```

If that's too verbose for your liking, you can use a custom directive instead. [This utility](https://www.npmjs.com/package/@shoelace-style/vue-awc-model) adds a custom directive that will work just like `v-model` but for Adeliom WebComponents components. To install it, use this command.

```bash
npm install @shoelace-style/vue-awc-model@1
```

Next, import the directive and enable it like this.

```js
import Vue from 'vue';
import Adeliom WebComponentsModelDirective from '@shoelace-style/vue-awc-model';
import App from './App.vue';

Vue.use(Adeliom WebComponentsModelDirective);
Vue.config.ignoredElements = [/awc-/];

const app = new Vue({
  render: h => h(App)
});

app.$mount('#app');
```

Now you can use the `v-awc-model` directive to keep your data in sync!

```html
<awc-input v-awc-model="name"></awc-input>
```

:::tip
Are you using Adeliom WebComponents with Vue? [Help us improve this page!](https://github.com/agence-adeliom/awc/blob/main/docs/frameworks/vue-2.md)
:::
