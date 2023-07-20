---
meta:
  title: Localization
  description: Discover how to localize Adeliom WebComponents with minimal effort.
---

# Localization

Components can be localized by importing the appropriate translation file and setting the desired [`lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) and/or [`dir` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir) on the `<html>` element. Here's an example that renders Adeliom WebComponents components in Spanish.

```html
<html lang="es">
  <head>
    <script type="module" src="/path/to/awc/dist/translations/es.js"></script>
  </head>

  <body>
    ...
  </body>
</html>
```

Through the magic of a mutation observer, changing the `lang` attribute will automatically update all localized components to use the new locale.

## Available Translations

Adeliom WebComponents ships with a number of translations. The default is English (US), which also serves as the fallback locale. As such, you do not need to import the English translation. To see a list of all available translations in the latest version, [refer to this directory](https://github.com/agence-adeliom/awc/tree/current/src/translations).

The location of translations depends on how you're consuming Adeliom WebComponents.

- If you're using the CDN, [import them from the CDN](https://www.jsdelivr.com/package/npm/@agence-adeliom/awc?path=%CDNDIR%%2Ftranslations)
- If you're using a bundler, import them from `@agence-adeliom/awc/%NPMDIR%/translations/[lang].js`

You do not need to load translations up front. You can import them dynamically even after updating the `lang` attribute. Once a translation is registered, localized components will update automatically.

```js
// Same as setting <html lang="de">
document.documentElement.lang = 'de';

// Import the translation
import('/path/to/awc/dist/translations/de.js');
```

### Translation Resolution

The locale set by `<html lang="...">` is the default locale for the document. If a country code is provided, e.g. `es-PE` for Peruvian Spanish, the localization library will resolve it like this:

1. Look for `es-PE`
2. Look for `es`
3. Fall back to `en`

Adeliom WebComponents uses English as a fallback to provide a better experience than rendering nothing or throwing an error.

### Submitting New Translations or Improvements

To contribute new translations or improvements to existing translations, please submit a pull request on GitHub. Translations are located in [`src/translations`](https://github.com/agence-adeliom/awc/blob/main/src/translations) and can be edited directly on GitHub if you don't want to clone the repo locally.

Regional translations are welcome! For example, if a German translation (`de`) exists it's perfectly acceptable to submit a German (Switzerland) (`de-CH`) translation.

If you have any questions, please start a [discussion](https://github.com/agence-adeliom/awc/discussions).

:::tip
Adeliom WebComponents provides a localization mechanism for component internals. This is not designed to be used as localization tool for your entire application. You should use a more appropriate tool such as [i18next](https://www.i18next.com/) if you need to localize content in your app.
:::

## Multiple Locales Per Page

You can use a different locale for an individual component by setting its `lang` and/or `dir` attributes. Here's a contrived example to demonstrate.

```html
<html lang="es">
  ...

  <body>
    <awc-button><!-- Spanish --></awc-button>
    <awc-button lang="ru"><!-- Russian --></awc-button>
  </body>
</html>
```

For performance reasons, the `lang` and `dir` attributes must be on the component itself, not on an ancestor element.

```html
<html lang="es">
  ...

  <body>
    <div lang="ru">
      <awc-button><!-- still in Spanish --></awc-button>
    </div>
  </body>
</html>
```

This limitation exists because there's no efficient way to determine the current locale of a given element in a DOM tree. I consider this a gap in the platform and [I've proposed a couple properties](https://github.com/whatwg/html/issues/7039) to make this possible.

## Creating Your Own Translations

You can provide your own translations if you have specific needs or if you don't want to wait for a translation to land upstream. The easiest way to do this is to copy `src/translations/en.ts` into your own project and translate the terms inside. When your translation is done, you can import it and use it just like a built-in translation.

Let's create a Spanish translation as an example. The following assumes you're using TypeScript, but you can also create translations with regular JavaScript.

```js
import { registerTranslation } from '@agence-adeliom/awc/dist/utilities/localize';
import type { Translation } from '@agence-adeliom/awc/dist/utilities/localize';

const translation: Translation = {
  $code: 'es',
  $name: 'Español',
  $dir: 'ltr',

  term1: '...',
  term2: '...',
  ...
};

registerTranslation(translation);

export default translation;
```

Once your translation has been compiled to JavaScript, import it and activate it like this.

```html
<html lang="es">
  <head>
    <script type="module" src="/path/to/es.js"></script>
  </head>

  <body>
    ...
  </body>
</html>
```

:::tip
If your translation isn't working, make sure you're using the same localize module when importing `registerTranslation`. If you're using a different module, your translation won't be recognized.
:::
