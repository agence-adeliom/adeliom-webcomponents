---
meta:
  title: Relative Time
  description: Outputs a localized time phrase relative to the current date and time.
layout: component
---

Localization is handled by the browser's [`Intl.RelativeTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat). No language packs are required.

```html:preview
<!-- Adeliom WebComponents 2 release date 🎉 -->
<awc-relative-time date="2020-07-15T09:17:00-04:00"></awc-relative-time>
```

```jsx:react
import { AWCRelativeTime } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => <AWCRelativeTime date="2020-07-15T09:17:00-04:00" />;
```

The `date` attribute determines when the date/time is calculated from. It must be a string that [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript.

:::tip
When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients.
:::

## Examples

### Keeping Time in Sync

Use the `sync` attribute to update the displayed value automatically as time passes.

```html:preview
<div class="relative-time-sync">
  <awc-relative-time sync></awc-relative-time>
</div>

<script>
  const container = document.querySelector('.relative-time-sync');
  const relativeTime = container.querySelector('awc-relative-time');

  relativeTime.date = new Date(new Date().getTime() - 60000);
</script>
```

```jsx:react
import { AWCRelativeTime } from '@agence-adeliom/awc/%NPMDIR%/react';

const date = new Date(new Date().getTime() - 60000);

const App = () => <AWCRelativeTime date={date} sync />;
```

### Formatting Styles

You can change how the time is displayed using the `format` attribute. Note that some locales may display the same values for `narrow` and `short` formats.

```html:preview
<awc-relative-time date="2020-07-15T09:17:00-04:00" format="narrow"></awc-relative-time><br />
<awc-relative-time date="2020-07-15T09:17:00-04:00" format="short"></awc-relative-time><br />
<awc-relative-time date="2020-07-15T09:17:00-04:00" format="long"></awc-relative-time>
```

```jsx:react
import { AWCRelativeTime } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    <AWCRelativeTime date="2020-07-15T09:17:00-04:00" format="narrow" />
    <br />
    <AWCRelativeTime date="2020-07-15T09:17:00-04:00" format="short" />
    <br />
    <AWCRelativeTime date="2020-07-15T09:17:00-04:00" format="long" />
  </>
);
```

### Localization

Use the `lang` attribute to set the desired locale.

```html:preview
English: <awc-relative-time date="2020-07-15T09:17:00-04:00" lang="en-US"></awc-relative-time><br />
Chinese: <awc-relative-time date="2020-07-15T09:17:00-04:00" lang="zh-CN"></awc-relative-time><br />
German: <awc-relative-time date="2020-07-15T09:17:00-04:00" lang="de"></awc-relative-time><br />
Greek: <awc-relative-time date="2020-07-15T09:17:00-04:00" lang="el"></awc-relative-time><br />
Russian: <awc-relative-time date="2020-07-15T09:17:00-04:00" lang="ru"></awc-relative-time>
```

```jsx:react
import { AWCRelativeTime } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => (
  <>
    English: <AWCRelativeTime date="2020-07-15T09:17:00-04:00" lang="en-US" />
    <br />
    Chinese: <AWCRelativeTime date="2020-07-15T09:17:00-04:00" lang="zh-CN" />
    <br />
    German: <AWCRelativeTime date="2020-07-15T09:17:00-04:00" lang="de" />
    <br />
    Greek: <AWCRelativeTime date="2020-07-15T09:17:00-04:00" lang="el" />
    <br />
    Russian: <AWCRelativeTime date="2020-07-15T09:17:00-04:00" lang="ru" />
  </>
);
```
