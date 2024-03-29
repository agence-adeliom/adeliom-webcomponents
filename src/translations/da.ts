import { registerTranslation } from '../utilities/localize.js';
import prettyBytes from 'pretty-bytes';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'da',
  $name: 'Dansk',
  $dir: 'ltr',

  browseFiles: 'Gennemse filer',
  clearEntry: 'Ryd indtastning',
  close: 'Luk',
  copied: 'Kopieret',
  copy: 'Kopier',
  currentValue: 'Nuværende værdi',
  dragDrop: 'Træk og slip for at uploade',
  fileTypeNotAccepted: accept => `Filtypen er ikke accepteret, kun ${accept} filer er tilladt`,
  fileSizeExceeded: size => `Filstørrelsen overskrider ${prettyBytes(size, { locale: 'da' })}`,
  error: 'Fejl',
  hidePassword: 'Skjul adgangskode',
  loading: 'Indlæser',
  files: 'Filer :',
  maxFiles: 'Maksimalt antal filer nået',
  noMultipleFiles: 'Flere filer er ikke tilladt',
  numOptionsSelected: (num: number) => {
    if (num === 0) return 'Ingen valgt';
    if (num === 1) return '1 valgt';
    return `${num} valgt`;
  },
  previous: 'Forrige',
  next: 'Næste',
  progress: 'Fremgang',
  remove: 'Fjern',
  resize: 'Ændr størrelse',
  scrollToEnd: 'Rul til slutningen',
  scrollToStart: 'Rul til start',
  selectAColorFromTheScreen: 'Vælg en farve fra skærmen',
  showPassword: 'Vis adgangskode',
  toggleColorFormat: 'Skift farveformat',
  zoomIn: 'Zoom ind',
  zoomOut: 'Zoom ud',
  enterFullscreen: 'Indtast i fuld skærm',
  exitFullscreen: 'Forlad fuld skærm',
  locateMe: 'Find mig',
  metersUnit: 'meter',
  feetUnit: 'fod',
  locatePopup: 'Du er i {distance} {unit} fra dette punkt',
  locateOutsideMapBounds: 'Du ser i forvejen for dette punkt'
};

registerTranslation(translation);

export default translation;
