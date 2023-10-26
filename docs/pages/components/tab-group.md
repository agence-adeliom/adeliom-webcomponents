---
meta:
  title: Tab Group
  description: Tab groups organize content into a container that shows one section at a time.
layout: component
---

Tab groups make use of [tabs](/components/tab) and [tab panels](/components/tab-panel). Each tab must be slotted into the `nav` slot and its `panel` must refer to a tab panel of the same name.

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

## Examples

### Tabs on Bottom

Tabs can be shown on the bottom by setting `placement` to `bottom`.

```html:preview
<awc-tab-group placement="bottom">
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
  <AWCTabGroup placement="bottom">
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

### Tabs on Start

Tabs can be shown on the starting side by setting `placement` to `start`.

```html:preview
<awc-tab-group placement="start">
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
  <AWCTabGroup placement="start">
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

### Tabs on End

Tabs can be shown on the ending side by setting `placement` to `end`.

```html:preview
<awc-tab-group placement="end">
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
  <AWCTabGroup placement="end">
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

### Closable Tabs

Add the `closable` attribute to a tab to show a close button. This example shows how you can dynamically remove tabs from the DOM when the close button is activated.

```html:preview
<awc-tab-group class="tabs-closable">
  <awc-tab slot="nav" panel="general">General</awc-tab>
  <awc-tab slot="nav" panel="closable-1" closable>Closable 1</awc-tab>
  <awc-tab slot="nav" panel="closable-2" closable>Closable 2</awc-tab>
  <awc-tab slot="nav" panel="closable-3" closable>Closable 3</awc-tab>

  <awc-tab-panel name="general">This is the general tab panel.</awc-tab-panel>
  <awc-tab-panel name="closable-1">This is the first closable tab panel.</awc-tab-panel>
  <awc-tab-panel name="closable-2">This is the second closable tab panel.</awc-tab-panel>
  <awc-tab-panel name="closable-3">This is the third closable tab panel.</awc-tab-panel>
</awc-tab-group>

<script>
  const tabGroup = document.querySelector('.tabs-closable');

  tabGroup.addEventListener('awc-close', async event => {
    const tab = event.target;
    const panel = tabGroup.querySelector(`awc-tab-panel[name="${tab.panel}"]`);

    // Show the previous tab if the tab is currently active
    if (tab.active) {
      tabGroup.show(tab.previousElementSibling.panel);
    }

    // Remove the tab + panel
    tab.remove();
    panel.remove();
  });
