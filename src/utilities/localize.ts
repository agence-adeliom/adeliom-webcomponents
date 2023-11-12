import '../translations/en.js';
import { LocalizeController as DefaultLocalizationController } from '@shoelace-style/localize'; // Register English as the default/fallback language
import type { Translation as DefaultTranslation } from '@shoelace-style/localize';

// Extend the controller and apply our own translation interface for better typings
export class LocalizeController extends DefaultLocalizationController<Translation> {}

// Export functions from the localize lib so we have one central place to import them from
export { registerTranslation } from '@shoelace-style/localize';

export interface Translation extends DefaultTranslation {
  $code: string; // e.g. en, en-GB
  $name: string; // e.g. English, Español
  $dir: 'ltr' | 'rtl';

  browseFiles: string;
  carousel: string;
  clearEntry: string;
  close: string;
  copied: string;
  copy: string;
  currentValue: string;
  dragDrop: string;
  fileSizeExceeded: (size: number) => string;
  fileTypeNotAccepted: (accept: string) => string;
  error: string;
  goToSlide: (slide: number, count: number) => string;
  hidePassword: string;
  loading: string;
  files: string;
  maxFiles: string;
  noMultipleFiles: string;
  nextSlide: string;
  numOptionsSelected: (num: number) => string;
  previousSlide: string;
  previous: string;
  next: string;
  progress: string;
  remove: string;
  resize: string;
  scrollToEnd: string;
  scrollToStart: string;
  selectAColorFromTheScreen: string;
  showPassword: string;
  slideNum: (slide: number) => string;
  toggleColorFormat: string;
}
