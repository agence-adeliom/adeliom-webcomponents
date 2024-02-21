import { registerTranslation } from '../utilities/localize.js';
import prettyBytes from 'pretty-bytes';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'hu',
  $name: 'Magyar',
  $dir: 'ltr',

  browseFiles: 'Fájlok böngészése',
  clearEntry: 'Bejegyzés törlése',
  close: 'Bezárás',
  copied: 'Másolva',
  copy: 'Másolás',
  currentValue: 'Aktuális érték',
  dragDrop: 'Húzd és dobd a feltöltéshez',
  fileTypeNotAccepted: accept => `A fájltípus nem engedélyezett, csak ${accept} fájlok engedélyezettek`,
  fileSizeExceeded: size => `A fájlméret meghaladja a ${prettyBytes(size, { locale: 'hu' })} méretet`,
  error: 'Hiba',
  hidePassword: 'Jelszó elrejtése',
  loading: 'Betöltés',
  files: 'Fájlok :',
  maxFiles: 'Elérte a maximális fájlok számát',
  noMultipleFiles: 'Több fájl nem engedélyezett',
  numOptionsSelected: num => {
    if (num === 0) return 'Nincs kiválasztott opció';
    if (num === 1) return '1 kiválasztott opció';
    return `${num} kiválasztott opció`;
  },
  previous: 'Előző',
  next: 'Következő',
  progress: 'Előrehaladás',
  remove: 'Eltávolítás',
  resize: 'Átméretezés',
  scrollToEnd: 'Görgessen az végére',
  scrollToStart: 'Görgessen a kezdetre',
  selectAColorFromTheScreen: 'Válasszon színt a képernyőről',
  showPassword: 'Jelszó mutatása',
  toggleColorFormat: 'Színformátum váltása',
  zoomIn: 'Nagyiány',
  zoomOut: 'Kicsiány',
  enterFullscreen: 'Teljes állönték',
  exitFullscreen: 'Kilep a teljes állönték',
  locateMe: 'Megjelenítés',
  metersUnit: 'm',
  feetUnit: 'fut',
  locatePopup: 'A(z) {distance} {unit} több, mint a(z) {location}',
  locateOutsideMapBounds: ''
};

registerTranslation(translation);

export default translation;
