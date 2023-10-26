---
meta:
  title: Icon
  description: Icons are symbols that can be used to represent various options within an application.
layout: component
---

Adeliom WebComponents comes bundled with over 1,500 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These icons are part of the `default` icon library. If you prefer, you can register [custom icon libraries](#icon-libraries) as well.

:::tip
Depending on how you're loading Adeliom WebComponents, you may need to copy icon assets and/or [set the base path](getting-started/installation#setting-the-base-path) so Adeliom WebComponents knows where to load them from. Otherwise, icons may not appear and you'll see 404 Not Found errors in the dev console.
:::

## Default Icons

All available icons in the `default` icon library are shown below. Click or tap on any icon to copy its name, then you can use it in your HTML like this.

```html
<awc-icon name="icon-name-here"></awc-icon>
```

<div class="icon-search">
  <div class="icon-search-controls">
    <awc-input placeholder="Search Icons" clearable>
      <awc-icon slot="prefix" name="search"></awc-icon>
    </awc-input>
    <awc-select value="outline">
      <awc-option value="outline">Outlined</awc-option>
      <awc-option value="fill">Filled</awc-option>
      <awc-option value="all">All icons</awc-option>
    </awc-select>
  </div>
  <div class="icon-list"></div>
  <input type="text" class="icon-copy-input" aria-hidden="true" tabindex="-1">
</div>

## Examples

### Colors

Icons inherit their color from the current text color. Thus, you can set the `color` property on the `<awc-icon>` element or an ancestor to change the color.

```html:preview
<div style="color: #4a90e2;">
  <awc-icon name="exclamation-triangle"></awc-icon>
  <awc-icon name="archive"></awc-icon>
  <awc-icon name="battery-charging"></awc-icon>
  <awc-icon name="bell"></awc-icon>
</div>
<div style="color: #9013fe;">
  <awc-icon name="clock"></awc-icon>
  <awc-icon name="cloud"></awc-icon>
  <awc-icon name="download"></awc-icon>
  <awc-icon name="file-earmark"></awc-icon>
</div>
<div style="color: #417505;">
  <awc-icon name="flag"></awc-icon>
  <awc-icon name="heart"></awc-icon>
  <awc-icon name="image"></awc-icon>
  <awc-icon name="lightning"></awc-icon>
</div>
<div style="color: #f5a623;">
  <awc-icon name="mic"></awc-icon>
  <awc-icon name="search"></awc-icon>
  <awc-icon name="star"></awc-icon>
  <awc-icon name="trash"></awc-icon>
</div>
```

{% raw %}

```jsx:react
import { AWCIcon } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    <div style={{ color: '#4a90e2' }}>
      <AWCIcon name="exclamation-triangle"></AWCIcon>
      <AWCIcon name="archive"></AWCIcon>
      <AWCIcon name="battery-charging"></AWCIcon>
      <AWCIcon name="bell"></AWCIcon>
    </div>
    <div style={{ color: '#9013fe' }}>
      <AWCIcon name="clock"></AWCIcon>
      <AWCIcon name="cloud"></AWCIcon>
      <AWCIcon name="download"></AWCIcon>
      <AWCIcon name="file-earmark"></AWCIcon>
    </div>
    <div style={{ color: '#417505' }}>
      <AWCIcon name="flag"></AWCIcon>
      <AWCIcon name="heart"></AWCIcon>
      <AWCIcon name="image"></AWCIcon>
      <AWCIcon name="lightning"></AWCIcon>
    </div>
    <div style={{ color: '#f5a623' }}>
      <AWCIcon name="mic"></AWCIcon>
      <AWCIcon name="search"></AWCIcon>
      <AWCIcon name="star"></AWCIcon>
      <AWCIcon name="trash"></AWCIcon>
    </div>
  </>
);
```

{% endraw %}

### Sizing

Icons are sized relative to the current font size. To change their size, set the `font-size` property on the icon itself or on a parent element as shown below.

```html:preview
<div style="font-size: 32px;">
  <awc-icon name="exclamation-triangle"></awc-icon>
  <awc-icon name="archive"></awc-icon>
  <awc-icon name="battery-charging"></awc-icon>
  <awc-icon name="bell"></awc-icon>
  <awc-icon name="clock"></awc-icon>
  <awc-icon name="cloud"></awc-icon>
  <awc-icon name="download"></awc-icon>
  <awc-icon name="file-earmark"></awc-icon>
  <awc-icon name="flag"></awc-icon>
  <awc-icon name="heart"></awc-icon>
  <awc-icon name="image"></awc-icon>
  <awc-icon name="lightning"></awc-icon>
  <awc-icon name="mic"></awc-icon>
  <awc-icon name="search"></awc-icon>
  <awc-icon name="star"></awc-icon>
  <awc-icon name="trash"></awc-icon>
</div>
```

{% raw %}

```jsx:react
import { AWCIcon } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <div style={{ fontSize: '32px' }}>
    <AWCIcon name="exclamation-triangle" />
    <AWCIcon name="archive" />
    <AWCIcon name="battery-charging" />
    <AWCIcon name="bell" />
    <AWCIcon name="clock" />
    <AWCIcon name="cloud" />
    <AWCIcon name="download" />
    <AWCIcon name="file-earmark" />
    <AWCIcon name="flag" />
    <AWCIcon name="heart" />
    <AWCIcon name="image" />
    <AWCIcon name="lightning" />
    <AWCIcon name="mic" />
    <AWCIcon name="search" />
    <AWCIcon name="star" />
    <AWCIcon name="trash" />
  </div>
);
```

{% endraw %}

### Labels

For non-decorative icons, use the `label` attribute to announce it to assistive devices.

```html:preview
<awc-icon name="star-fill" label="Add to favorites"></awc-icon>
```

```jsx:react
import { AWCIcon } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => <AWCIcon name="star-fill" label="Add to favorites" />;
```

### Custom Icons

Custom icons can be loaded individually with the `src` attribute. Only SVGs on a local or CORS-enabled endpoint are supported. If you're using more than one custom icon, it might make sense to register a [custom icon library](#icon-libraries).

```html:preview
<awc-icon src="https://awc.a-dev.cloud/assets/images/shoe.svg" style="font-size: 8rem;"></awc-icon>
```

{% raw %}

```jsx:react
import { AWCIcon } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => <AWCIcon src="https://awc.a-dev.cloud/assets/images/shoe.svg" style={{ fontSize: '8rem' }}></AWCIcon>;
```

{% endraw %}

## Icon Libraries

You can register additional icons to use with the `<awc-icon>` component through icon libraries. Icon files can exist locally or on a CORS-enabled endpoint (e.g. a CDN). There is no limit to how many icon libraries you can register and there is no cost associated with registering them, as individual icons are only requested when they're used.

Adeliom WebComponents ships with two built-in icon libraries, `default` and `system`. The [default icon library](#customizing-the-default-library) contains all of the icons in the Bootstrap Icons project. The [system icon library](#customizing-the-system-library) contains only a small subset of icons that are used internally by Adeliom WebComponents components.

To register an additional icon library, use the `registerIconLibrary()` function that's exported from `utilities/icon-library.js`. At a minimum, you must provide a name and a resolver function. The resolver function translates an icon name to a URL where the corresponding SVG file exists. Refer to the examples below to better understand how it works.

If necessary, a mutator function can be used to mutate the SVG element before rendering. This is necessary for some libraries due to the many possible ways SVGs are crafted. For example, icons should ideally inherit the current text color via `currentColor`, so you may need to apply `fill="currentColor` or `stroke="currentColor"` to the SVG element using this function.

Here's an example that registers an icon library located in the `/assets/icons` directory.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('my-icons', {
    resolver: name => `/assets/icons/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>
```

To display an icon, set the `library` and `name` attributes of an `<awc-icon>` element.

```html
<!-- This will show the icon located at /assets/icons/smile.svg -->
<awc-icon library="my-icons" name="smile"></awc-icon>
```

If an icon is used before registration occurs, it will be empty initially but shown when registered.

The following examples demonstrate how to register a number of popular, open source icon libraries via CDN. Feel free to adapt the code as you see fit to use your own origin or naming conventions.

### Boxicons

This will register the [Boxicons](https://boxicons.com/) library using the jsDelivr CDN. This library has three variations: regular (`bx-*`), solid (`bxs-*`), and logos (`bxl-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Creative Commons 4.0 License](https://github.com/atisawd/boxicons#license).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('boxicons', {
    resolver: name => {
      let folder = 'regular';
      if (name.substring(0, 4) === 'bxs-') folder = 'solid';
      if (name.substring(0, 4) === 'bxl-') folder = 'logos';
      return `https://cdn.jsdelivr.net/npm/boxicons@2.0.5/svg/${folder}/${name}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <awc-icon library="boxicons" name="bx-bot"></awc-icon>
  <awc-icon library="boxicons" name="bx-cookie"></awc-icon>
  <awc-icon library="boxicons" name="bx-joystick"></awc-icon>
  <awc-icon library="boxicons" name="bx-save"></awc-icon>
  <awc-icon library="boxicons" name="bx-server"></awc-icon>
  <awc-icon library="boxicons" name="bx-wine"></awc-icon>
  <br />
  <awc-icon library="boxicons" name="bxs-bot"></awc-icon>
  <awc-icon library="boxicons" name="bxs-cookie"></awc-icon>
  <awc-icon library="boxicons" name="bxs-joystick"></awc-icon>
  <awc-icon library="boxicons" name="bxs-save"></awc-icon>
  <awc-icon library="boxicons" name="bxs-server"></awc-icon>
  <awc-icon library="boxicons" name="bxs-wine"></awc-icon>
  <br />
  <awc-icon library="boxicons" name="bxl-apple"></awc-icon>
  <awc-icon library="boxicons" name="bxl-chrome"></awc-icon>
  <awc-icon library="boxicons" name="bxl-edge"></awc-icon>
  <awc-icon library="boxicons" name="bxl-firefox"></awc-icon>
  <awc-icon library="boxicons" name="bxl-opera"></awc-icon>
  <awc-icon library="boxicons" name="bxl-microsoft"></awc-icon>
</div>
```

### Lucide

This will register the [Lucide](https://lucide.dev/) icon library using the jsDelivr CDN. This project is a community-maintained fork of the popular [Feather](https://feathericons.com/) icon library.

Icons in this library are licensed under the [MIT License](https://github.com/lucide-icons/lucide/blob/master/LICENSE).

```html:preview
<div style="font-size: 24px;">
  <awc-icon library="lucide" name="feather"></awc-icon>
  <awc-icon library="lucide" name="pie-chart"></awc-icon>
  <awc-icon library="lucide" name="settings"></awc-icon>
  <awc-icon library="lucide" name="map-pin"></awc-icon>
  <awc-icon library="lucide" name="printer"></awc-icon>
  <awc-icon library="lucide" name="shopping-cart"></awc-icon>
</div>

<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('lucide', {
    resolver: name => `https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/${name}.svg`
  });
</script>
```

### Font Awesome

This will register the [Font Awesome Free](https://fontawesome.com/) library using the jsDelivr CDN. This library has three variations: regular (`far-*`), solid (`fas-*`), and brands (`fab-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Font Awesome Free License](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt). Some of the icons that appear on the Font Awesome website require a license and are therefore not available in the CDN.

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('fa', {
    resolver: name => {
      const filename = name.replace(/^fa[rbs]-/, '');
      let folder = 'regular';
      if (name.substring(0, 4) === 'fas-') folder = 'solid';
      if (name.substring(0, 4) === 'fab-') folder = 'brands';
      return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${folder}/${filename}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <awc-icon library="fa" name="far-bell"></awc-icon>
  <awc-icon library="fa" name="far-comment"></awc-icon>
  <awc-icon library="fa" name="far-hand-point-right"></awc-icon>
  <awc-icon library="fa" name="far-hdd"></awc-icon>
  <awc-icon library="fa" name="far-heart"></awc-icon>
  <awc-icon library="fa" name="far-star"></awc-icon>
  <br />
  <awc-icon library="fa" name="fas-archive"></awc-icon>
  <awc-icon library="fa" name="fas-book"></awc-icon>
  <awc-icon library="fa" name="fas-chess-knight"></awc-icon>
  <awc-icon library="fa" name="fas-dice"></awc-icon>
  <awc-icon library="fa" name="fas-pizza-slice"></awc-icon>
  <awc-icon library="fa" name="fas-scroll"></awc-icon>
  <br />
  <awc-icon library="fa" name="fab-apple"></awc-icon>
  <awc-icon library="fa" name="fab-chrome"></awc-icon>
  <awc-icon library="fa" name="fab-edge"></awc-icon>
  <awc-icon library="fa" name="fab-firefox"></awc-icon>
  <awc-icon library="fa" name="fab-opera"></awc-icon>
  <awc-icon library="fa" name="fab-microsoft"></awc-icon>
</div>
```

### Heroicons

This will register the [Heroicons](https://heroicons.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('heroicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/heroicons@2.0.1/24/outline/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <awc-icon library="heroicons" name="chat-bubble-left"></awc-icon>
  <awc-icon library="heroicons" name="cloud"></awc-icon>
  <awc-icon library="heroicons" name="cog"></awc-icon>
  <awc-icon library="heroicons" name="document-text"></awc-icon>
  <awc-icon library="heroicons" name="gift"></awc-icon>
  <awc-icon library="heroicons" name="speaker-wave"></awc-icon>
</div>
```

### Iconoir

This will register the [Iconoir](https://iconoir.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/lucaburgio/iconoir/blob/master/LICENSE).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('iconoir', {
    resolver: name => `https://cdn.jsdelivr.net/gh/lucaburgio/iconoir@latest/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <awc-icon library="iconoir" name="check-circled-outline"></awc-icon>
  <awc-icon library="iconoir" name="drawer"></awc-icon>
  <awc-icon library="iconoir" name="keyframes"></awc-icon>
  <awc-icon library="iconoir" name="headset-help"></awc-icon>
  <awc-icon library="iconoir" name="color-picker"></awc-icon>
  <awc-icon library="iconoir" name="wifi"></awc-icon>
</div>
```

### Ionicons

This will register the [Ionicons](https://ionicons.com/) library using the jsDelivr CDN. This library has three variations: outline (default), filled (`*-filled`), and sharp (`*-sharp`). A mutator function is required to polyfill a handful of styles we're not including.

Icons in this library are licensed under the [MIT License](https://github.com/ionic-team/ionicons/blob/master/LICENSE).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('ionicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/ionicons@5.1.2/dist/ionicons/svg/${name}.svg`,
    mutator: svg => {
      svg.setAttribute('fill', 'currentColor');
      svg.setAttribute('stroke', 'currentColor');
      [...svg.querySelectorAll('.ionicon-fill-none')].map(el => el.setAttribute('fill', 'none'));
      [...svg.querySelectorAll('.ionicon-stroke-width')].map(el => el.setAttribute('stroke-width', '32px'));
    }
  });
</script>

<div style="font-size: 24px;">
  <awc-icon library="ionicons" name="alarm"></awc-icon>
  <awc-icon library="ionicons" name="american-football"></awc-icon>
  <awc-icon library="ionicons" name="bug"></awc-icon>
  <awc-icon library="ionicons" name="chatbubble"></awc-icon>
  <awc-icon library="ionicons" name="settings"></awc-icon>
  <awc-icon library="ionicons" name="warning"></awc-icon>
  <br />
  <awc-icon library="ionicons" name="alarm-outline"></awc-icon>
  <awc-icon library="ionicons" name="american-football-outline"></awc-icon>
  <awc-icon library="ionicons" name="bug-outline"></awc-icon>
  <awc-icon library="ionicons" name="chatbubble-outline"></awc-icon>
  <awc-icon library="ionicons" name="settings-outline"></awc-icon>
  <awc-icon library="ionicons" name="warning-outline"></awc-icon>
  <br />
  <awc-icon library="ionicons" name="alarm-sharp"></awc-icon>
  <awc-icon library="ionicons" name="american-football-sharp"></awc-icon>
  <awc-icon library="ionicons" name="bug-sharp"></awc-icon>
  <awc-icon library="ionicons" name="chatbubble-sharp"></awc-icon>
  <awc-icon library="ionicons" name="settings-sharp"></awc-icon>
  <awc-icon library="ionicons" name="warning-sharp"></awc-icon>
</div>
```

### Jam Icons

This will register the [Jam Icons](https://jam-icons.com/) library using the jsDelivr CDN. This library has two variations: regular (default) and filled (`*-f`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [MIT License](https://github.com/michaelampr/jam/blob/master/LICENSE).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('jam', {
    resolver: name => `https://cdn.jsdelivr.net/npm/jam-icons@2.0.0/svg/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <awc-icon library="jam" name="calendar"></awc-icon>
  <awc-icon library="jam" name="camera"></awc-icon>
  <awc-icon library="jam" name="filter"></awc-icon>
  <awc-icon library="jam" name="leaf"></awc-icon>
  <awc-icon library="jam" name="picture"></awc-icon>
  <awc-icon library="jam" name="set-square"></awc-icon>
  <br />
  <awc-icon library="jam" name="calendar-f"></awc-icon>
  <awc-icon library="jam" name="camera-f"></awc-icon>
  <awc-icon library="jam" name="filter-f"></awc-icon>
  <awc-icon library="jam" name="leaf-f"></awc-icon>
  <awc-icon library="jam" name="picture-f"></awc-icon>
  <awc-icon library="jam" name="set-square-f"></awc-icon>
</div>
```

### Material Icons

This will register the [Material Icons](https://material.io/resources/icons/?style=baseline) library using the jsDelivr CDN. This library has three variations: outline (default), round (`*_round`), and sharp (`*_sharp`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/google/material-design-icons/blob/master/LICENSE).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('material', {
    resolver: name => {
      const match = name.match(/^(.*?)(_(round|sharp))?$/);
      return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${match[1]}/${match[3] || 'outline'}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <awc-icon library="material" name="notifications"></awc-icon>
  <awc-icon library="material" name="email"></awc-icon>
  <awc-icon library="material" name="delete"></awc-icon>
  <awc-icon library="material" name="volume_up"></awc-icon>
  <awc-icon library="material" name="settings"></awc-icon>
  <awc-icon library="material" name="shopping_basket"></awc-icon>
  <br />
  <awc-icon library="material" name="notifications_round"></awc-icon>
  <awc-icon library="material" name="email_round"></awc-icon>
  <awc-icon library="material" name="delete_round"></awc-icon>
  <awc-icon library="material" name="volume_up_round"></awc-icon>
  <awc-icon library="material" name="settings_round"></awc-icon>
  <awc-icon library="material" name="shopping_basket_round"></awc-icon>
  <br />
  <awc-icon library="material" name="notifications_sharp"></awc-icon>
  <awc-icon library="material" name="email_sharp"></awc-icon>
  <awc-icon library="material" name="delete_sharp"></awc-icon>
  <awc-icon library="material" name="volume_up_sharp"></awc-icon>
  <awc-icon library="material" name="settings_sharp"></awc-icon>
  <awc-icon library="material" name="shopping_basket_sharp"></awc-icon>
</div>
```

### Remix Icon

This will register the [Remix Icon](https://remixicon.com/) library using the jsDelivr CDN. This library groups icons by categories, so the name must include the category and icon separated by a slash, as well as the `-line` or `-fill` suffix as needed. A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Remix-Design/RemixIcon/blob/master/License).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('remixicon', {
    resolver: name => {
      const match = name.match(/^(.*?)\/(.*?)?$/);
      match[1] = match[1].charAt(0).toUpperCase() + match[1].slice(1);
      return `https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/${match[1]}/${match[2]}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <awc-icon library="remixicon" name="business/cloud-line"></awc-icon>
  <awc-icon library="remixicon" name="design/brush-line"></awc-icon>
  <awc-icon library="remixicon" name="business/pie-chart-line"></awc-icon>
  <awc-icon library="remixicon" name="development/bug-line"></awc-icon>
  <awc-icon library="remixicon" name="media/image-line"></awc-icon>
  <awc-icon library="remixicon" name="system/alert-line"></awc-icon>
  <br />
  <awc-icon library="remixicon" name="business/cloud-fill"></awc-icon>
  <awc-icon library="remixicon" name="design/brush-fill"></awc-icon>
  <awc-icon library="remixicon" name="business/pie-chart-fill"></awc-icon>
  <awc-icon library="remixicon" name="development/bug-fill"></awc-icon>
  <awc-icon library="remixicon" name="media/image-fill"></awc-icon>
  <awc-icon library="remixicon" name="system/alert-fill"></awc-icon>
</div>
```

### Tabler Icons

This will register the [Tabler Icons](https://tabler-icons.io/) library using the jsDelivr CDN. This library features over 1,950 open source icons.

Icons in this library are licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/master/LICENSE).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('tabler', {
    resolver: name => `https://cdn.jsdelivr.net/npm/@tabler/icons@1.68.0/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <awc-icon library="tabler" name="alert-triangle"></awc-icon>
  <awc-icon library="tabler" name="arrow-back"></awc-icon>
  <awc-icon library="tabler" name="at"></awc-icon>
  <awc-icon library="tabler" name="ball-baseball"></awc-icon>
  <awc-icon library="tabler" name="cake"></awc-icon>
  <awc-icon library="tabler" name="files"></awc-icon>
  <br />
  <awc-icon library="tabler" name="keyboard"></awc-icon>
  <awc-icon library="tabler" name="moon"></awc-icon>
  <awc-icon library="tabler" name="pig"></awc-icon>
  <awc-icon library="tabler" name="printer"></awc-icon>
  <awc-icon library="tabler" name="ship"></awc-icon>
  <awc-icon library="tabler" name="toilet-paper"></awc-icon>
</div>
```

### Unicons

This will register the [Unicons](https://iconscout.com/unicons) library using the jsDelivr CDN. This library has two variations: line (default) and solid (`*-s`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Iconscout/unicons/blob/master/LICENSE). Some of the icons that appear on the Unicons website, particularly many of the solid variations, require a license and are therefore not available in the CDN.

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('unicons', {
    resolver: name => {
      const match = name.match(/^(.*?)(-s)?$/);
      return `https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.3/svg/${match[2] === '-s' ? 'solid' : 'line'}/${
        match[1]
      }.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <awc-icon library="unicons" name="clock"></awc-icon>
  <awc-icon library="unicons" name="graph-bar"></awc-icon>
  <awc-icon library="unicons" name="padlock"></awc-icon>
  <awc-icon library="unicons" name="polygon"></awc-icon>
  <awc-icon library="unicons" name="rocket"></awc-icon>
  <awc-icon library="unicons" name="star"></awc-icon>
  <br />
  <awc-icon library="unicons" name="clock-s"></awc-icon>
  <awc-icon library="unicons" name="graph-bar-s"></awc-icon>
  <awc-icon library="unicons" name="padlock-s"></awc-icon>
  <awc-icon library="unicons" name="polygon-s"></awc-icon>
  <awc-icon library="unicons" name="rocket-s"></awc-icon>
  <awc-icon library="unicons" name="star-s"></awc-icon>
</div>
```

### Customizing the Default Library

The default icon library contains over 1,300 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These are the icons that display when you use `<awc-icon>` without the `library` attribute. If you prefer to have these icons resolve elsewhere or to a different icon library, register an icon library using the `default` name and a custom resolver.

This example will load the same set of icons from the jsDelivr CDN instead of your local assets folder.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('default', {
    resolver: name => `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.0.0/icons/${name}.svg`
  });
</script>
```

#### Customize the default library to use SVG sprites

To improve performance you can use a SVG sprites to avoid multiple trips for each SVG. The browser will load the sprite sheet once and then you reference the particular SVG within the sprite sheet using hash selector.

As always, make sure to benchmark these changes. When using HTTP/2, it may in fact be more bandwidth-friendly to use multiple small requests instead of 1 large sprite sheet.

:::danger
When using sprite sheets, the `awc-load` and `awc-error` events will not fire.
:::

:::danger
For security reasons, browsers may apply the same-origin policy on `<use>` elements located in the `<awc-icon>` shadow dom and
may refuse to load a cross-origin URL. There is currently no defined way to set a cross-origin policy for `<use>` elements.
For this reason, sprite sheets should only be used if you're self-hosting them.
:::

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('sprite', {
    resolver: name => `/assets/images/sprite.svg#${name}`,
    mutator: svg => svg.setAttribute('fill', 'currentColor'),
    spriteSheet: true
  });
</script>

<div style="font-size: 24px;">
  <awc-icon library="sprite" name="clock"></awc-icon>
  <awc-icon library="sprite" name="speedometer"></awc-icon>
</div>
```

### Customizing the System Library

The system library contains only the icons used internally by Adeliom WebComponents components. Unlike the default icon library, the system library does not rely on physical assets. Instead, its icons are hard-coded as data URIs into the resolver to ensure their availability.

If you want to change the icons Adeliom WebComponents uses internally, you can register an icon library using the `system` name and a custom resolver. If you choose to do this, it's your responsibility to provide all of the icons that are required by components. You can reference `src/components/library.system.ts` for a complete list of system icons used by Adeliom WebComponents.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('system', {
    resolver: name => `/path/to/custom/icons/${name}.svg`
  });
</script>
```

<!-- Supporting scripts and styles for the search utility -->
<script>
  function wrapWithTooltip(item) {
    const tooltip = document.createElement('awc-tooltip');
    tooltip.content = item.getAttribute('data-name');

    // Close open tooltips
    document.querySelectorAll('.icon-list awc-tooltip[open]').forEach(tooltip => tooltip.hide());

    // Wrap it with a tooltip and trick it into showing up
    item.parentNode.insertBefore(tooltip, item);
    tooltip.appendChild(item);
    requestAnimationFrame(() => tooltip.dispatchEvent(new MouseEvent('mouseover')));
  }

  fetch('/dist/assets/icons/icons.json')
    .then(res => res.json())
    .then(icons => {
      const container = document.querySelector('.icon-search');
      const input = container.querySelector('awc-input');
      const select = container.querySelector('awc-select');
      const copyInput = container.querySelector('.icon-copy-input');
      const loader = container.querySelector('.icon-loader');
      const list = container.querySelector('.icon-list');
      const queue = [];
      let inputTimeout;

      // Generate icons
      icons.map(i => {
        const item = document.createElement('div');
        item.classList.add('icon-list-item');
        item.setAttribute('data-name', i.name);
        item.setAttribute('data-terms', [i.name, i.title, ...(i.tags || []), ...(i.categories || [])].join(' '));
        item.innerHTML = `
          <svg width="1em" height="1em" fill="currentColor">
            <use href="/assets/images/sprite.svg#${i.name}"></use>
          </svg>
        `;
        list.appendChild(item);

        // Wrap it with a tooltip the first time the mouse lands on it. We do this instead of baking them into the DOM
        // to improve this page's performance. See: https://github.com/agence-adeliom/awc/issues/1122
        item.addEventListener('mouseover', () => wrapWithTooltip(item), { once: true });

        // Copy on click
        item.addEventListener('click', () => {
          const tooltip = item.closest('awc-tooltip');
          copyInput.value = i.name;
          copyInput.select();
          document.execCommand('copy');

          if (tooltip) {
            tooltip.content = 'Copied!';
            setTimeout(() => tooltip.content = i.name, 1000);
          }
        });
      });

      // Filter as the user types
      input.addEventListener('awc-input', () => {
        clearTimeout(inputTimeout);
        inputTimeout = setTimeout(() => {
          [...list.querySelectorAll('.icon-list-item')].map(item => {
            const filter = input.value.toLowerCase();
            if (filter === '') {
              item.hidden = false;
            } else {
              const terms = item.getAttribute('data-terms').toLowerCase();
              item.hidden = terms.indexOf(filter) < 0;
            }
          });
        }, 250);
      });

      // Sort by type and remember preference
      const iconType = sessionStorage.getItem('awc-icon:type') || 'outline';
      select.value = iconType;
      list.setAttribute('data-type', select.value);
      select.addEventListener('awc-change', () => {
        list.setAttribute('data-type', select.value);
        sessionStorage.setItem('awc-icon:type', select.value);
      });
    });
</script>

<style>
  .icon-search {
    border: solid 1px var(--awc-panel-border-color);
    border-radius: var(--awc-border-radius-medium);
    padding: var(--awc-spacing-medium);
  }

  .icon-search [hidden] {
    display: none;
  }

  .icon-search-controls {
    display: flex;
  }

  .icon-search-controls awc-input {
    flex: 1 1 auto;
  }

  .icon-search-controls awc-select {
    width: 10rem;
    flex: 0 0 auto;
    margin-left: 1rem;
  }

  .icon-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30vh;
  }

  .icon-list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    position: relative;
    margin-top: 1rem;
  }

  .icon-loader[hidden],
  .icon-list[hidden] {
    display: none;
  }

  .icon-list-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--awc-border-radius-medium);
    font-size: 24px;
    width: 2em;
    height: 2em;
    margin: 0 auto;
    cursor: copy;
    transition: var(--awc-transition-medium) all;
  }

  .icon-list-item:hover {
    background-color: var(--awc-color-primary-50);
    color: var(--awc-color-primary-600);
  }

  .icon-list[data-type="outline"] .icon-list-item[data-name$="-fill"] {
    display: none;
  }

  .icon-list[data-type="fill"] .icon-list-item:not([data-name$="-fill"]) {
    display: none;
  }

  .icon-copy-input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  @media screen and (max-width: 1000px) {
    .icon-list {
      grid-template-columns: repeat(8, 1fr);
    }

    .icon-list-item {
      font-size: 20px;
    }

    .icon-search-controls {
      display: block;
    }

    .icon-search-controls awc-select {
      width: auto;
      margin: 1rem 0 0 0;
    }
  }

  @media screen and (max-width: 500px) {
    .icon-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
