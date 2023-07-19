---
meta:
  title: Button Group
  description: Button groups can be used to group related buttons into sections.
layout: component
---

```html:preview
<awc-button-group label="Alignment">
  <awc-button>Left</awc-button>
  <awc-button>Center</awc-button>
  <awc-button>Right</awc-button>
</awc-button-group>
```

```jsx:react
import { AWCButton, AWCButtonGroup } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCButtonGroup label="Alignment">
    <AWCButton>Left</AWCButton>
    <AWCButton>Center</AWCButton>
    <AWCButton>Right</AWCButton>
  </AWCButtonGroup>
);
```

## Examples

### Button Sizes

All button sizes are supported, but avoid mixing sizes within the same button group.

```html:preview
<awc-button-group label="Alignment">
  <awc-button size="small">Left</awc-button>
  <awc-button size="small">Center</awc-button>
  <awc-button size="small">Right</awc-button>
</awc-button-group>

<br /><br />

<awc-button-group label="Alignment">
  <awc-button size="medium">Left</awc-button>
  <awc-button size="medium">Center</awc-button>
  <awc-button size="medium">Right</awc-button>
</awc-button-group>

<br /><br />

<awc-button-group label="Alignment">
  <awc-button size="large">Left</awc-button>
  <awc-button size="large">Center</awc-button>
  <awc-button size="large">Right</awc-button>
</awc-button-group>
```

```jsx:react
import { AWCButton, AWCButtonGroup } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCButtonGroup label="Alignment">
      <AWCButton size="small">Left</AWCButton>
      <AWCButton size="small">Center</AWCButton>
      <AWCButton size="small">Right</AWCButton>
    </AWCButtonGroup>

    <br />
    <br />

    <AWCButtonGroup label="Alignment">
      <AWCButton size="medium">Left</AWCButton>
      <AWCButton size="medium">Center</AWCButton>
      <AWCButton size="medium">Right</AWCButton>
    </AWCButtonGroup>

    <br />
    <br />

    <AWCButtonGroup label="Alignment">
      <AWCButton size="large">Left</AWCButton>
      <AWCButton size="large">Center</AWCButton>
      <AWCButton size="large">Right</AWCButton>
    </AWCButtonGroup>
  </>
);
```

### Theme Buttons

Theme buttons are supported through the button's `variant` attribute.

```html:preview
<awc-button-group label="Alignment">
  <awc-button variant="primary">Left</awc-button>
  <awc-button variant="primary">Center</awc-button>
  <awc-button variant="primary">Right</awc-button>
</awc-button-group>

<br /><br />

<awc-button-group label="Alignment">
  <awc-button variant="success">Left</awc-button>
  <awc-button variant="success">Center</awc-button>
  <awc-button variant="success">Right</awc-button>
</awc-button-group>

<br /><br />

<awc-button-group label="Alignment">
  <awc-button variant="neutral">Left</awc-button>
  <awc-button variant="neutral">Center</awc-button>
  <awc-button variant="neutral">Right</awc-button>
</awc-button-group>

<br /><br />

<awc-button-group label="Alignment">
  <awc-button variant="warning">Left</awc-button>
  <awc-button variant="warning">Center</awc-button>
  <awc-button variant="warning">Right</awc-button>
</awc-button-group>

<br /><br />

<awc-button-group label="Alignment">
  <awc-button variant="danger">Left</awc-button>
  <awc-button variant="danger">Center</awc-button>
  <awc-button variant="danger">Right</awc-button>
</awc-button-group>
```

```jsx:react
import { AWCButton, AWCButtonGroup } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCButtonGroup label="Alignment">
      <AWCButton variant="primary">Left</AWCButton>
      <AWCButton variant="primary">Center</AWCButton>
      <AWCButton variant="primary">Right</AWCButton>
    </AWCButtonGroup>

    <br />
    <br />

    <AWCButtonGroup label="Alignment">
      <AWCButton variant="success">Left</AWCButton>
      <AWCButton variant="success">Center</AWCButton>
      <AWCButton variant="success">Right</AWCButton>
    </AWCButtonGroup>

    <br />
    <br />

    <AWCButtonGroup label="Alignment">
      <AWCButton variant="neutral">Left</AWCButton>
      <AWCButton variant="neutral">Center</AWCButton>
      <AWCButton variant="neutral">Right</AWCButton>
    </AWCButtonGroup>

    <br />
    <br />

    <AWCButtonGroup label="Alignment">
      <AWCButton variant="warning">Left</AWCButton>
      <AWCButton variant="warning">Center</AWCButton>
      <AWCButton variant="warning">Right</AWCButton>
    </AWCButtonGroup>

    <br />
    <br />

    <AWCButtonGroup label="Alignment">
      <AWCButton variant="danger">Left</AWCButton>
      <AWCButton variant="danger">Center</AWCButton>
      <AWCButton variant="danger">Right</AWCButton>
    </AWCButtonGroup>
  </>
);
```

