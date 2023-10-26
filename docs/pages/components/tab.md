---
meta:
  title: Tab
  description: Tabs are used inside tab groups to represent and activate tab panels.
layout: component
---

```html:preview
<awc-tab>Tab</awc-tab>
<awc-tab active>Active</awc-tab>
<awc-tab closable>Closable</awc-tab>
<awc-tab disabled>Disabled</awc-tab>
```

```jsx:react
import { AWCTab } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    <AWCTab>Tab</AWCTab>
    <AWCTab active>Active</AWCTab>
    <AWCTab closable>Closable</AWCTab>
    <AWCTab disabled>Disabled</AWCTab>
  </>
);
```

:::tip
Additional demonstrations can be found in the [tab group examples](/components/tab-group).
:::
