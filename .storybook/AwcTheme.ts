import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  brandTitle: 'Adeliom WebComponents',
  brandUrl: 'https://webcomponents.adeliom.io',
  brandImage: '/assets/android-chrome-512x512.png',
  brandTarget: '_self',
  colorPrimary: '#C377FF',
  colorSecondary: '#EC2E69',

  // UI
  appBg: '#060606',
  appContentBg: '#060606',
  appBorderColor: '#27272a',
  appBorderRadius: 4,

  // Text colors
  textColor: '#FFFFFF',
  textInverseColor: '#0A0A0A',

  // Toolbar default and active colors
  barTextColor: '#FFFFFF',
  barSelectedColor: '#FF6897',
  barBg: '#060606',

  // Form colors
  inputBg: '#000000',
  inputBorder: '#27272a',
  inputTextColor: '#e4e4e7',
  inputBorderRadius: 0
});