### Pill Buttons

Pill buttons are supported through the button's `pill` attribute.

```html:preview
<awc-button-group label="Alignment">
  <awc-button size="small" pill>Left</awc-button>
  <awc-button size="small" pill>Center</awc-button>
  <awc-button size="small" pill>Right</awc-button>
</awc-button-group>

<br /><br />

<awc-button-group label="Alignment">
  <awc-button size="medium" pill>Left</awc-button>
  <awc-button size="medium" pill>Center</awc-button>
  <awc-button size="medium" pill>Right</awc-button>
</awc-button-group>

<br /><br />

<awc-button-group label="Alignment">
  <awc-button size="large" pill>Left</awc-button>
  <awc-button size="large" pill>Center</awc-button>
  <awc-button size="large" pill>Right</awc-button>
</awc-button-group>
```

```jsx:react
import { AWCButton, AWCButtonGroup } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCButtonGroup label="Alignment">
      <AWCButton size="small" pill>
        Left
      </AWCButton>
      <AWCButton size="small" pill>
        Center
      </AWCButton>
      <AWCButton size="small" pill>
        Right
      </AWCButton>
    </AWCButtonGroup>

    <br />
    <br />

    <AWCButtonGroup label="Alignment">
      <AWCButton size="medium" pill>
        Left
      </AWCButton>
      <AWCButton size="medium" pill>
        Center
      </AWCButton>
      <AWCButton size="medium" pill>
        Right
      </AWCButton>
    </AWCButtonGroup>

    <br />
    <br />

    <AWCButtonGroup label="Alignment">
      <AWCButton size="large" pill>
        Left
      </AWCButton>
      <AWCButton size="large" pill>
        Center
      </AWCButton>
      <AWCButton size="large" pill>
        Right
      </AWCButton>
    </AWCButtonGroup>
  </>
);
```

### Dropdowns in Button Groups

Dropdowns can be placed inside button groups as long as the trigger is an `<awc-button>` element.

```html:preview
<awc-button-group label="Example Button Group">
  <awc-button>Button</awc-button>
  <awc-button>Button</awc-button>
  <awc-dropdown>
    <awc-button slot="trigger" caret>Dropdown</awc-button>
    <awc-menu>
      <awc-menu-item>Item 1</awc-menu-item>
      <awc-menu-item>Item 2</awc-menu-item>
      <awc-menu-item>Item 3</awc-menu-item>
    </awc-menu>
  </awc-dropdown>
</awc-button-group>
```

```jsx:react
import { AWCButton, AWCButtonGroup, AWCDropdown, AWCMenu, AWCMenuItem } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCButtonGroup label="Example Button Group">
    <AWCButton>Button</AWCButton>
    <AWCButton>Button</AWCButton>
    <AWCDropdown>
      <AWCButton slot="trigger" caret>
        Dropdown
      </AWCButton>
      <AWCMenu>
        <AWCMenuItem>Item 1</AWCMenuItem>
        <AWCMenuItem>Item 2</AWCMenuItem>
        <AWCMenuItem>Item 3</AWCMenuItem>
      </AWCMenu>
    </AWCDropdown>
  </AWCButtonGroup>
);
```

### Split Buttons

Create a split button using a button and a dropdown. Use a [visually hidden](/components/visually-hidden) label to ensure the dropdown is accessible to users with assistive devices.

```html:preview
<awc-button-group label="Example Button Group">
  <awc-button variant="primary">Save</awc-button>
  <awc-dropdown placement="bottom-end">
    <awc-button slot="trigger" variant="primary" caret>
      <awc-visually-hidden>More options</awc-visually-hidden>
    </awc-button>
    <awc-menu>
      <awc-menu-item>Save</awc-menu-item>
      <awc-menu-item>Save as&hellip;</awc-menu-item>
      <awc-menu-item>Save all</awc-menu-item>
    </awc-menu>
  </awc-dropdown>
</awc-button-group>
```

```jsx:react
import { AWCButton, AWCButtonGroup, AWCDropdown, AWCMenu, AWCMenuItem } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCButtonGroup label="Example Button Group">
    <AWCButton variant="primary">Save</AWCButton>
    <AWCDropdown placement="bottom-end">
      <AWCButton slot="trigger" variant="primary" caret></AWCButton>
      <AWCMenu>
        <AWCMenuItem>Save</AWCMenuItem>
        <AWCMenuItem>Save as&hellip;</AWCMenuItem>
        <AWCMenuItem>Save all</AWCMenuItem>
      </AWCMenu>
    </AWCDropdown>
  </AWCButtonGroup>
);
```

### Tooltips in Button Groups

Buttons can be wrapped in tooltips to provide more detail when the user interacts with them.

