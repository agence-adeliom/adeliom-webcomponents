import { registerTranslation } from '../utilities/localize.js';
import prettyBytes from 'pretty-bytes';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'pt',
  $name: 'Português',
  $dir: 'ltr',

  browseFiles: 'Navegar pelos arquivos',
  clearEntry: 'Limpar entrada',
  close: 'Fechar',
  copied: 'Copiado',
  copy: 'Copiar',
  currentValue: 'Valor atual',
  dragDrop: 'Arraste e solte para enviar',
  fileTypeNotAccepted: accept => `Tipo de arquivo não aceito, apenas arquivos ${accept} são permitidos`,
  fileSizeExceeded: size => `Tamanho do arquivo excede ${prettyBytes(size, { locale: 'pt' })}`,
  error: 'Erro',
  hidePassword: 'Esconder senha',
  loading: 'Carregando',
  files: 'Arquivos :',
  maxFiles: 'Número máximo de arquivos atingido',
  noMultipleFiles: 'Múltiplos arquivos não são permitidos',
  numOptionsSelected: num => {
    if (num === 0) return 'Nenhuma opção selecionada';
    if (num === 1) return '1 opção selecionada';
    return `${num} opções selecionadas`;
  },
  previous: 'Anterior',
  next: 'Próximo',
  progress: 'Progresso',
  remove: 'Remover',
  resize: 'Redimensionar',
  scrollToEnd: 'Rolar até o final',
  scrollToStart: 'Rolar até o início',
  selectAColorFromTheScreen: 'Selecionar uma cor da tela',
  showPassword: 'Mostrar senha',
  toggleColorFormat: 'Alternar formato de cor',
  zoomIn: 'Mais zoom',
  zoomOut: 'Menos zoom',
  enterFullscreen: 'Entrar em tela cheia',
  exitFullscreen: 'Sair de tela cheia',
  locateMe: 'Localizar',
  metersUnit: 'metros',
  feetUnit: 'peças',
  locatePopup: 'Estas dentro de {distance} {unit} deste ponto',
  locateOutsideMapBounds: 'Estas dentro dos limites do mapa'
};

registerTranslation(translation);

export default translation;
