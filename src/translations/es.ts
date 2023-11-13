import { registerTranslation } from '../utilities/localize.js';
import prettyBytes from 'pretty-bytes';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'es',
  $name: 'Español',
  $dir: 'ltr',

  browseFiles: 'Explorar archivos',
  carousel: 'Carrusel',
  clearEntry: 'Borrar entrada',
  close: 'Cerrar',
  copied: 'Copiado',
  copy: 'Copiar',
  currentValue: 'Valor actual',
  dragDrop: 'Arrastra y suelta para subir',
  fileTypeNotAccepted: accept => `Tipo de archivo no aceptado, solo se permiten archivos ${accept}`,
  fileSizeExceeded: size => `El tamaño del archivo excede ${prettyBytes(size, { locale: 'es' })}`,
  error: 'Error',
  goToSlide: (slide, count) => `Ir a la diapositiva ${slide} de ${count}`,
  hidePassword: 'Ocultar contraseña',
  loading: 'Cargando',
  files: 'Archivos :',
  maxFiles: 'Se alcanzó el número máximo de archivos',
  noMultipleFiles: 'No se permiten múltiples archivos',
  nextSlide: 'Siguiente diapositiva',
  numOptionsSelected: num => {
    if (num === 0) return 'No hay opciones seleccionadas';
    if (num === 1) return '1 opción seleccionada';
    return `${num} opción seleccionada`;
  },
  previousSlide: 'Diapositiva anterior',
  previous: 'Anterior',
  next: 'Siguiente',
  progress: 'Progreso',
  remove: 'Eliminar',
  resize: 'Cambiar el tamaño',
  scrollToEnd: 'Desplazarse hasta el final',
  scrollToStart: 'Desplazarse al inicio',
  selectAColorFromTheScreen: 'Seleccione un color de la pantalla',
  showPassword: 'Mostrar contraseña',
  slideNum: slide => `Diapositiva ${slide}`,
  toggleColorFormat: 'Alternar formato de color'
};

registerTranslation(translation);

export default translation;
