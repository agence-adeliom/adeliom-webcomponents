import AWCMapImageOverlay from './map-image-overlay.component.js';

export * from './map-image-overlay.component.js';
export default AWCMapImageOverlay;

AWCMapImageOverlay.define('awc-map-image-overlay');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-image-overlay': AWCMapImageOverlay;
  }
}
