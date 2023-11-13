import { registerTranslation } from '@shoelace-style/localize';
import prettyBytes from 'pretty-bytes';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'en',
  $name: 'English',
  $dir: 'ltr',

  browseFiles: 'Browse files',
  carousel: 'Carousel',
  clearEntry: 'Clear entry',
  close: 'Close',
  copied: 'Copied',
  copy: 'Copy',
  currentValue: 'Current value',
  dragDrop: 'Drag and drop to upload',
  fileTypeNotAccepted: accept => `File type is not accepted, only ${accept} files are allowed`,
  fileSizeExceeded: size => `File size exceeds ${prettyBytes(size, { locale: 'en' })}`,
  error: 'Error',
  goToSlide: (slide, count) => `Go to slide ${slide} of ${count}`,
  hidePassword: 'Hide password',
  loading: 'Loading',
  files: 'Files :',
  maxFiles: 'Maximum number of files reached',
  noMultipleFiles: 'Multiple files are not allowed',
  nextSlide: 'Next slide',
  numOptionsSelected: num => {
    if (num === 0) return 'No options selected';
    if (num === 1) return '1 option selected';
    return `${num} options selected`;
  },
  previousSlide: 'Previous slide',
  previous: 'Previous',
  next: 'Next',
  progress: 'Progress',
  remove: 'Remove',
  resize: 'Resize',
  scrollToEnd: 'Scroll to end',
  scrollToStart: 'Scroll to start',
  selectAColorFromTheScreen: 'Select a color from the screen',
  showPassword: 'Show password',
  slideNum: slide => `Slide ${slide}`,
  toggleColorFormat: 'Toggle color format'
};

registerTranslation(translation);

export default translation;
