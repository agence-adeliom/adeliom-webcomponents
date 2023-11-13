import { registerTranslation } from '../utilities/localize.js';
import prettyBytes from 'pretty-bytes';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'sv',
  $name: 'Svenska',
  $dir: 'ltr',

  browseFiles: 'Bläddra bland filer',
  carousel: 'Karusell',
  clearEntry: 'Rensa inmatning',
  close: 'Stäng',
  copied: 'Kopierad',
  copy: 'Kopiera',
  currentValue: 'Aktuellt värde',
  dragDrop: 'Dra och släpp för att ladda upp',
  fileTypeNotAccepted: accept => `Filtypen accepteras inte, endast ${accept} filer är tillåtna`,
  fileSizeExceeded: size => `Filstorleken överstiger ${prettyBytes(size, { locale: 'sv' })}`,
  error: 'Fel',
  goToSlide: (slide, count) => `Gå till bild ${slide} av ${count}`,
  hidePassword: 'Dölj lösenord',
  loading: 'Laddar',
  files: 'Filer :',
  maxFiles: 'Maximalt antal filer uppnått',
  noMultipleFiles: 'Flera filer är inte tillåtna',
  nextSlide: 'Nästa bild',
  numOptionsSelected: num => {
    if (num === 0) return 'Inga alternativ valda';
    if (num === 1) return '1 alternativ valt';
    return `${num} alternativ valda`;
  },
  previousSlide: 'Föregående bild',
  previous: 'Föregående',
  next: 'Nästa',
  progress: 'Framsteg',
  remove: 'Ta bort',
  resize: 'Ändra storlek',
  scrollToEnd: 'Skrolla till slutet',
  scrollToStart: 'Skrolla till början',
  selectAColorFromTheScreen: 'Välj en färg från skärmen',
  showPassword: 'Visa lösenord',
  slideNum: slide => `Bild ${slide}`,
  toggleColorFormat: 'Växla färgformat'
};

registerTranslation(translation);

export default translation;
