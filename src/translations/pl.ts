import { registerTranslation } from '../utilities/localize.js';
import prettyBytes from 'pretty-bytes';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'pl',
  $name: 'Polski',
  $dir: 'ltr',

  browseFiles: 'Przeglądaj pliki',
  clearEntry: 'Wyczyść wpis',
  close: 'Zamknij',
  copied: 'Skopiowano',
  copy: 'Kopiuj',
  currentValue: 'Aktualna wartość',
  dragDrop: 'Przeciągnij i upuść, aby przesłać',
  fileTypeNotAccepted: accept => `Typ pliku nie jest akceptowany, dozwolone są tylko pliki ${accept}`,
  fileSizeExceeded: size => `Rozmiar pliku przekracza ${prettyBytes(size, { locale: 'pl' })}`,
  error: 'Błąd',
  hidePassword: 'Ukryj hasło',
  loading: 'Ładowanie',
  files: 'Pliki :',
  maxFiles: 'Osiągnięto maksymalną liczbę plików',
  noMultipleFiles: 'Nie są dozwolone multiple pliki',
  numOptionsSelected: num => {
    if (num === 0) return 'Brak wybranych opcji';
    if (num === 1) return '1 opcja wybrana';
    return `${num} opcji wybranych`;
  },
  previous: 'Poprzedni',
  next: 'Następny',
  progress: 'Postęp',
  remove: 'Usuń',
  resize: 'Zmień rozmiar',
  scrollToEnd: 'Przewiń do końca',
  scrollToStart: 'Przewiń do początku',
  selectAColorFromTheScreen: 'Wybierz kolor z ekranu',
  showPassword: 'Pokaż hasło',
  toggleColorFormat: 'Przełącz format koloru',
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
