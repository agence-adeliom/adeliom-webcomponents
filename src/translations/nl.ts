import { registerTranslation } from '../utilities/localize.js';
import prettyBytes from 'pretty-bytes';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'nl',
  $name: 'Nederlands',
  $dir: 'ltr',

  browseFiles: 'Blader door bestanden',
  carousel: 'Carrousel',
  clearEntry: 'Invoer wissen',
  close: 'Sluiten',
  copied: 'Gekopieerd',
  copy: 'Kopiëren',
  currentValue: 'Huidige waarde',
  dragDrop: 'Drag & drop om te uploaden',
  fileTypeNotAccepted: accept => `Bestandstype niet geaccepteerd, alleen ${accept} bestanden zijn toegestaan`,
  fileSizeExceeded: size => `Bestandsgrootte overschrijdt ${prettyBytes(size, { locale: 'nl' })}`,
  error: 'Fout',
  goToSlide: (slide, count) => `Ga naar dia ${slide} van ${count}`,
  hidePassword: 'Verberg wachtwoord',
  loading: 'Laden',
  files: 'Bestanden :',
  maxFiles: 'Maximaal aantal bestanden bereikt',
  noMultipleFiles: 'Meerdere bestanden zijn niet toegestaan',
  nextSlide: 'Volgende dia',
  numOptionsSelected: num => {
    if (num === 0) return 'Geen opties geselecteerd';
    if (num === 1) return '1 optie geselecteerd';
    return `${num} opties geselecteerd`;
  },
  previousSlide: 'Vorige dia',
  previous: 'Vorige',
  next: 'Volgende',
  progress: 'Voortgang',
  remove: 'Verwijderen',
  resize: 'Formaat wijzigen',
  scrollToEnd: 'Scroll naar het einde',
  scrollToStart: 'Scroll naar het begin',
  selectAColorFromTheScreen: 'Selecteer een kleur van het scherm',
  showPassword: 'Toon wachtwoord',
  slideNum: slide => `Dia ${slide}`,
  toggleColorFormat: 'Kleurformaat wisselen'
};

registerTranslation(translation);

export default translation;
