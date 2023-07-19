---
meta:
  title: Format Number
  description: Formats a number using the specified locale and options.
layout: component
---

Localization is handled by the browser's [`Intl.NumberFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). No language packs are required.

```html:preview
<div class="format-number-overview">
  <awc-format-number value="1000"></awc-format-number>
  <br /><br />
  <awc-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></awc-input>
</div>

<script>
  const container = document.querySelector('.format-number-overview');
  const formatter = container.querySelector('awc-format-number');
  const input = container.querySelector('awc-input');

  input.addEventListener('awc-input', () => (formatter.value = input.value || 0));
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import { AWCFormatNumber, AWCInput } from '@agence-adeliom/awc/dist/react';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      <AWCFormatNumber value={value} />
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

### Percentages

To get the value as a percent, set the `type` attribute to `percent`.

```html:preview
<awc-format-number type="percent" value="0"></awc-format-number><br />
<awc-format-number type="percent" value="0.25"></awc-format-number><br />
<awc-format-number type="percent" value="0.50"></awc-format-number><br />
<awc-format-number type="percent" value="0.75"></awc-format-number><br />
<awc-format-number type="percent" value="1"></awc-format-number>
```

```jsx:react
import { AWCFormatNumber } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCFormatNumber type="percent" value={0} />
    <br />
    <AWCFormatNumber type="percent" value={0.25} />
    <br />
    <AWCFormatNumber type="percent" value={0.5} />
    <br />
    <AWCFormatNumber type="percent" value={0.75} />
    <br />
    <AWCFormatNumber type="percent" value={1} />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html:preview
English: <awc-format-number value="2000" lang="en" minimum-fraction-digits="2"></awc-format-number><br />
German: <awc-format-number value="2000" lang="de" minimum-fraction-digits="2"></awc-format-number><br />
Russian: <awc-format-number value="2000" lang="ru" minimum-fraction-digits="2"></awc-format-number>
```

```jsx:react
import { AWCFormatNumber } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    English: <AWCFormatNumber value="2000" lang="en" minimum-fraction-digits="2" />
    <br />
    German: <AWCFormatNumber value="2000" lang="de" minimum-fraction-digits="2" />
    <br />
    Russian: <AWCFormatNumber value="2000" lang="ru" minimum-fraction-digits="2" />
  </>
);
```

### Currency

To format a number as a monetary value, set the `type` attribute to `currency` and set the `currency` attribute to the desired ISO 4217 currency code. You should also specify `lang` to ensure the the number is formatted correctly for the target locale.

```html:preview
<awc-format-number type="currency" currency="USD" value="2000" lang="en-US"></awc-format-number><br />
<awc-format-number type="currency" currency="GBP" value="2000" lang="en-GB"></awc-format-number><br />
<awc-format-number type="currency" currency="EUR" value="2000" lang="de"></awc-format-number><br />
<awc-format-number type="currency" currency="RUB" value="2000" lang="ru"></awc-format-number><br />
<awc-format-number type="currency" currency="CNY" value="2000" lang="zh-cn"></awc-format-number>
```

```jsx:react
import { AWCFormatNumber } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCFormatNumber type="currency" currency="USD" value="2000" lang="en-US" />
    <br />
    <AWCFormatNumber type="currency" currency="GBP" value="2000" lang="en-GB" />
    <br />
    <AWCFormatNumber type="currency" currency="EUR" value="2000" lang="de" />
    <br />
    <AWCFormatNumber type="currency" currency="RUB" value="2000" lang="ru" />
    <br />
    <AWCFormatNumber type="currency" currency="CNY" value="2000" lang="zh-cn" />
  </>
);
```
