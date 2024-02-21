import { registerTranslation } from '../utilities/localize.js';
import prettyBytes from 'pretty-bytes';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'ja',
  $name: '日本語',
  $dir: 'ltr',

  clearEntry: 'クリアエントリ',
  close: '閉じる',
  copied: 'コピーされました',
  copy: 'コピー',
  currentValue: '現在の価値',
  error: 'エラー',
  hidePassword: 'パスワードを隠す',
  loading: '読み込み中',
  numOptionsSelected: num => {
    if (num === 0) return 'オプションが選択されていません';
    if (num === 1) return '1 つのオプションが選択されました';
    return `${num} つのオプションが選択されました`;
  },
  previous: '前の',
  next: '次へ',
  progress: '進行',
  remove: '削除',
  resize: 'サイズ変更',
  scrollToEnd: '最後にスクロールする',
  scrollToStart: '最初にスクロールする',
  selectAColorFromTheScreen: '画面から色を選択してください',
  showPassword: 'パスワードを表示',
  toggleColorFormat: '色のフォーマットを切り替える',
  browseFiles: '',
  dragDrop: '',
  fileSizeExceeded: function (size: number): string {
    return `ファイルサイズが ${prettyBytes(size, { locale: 'en' })} を超えました`;
  },
  fileTypeNotAccepted: function (accept: string): string {
    return `ファイルタイプが ${accept} に許可されていません`;
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
