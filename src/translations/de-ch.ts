import { registerTranslation } from '../utilities/localize.js';
import baseTranslation from './de.js';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  ...baseTranslation,
  $code: 'de-CH',
  $name: 'Deutsch (Schweiz)',

  close: 'Schliessen',
  previous: 'Vorherige',
  next: 'Nächste',
  resize: 'Grösse ändern'
};

registerTranslation(translation);

export default translation;
