import { registerTranslation } from '../utilities/localize.js';
import prettyBytes from 'pretty-bytes';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'pl',
  $name: 'Polski',
  $dir: 'ltr',

  browseFiles: 'Przeglądaj pliki',
  carousel: 'Karuzela',
  clearEntry: 'Wyczyść wpis',
  close: 'Zamknij',
  copied: 'Skopiowano',
  copy: 'Kopiuj',
  currentValue: 'Aktualna wartość',
  dragDrop: 'Przeciągnij i upuść, aby przesłać',
  fileTypeNotAccepted: accept => `Typ pliku nie jest akceptowany, dozwolone są tylko pliki ${accept}`,
  fileSizeExceeded: size => `Rozmiar pliku przekracza ${prettyBytes(size, { locale: 'pl' })}`,
  error: 'Błąd',
  goToSlide: (slide, count) => `Przejdź do slajdu ${slide} z ${count}`,
  hidePassword: 'Ukryj hasło',
  loading: 'Ładowanie',
  files: 'Pliki :',
  maxFiles: 'Osiągnięto maksymalną liczbę plików',
  noMultipleFiles: 'Nie są dozwolone multiple pliki',
  nextSlide: 'Następny slajd',
  numOptionsSelected: num => {
    if (num === 0) return 'Brak wybranych opcji';
    if (num === 1) return '1 opcja wybrana';
    return `${num} opcji wybranych`;
  },
  previousSlide: 'Poprzedni slajd',
  previous: 'Poprzedni',
  next: 'Następny',
  progress: 'Postęp',
  remove: 'Usuń',
  resize: 'Zmień rozmiar',
  scrollToEnd: 'Przewiń do końca',
  scrollToStart: 'Przewiń do początku',
  selectAColorFromTheScreen: 'Wybierz kolor z ekranu',
  showPassword: 'Pokaż hasło',
  slideNum: slide => `Slajd ${slide}`,
  toggleColorFormat: 'Przełącz format koloru'
};

registerTranslation(translation);

export default translation;
