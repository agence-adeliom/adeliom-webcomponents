import { registerTranslation } from '../utilities/localize.js';
import prettyBytes from 'pretty-bytes';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'da',
  $name: 'Dansk',
  $dir: 'ltr',

  browseFiles: 'Gennemse filer',
  carousel: 'Karrusel',
  clearEntry: 'Ryd indtastning',
  close: 'Luk',
  copied: 'Kopieret',
  copy: 'Kopier',
  currentValue: 'Nuværende værdi',
  dragDrop: 'Træk og slip for at uploade',
  fileTypeNotAccepted: accept => `Filtypen er ikke accepteret, kun ${accept} filer er tilladt`,
  fileSizeExceeded: size => `Filstørrelsen overskrider ${prettyBytes(size, { locale: 'da' })}`,
  error: 'Fejl',
  goToSlide: (slide, count) => `Gå til dias ${slide} af ${count}`,
  hidePassword: 'Skjul adgangskode',
  loading: 'Indlæser',
  files: 'Filer :',
  maxFiles: 'Maksimalt antal filer nået',
  noMultipleFiles: 'Flere filer er ikke tilladt',
  nextSlide: 'Næste slide',
  numOptionsSelected: (num: number) => {
    if (num === 0) return 'Ingen valgt';
    if (num === 1) return '1 valgt';
    return `${num} valgt`;
  },
  previousSlide: 'Forrige dias',
  previous: 'Forrige',
  next: 'Næste',
  progress: 'Fremgang',
  remove: 'Fjern',
  resize: 'Ændr størrelse',
  scrollToEnd: 'Rul til slutningen',
  scrollToStart: 'Rul til start',
  selectAColorFromTheScreen: 'Vælg en farve fra skærmen',
  showPassword: 'Vis adgangskode',
  slideNum: slide => `Slide ${slide}`,
  toggleColorFormat: 'Skift farveformat'
};

registerTranslation(translation);

export default translation;
