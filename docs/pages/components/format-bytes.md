---
meta:
  title: Format Bytes
  description: Formats a number as a human readable bytes value.
layout: component
---

```html:preview
<div class="format-bytes-overview">
  The file is <awc-format-bytes value="1000"></awc-format-bytes> in size. <br /><br />
  <awc-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></awc-input>
</div>

<script>
  const container = document.querySelector('.format-bytes-overview');
  const formatter = container.querySelector('awc-format-bytes');
  const input = container.querySelector('awc-input');

  input.addEventListener('awc-input', () => (formatter.value = input.value || 0));
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import { AWCButton, AWCFormatBytes, AWCInput } from '@agence-adeliom/awc/dist/react';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      The file is <AWCFormatBytes value={value} /> in size.
      <br />
      <br />
      <AWCInput
        type="number"
        value={value}
        label="Number to Format"
        style={{ maxWidth: '180px' }}
        onAwcInput={event => setValue(event.target.value)}
      />
    </>
  );
};
```

{% endraw %}

## Examples

### Formatting Bytes

Set the `value` attribute to a number to get the value in bytes.

```html:preview
<awc-format-bytes value="12"></awc-format-bytes><br />
<awc-format-bytes value="1200"></awc-format-bytes><br />
<awc-format-bytes value="1200000"></awc-format-bytes><br />
<awc-format-bytes value="1200000000"></awc-format-bytes>
```

```jsx:react
import { AWCFormatBytes } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCFormatBytes value="12" />
    <br />
    <AWCFormatBytes value="1200" />
    <br />
    <AWCFormatBytes value="1200000" />
    <br />
    <AWCFormatBytes value="1200000000" />
  </>
);
```

### Formatting Bits

To get the value in bits, set the `unit` attribute to `bit`.

```html:preview
<awc-format-bytes value="12" unit="bit"></awc-format-bytes><br />
<awc-format-bytes value="1200" unit="bit"></awc-format-bytes><br />
<awc-format-bytes value="1200000" unit="bit"></awc-format-bytes><br />
<awc-format-bytes value="1200000000" unit="bit"></awc-format-bytes>
```

```jsx:react
import { AWCFormatBytes } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCFormatBytes value="12" unit="bit" />
    <br />
    <AWCFormatBytes value="1200" unit="bit" />
    <br />
    <AWCFormatBytes value="1200000" unit="bit" />
    <br />
    <AWCFormatBytes value="1200000000" unit="bit" />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html:preview
<awc-format-bytes value="12" lang="de"></awc-format-bytes><br />
<awc-format-bytes value="1200" lang="de"></awc-format-bytes><br />
<awc-format-bytes value="1200000" lang="de"></awc-format-bytes><br />
<awc-format-bytes value="1200000000" lang="de"></awc-format-bytes>
```

```jsx:react
import { AWCFormatBytes } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCFormatBytes value="12" lang="de" />
    <br />
    <AWCFormatBytes value="1200" lang="de" />
    <br />
    <AWCFormatBytes value="1200000" lang="de" />
    <br />
    <AWCFormatBytes value="1200000000" lang="de" />
  </>
);
```
