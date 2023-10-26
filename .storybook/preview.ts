import type { Preview, StoryContext } from '@storybook/web-components';
import { withThemeByDataAttribute } from '@storybook/addon-styling';
import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../dist/custom-elements.json';
import DocumentationTemplate from './template/DocumentationTemplate.mdx';
import { themes } from '@storybook/theming';

import '../src/awc.ts';
import '../src/themes/light.css';
import '../src/themes/dark.css';
import './template/story.style.css';

import { setBasePath } from '../src/utilities/base-path.js';
import prettify from '@liquify/prettify';
import { withSource } from './wc-helper/code/withSource';
import AwcTheme from './AwcTheme';
import AwcDocTheme from './AwcDocTheme';

setBasePath('/');
setCustomElementsManifest(customElements);

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark'
    },
    defaultTheme: 'light',
    attributeName: 'data-mode'
  }),
  withSource()
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'centered',
    backgrounds: { disable: true },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Welcome',
          'Getting started',
          ['Installation', 'Usage', 'Themes', 'Customizing', 'Form Controls', 'Localization'],
          'Design Tokens',
          ['Typography', 'Color', 'Spacing', 'Elevation', 'Border Radius', 'Transition', 'Z-Index', 'Other'],
          'Framework',
          'Tutorial',
          'Components',
          'Block',
          '*'
        ],
        locales: 'en-US'
      }
    },
    docs: {
      theme: AwcDocTheme,
      page: DocumentationTemplate,
      toc: {
        headingSelector: 'h2, h3',
        ignoreSelector: '#primary, .sbdocs-title, .sbdocs-subtitle',
        unsafeTocbotOptions: {
          orderedList: false
        }
      },
      story: {
        inline: true
      },
      source: {
        transform: (code: string, _storyContext: StoryContext) => {
          return (
            prettify.formatSync(code, {
              markup: {
                preserveComment: false
              }
            }) ?? code
          );
        }
      }
    }
  }
};

export default preview;
