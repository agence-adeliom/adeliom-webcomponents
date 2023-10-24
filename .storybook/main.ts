import type { StorybookConfig } from '@storybook/web-components-vite';
import * as path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
    './wc-helper/code/manager.ts',
    '@storybook/addon-mdx-gfm'
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
