import { registerTranslation } from '../utilities/localize.js';
import prettyBytes from 'pretty-bytes';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'ru',
  $name: 'Русский',
  $dir: 'ltr',

  browseFiles: 'Просмотр файлов',
  clearEntry: 'Очистить запись',
  close: 'Закрыть',
  copied: 'Скопировано',
  copy: 'Копировать',
  currentValue: 'Текущее значение',
  dragDrop: 'Перетащите файл для загрузки',
  fileTypeNotAccepted: accept => `Тип файла не поддерживается, разрешены только файлы ${accept}`,
  fileSizeExceeded: size => `Размер файла превышает ${prettyBytes(size, { locale: 'ru' })}`,
  error: 'Ошибка',
  hidePassword: 'Скрыть пароль',
  loading: 'Загрузка',
  files: 'Файлы :',
  maxFiles: 'Достигнуто максимальное количество файлов',
  noMultipleFiles: 'Несколько файлов не допускаются',
  numOptionsSelected: num => {
    if (num === 0) return 'Нет выбранных опций';
    if (num === 1) return '1 выбранная опция';
    return `${num} выбранных опций`;
  },
  previous: 'Предыдущий',
  next: 'Следующий',
  progress: 'Прогресс',
  remove: 'Удалить',
  resize: 'Изменить размер',
  scrollToEnd: 'Прокрутить в конец',
  scrollToStart: 'Прокрутить в начало',
  selectAColorFromTheScreen: 'Выберите цвет с экрана',
  showPassword: 'Показать пароль',
  toggleColorFormat: 'Переключить формат цвета',
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
