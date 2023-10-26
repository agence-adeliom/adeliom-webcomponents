---
meta:
  title: Tab Panel
  description: Tab panels are used inside tab groups to display tabbed content.
layout: component
---

```html:preview
<awc-tab-group>
  <awc-tab slot="nav" panel="general">General</awc-tab>
  <awc-tab slot="nav" panel="custom">Custom</awc-tab>
  <awc-tab slot="nav" panel="advanced">Advanced</awc-tab>
  <awc-tab slot="nav" panel="disabled" disabled>Disabled</awc-tab>

  <awc-tab-panel name="general">This is the general tab panel.</awc-tab-panel>
  <awc-tab-panel name="custom">This is the custom tab panel.</awc-tab-panel>
  <awc-tab-panel name="advanced">This is the advanced tab panel.</awc-tab-panel>
  <awc-tab-panel name="disabled">This is a disabled tab panel.</awc-tab-panel>
</awc-tab-group>
```

```jsx:react
import { AWCTab, AWCTabGroup, AWCTabPanel } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCTabGroup>
    <AWCTab slot="nav" panel="general">
      General
    </AWCTab>
    <AWCTab slot="nav" panel="custom">
      Custom
    </AWCTab>
    <AWCTab slot="nav" panel="advanced">
      Advanced
    </AWCTab>
    <AWCTab slot="nav" panel="disabled" disabled>
      Disabled
    </AWCTab>

    <AWCTabPanel name="general">This is the general tab panel.</AWCTabPanel>
    <AWCTabPanel name="custom">This is the custom tab panel.</AWCTabPanel>
    <AWCTabPanel name="advanced">This is the advanced tab panel.</AWCTabPanel>
    <AWCTabPanel name="disabled">This is a disabled tab panel.</AWCTabPanel>
  </AWCTabGroup>
);
```

:::tip
Additional demonstrations can be found in the [tab group examples](/components/tab-group).
:::
