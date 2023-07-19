---
meta:
  title: Progress Ring
  description: Progress rings are used to show the progress of a determinate operation in a circular fashion.
layout: component
---

```html:preview
<awc-progress-ring value="25"></awc-progress-ring>
```

```jsx:react
import { AWCProgressRing } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCProgressRing value="25" />;
```

## Examples

### Size

Use the `--size` custom property to set the diameter of the progress ring.

```html:preview
<awc-progress-ring value="50" style="--size: 200px;"></awc-progress-ring>
```

{% raw %}

```jsx:react
import { AWCProgressRing } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCProgressRing value="50" style={{ '--size': '200px' }} />;
```

{% endraw %}

### Track and Indicator Width

Use the `--track-width` and `--indicator-width` custom properties to set the width of the progress ring's track and indicator.

```html:preview
<awc-progress-ring value="50" style="--track-width: 6px; --indicator-width: 12px;"></awc-progress-ring>
```

{% raw %}

```jsx:react
import { AWCProgressRing } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCProgressRing value="50" style={{ '--track-width': '6px', '--indicator-width': '12px' }} />;
```

{% endraw %}

### Colors

To change the color, use the `--track-color` and `--indicator-color` custom properties.

```html:preview
<awc-progress-ring
  value="50"
  style="
    --track-color: pink;
    --indicator-color: deeppink;
  "
></awc-progress-ring>
```

{% raw %}

```jsx:react
import { AWCProgressRing } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCProgressRing
    value="50"
    style={{
      '--track-color': 'pink',
      '--indicator-color': 'deeppink'
    }}
  />
);
```

{% endraw %}

### Labels

Use the `label` attribute to label the progress ring and tell assistive devices how to announce it.

```html:preview
<awc-progress-ring value="50" label="Upload progress"></awc-progress-ring>
```

```jsx:react
import { AWCProgressRing } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCProgressRing value="50" label="Upload progress" />;
```

### Showing Values

Use the default slot to show a label inside the progress ring.

```html:preview
<awc-progress-ring value="50" class="progress-ring-values" style="margin-bottom: .5rem;">50%</awc-progress-ring>

<br />

<awc-button circle><awc-icon name="dash" label="Decrease"></awc-icon></awc-button>
<awc-button circle><awc-icon name="plus" label="Increase"></awc-icon></awc-button>

<script>
  const progressRing = document.querySelector('.progress-ring-values');
  const subtractButton = progressRing.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressRing.value + 10);
    progressRing.value = value;
    progressRing.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressRing.value - 10);
    progressRing.value = value;
    progressRing.textContent = `${value}%`;
  });
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import { AWCButton, AWCIcon, AWCProgressRing } from '@agence-adeliom/awc/dist/react';

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
      <AWCProgressRing value={value} style={{ marginBottom: '.5rem' }}>
        {value}%
      </AWCProgressRing>

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

{% endraw %}
