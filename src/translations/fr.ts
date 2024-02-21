import { registerTranslation } from '../utilities/localize.js';
import prettyBytes from 'pretty-bytes';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'fr',
  $name: 'Français',
  $dir: 'ltr',

  browseFiles: 'Parcourir les fichiers',
  clearEntry: "Effacer l'entrée",
  close: 'Fermer',
  copied: 'Copié',
  copy: 'Copier',
  currentValue: 'Valeur actuelle',
  dragDrop: 'Glisser-déposer pour téléverser',
  fileTypeNotAccepted: accept => `Type de fichier non accepté, seuls les fichiers ${accept} sont autorisés`,
  fileSizeExceeded: size => `La taille du fichier dépasse ${prettyBytes(size, { locale: 'fr' })}`,
  error: 'Erreur',
  hidePassword: 'Masquer le mot de passe',
  loading: 'Chargement',
  files: 'Fichiers :',
  maxFiles: 'Nombre maximal de fichiers atteint',
  noMultipleFiles: 'Les fichiers multiples ne sont pas autorisés',
  numOptionsSelected: num => {
    if (num === 0) return 'Aucune option sélectionnée';
    if (num === 1) return '1 option sélectionnée';
    return `${num} options sélectionnées`;
  },
  previous: 'Précédent',
  next: 'Suivant',
  progress: 'Progression',
  remove: 'Supprimer',
  resize: 'Redimensionner',
  scrollToEnd: "Faire défiler jusqu'à la fin",
  scrollToStart: "Faire défiler jusqu'au début",
  selectAColorFromTheScreen: "Sélectionner une couleur de l'écran",
  showPassword: 'Afficher le mot de passe',
  toggleColorFormat: 'Changer le format de couleur',
  zoomIn: 'Zoomer',
  zoomOut: 'Dézoomer',
  enterFullscreen: 'Entrer en plein écran',
  exitFullscreen: 'Quitter le plein écran',
  locateMe: 'Me localiser',
  metersUnit: 'métres',
  feetUnit: 'pieds',
  locatePopup: 'Vous étes dans {distance} {unit} autour de cette position',
  locateOutsideMapBounds: 'Vous êtes localisé hors des limites de la carte'
};

registerTranslation(translation);

export default translation;
