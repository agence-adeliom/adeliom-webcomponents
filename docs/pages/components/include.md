---
meta:
  title: Include
  description: Includes give you the power to embed external HTML files into the page.
layout: component
---

Included files are asynchronously requested using `window.fetch()`. Requests are cached, so the same file can be included multiple times, but only one request will be made.

The included content will be inserted into the `<awc-include>` element's default slot so it can be easily accessed and styled through the light DOM.

```html:preview
<awc-include src="https://awc.a-dev.cloud/assets/examples/include.html"></awc-include>
```

```jsx:react
import { AWCInclude } from '@agence-adeliom/awc/%NPMDIR%/react';

const App = () => <AWCInclude src="https://awc.a-dev.cloud/assets/examples/include.html" />;
```

## Examples

### Listening for Events

When an include file loads successfully, the `awc-load` event will be emitted. You can listen for this event to add custom loading logic to your includes.

If the request fails, the `awc-error` event will be emitted. In this case, `event.detail.status` will contain the resulting HTTP status code of the request, e.g. 404 (not found).

```html
<awc-include src="https://awc.a-dev.cloud/assets/examples/include.html"></awc-include>

<script>
  const include = document.querySelector('awc-include');

  include.addEventListener('awc-load', event => {
    if (event.eventPhase === Event.AT_TARGET) {
      console.log('Success');
    }
  });

  include.addEventListener('awc-error', event => {
    if (event.eventPhase === Event.AT_TARGET) {
      console.log('Error', event.detail.status);
    }
  });
</script>
```
