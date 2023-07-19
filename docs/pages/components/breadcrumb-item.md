---
meta:
  title: Breadcrumb Item
  description: Breadcrumb Items are used inside breadcrumbs to represent different links.
layout: component
---

```html:preview
<awc-breadcrumb>
  <awc-breadcrumb-item>
    <awc-icon slot="prefix" name="house"></awc-icon>
    Home
  </awc-breadcrumb-item>
  <awc-breadcrumb-item>Clothing</awc-breadcrumb-item>
  <awc-breadcrumb-item>Shirts</awc-breadcrumb-item>
</awc-breadcrumb>
```

```jsx:react
import { AWCBreadcrumb, AWCBreadcrumbItem, AWCIcon } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCBreadcrumb>
    <AWCBreadcrumbItem>
      <AWCIcon slot="prefix" name="house"></AWCIcon>
      Home
    </AWCBreadcrumbItem>
    <AWCBreadcrumbItem>Clothing</AWCBreadcrumbItem>
    <AWCBreadcrumbItem>Shirts</AWCBreadcrumbItem>
  </AWCBreadcrumb>
);
```

:::tip
Additional demonstrations can be found in the [breadcrumb examples](/components/breadcrumb).
:::
