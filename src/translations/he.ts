import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'he',
  $name: 'עברית',
  $dir: 'rtl',

  carousel: 'קרוסלה',
  clearEntry: 'נקה קלט',
  close: 'סגור',
  copied: 'מוּעֲתָק',
  copy: 'העתק',
  currentValue: 'ערך נוכחי',
  error: 'שְׁגִיאָה',
  goToSlide: (slide, count) => `עבור לשקופית ${slide} של ${count}`,
  hidePassword: 'הסתר סיסמא',
  loading: 'טוען',
  nextSlide: 'Next slide',
  numOptionsSelected: num => {
    if (num === 0) return 'לא נבחרו אפשרויות';
    if (num === 1) return 'נבחרה אפשרות אחת';
    return `נבחרו ${num} אפשרויות`;
  },
  previousSlide: 'Previous slide',
  previous: 'קודם',
  next: 'הבא',
  progress: 'התקדמות',
  remove: 'לְהַסִיר',
  resize: 'שנה גודל',
  scrollToEnd: 'גלול עד הסוף',
  scrollToStart: 'גלול להתחלה',
  selectAColorFromTheScreen: 'בחור צבע מהמסך',
  showPassword: 'הראה סיסמה',
  slideNum: slide => `שקופית ${slide}`,
  toggleColorFormat: 'החלף פורמט צבע',
  browseFiles: 'בחירת קובץ',
  dragDrop: 'גרירה',
  fileSizeExceeded: function (size: number): string {
    return `גודל קובץ גדול מ-${size}`;
  },
  fileTypeNotAccepted: function (accept: string): string {
    return `קובץ עם סוג קובץ ${accept} אינו חוקי`;
  },
  files: 'קבצים',
  maxFiles: 'מקסימום מספר קבצים',
  noMultipleFiles: 'לא ניתן להעלות יותר מ-1 קובץ',
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
