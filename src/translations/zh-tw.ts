import { registerTranslation } from '../utilities/localize.js';
import prettyBytes from 'pretty-bytes';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'zh-tw',
  $name: '正體中文',
  $dir: 'ltr',

  clearEntry: '清空',
  close: '關閉',
  copied: '已復制',
  copy: '複製',
  currentValue: '當前值',
  error: '錯誤',
  hidePassword: '隱藏密碼',
  loading: '載入中',
  numOptionsSelected: num => {
    if (num === 0) return '未選擇任何項目';
    if (num === 1) return '已選擇 1 個項目';
    return `${num} 選擇項目`;
  },
  previous: '上一個',
  next: '下一個',
  progress: '進度',
  remove: '移除',
  resize: '調整大小',
  scrollToEnd: '捲至頁尾',
  scrollToStart: '捲至頁首',
  selectAColorFromTheScreen: '從螢幕中選擇一種顏色',
  showPassword: '顯示密碼',
  toggleColorFormat: '切換顏色格式',
  browseFiles: '',
  dragDrop: '',
  fileSizeExceeded: function (size: number): string {
    return `檔案大小超過 ${prettyBytes(size, { locale: 'en' })}`;
  },
  fileTypeNotAccepted: function (accept: string): string {
    return `檔案類型不接受，僅接受 ${accept} 檔案`;
  },
  files: '',
  maxFiles: '',
  noMultipleFiles: '',
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
