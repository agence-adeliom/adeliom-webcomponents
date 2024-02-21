import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'fa',
  $name: 'فارسی',
  $dir: 'rtl',

  clearEntry: 'پاک کردن ورودی',
  close: 'بستن',
  copied: 'کپی شد',
  copy: 'رونوشت',
  currentValue: 'مقدار فعلی',
  error: 'خطا',
  hidePassword: 'پنهان کردن رمز',
  loading: 'بارگذاری',
  numOptionsSelected: num => {
    if (num === 0) return 'هیچ گزینه ای انتخاب نشده است';
    if (num === 1) return '1 گزینه انتخاب شده است';
    return `${num} گزینه انتخاب شده است`;
  },
  previous: 'قبلی',
  next: 'بعدی',
  progress: 'پیشرفت',
  remove: 'حذف',
  resize: 'تغییر اندازه',
  scrollToEnd: 'پیمایش به انتها',
  scrollToStart: 'پیمایش به ابتدا',
  selectAColorFromTheScreen: 'انتخاب یک رنگ از صفحه نمایش',
  showPassword: 'نمایش رمز',
  toggleColorFormat: 'تغییر قالب رنگ',
  zoomIn: 'بزرگنمایی',
  zoomOut: 'کوچک نمایی',
  enterFullscreen: 'ورود به تمام صفحه',
  exitFullscreen: 'خروج از تمام صفحه',
  locateMe: 'مکان من',
  metersUnit: 'متر',
  feetUnit: 'فیت',
  locatePopup: 'شما در نطقه {distance} {unit} از این نقطه هستید',
  locateOutsideMapBounds: 'شما در نطقه بیرون از محدوده نقشه هستید',
  browseFiles: 'انتخاب فایل',
  dragDrop: 'تغییر موقعیت',
  fileSizeExceeded: function (size: number): string {
    return `حجم فایل بیشتر از ${size} است`;
  },
  fileTypeNotAccepted: function (accept: string): string {
    return `فایل با پسوند ${accept} قابل قبول نیست`;
  },
  files: 'فایل',
  maxFiles: 'حداکثر تعداد فایل های مجاز',
  noMultipleFiles: 'فقط یک فایل مجاز'
};

registerTranslation(translation);

export default translation;
