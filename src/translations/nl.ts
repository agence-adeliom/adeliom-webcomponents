import { registerTranslation } from '../utilities/localize.js';
import prettyBytes from 'pretty-bytes';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'nl',
  $name: 'Nederlands',
  $dir: 'ltr',

  browseFiles: 'Blader door bestanden',
  clearEntry: 'Invoer wissen',
  close: 'Sluiten',
  copied: 'Gekopieerd',
  copy: 'Kopiëren',
  currentValue: 'Huidige waarde',
  dragDrop: 'Drag & drop om te uploaden',
  fileTypeNotAccepted: accept => `Bestandstype niet geaccepteerd, alleen ${accept} bestanden zijn toegestaan`,
  fileSizeExceeded: size => `Bestandsgrootte overschrijdt ${prettyBytes(size, { locale: 'nl' })}`,
  error: 'Fout',
  hidePassword: 'Verberg wachtwoord',
  loading: 'Laden',
  files: 'Bestanden :',
  maxFiles: 'Maximaal aantal bestanden bereikt',
  noMultipleFiles: 'Meerdere bestanden zijn niet toegestaan',
  numOptionsSelected: num => {
    if (num === 0) return 'Geen opties geselecteerd';
    if (num === 1) return '1 optie geselecteerd';
    return `${num} opties geselecteerd`;
  },
  previous: 'Vorige',
  next: 'Volgende',
  progress: 'Voortgang',
  remove: 'Verwijderen',
  resize: 'Formaat wijzigen',
  scrollToEnd: 'Scroll naar het einde',
  scrollToStart: 'Scroll naar het begin',
  selectAColorFromTheScreen: 'Selecteer een kleur van het scherm',
  showPassword: 'Toon wachtwoord',
  toggleColorFormat: 'Kleurformaat wisselen',
  zoomIn: '',
  zoomOut: '',
  enterFullscreen: '',
  exitFullscreen: '',
  locateMe: '',
  metersUnit: '',
  feetUnit: '',
  locatePopup: '',
  locateOutsideMapBounds: ''
};

registerTranslation(translation);

export default translation;
