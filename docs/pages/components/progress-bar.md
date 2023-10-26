---
meta:
  title: Progress Bar
  description: Progress bars are used to show the status of an ongoing operation.
layout: component
---

```html:preview
<awc-progress-bar value="50"></awc-progress-bar>
```

```jsx:react
import { AWCProgressBar } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => <AWCProgressBar value={50} />;
```

## Examples

### Labels

Use the `label` attribute to label the progress bar and tell assistive devices how to announce it.

```html:preview
<awc-progress-bar value="50" label="Upload progress"></awc-progress-bar>
```

```jsx:react
import { AWCProgressBar } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => <AWCProgressBar value="50" label="Upload progress" />;
```

### Custom Height

Use the `--height` custom property to set the progress bar's height.

```html:preview
<awc-progress-bar value="50" style="--height: 6px;"></awc-progress-bar>
```

{% raw %}

```jsx:react
import { AWCProgressBar } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => <AWCProgressBar value={50} style={{ '--height': '6px' }} />;
```

{% endraw %}

### Showing Values

Use the default slot to show a value.

```html:preview
<awc-progress-bar value="50" class="progress-bar-values">50%</awc-progress-bar>

<br />

<awc-button circle><awc-icon name="dash" label="Decrease"></awc-icon></awc-button>
<awc-button circle><awc-icon name="plus" label="Increase"></awc-icon></awc-button>

<script>
  const progressBar = document.querySelector('.progress-bar-values');
  const subtractButton = progressBar.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressBar.value + 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressBar.value - 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });
</script>
```

```jsx:react
import { useState } from 'react';
import { AWCButton, AWCIcon, AWCProgressBar } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => {
  const [value, setValue] = useState(50);

  function adjustValue(amount) {
    let newValue = value + amount;
    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    setValue(newValue);
  }

  return (
    <>
      <AWCProgressBar value={value}>{value}%</AWCProgressBar>

      <br />

      <AWCButton circle onClick={() => adjustValue(-10)}>
        <AWCIcon name="dash" label="Decrease" />
      </AWCButton>

      <AWCButton circle onClick={() => adjustValue(10)}>
        <AWCIcon name="plus" label="Increase" />
      </AWCButton>
    </>
  );
};
```

### Indeterminate

The `indeterminate` attribute can be used to inform the user that the operation is pending, but its status cannot currently be determined. In this state, `value` is ignored and the label, if present, will not be shown.

```html:preview
<awc-progress-bar indeterminate></awc-progress-bar>
```

```jsx:react
import { AWCProgressBar } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => <AWCProgressBar indeterminate />;
```
