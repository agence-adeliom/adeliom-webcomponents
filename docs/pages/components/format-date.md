---
meta:
  title: Format Date
  description: Formats a date/time using the specified locale and options.
layout: component
---

Localization is handled by the browser's [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). No language packs are required.

```html:preview
<!-- Adeliom WebComponents 2 release date 🎉 -->
<awc-format-date date="2020-07-15T09:17:00-04:00"></awc-format-date>
```

```jsx:react
import { AWCFormatDate } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => <AWCFormatDate date="2020-07-15T09:17:00-04:00" />;
```

The `date` attribute determines the date/time to use when formatting. It must be a string that [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript. If omitted, the current date/time will be assumed.

:::tip
When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients.
:::

## Examples

### Date & Time Formatting

Formatting options are based on those found in the [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). When formatting options are provided, the date/time will be formatted according to those values. When no formatting options are provided, a localized, numeric date will be displayed instead.

```html:preview
<!-- Human-readable date -->
<awc-format-date month="long" day="numeric" year="numeric"></awc-format-date><br />

<!-- Time -->
<awc-format-date hour="numeric" minute="numeric"></awc-format-date><br />

<!-- Weekday -->
<awc-format-date weekday="long"></awc-format-date><br />

<!-- Month -->
<awc-format-date month="long"></awc-format-date><br />

<!-- Year -->
<awc-format-date year="numeric"></awc-format-date><br />

<!-- No formatting options -->
<awc-format-date></awc-format-date>
```

```jsx:react
import { AWCFormatDate } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    {/* Human-readable date */}
    <AWCFormatDate month="long" day="numeric" year="numeric" />
    <br />

    {/* Time */}
    <AWCFormatDate hour="numeric" minute="numeric" />
    <br />

    {/* Weekday */}
    <AWCFormatDate weekday="long" />
    <br />

    {/* Month */}
    <AWCFormatDate month="long" />
    <br />

    {/* Year */}
    <AWCFormatDate year="numeric" />
    <br />

    {/* No formatting options */}
    <AWCFormatDate />
  </>
);
```

### Hour Formatting

By default, the browser will determine whether to use 12-hour or 24-hour time. To force one or the other, set the `hour-format` attribute to `12` or `24`.

```html:preview
<awc-format-date hour="numeric" minute="numeric" hour-format="12"></awc-format-date><br />
<awc-format-date hour="numeric" minute="numeric" hour-format="24"></awc-format-date>
```

```jsx:react
import { AWCFormatDate } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    <AWCFormatDate hour="numeric" minute="numeric" hour-format="12" />
    <br />
    <AWCFormatDate hour="numeric" minute="numeric" hour-format="24" />
  </>
);
```

### Localization

Use the `lang` attribute to set the date/time formatting locale.

```html:preview
English: <awc-format-date lang="en"></awc-format-date><br />
French: <awc-format-date lang="fr"></awc-format-date><br />
Russian: <awc-format-date lang="ru"></awc-format-date>
```

```jsx:react
import { AWCFormatDate } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    English: <AWCFormatDate lang="en" />
    <br />
    French: <AWCFormatDate lang="fr" />
    <br />
    Russian: <AWCFormatDate lang="ru" />
  </>
);
```