```html:preview
<awc-button-group label="Alignment">
  <awc-tooltip content="I'm on the left">
    <awc-button>Left</awc-button>
  </awc-tooltip>

  <awc-tooltip content="I'm in the middle">
    <awc-button>Center</awc-button>
  </awc-tooltip>

  <awc-tooltip content="I'm on the right">
    <awc-button>Right</awc-button>
  </awc-tooltip>
</awc-button-group>
```

```jsx:react
import { AWCButton, AWCButtonGroup, AWCTooltip } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCButtonGroup label="Alignment">
      <AWCTooltip content="I'm on the left">
        <AWCButton>Left</AWCButton>
      </AWCTooltip>

      <AWCTooltip content="I'm in the middle">
        <AWCButton>Center</AWCButton>
      </AWCTooltip>

      <AWCTooltip content="I'm on the right">
        <AWCButton>Right</AWCButton>
      </AWCTooltip>
    </AWCButtonGroup>
  </>
);
```

### Toolbar Example

Create interactive toolbars with button groups.

```html:preview
<div class="button-group-toolbar">
  <awc-button-group label="History">
    <awc-tooltip content="Undo">
      <awc-button><awc-icon name="arrow-counterclockwise" label="Undo"></awc-icon></awc-button>
    </awc-tooltip>
    <awc-tooltip content="Redo">
      <awc-button><awc-icon name="arrow-clockwise" label="Redo"></awc-icon></awc-button>
    </awc-tooltip>
  </awc-button-group>

  <awc-button-group label="Formatting">
    <awc-tooltip content="Bold">
      <awc-button><awc-icon name="type-bold" label="Bold"></awc-icon></awc-button>
    </awc-tooltip>
    <awc-tooltip content="Italic">
      <awc-button><awc-icon name="type-italic" label="Italic"></awc-icon></awc-button>
    </awc-tooltip>
    <awc-tooltip content="Underline">
      <awc-button><awc-icon name="type-underline" label="Underline"></awc-icon></awc-button>
    </awc-tooltip>
  </awc-button-group>

  <awc-button-group label="Alignment">
    <awc-tooltip content="Align Left">
      <awc-button><awc-icon name="justify-left" label="Align Left"></awc-icon></awc-button>
    </awc-tooltip>
    <awc-tooltip content="Align Center">
      <awc-button><awc-icon name="justify" label="Align Center"></awc-icon></awc-button>
    </awc-tooltip>
    <awc-tooltip content="Align Right">
      <awc-button><awc-icon name="justify-right" label="Align Right"></awc-icon></awc-button>
    </awc-tooltip>
  </awc-button-group>
</div>

<style>
  .button-group-toolbar awc-button-group:not(:last-of-type) {
    margin-right: var(--awc-spacing-x-small);
  }
</style>
```

```jsx:react
import { AWCButton, AWCButtonGroup, AWCIcon, AWCTooltip } from '@agence-adeliom/awc/dist/react';

const css = `
  .button-group-toolbar awc-button-group:not(:last-of-type) {
    margin-right: var(--awc-spacing-x-small);
  }
`;

const App = () => (
  <>
    <div className="button-group-toolbar">
      <AWCButtonGroup label="History">
        <AWCTooltip content="Undo">
          <AWCButton>
            <AWCIcon name="arrow-counterclockwise"></AWCIcon>
          </AWCButton>
        </AWCTooltip>
        <AWCTooltip content="Redo">
          <AWCButton>
            <AWCIcon name="arrow-clockwise"></AWCIcon>
          </AWCButton>
        </AWCTooltip>
      </AWCButtonGroup>

      <AWCButtonGroup label="Formatting">
        <AWCTooltip content="Bold">
          <AWCButton>
            <AWCIcon name="type-bold"></AWCIcon>
          </AWCButton>
        </AWCTooltip>
        <AWCTooltip content="Italic">
          <AWCButton>
            <AWCIcon name="type-italic"></AWCIcon>
          </AWCButton>
        </AWCTooltip>
        <AWCTooltip content="Underline">
          <AWCButton>
            <AWCIcon name="type-underline"></AWCIcon>
          </AWCButton>
        </AWCTooltip>
      </AWCButtonGroup>

      <AWCButtonGroup label="Alignment">
        <AWCTooltip content="Align Left">
          <AWCButton>
            <AWCIcon name="justify-left"></AWCIcon>
          </AWCButton>
        </AWCTooltip>
        <AWCTooltip content="Align Center">
          <AWCButton>
            <AWCIcon name="justify"></AWCIcon>
          </AWCButton>
        </AWCTooltip>
        <AWCTooltip content="Align Right">
          <AWCButton>
            <AWCIcon name="justify-right"></AWCIcon>
          </AWCButton>
        </AWCTooltip>
      </AWCButtonGroup>
    </div>

    <style>{css}</style>
  </>
);
```
