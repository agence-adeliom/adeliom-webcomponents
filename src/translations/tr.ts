import { registerTranslation } from '../utilities/localize.js';
import prettyBytes from 'pretty-bytes';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'tr',
  $name: 'Türkçe',
  $dir: 'ltr',

  browseFiles: 'Dosyalara Göz At',
  carousel: 'Döner Kasa',
  clearEntry: 'Girişi Temizle',
  close: 'Kapat',
  copied: 'Kopyalandı',
  copy: 'Kopyala',
  currentValue: 'Mevcut Değer',
  dragDrop: 'Yüklemek için Sürükle ve Bırak',
  fileTypeNotAccepted: accept => `Dosya türü kabul edilmiyor, yalnızca ${accept} dosyaya izin verilir`,
  fileSizeExceeded: size => `Dosya boyutu ${prettyBytes(size, { locale: 'tr' })} boyutunu aşıyor`,
  error: 'Hata',
  goToSlide: (slide, count) => `${slide} numaralı slayda git, toplam ${count} slayt`,
  hidePassword: 'Şifreyi Gizle',
  loading: 'Yükleniyor',
  files: 'Dosyalar :',
  maxFiles: 'Maksimum dosya sayısına ulaşıldı',
  noMultipleFiles: 'Birden fazla dosya izin verilmiyor',
  nextSlide: 'Sonraki slayt',
  numOptionsSelected: num => {
    if (num === 0) return 'Hiçbir seçenek seçilmedi';
    if (num === 1) return '1 seçenek seçildi';
    return `${num} seçenek seçildi`;
  },
  previousSlide: 'Önceki slayt',
  previous: 'Önceki',
  next: 'Sonraki',
  progress: 'İlerleme',
  remove: 'Kaldır',
  resize: 'Boyutlandır',
  scrollToEnd: 'Sonuna Kaydır',
  scrollToStart: 'Başlangıca Kaydır',
  selectAColorFromTheScreen: 'Ekranından bir renk seç',
  showPassword: 'Şifreyi Göster',
  slideNum: slide => `${slide} Slayt`,
  toggleColorFormat: 'Renk Formatını Değiştir'
};

registerTranslation(translation);

export default translation;