</script>
```

```jsx:react
import { AWCTab, AWCTabGroup, AWCTabPanel } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => {
  function handleClose(event) {
    //
    // This is a crude example that removes the tab and its panel from the DOM.
    // There are better ways to manage tab creation/removal in React, but that
    // would significantly complicate the example.
    //
    const tab = event.target;
    const tabGroup = tab.closest('awc-tab-group');
    const tabPanel = tabGroup.querySelector(`[aria-labelledby="${tab.id}"]`);

    tab.remove();
    tabPanel.remove();
  }

  return (
    <AWCTabGroup className="tabs-closable" onAwcClose={handleClose}>
      <AWCTab slot="nav" panel="general">
        General
      </AWCTab>
      <AWCTab slot="nav" panel="closable-1" closable onAwcClose={handleClose}>
        Closable 1
      </AWCTab>
      <AWCTab slot="nav" panel="closable-2" closable onAwcClose={handleClose}>
        Closable 2
      </AWCTab>
      <AWCTab slot="nav" panel="closable-3" closable onAwcClose={handleClose}>
        Closable 3
      </AWCTab>

      <AWCTabPanel name="general">This is the general tab panel.</AWCTabPanel>
      <AWCTabPanel name="closable-1">This is the first closable tab panel.</AWCTabPanel>
      <AWCTabPanel name="closable-2">This is the second closable tab panel.</AWCTabPanel>
      <AWCTabPanel name="closable-3">This is the third closable tab panel.</AWCTabPanel>
    </AWCTabGroup>
  );
};
```

### Scrolling Tabs

When there are more tabs than horizontal space allows, the nav will be scrollable.

```html:preview
<awc-tab-group>
  <awc-tab slot="nav" panel="tab-1">Tab 1</awc-tab>
  <awc-tab slot="nav" panel="tab-2">Tab 2</awc-tab>
  <awc-tab slot="nav" panel="tab-3">Tab 3</awc-tab>
  <awc-tab slot="nav" panel="tab-4">Tab 4</awc-tab>
  <awc-tab slot="nav" panel="tab-5">Tab 5</awc-tab>
  <awc-tab slot="nav" panel="tab-6">Tab 6</awc-tab>
  <awc-tab slot="nav" panel="tab-7">Tab 7</awc-tab>
  <awc-tab slot="nav" panel="tab-8">Tab 8</awc-tab>
  <awc-tab slot="nav" panel="tab-9">Tab 9</awc-tab>
  <awc-tab slot="nav" panel="tab-10">Tab 10</awc-tab>
  <awc-tab slot="nav" panel="tab-11">Tab 11</awc-tab>
  <awc-tab slot="nav" panel="tab-12">Tab 12</awc-tab>
  <awc-tab slot="nav" panel="tab-13">Tab 13</awc-tab>
  <awc-tab slot="nav" panel="tab-14">Tab 14</awc-tab>
  <awc-tab slot="nav" panel="tab-15">Tab 15</awc-tab>
  <awc-tab slot="nav" panel="tab-16">Tab 16</awc-tab>
  <awc-tab slot="nav" panel="tab-17">Tab 17</awc-tab>
  <awc-tab slot="nav" panel="tab-18">Tab 18</awc-tab>
  <awc-tab slot="nav" panel="tab-19">Tab 19</awc-tab>
  <awc-tab slot="nav" panel="tab-20">Tab 20</awc-tab>

  <awc-tab-panel name="tab-1">Tab panel 1</awc-tab-panel>
  <awc-tab-panel name="tab-2">Tab panel 2</awc-tab-panel>
  <awc-tab-panel name="tab-3">Tab panel 3</awc-tab-panel>
  <awc-tab-panel name="tab-4">Tab panel 4</awc-tab-panel>
  <awc-tab-panel name="tab-5">Tab panel 5</awc-tab-panel>
  <awc-tab-panel name="tab-6">Tab panel 6</awc-tab-panel>
  <awc-tab-panel name="tab-7">Tab panel 7</awc-tab-panel>
  <awc-tab-panel name="tab-8">Tab panel 8</awc-tab-panel>
  <awc-tab-panel name="tab-9">Tab panel 9</awc-tab-panel>
  <awc-tab-panel name="tab-10">Tab panel 10</awc-tab-panel>
  <awc-tab-panel name="tab-11">Tab panel 11</awc-tab-panel>
  <awc-tab-panel name="tab-12">Tab panel 12</awc-tab-panel>
  <awc-tab-panel name="tab-13">Tab panel 13</awc-tab-panel>
  <awc-tab-panel name="tab-14">Tab panel 14</awc-tab-panel>
  <awc-tab-panel name="tab-15">Tab panel 15</awc-tab-panel>
  <awc-tab-panel name="tab-16">Tab panel 16</awc-tab-panel>
  <awc-tab-panel name="tab-17">Tab panel 17</awc-tab-panel>
  <awc-tab-panel name="tab-18">Tab panel 18</awc-tab-panel>
  <awc-tab-panel name="tab-19">Tab panel 19</awc-tab-panel>
  <awc-tab-panel name="tab-20">Tab panel 20</awc-tab-panel>
