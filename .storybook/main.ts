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
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-docs',
      options: {
        csfPluginOptions: null,
        jsxOptions: {},
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [
              [
                interpolateVariable,
                {
                  replacements: {
                    NPMDIR: 'dist',
                    CDNDIR: 'dist',
                    VERSION: constant.VERSION
                  }
                }
              ]
            ]
          }
        }
      }
    },
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-controls',
    '@storybook/addon-backgrounds',
    '@storybook/addon-toolbars',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
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
    autodocs: 'tag'
  }
};
export default config;
