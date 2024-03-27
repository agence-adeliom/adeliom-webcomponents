import type { Preview, StoryContext } from '@storybook/web-components';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from './custom-elements.json';
import DocumentationTemplate from './template/DocumentationTemplate.mdx';
import prettify from 'esthetic';

import '../src/awc.ts';
import '../src/themes/light.css';
import '../src/themes/dark.css';
import './template/story.style.css';

import { setBasePath } from '../src/utilities/base-path.js';
import { withSource } from './wc-helper/code/withSource';
import AwcDocTheme from './AwcDocTheme';
import { register } from 'swiper/element/bundle';

register();

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
          [
            'Installation',
            'Usage',
            'Themes',
            'Customizing',
            'Form Controls',
            'Localization',
            'Figma',
            'Resources',
            ['Contributing & Support', 'Changelog']
          ],
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
        ignoreSelector: '#primary, .sbdocs-title, .sbdocs-subtitle, .sbdocs-preview *, .sbdocs-story *',
        unsafeTocbotOptions: {
          orderedList: false
        }
      },
      story: {
        inline: true
      },
      source: {
        format: 'lwc',
        language: 'html',
        transform: (code: string, _storyContext: StoryContext) => {
          code = code.replace(/=""/g, '');
          try {
            return prettify.format(code, {
              language: 'html',
              preset: 'prettier',
              correct: true,
              preserveLine: 1,
              markup: {
                preserveComment: false,
                attributeSort: true,
                lineBreakValue: 'force-align',
                preserveAttribute: true,
                attributeCasing: 'lowercase-name',
                forceAttributeValue: false
              }
            });
          } catch (e) {
            console.log(e, code);
            return code;
          }
        }
      }
    }
  }
};

export default preview;