</awc-tab-group>
```

```jsx:react
import { AWCTab, AWCTabGroup, AWCTabPanel } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCTabGroup>
    <AWCTab slot="nav" panel="tab-1">
      Tab 1
    </AWCTab>
    <AWCTab slot="nav" panel="tab-2">
      Tab 2
    </AWCTab>
    <AWCTab slot="nav" panel="tab-3">
      Tab 3
    </AWCTab>
    <AWCTab slot="nav" panel="tab-4">
      Tab 4
    </AWCTab>
    <AWCTab slot="nav" panel="tab-5">
      Tab 5
    </AWCTab>
    <AWCTab slot="nav" panel="tab-6">
      Tab 6
    </AWCTab>
    <AWCTab slot="nav" panel="tab-7">
      Tab 7
    </AWCTab>
    <AWCTab slot="nav" panel="tab-8">
      Tab 8
    </AWCTab>
    <AWCTab slot="nav" panel="tab-9">
      Tab 9
    </AWCTab>
    <AWCTab slot="nav" panel="tab-10">
      Tab 10
    </AWCTab>
    <AWCTab slot="nav" panel="tab-11">
      Tab 11
    </AWCTab>
    <AWCTab slot="nav" panel="tab-12">
      Tab 12
    </AWCTab>
    <AWCTab slot="nav" panel="tab-13">
      Tab 13
    </AWCTab>
    <AWCTab slot="nav" panel="tab-14">
      Tab 14
    </AWCTab>
    <AWCTab slot="nav" panel="tab-15">
      Tab 15
    </AWCTab>
    <AWCTab slot="nav" panel="tab-16">
      Tab 16
    </AWCTab>
    <AWCTab slot="nav" panel="tab-17">
      Tab 17
    </AWCTab>
    <AWCTab slot="nav" panel="tab-18">
      Tab 18
    </AWCTab>
    <AWCTab slot="nav" panel="tab-19">
      Tab 19
    </AWCTab>
    <AWCTab slot="nav" panel="tab-20">
      Tab 20
    </AWCTab>

    <AWCTabPanel name="tab-1">Tab panel 1</AWCTabPanel>
    <AWCTabPanel name="tab-2">Tab panel 2</AWCTabPanel>
    <AWCTabPanel name="tab-3">Tab panel 3</AWCTabPanel>
    <AWCTabPanel name="tab-4">Tab panel 4</AWCTabPanel>
    <AWCTabPanel name="tab-5">Tab panel 5</AWCTabPanel>
    <AWCTabPanel name="tab-6">Tab panel 6</AWCTabPanel>
    <AWCTabPanel name="tab-7">Tab panel 7</AWCTabPanel>
    <AWCTabPanel name="tab-8">Tab panel 8</AWCTabPanel>
    <AWCTabPanel name="tab-9">Tab panel 9</AWCTabPanel>
    <AWCTabPanel name="tab-10">Tab panel 10</AWCTabPanel>
    <AWCTabPanel name="tab-11">Tab panel 11</AWCTabPanel>
    <AWCTabPanel name="tab-12">Tab panel 12</AWCTabPanel>
    <AWCTabPanel name="tab-13">Tab panel 13</AWCTabPanel>
    <AWCTabPanel name="tab-14">Tab panel 14</AWCTabPanel>
    <AWCTabPanel name="tab-15">Tab panel 15</AWCTabPanel>
    <AWCTabPanel name="tab-16">Tab panel 16</AWCTabPanel>
    <AWCTabPanel name="tab-17">Tab panel 17</AWCTabPanel>
    <AWCTabPanel name="tab-18">Tab panel 18</AWCTabPanel>
    <AWCTabPanel name="tab-19">Tab panel 19</AWCTabPanel>
    <AWCTabPanel name="tab-20">Tab panel 20</AWCTabPanel>
  </AWCTabGroup>
);
```

### Manual Activation

When focused, keyboard users can press [[Left]] or [[Right]] to select the desired tab. By default, the corresponding tab panel will be shown immediately (automatic activation). You can change this behavior by setting `activation="manual"` which will require the user to press [[Space]] or [[Enter]] before showing the tab panel (manual activation).

```html:preview
<awc-tab-group activation="manual">
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
  <AWCTabGroup activation="manual">
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
