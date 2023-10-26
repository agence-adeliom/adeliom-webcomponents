---
meta:
  title: Dropdown
  description: 'Dropdowns expose additional content that "drops down" in a panel.'
layout: component
---

Dropdowns consist of a trigger and a panel. By default, activating the trigger will expose the panel and interacting outside of the panel will close it.

Dropdowns are designed to work well with [menus](/components/menu) to provide a list of options the user can select from. However, dropdowns can also be used in lower-level applications (e.g. [color picker](/components/color-picker) and [select](/components/select)). The API gives you complete control over showing, hiding, and positioning the panel.

```html:preview
<awc-dropdown>
  <awc-button slot="trigger" caret>Dropdown</awc-button>
  <awc-menu>
    <awc-menu-item>Dropdown Item 1</awc-menu-item>
    <awc-menu-item>Dropdown Item 2</awc-menu-item>
    <awc-menu-item>Dropdown Item 3</awc-menu-item>
    <awc-divider></awc-divider>
    <awc-menu-item type="checkbox" checked>Checkbox</awc-menu-item>
    <awc-menu-item disabled>Disabled</awc-menu-item>
    <awc-divider></awc-divider>
    <awc-menu-item>
      Prefix
      <awc-icon slot="prefix" name="gift"></awc-icon>
    </awc-menu-item>
    <awc-menu-item>
      Suffix Icon
      <awc-icon slot="suffix" name="heart"></awc-icon>
    </awc-menu-item>
  </awc-menu>
</awc-dropdown>
```

```jsx:react
import { AWCButton, AWCDivider, AWCDropdown, AWCIcon, AWCMenu, AWCMenuItem } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCDropdown>
    <AWCButton slot="trigger" caret>
      Dropdown
    </AWCButton>
    <AWCMenu>
      <AWCMenuItem>Dropdown Item 1</AWCMenuItem>
      <AWCMenuItem>Dropdown Item 2</AWCMenuItem>
      <AWCMenuItem>Dropdown Item 3</AWCMenuItem>
      <AWCDivider />
      <AWCMenuItem type="checkbox" checked>
        Checkbox
      </AWCMenuItem>
      <AWCMenuItem disabled>Disabled</AWCMenuItem>
      <AWCDivider />
      <AWCMenuItem>
        Prefix
        <AWCIcon slot="prefix" name="gift" />
      </AWCMenuItem>
      <AWCMenuItem>
        Suffix Icon
        <AWCIcon slot="suffix" name="heart" />
      </AWCMenuItem>
    </AWCMenu>
  </AWCDropdown>
);
```

## Examples

### Getting the Selected Item

