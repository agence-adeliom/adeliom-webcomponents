import type { StorybookConfig } from '@storybook/web-components-vite';
import * as path from 'path';
import constant from './constant';
import { visit } from 'unist-util-visit';
import escapeStringRegexp from 'escape-string-regexp';
import remarkGfm from 'remark-gfm';

const interpolateVariable = ({ replacements = {}, prefix = '%', suffix = '%' }) => {
  return (tree, file) => {
    const attachPrefixSuffix = str => (prefix || '') + str + (suffix || '');

    const stripPrefixSuffix = str => {
      str = prefix ? str.replace(RegExp(`^${prefix}`), '') : str;
      str = suffix ? str.replace(RegExp(`${suffix}$`), '') : str;
      return str;
    };

    const regexp = RegExp(
      '(' +
        Object.keys(replacements)
          .map(key => escapeStringRegexp(attachPrefixSuffix(key)))
          .join('|') +
        ')',
      'g'
    );

    const replacer = (_match, name) => {
      return replacements[stripPrefixSuffix(name)];
    };

    // Go through all text, html, code, inline code, and links.
    visit(tree, ['text', 'html', 'code', 'inlineCode', 'link'], node => {
      if (node.type === 'link') {
        const processedText = node.url.replace(regexp, replacer);
        node.url = processedText;
      } else {
        const processedText = node.value.replace(regexp, replacer);
        node.value = processedText;
      }
    });

    return tree;
  };
};

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        backgrounds: false,
        docs: false
      }
    },
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [
              remarkGfm,
              [
                interpolateVariable,
                {
                  replacements: {
                    NPMDIR: constant.NPMDIR,
                    CDNDIR: constant.CDNDIR,
                    VERSION: constant.VERSION
                  }
                }
              ]
            ]
          }
        }
      }
    },
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-outline',
    '@storybook/addon-styling',
    'adeliom/google-tag-manager',
    './wc-helper/code/manager.ts'
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {
      builder: {
        viteConfigPath: path.resolve(__dirname, 'vite.config.js')
      }
    }
  },
  staticDirs: ['./static'],
  core: {
    disableTelemetry: true
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation'
  }
};
export default config;
