---
meta:
  title: Integrating with Rails
  description: This page explains how to integrate Adeliom WebComponents with a Rails app.
---

# Integrating with Rails

This page explains how to integrate Adeliom WebComponents with a Rails app.

:::tip
This is a community-maintained document. Please [ask the community](/resources/community) if you have questions about this integration. You can also [suggest improvements](https://github.com/agence-adeliom/awc/blob/main/docs/tutorials/integrating-with-rails.md) to make it better.
:::

## Requirements

This integration has been tested with the following:

- Rails >= 6
- Node >= 12.10
- Webpacker >= 5

## Instructions

To get started using Adeliom WebComponents with Rails, the following packages must be installed.

```bash
yarn add @agence-adeliom/awc copy-webpack-plugin
```

### Importing the Default Theme

The next step is to import Adeliom WebComponents's default theme (stylesheet) in `app/javascript/stylesheets/application.scss`.

```css
@import '@agence-adeliom/awc/dist/themes/light';
@import '@agence-adeliom/awc/dist/themes/dark'; // Optional dark theme
```

Fore more details about themes, please refer to [Theme Basics](/getting-started/themes#theme-basics).

### Importing Required Scripts

After importing the theme, you'll need to import the JavaScript files for Adeliom WebComponents. Add the following code to `app/javascript/packs/application.js`.

```js
import '../stylesheets/application.scss'
import { setBasePath, AWCAlert, AWCAnimation, AWCButton, ... } from '@agence-adeliom/awc'

// ...

const rootUrl = document.currentScript.src.replace(/\/packs.*$/, '')

// Path to the assets folder (should be independent from the current script source path
// to work correctly in different environments)
setBasePath(rootUrl + '/packs/js/')
```

### webpack Config

Next we need to add Adeliom WebComponents's assets to the final build output. To do this, modify `config/webpack/environment.js` to look like this.

```js
const { environment } = require('@rails/webpacker');

// Adeliom WebComponents config
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

// Add awc assets to webpack's build process
environment.plugins.append(
  'CopyPlugin',
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, '../../node_modules/@agence-adeliom/awc/dist/assets'),
        to: path.resolve(__dirname, '../../public/packs/js/assets')
      }
    ]
  })
);

module.exports = environment;
```

### Adding Pack Tags

The final step is to add the corresponding `pack_tags` to the page. You should have the following `tags` in the `<head>` section of `app/views/layouts/application.html.erb`.

```html
<!doctype html>
<html>
  <head>
    <!-- ... -->

    <%= stylesheet_pack_tag 'application', media: 'all', 'data-turbolinks-track': 'reload' %> <%= javascript_pack_tag
    'application', 'data-turbolinks-track': 'reload' %>
  </head>
  <body>
    <%= yield %>
  </body>
</html>
```

Now you can start using Adeliom WebComponents components with Rails!

## Additional Resources

- There is a third-party [example repo](https://github.com/ParamagicDev/rails-shoelace-example), courtesy of [ParamagicDev](https://github.com/ParamagicDev) available to help you get started.
- If you would like to avoid repeating this process, check out the associated [Railsbyte for Adeliom WebComponents](https://railsbytes.com/templates/X8BsEb).
