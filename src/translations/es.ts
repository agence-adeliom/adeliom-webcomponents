import { registerTranslation } from '../utilities/localize.js';
import prettyBytes from 'pretty-bytes';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'es',
  $name: 'Español',
  $dir: 'ltr',

  browseFiles: 'Explorar archivos',
  clearEntry: 'Borrar entrada',
  close: 'Cerrar',
  copied: 'Copiado',
  copy: 'Copiar',
  currentValue: 'Valor actual',
  dragDrop: 'Arrastra y suelta para subir',
  fileTypeNotAccepted: accept => `Tipo de archivo no aceptado, solo se permiten archivos ${accept}`,
  fileSizeExceeded: size => `El tamaño del archivo excede ${prettyBytes(size, { locale: 'es' })}`,
  error: 'Error',
  hidePassword: 'Ocultar contraseña',
  loading: 'Cargando',
  files: 'Archivos :',
  maxFiles: 'Se alcanzó el número máximo de archivos',
  noMultipleFiles: 'No se permiten múltiples archivos',
  numOptionsSelected: num => {
    if (num === 0) return 'No hay opciones seleccionadas';
    if (num === 1) return '1 opción seleccionada';
    return `${num} opción seleccionada`;
  },
  previous: 'Anterior',
  next: 'Siguiente',
  progress: 'Progreso',
  remove: 'Eliminar',
  resize: 'Cambiar el tamaño',
  scrollToEnd: 'Desplazarse hasta el final',
  scrollToStart: 'Desplazarse al inicio',
  selectAColorFromTheScreen: 'Seleccione un color de la pantalla',
  showPassword: 'Mostrar contraseña',
  toggleColorFormat: 'Alternar formato de color',
  zoomIn: 'Acercar',
  zoomOut: 'Alejar',
  enterFullscreen: 'Entrar en pantalla completa',
  exitFullscreen: 'Salir de pantalla completa',
  locateMe: 'Localizarme',
  metersUnit: 'metros',
  feetUnit: 'pies',
  locatePopup: 'Estas dentro de {distance} {unit} de este punto',
  locateOutsideMapBounds: 'Estas dentro de los bordes del mapa'
};

registerTranslation(translation);

export default translation;
