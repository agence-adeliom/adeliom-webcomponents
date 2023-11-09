import { registerTranslation } from '../utilities/localize.js';
import baseTranslation from './en.js';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  ...baseTranslation,
  $code: 'en-GB',
  $name: 'English (United Kingdom)',

  selectAColorFromTheScreen: 'Select a colour from the screen',
  toggleColorFormat: 'Toggle colour format',
  previous: 'Previous',
  next: 'Next',
};

registerTranslation(translation);

export default translation;
