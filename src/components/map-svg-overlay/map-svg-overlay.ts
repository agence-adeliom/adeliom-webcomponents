import AWCMapSvgOverlay from './map-svg-overlay.component.js';

export * from './map-svg-overlay.component.js';
export default AWCMapSvgOverlay;

AWCMapSvgOverlay.define('awc-map-svg-overlay');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-svg-overlay': AWCMapSvgOverlay;
  }
}
