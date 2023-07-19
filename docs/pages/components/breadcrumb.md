---
meta:
  title: Breadcrumb
  description: Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
layout: component
---

Breadcrumbs are usually placed before a page's main content with the current page shown last to indicate the user's position in the navigation.

```html:preview
<awc-breadcrumb>
  <awc-breadcrumb-item>Catalog</awc-breadcrumb-item>
  <awc-breadcrumb-item>Clothing</awc-breadcrumb-item>
  <awc-breadcrumb-item>Women's</awc-breadcrumb-item>
  <awc-breadcrumb-item>Shirts &amp; Tops</awc-breadcrumb-item>
</awc-breadcrumb>
```

```jsx:react
import { AWCBreadcrumb, AWCBreadcrumbItem } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCBreadcrumb>
    <AWCBreadcrumbItem>Catalog</AWCBreadcrumbItem>
    <AWCBreadcrumbItem>Clothing</AWCBreadcrumbItem>
    <AWCBreadcrumbItem>Women's</AWCBreadcrumbItem>
    <AWCBreadcrumbItem>Shirts &amp; Tops</AWCBreadcrumbItem>
  </AWCBreadcrumb>
);
```

## Examples

### Breadcrumb Links

By default, breadcrumb items are rendered as buttons so you can use them to navigate single-page applications. In this case, you'll need to add event listeners to handle clicks.

For websites, you'll probably want to use links instead. You can make any breadcrumb item a link by applying an `href` attribute to it. Now, when the user activates it, they'll be taken to the corresponding page — no event listeners required.

```html:preview
<awc-breadcrumb>
  <awc-breadcrumb-item href="https://example.com/home">Homepage</awc-breadcrumb-item>

  <awc-breadcrumb-item href="https://example.com/home/services">Our Services</awc-breadcrumb-item>

  <awc-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</awc-breadcrumb-item>

  <awc-breadcrumb-item href="https://example.com/home/services/digital/web-design">Web Design</awc-breadcrumb-item>
</awc-breadcrumb>
```

```jsx:react
import { AWCBreadcrumb, AWCBreadcrumbItem } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCBreadcrumb>
    <AWCBreadcrumbItem href="https://example.com/home">Homepage</AWCBreadcrumbItem>

    <AWCBreadcrumbItem href="https://example.com/home/services">Our Services</AWCBreadcrumbItem>

    <AWCBreadcrumbItem href="https://example.com/home/services/digital">Digital Media</AWCBreadcrumbItem>

    <AWCBreadcrumbItem href="https://example.com/home/services/digital/web-design">Web Design</AWCBreadcrumbItem>
  </AWCBreadcrumb>
);
```

### Custom Separators

Use the `separator` slot to change the separator that goes between breadcrumb items. Icons work well, but you can also use text or an image.

```html:preview
<awc-breadcrumb>
  <awc-icon name="dot" slot="separator"></awc-icon>
  <awc-breadcrumb-item>First</awc-breadcrumb-item>
  <awc-breadcrumb-item>Second</awc-breadcrumb-item>
  <awc-breadcrumb-item>Third</awc-breadcrumb-item>
</awc-breadcrumb>

<br />

<awc-breadcrumb>
  <awc-icon name="arrow-right" slot="separator"></awc-icon>
  <awc-breadcrumb-item>First</awc-breadcrumb-item>
  <awc-breadcrumb-item>Second</awc-breadcrumb-item>
  <awc-breadcrumb-item>Third</awc-breadcrumb-item>
</awc-breadcrumb>

<br />

<awc-breadcrumb>
  <span slot="separator">/</span>
  <awc-breadcrumb-item>First</awc-breadcrumb-item>
  <awc-breadcrumb-item>Second</awc-breadcrumb-item>
  <awc-breadcrumb-item>Third</awc-breadcrumb-item>
</awc-breadcrumb>
```

```jsx:react
import '@agence-adeliom/awc/dist/components/icon/icon.js';
import { AWCBreadcrumb, AWCBreadcrumbItem } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCBreadcrumb>
      <awc-icon name="dot" slot="separator" />
      <AWCBreadcrumbItem>First</AWCBreadcrumbItem>
      <AWCBreadcrumbItem>Second</AWCBreadcrumbItem>
      <AWCBreadcrumbItem>Third</AWCBreadcrumbItem>
    </AWCBreadcrumb>

    <br />

    <AWCBreadcrumb>
      <awc-icon name="arrow-right" slot="separator" />
      <AWCBreadcrumbItem>First</AWCBreadcrumbItem>
      <AWCBreadcrumbItem>Second</AWCBreadcrumbItem>
      <AWCBreadcrumbItem>Third</AWCBreadcrumbItem>
    </AWCBreadcrumb>

    <br />

    <AWCBreadcrumb>
      <span slot="separator">/</span>
      <AWCBreadcrumbItem>First</AWCBreadcrumbItem>
      <AWCBreadcrumbItem>Second</AWCBreadcrumbItem>
      <AWCBreadcrumbItem>Third</AWCBreadcrumbItem>
    </AWCBreadcrumb>
  </>
);
```

