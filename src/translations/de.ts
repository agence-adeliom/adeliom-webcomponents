import { registerTranslation } from '../utilities/localize.js';
import prettyBytes from 'pretty-bytes';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'de',
  $name: 'Deutsch',
  $dir: 'ltr',

  browseFiles: 'Dateien durchsuchen',
  clearEntry: 'Eingabe löschen',
  close: 'Schließen',
  copied: 'Kopiert',
  copy: 'Kopieren',
  currentValue: 'Aktueller Wert',
  dragDrop: 'Zum Hochladen ziehen und ablegen',
  fileTypeNotAccepted: accept => `Dateityp wird nicht akzeptiert, nur ${accept} Dateien sind erlaubt`,
  fileSizeExceeded: size => `Dateigröße überschreitet ${prettyBytes(size, { locale: 'de' })}`,
  error: 'Fehler',
  hidePassword: 'Passwort verbergen',
  loading: 'Wird geladen',
  files: 'Dateien :',
  maxFiles: 'Maximale Anzahl an Dateien erreicht',
  noMultipleFiles: 'Mehrere Dateien sind nicht erlaubt',
  numOptionsSelected: num => {
    if (num === 0) return 'Keine Optionen ausgewählt';
    if (num === 1) return '1 Option ausgewählt';
    return `${num} Optionen ausgewählt`;
  },
  previous: 'Vorherige',
  next: 'Nächste',
  progress: 'Fortschritt',
  remove: 'Entfernen',
  resize: 'Größe ändern',
  scrollToEnd: 'Zum Ende scrollen',
  scrollToStart: 'Zum Anfang scrollen',
  selectAColorFromTheScreen: 'Farbe vom Bildschirm auswählen',
  showPassword: 'Passwort anzeigen',
  toggleColorFormat: 'Farbformat umschalten',
  zoomIn: 'Vergroß',
  zoomOut: 'Verkleinern',
  enterFullscreen: 'Vollbildmodus',
  exitFullscreen: 'Vollbildmodus verlassen',
  locateMe: 'Meine Position',
  metersUnit: 'meters',
  feetUnit: 'feet',
  locatePopup: 'Sie sind innerhalb {distance} {unit} von diesem Punkt',
  locateOutsideMapBounds: 'Sie scheinen außerhalb der Karten Grenzen zu sein'
};

registerTranslation(translation);

export default translation;
