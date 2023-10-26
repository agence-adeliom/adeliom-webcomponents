import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  brandTitle: 'Adeliom Web Components',
  brandUrl: 'https://awc.a-dev.cloud',
  brandImage: '/assets/images/wordmark.svg',
  brandTarget: '_self',
  colorPrimary: '#C377FF',
  colorSecondary: '#EC2E69',

  // UI
  appBg: '#1F1F1F',
  appContentBg: '#1F1F1F',
  appBorderColor: '#27272a',
  appBorderRadius: 4,

  // Text colors
  textColor: '#FFFFFF',
  textInverseColor: '#0A0A0A',

  // Toolbar default and active colors
  barTextColor: '#FFFFFF',
  barSelectedColor: '#FF6897',
  barBg: '#1F1F1F',

  // Form colors
  inputBg: '#000000',
  inputBorder: '#27272a',
  inputTextColor: '#e4e4e7',
  inputBorderRadius: 0
});