### Prefixes

Use the `prefix` slot to add content before any breadcrumb item.

```html:preview
<awc-breadcrumb>
  <awc-breadcrumb-item>
    <awc-icon slot="prefix" name="house"></awc-icon>
    Home
  </awc-breadcrumb-item>
  <awc-breadcrumb-item>Articles</awc-breadcrumb-item>
  <awc-breadcrumb-item>Traveling</awc-breadcrumb-item>
</awc-breadcrumb>
```

```jsx:react
import { AWCBreadcrumb, AWCBreadcrumbItem, AWCIcon } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCBreadcrumb>
    <AWCBreadcrumbItem>
      <AWCIcon slot="prefix" name="house" />
      Home
    </AWCBreadcrumbItem>
    <AWCBreadcrumbItem>Articles</AWCBreadcrumbItem>
    <AWCBreadcrumbItem>Traveling</AWCBreadcrumbItem>
  </AWCBreadcrumb>
);
```

### Suffixes

Use the `suffix` slot to add content after any breadcrumb item.

```html:preview
<awc-breadcrumb>
  <awc-breadcrumb-item>Documents</awc-breadcrumb-item>
  <awc-breadcrumb-item>Policies</awc-breadcrumb-item>
  <awc-breadcrumb-item>
    Security
    <awc-icon slot="suffix" name="shield-lock"></awc-icon>
  </awc-breadcrumb-item>
</awc-breadcrumb>
```

```jsx:react
import { AWCBreadcrumb, AWCBreadcrumbItem, AWCIcon } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCBreadcrumb>
    <AWCBreadcrumbItem>Documents</AWCBreadcrumbItem>
    <AWCBreadcrumbItem>Policies</AWCBreadcrumbItem>
    <AWCBreadcrumbItem>
      Security
      <AWCIcon slot="suffix" name="shield-lock"></AWCIcon>
    </AWCBreadcrumbItem>
  </AWCBreadcrumb>
);
```

### With Dropdowns

Dropdown menus can be placed in a prefix or suffix slot to provide additional options.

```html:preview
<awc-breadcrumb>
  <awc-breadcrumb-item>Homepage</awc-breadcrumb-item>
  <awc-breadcrumb-item>Our Services</awc-breadcrumb-item>
  <awc-breadcrumb-item>Digital Media</awc-breadcrumb-item>
  <awc-breadcrumb-item>
    Web Design
    <awc-dropdown slot="suffix">
      <awc-button slot="trigger" size="small" circle>
        <awc-icon label="More options" name="three-dots"></awc-icon>
      </awc-button>
      <awc-menu>
        <awc-menu-item type="checkbox" checked>Web Design</awc-menu-item>
        <awc-menu-item type="checkbox">Web Development</awc-menu-item>
        <awc-menu-item type="checkbox">Marketing</awc-menu-item>
      </awc-menu>
    </awc-dropdown>
  </awc-breadcrumb-item>
</awc-breadcrumb>
```

```jsx:react
import {
  SlBreadcrumb,
  SlBreadcrumbItem,
  SlButton,
  SlDropdown,
  SlIcon,
  SlMenu,
  SlMenuItem
} from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCBreadcrumb>
    <AWCBreadcrumbItem>Homepage</AWCBreadcrumbItem>
    <AWCBreadcrumbItem>Our Services</AWCBreadcrumbItem>
    <AWCBreadcrumbItem>Digital Media</AWCBreadcrumbItem>
    <AWCBreadcrumbItem>
      Web Design
      <AWCDropdown slot="suffix">
        <AWCButton slot="trigger" size="small" circle>
          <AWCIcon label="More options" name="three-dots"></AWCIcon>
        </AWCButton>
        <AWCMenu>
          <AWCMenuItem type="checkbox" checked>
            Web Design
          </AWCMenuItem>
          <AWCMenuItem type="checkbox">Web Development</AWCMenuItem>
          <AWCMenuItem type="checkbox">Marketing</AWCMenuItem>
        </AWCMenu>
      </AWCDropdown>
    </AWCBreadcrumbItem>
  </AWCBreadcrumb>
);
```
