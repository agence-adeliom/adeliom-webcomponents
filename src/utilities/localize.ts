import { LocalizeController as DefaultLocalizationController, registerTranslation } from '@shoelace-style/localize';
import en from '../translations/en.js'; // Register English as the default/fallback language
import type { Translation as DefaultTranslation } from '@shoelace-style/localize';

// Extend the controller and apply our own translation interface for better typings
export class LocalizeController extends DefaultLocalizationController<Translation> {
  // Technicallly '../translations/en.js' is supposed to work via side-effects. However, by some mystery sometimes the
  // translations don't get bundled as expected resulting in `no translation found` errors.
  // This is basically some extra assurance that our translations get registered prior to our localizer connecting in a component
  // and we don't rely on implicit import ordering.
  static {
    registerTranslation(en);
  }
}

// Export functions from the localize lib so we have one central place to import them from
export { registerTranslation } from '@shoelace-style/localize';

export interface Translation extends DefaultTranslation {
  $code: string; // e.g. en, en-GB
  $name: string; // e.g. English, Español
  $dir: 'ltr' | 'rtl';

  browseFiles: string;
  clearEntry: string;
  close: string;
  copied: string;
  copy: string;
  currentValue: string;
  dragDrop: string;
  fileSizeExceeded: (size: number) => string;
  fileTypeNotAccepted: (accept: string) => string;
  error: string;
  hidePassword: string;
  loading: string;
  files: string;
  maxFiles: string;
  noMultipleFiles: string;
  numOptionsSelected: (num: number) => string;
  previous: string;
  next: string;
  progress: string;
  remove: string;
  resize: string;
  scrollToEnd: string;
  scrollToStart: string;
  selectAColorFromTheScreen: string;
  showPassword: string;
  toggleColorFormat: string;
  zoomIn: string;
  zoomOut: string;
  enterFullscreen: string;
  exitFullscreen: string;
  locateMe: string;
  metersUnit: string;
  feetUnit: string;
  locatePopup: string;
  locateOutsideMapBounds: string;
}
