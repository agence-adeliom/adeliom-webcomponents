import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  brandTitle: 'Adeliom Web Components',
  brandUrl: 'https://awc.a-dev.cloud',
  brandImage: 'https://awc.a-dev.cloud/assets/images/logo.svg',
  brandTarget: '_self',
  colorPrimary: '#f175bc',
  colorSecondary: '#d72b80',

  // UI
  appBg: '#000000',
  appContentBg: '#000000',
  appBorderColor: '#27272a',
  appBorderRadius: 4,

  // Text colors
  textColor: '#e4e4e7',
  textInverseColor: '#000000',

  // Toolbar default and active colors
  barTextColor: '#e4e4e7',
  barSelectedColor: '#f175bc',
  barBg: '#000000',

  // Form colors
  inputBg: '#000000',
  inputBorder: '#27272a',
  inputTextColor: '#e4e4e7',
  inputBorderRadius: 0
});