When dropdowns are used with [menus](/components/menu), you can listen for the [`awc-select`](/components/menu#events) event to determine which menu item was selected. The menu item element will be exposed in `event.detail.item`. You can set `value` props to make it easier to identify commands.

```html:preview
<div class="dropdown-selection">
  <awc-dropdown>
    <awc-button slot="trigger" caret>Edit</awc-button>
    <awc-menu>
      <awc-menu-item value="cut">Cut</awc-menu-item>
      <awc-menu-item value="copy">Copy</awc-menu-item>
      <awc-menu-item value="paste">Paste</awc-menu-item>
    </awc-menu>
  </awc-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection');
  const dropdown = container.querySelector('awc-dropdown');

  dropdown.addEventListener('awc-select', event => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>
```

```jsx:react
import { AWCButton, AWCDropdown, AWCMenu, AWCMenuItem } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => {
  function handleSelect(event) {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  }

  return (
    <AWCDropdown>
      <AWCButton slot="trigger" caret>
        Edit
      </AWCButton>
      <AWCMenu onAwcSelect={handleSelect}>
        <AWCMenuItem value="cut">Cut</AWCMenuItem>
        <AWCMenuItem value="copy">Copy</AWCMenuItem>
        <AWCMenuItem value="paste">Paste</AWCMenuItem>
      </AWCMenu>
    </AWCDropdown>
  );
};
```

Alternatively, you can listen for the `click` event on individual menu items. Note that, using this approach, disabled menu items will still emit a `click` event.

```html:preview
<div class="dropdown-selection-alt">
  <awc-dropdown>
    <awc-button slot="trigger" caret>Edit</awc-button>
    <awc-menu>
      <awc-menu-item value="cut">Cut</awc-menu-item>
      <awc-menu-item value="copy">Copy</awc-menu-item>
      <awc-menu-item value="paste">Paste</awc-menu-item>
    </awc-menu>
  </awc-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection-alt');
  const cut = container.querySelector('awc-menu-item[value="cut"]');
  const copy = container.querySelector('awc-menu-item[value="copy"]');
  const paste = container.querySelector('awc-menu-item[value="paste"]');

  cut.addEventListener('click', () => console.log('cut'));
  copy.addEventListener('click', () => console.log('copy'));
  paste.addEventListener('click', () => console.log('paste'));
</script>
```

```jsx:react
import { AWCButton, AWCDropdown, AWCMenu, AWCMenuItem } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => {
  function handleCut() {
    console.log('cut');
  }

  function handleCopy() {
    console.log('copy');
  }

  function handlePaste() {
    console.log('paste');
  }

  return (
    <AWCDropdown>
      <AWCButton slot="trigger" caret>
        Edit
      </AWCButton>
      <AWCMenu>
        <AWCMenuItem onClick={handleCut}>Cut</AWCMenuItem>
        <AWCMenuItem onClick={handleCopy}>Copy</AWCMenuItem>
        <AWCMenuItem onClick={handlePaste}>Paste</AWCMenuItem>
      </AWCMenu>
    </AWCDropdown>
  );
};
```

### Placement

The preferred placement of the dropdown can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport.

```html:preview
<awc-dropdown placement="top-start">
  <awc-button slot="trigger" caret>Edit</awc-button>
  <awc-menu>
    <awc-menu-item>Cut</awc-menu-item>
    <awc-menu-item>Copy</awc-menu-item>
    <awc-menu-item>Paste</awc-menu-item>
    <awc-divider></awc-divider>
    <awc-menu-item>Find</awc-menu-item>
    <awc-menu-item>Replace</awc-menu-item>
  </awc-menu>
</awc-dropdown>
```

```jsx:react
import { AWCButton, AWCDivider, AWCDropdown, AWCMenu, AWCMenuItem } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCDropdown placement="top-start">
    <AWCButton slot="trigger" caret>
      Edit
    </AWCButton>
    <AWCMenu>
      <AWCMenuItem>Cut</AWCMenuItem>
      <AWCMenuItem>Copy</AWCMenuItem>
      <AWCMenuItem>Paste</AWCMenuItem>
      <AWCDivider />
      <AWCMenuItem>Find</AWCMenuItem>
      <AWCMenuItem>Replace</AWCMenuItem>
    </AWCMenu>
  </AWCDropdown>
);
```

### Distance

The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels.

```html:preview
<awc-dropdown distance="30">
  <awc-button slot="trigger" caret>Edit</awc-button>
  <awc-menu>
    <awc-menu-item>Cut</awc-menu-item>
    <awc-menu-item>Copy</awc-menu-item>
    <awc-menu-item>Paste</awc-menu-item>
    <awc-divider></awc-divider>
    <awc-menu-item>Find</awc-menu-item>
    <awc-menu-item>Replace</awc-menu-item>
  </awc-menu>
</awc-dropdown>
```

```jsx:react
import { AWCButton, AWCDivider, AWCDropdown, AWCMenu, AWCMenuItem } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCDropdown distance={30}>
    <AWCButton slot="trigger" caret>
      Edit
    </AWCButton>
    <AWCMenu>
      <AWCMenuItem>Cut</AWCMenuItem>
      <AWCMenuItem>Copy</AWCMenuItem>
      <AWCMenuItem>Paste</AWCMenuItem>
      <AWCDivider />
      <AWCMenuItem>Find</AWCMenuItem>
      <AWCMenuItem>Replace</AWCMenuItem>
    </AWCMenu>
  </AWCDropdown>
);
```

### Skidding

The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels.

```html:preview
<awc-dropdown skidding="30">
  <awc-button slot="trigger" caret>Edit</awc-button>
  <awc-menu>
    <awc-menu-item>Cut</awc-menu-item>
    <awc-menu-item>Copy</awc-menu-item>
    <awc-menu-item>Paste</awc-menu-item>
    <awc-divider></awc-divider>
    <awc-menu-item>Find</awc-menu-item>
    <awc-menu-item>Replace</awc-menu-item>
  </awc-menu>
</awc-dropdown>
```

```jsx:react
import { AWCButton, AWCDivider, AWCDropdown, AWCMenu, AWCMenuItem } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <AWCDropdown skidding={30}>
    <AWCButton slot="trigger" caret>
      Edit
    </AWCButton>
    <AWCMenu>
      <AWCMenuItem>Cut</AWCMenuItem>
      <AWCMenuItem>Copy</AWCMenuItem>
      <AWCMenuItem>Paste</AWCMenuItem>
      <AWCDivider />
      <AWCMenuItem>Find</AWCMenuItem>
      <AWCMenuItem>Replace</AWCMenuItem>
    </AWCMenu>
  </AWCDropdown>
);
```

### Hoisting

Dropdown panels will be clipped if they're inside a container that has `overflow: auto|hidden`. The `hoist` attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. In this case, the panel will be positioned relative to its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block), which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html:preview
<div class="dropdown-hoist">
  <awc-dropdown>
    <awc-button slot="trigger" caret>No Hoist</awc-button>
    <awc-menu>
      <awc-menu-item>Item 1</awc-menu-item>
      <awc-menu-item>Item 2</awc-menu-item>
      <awc-menu-item>Item 3</awc-menu-item>
    </awc-menu>
  </awc-dropdown>

  <awc-dropdown hoist>
    <awc-button slot="trigger" caret>Hoist</awc-button>
    <awc-menu>
      <awc-menu-item>Item 1</awc-menu-item>
      <awc-menu-item>Item 2</awc-menu-item>
      <awc-menu-item>Item 3</awc-menu-item>
    </awc-menu>
  </awc-dropdown>
</div>

<style>
  .dropdown-hoist {
    position: relative;
    border: solid 2px var(--awc-panel-border-color);
    padding: var(--awc-spacing-medium);
    overflow: hidden;
  }
</style>
```

```jsx:react
import { AWCButton, AWCDivider, AWCDropdown, AWCIcon, AWCMenu, AWCMenuItem } from '@agence-adeliom/awc/%NPMDIR%/react';

const css = `
  .dropdown-hoist {
    border: solid 2px var(--awc-panel-border-color);
    padding: var(--awc-spacing-medium);
    overflow: hidden;
  }
`;

const App = () => (
  <>
    <div className="dropdown-hoist">
      <AWCDropdown>
        <AWCButton slot="trigger" caret>
          No Hoist
        </AWCButton>
        <AWCMenu>
          <AWCMenuItem>Item 1</AWCMenuItem>
          <AWCMenuItem>Item 2</AWCMenuItem>
          <AWCMenuItem>Item 3</AWCMenuItem>
        </AWCMenu>
      </AWCDropdown>

      <AWCDropdown hoist>
        <AWCButton slot="trigger" caret>
          Hoist
        </AWCButton>
        <AWCMenu>
          <AWCMenuItem>Item 1</AWCMenuItem>
          <AWCMenuItem>Item 2</AWCMenuItem>
          <AWCMenuItem>Item 3</AWCMenuItem>
        </AWCMenu>
      </AWCDropdown>
    </div>

    <style>{css}</style>
  </>
);
```
