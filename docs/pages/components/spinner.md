---
meta:
  title: Spinner
  description: Spinners are used to show the progress of an indeterminate operation.
layout: component
---

```html:preview
<awc-spinner></awc-spinner>
```

```jsx:react
import { AWCSpinner } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCSpinner />;
```

## Examples

### Size

Spinners are sized based on the current font size. To change their size, set the `font-size` property on the spinner itself or on a parent element as shown below.

```html:preview
<awc-spinner></awc-spinner>
<awc-spinner style="font-size: 2rem;"></awc-spinner>
<awc-spinner style="font-size: 3rem;"></awc-spinner>
```

{% raw %}

```jsx:react
import { AWCSpinner } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCSpinner />
    <AWCSpinner style={{ fontSize: '2rem' }} />
    <AWCSpinner style={{ fontSize: '3rem' }} />
  </>
);
```

{% endraw %}

### Track Width

The width of the spinner's track can be changed by setting the `--track-width` custom property.

```html:preview
<awc-spinner style="font-size: 50px; --track-width: 10px;"></awc-spinner>
```

{% raw %}

```jsx:react
import { AWCSpinner } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCSpinner
    style={{
      fontSize: '3rem',
      '--track-width': '6px'
    }}
  />
);
```

{% endraw %}

### Color

The spinner's colors can be changed by setting the `--indicator-color` and `--track-color` custom properties.

```html:preview
<awc-spinner style="font-size: 3rem; --indicator-color: deeppink; --track-color: pink;"></awc-spinner>
```

{% raw %}

```jsx:react
import { AWCSpinner } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCSpinner
    style={{
      fontSize: '3rem',
      '--indicator-color': 'deeppink',
      '--track-color': 'pink'
    }}
  />
);
```

{% endraw %}
