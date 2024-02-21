import { registerTranslation } from '../utilities/localize.js';
import prettyBytes from 'pretty-bytes';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'sv',
  $name: 'Svenska',
  $dir: 'ltr',

  browseFiles: 'Bläddra bland filer',
  clearEntry: 'Rensa inmatning',
  close: 'Stäng',
  copied: 'Kopierad',
  copy: 'Kopiera',
  currentValue: 'Aktuellt värde',
  dragDrop: 'Dra och släpp för att ladda upp',
  fileTypeNotAccepted: accept => `Filtypen accepteras inte, endast ${accept} filer är tillåtna`,
  fileSizeExceeded: size => `Filstorleken överstiger ${prettyBytes(size, { locale: 'sv' })}`,
  error: 'Fel',
  hidePassword: 'Dölj lösenord',
  loading: 'Laddar',
  files: 'Filer :',
  maxFiles: 'Maximalt antal filer uppnått',
  noMultipleFiles: 'Flera filer är inte tillåtna',
  numOptionsSelected: num => {
    if (num === 0) return 'Inga alternativ valda';
    if (num === 1) return '1 alternativ valt';
    return `${num} alternativ valda`;
  },
  previous: 'Föregående',
  next: 'Nästa',
  progress: 'Framsteg',
  remove: 'Ta bort',
  resize: 'Ändra storlek',
  scrollToEnd: 'Skrolla till slutet',
  scrollToStart: 'Skrolla till början',
  selectAColorFromTheScreen: 'Välj en färg från skärmen',
  showPassword: 'Visa lösenord',
  toggleColorFormat: 'Växla färgformat',
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
